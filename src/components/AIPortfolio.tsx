"use client";

// AIPortfolio.tsx — "the AI Portfolio": an alternate, fully AI-built portfolio.
// The markup (converted from the standalone HTML design) is injected, and every
// interaction from the original is re-implemented here in React (particle canvas,
// scroll reveals, custom cursor, marquees, hover screenshot previews, live clock,
// count-up stats, and the light/dark theme toggle).

import { useEffect, useMemo, useRef } from "react";
import { AI_PORTFOLIO_MARKUP } from "./aiPortfolioMarkup";
import { projects } from "@/data/myprojects";

// Build the "Selected work" rows from the shared project list so this portfolio
// always matches the VS Code one.
function buildProjectRows() {
  return projects
    .map((p, i) => {
      const num = String(i + 1).padStart(2, "0");
      const tag = p.tech.join(" · ");
      const img = p.preview ? ` data-img="${p.preview}"` : "";
      return `<a href="${p.url}" target="_blank" data-proj="${p.name}" data-tag="${tag}" data-accent="${p.accent}"${img} data-cursor="view" class="prow" style="display:grid;grid-template-columns:48px 1fr auto auto;gap:24px;align-items:center;padding:30px 8px;border-bottom:1px solid var(--line);transition:padding .35s,background .35s;">
        <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--muted);">${num}</span>
        <span class="pname" style="font-family:'Space Grotesk';font-weight:500;font-size:clamp(26px,4.4vw,58px);letter-spacing:-.025em;line-height:1;transition:transform .35s,color .35s;display:inline-block;">${p.name}</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--muted);text-align:right;">${p.category}</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--muted);width:46px;text-align:right;">${p.year}</span>
      </a>`;
    })
    .join("\n");
}

export default function AIPortfolio({ onClose }: { onClose: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);

  const html = useMemo(
    () =>
      AI_PORTFOLIO_MARKUP.replace("<!--PROJECT_ROWS-->", buildProjectRows()).replace(
        "<!--PCOUNT-->",
        String(projects.length)
      ),
    []
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cleanups: Array<() => void> = [];
    let alive = true;
    cleanups.push(() => {
      alive = false;
    });
    const state = { cvRGB: "126,245,138" };
    const coarse = window.matchMedia("(pointer:coarse)").matches;

    const $ = <T extends Element = HTMLElement>(sel: string) =>
      root.querySelector(sel) as T | null;
    const $$ = (sel: string) =>
      Array.prototype.slice.call(root.querySelectorAll(sel)) as HTMLElement[];

    // ---- close on Escape ----
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    cleanups.push(() => window.removeEventListener("keydown", onKey));

    // ---- loader ----
    (() => {
      const loader = $("#loader");
      const num = $("#load-num");
      const fill = $("#load-fill");
      if (!loader) return;
      const start = performance.now();
      const dur = 1300;
      let id = 0;
      const step = (now: number) => {
        if (!alive) return;
        const t = Math.min((now - start) / dur, 1);
        const e = 1 - Math.pow(1 - t, 2);
        const n = Math.floor(e * 100);
        if (num) num.textContent = ("00" + n).slice(-3);
        if (fill) fill.style.width = e * 100 + "%";
        if (t < 1) {
          id = requestAnimationFrame(step);
        } else {
          const t1 = setTimeout(() => {
            loader.style.transform = "translateY(-100%)";
            const t2 = setTimeout(() => {
              loader.style.display = "none";
            }, 900);
            cleanups.push(() => clearTimeout(t2));
          }, 220);
          cleanups.push(() => clearTimeout(t1));
        }
      };
      id = requestAnimationFrame(step);
      cleanups.push(() => cancelAnimationFrame(id));
    })();

    // ---- particle canvas ----
    (() => {
      const canvas = $<HTMLCanvasElement>("#hero-canvas");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      let w = 0;
      let h = 0;
      let dpr = 1;
      let particles: Array<{ x: number; y: number; vx: number; vy: number }> = [];
      const mouse = { x: -9999, y: -9999 };
      const resize = () => {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = canvas.clientWidth;
        h = canvas.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = Math.max(30, Math.min(80, Math.floor((w * h) / 18000)));
        particles = [];
        for (let i = 0; i < count; i++)
          particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.28,
            vy: (Math.random() - 0.5) * 0.28,
          });
      };
      resize();
      window.addEventListener("resize", resize);
      cleanups.push(() => window.removeEventListener("resize", resize));
      const sec = canvas.parentElement;
      const onMove = (e: MouseEvent) => {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
      };
      const onLeave = () => {
        mouse.x = -9999;
        mouse.y = -9999;
      };
      if (sec) {
        sec.addEventListener("mousemove", onMove);
        sec.addEventListener("mouseleave", onLeave);
      }
      let id = 0;
      const draw = () => {
        if (!alive) return;
        ctx.clearRect(0, 0, w, h);
        const rgb = state.cvRGB;
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const md = Math.hypot(dx, dy);
          if (md < 120 && md > 0.001) {
            const f = ((120 - md) / 120) * 0.8;
            p.x += (dx / md) * f;
            p.y += (dy / md) * f;
          }
        }
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j];
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < 120) {
              ctx.strokeStyle = "rgba(" + rgb + "," + (1 - d / 120) * 0.14 + ")";
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
          const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          const near = md < 150;
          ctx.beginPath();
          ctx.arc(a.x, a.y, near ? 2.3 : 1.4, 0, Math.PI * 2);
          ctx.fillStyle = near
            ? "rgba(" + rgb + ",0.95)"
            : "rgba(" + rgb + ",0.28)";
          ctx.fill();
          if (md < 160) {
            ctx.strokeStyle = "rgba(" + rgb + "," + (1 - md / 160) * 0.45 + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
        id = requestAnimationFrame(draw);
      };
      draw();
      cleanups.push(() => cancelAnimationFrame(id));
    })();

    // ---- scroll reveals + count-up (IntersectionObserver) ----
    (() => {
      const revealEls = $$("[data-reveal]");
      revealEls.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(34px)";
        el.style.transition =
          "opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)";
        el.style.willChange = "opacity, transform";
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const d = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
            const t = setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "none";
            }, d);
            cleanups.push(() => clearTimeout(t));
            io.unobserve(el);
          });
        },
        { root, threshold: 0.06, rootMargin: "0px 0px -6% 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());

      const countEls = $$("[data-count]");
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            cio.unobserve(el);
            const target = parseFloat(el.getAttribute("data-count") || "0");
            const suffix = el.getAttribute("data-suffix") || "";
            const dur = 1500;
            const start = performance.now();
            let id = 0;
            const step = (now: number) => {
              if (!alive) return;
              const t = Math.min((now - start) / dur, 1);
              const ease = 1 - Math.pow(1 - t, 3);
              el.textContent = Math.round(ease * target) + suffix;
              if (t < 1) id = requestAnimationFrame(step);
            };
            id = requestAnimationFrame(step);
            cleanups.push(() => cancelAnimationFrame(id));
          });
        },
        { root, threshold: 0.5 }
      );
      countEls.forEach((el) => cio.observe(el));
      cleanups.push(() => cio.disconnect());
    })();

    // ---- custom cursor ----
    (() => {
      if (coarse) return;
      const dot = $("#cur-dot");
      const ring = $("#cur-ring");
      const label = $("#cur-label");
      if (!dot || !ring) return;
      let mx = window.innerWidth / 2;
      let my = window.innerHeight / 2;
      let rx = mx;
      let ry = my;
      const onMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform =
          "translate(" + mx + "px," + my + "px) translate(-50%,-50%)";
      };
      window.addEventListener("mousemove", onMove);
      cleanups.push(() => window.removeEventListener("mousemove", onMove));
      let id = 0;
      const loop = () => {
        if (!alive) return;
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform =
          "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
        id = requestAnimationFrame(loop);
      };
      loop();
      cleanups.push(() => cancelAnimationFrame(id));
      const enter = (view: boolean) => {
        ring.style.width = view ? "64px" : "52px";
        ring.style.height = view ? "64px" : "52px";
        ring.style.background = "var(--accent)";
        ring.style.borderColor = "var(--accent)";
        if (label) label.style.opacity = view ? "1" : "0";
        dot.style.opacity = "0";
      };
      const leave = () => {
        ring.style.width = "38px";
        ring.style.height = "38px";
        ring.style.background = "transparent";
        ring.style.borderColor = "var(--accent)";
        if (label) label.style.opacity = "0";
        dot.style.opacity = "1";
      };
      $$("[data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", () =>
          enter(el.getAttribute("data-cursor") === "view")
        );
        el.addEventListener("mouseleave", leave);
      });
    })();

    // ---- nav state + scroll progress (on the overlay scroll container) ----
    const navColor = (solid: boolean) => {
      const c = solid ? "var(--fg)" : "#fff";
      $$("#nav a, #nav button, #nav #theme-txt").forEach((el) => {
        el.style.color = c;
      });
      const ico = $("#theme-ico");
      if (ico) ico.style.borderColor = c;
    };
    const bar = $("#scroll-bar");
    const nav = $("#nav");
    const onScroll = () => {
      const st = root.scrollTop;
      const dh = root.scrollHeight - root.clientHeight;
      if (bar) bar.style.width = (dh > 0 ? (st / dh) * 100 : 0) + "%";
      if (nav) {
        if (st > 40) {
          nav.style.background = "var(--bg)";
          nav.style.mixBlendMode = "normal";
          nav.style.borderBottomColor = "var(--line)";
          nav.style.padding = "15px 5vw";
          navColor(true);
        } else {
          nav.style.background = "transparent";
          nav.style.mixBlendMode = "difference";
          nav.style.borderBottomColor = "transparent";
          nav.style.padding = "22px 5vw";
          navColor(false);
        }
      }
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => root.removeEventListener("scroll", onScroll));
    onScroll();

    // ---- smooth anchor scrolling within the overlay ----
    $$('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (!id || id.charAt(0) !== "#" || id.length < 2) return;
        const el = $(id);
        if (!el) return;
        e.preventDefault();
        const top =
          el.getBoundingClientRect().top -
          root.getBoundingClientRect().top +
          root.scrollTop -
          10;
        root.scrollTo({ top, behavior: "smooth" });
      });
    });

    // ---- live Manila clock ----
    (() => {
      const fmt = () =>
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Manila",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
      const tick = () => {
        const t = fmt();
        const a = $("#local-time");
        const b = $("#local-time2");
        if (a) a.textContent = t;
        if (b) b.textContent = t;
      };
      tick();
      const iv = setInterval(tick, 1000);
      cleanups.push(() => clearInterval(iv));
    })();

    // ---- theme toggle ----
    (() => {
      const btn = $("#ai-theme");
      if (!btn) return;
      let light = false;
      const onClick = () => {
        light = !light;
        root.classList.toggle("light", light);
        state.cvRGB = light ? "31,138,59" : "126,245,138";
        const txt = $("#theme-txt");
        if (txt) txt.textContent = light ? "light" : "moon";
        const ico = $("#theme-ico");
        if (ico) ico.style.background = light ? "currentColor" : "transparent";
        onScroll();
      };
      btn.addEventListener("click", onClick);
    })();

    // ---- floating project preview (with screenshot images) ----
    (() => {
      if (coarse) return;
      const prev = $("#proj-preview");
      if (!prev) return;
      const titleEl = prev.querySelector(".pp-title") as HTMLElement | null;
      const tagEl = prev.querySelector(".pp-tag") as HTMLElement | null;
      const card = prev.querySelector(".pp-card") as HTMLElement | null;
      const img = prev.querySelector(".pp-img") as HTMLImageElement | null;
      let tx = 0;
      let ty = 0;
      let cx = 0;
      let cy = 0;
      $$("[data-proj]").forEach((row) => {
        const name = row.getAttribute("data-proj") || "";
        const tag = row.getAttribute("data-tag") || "";
        const ac = row.getAttribute("data-accent") || "#7ef58a";
        const src = row.getAttribute("data-img");
        const pname = row.querySelector(".pname") as HTMLElement | null;
        row.addEventListener("mouseenter", () => {
          prev.style.opacity = "1";
          if (titleEl) titleEl.textContent = name;
          if (tagEl) tagEl.textContent = tag;
          if (card) card.style.backgroundColor = ac + "22";
          if (img) {
            if (src) {
              // show the screenshot; if it 404s (not added yet), fall back to the card
              img.onerror = () => {
                img.style.display = "none";
                if (card) card.style.display = "flex";
              };
              img.src = src;
              img.style.display = "block";
              if (card) card.style.display = "none";
            } else {
              img.style.display = "none";
              if (card) card.style.display = "flex";
            }
          }
          if (pname) {
            pname.style.transform = "translateX(18px)";
            pname.style.color = "var(--accent)";
          }
          row.style.background = "var(--card)";
          row.style.paddingLeft = "20px";
        });
        row.addEventListener("mouseleave", () => {
          prev.style.opacity = "0";
          if (pname) {
            pname.style.transform = "none";
            pname.style.color = "var(--fg)";
          }
          row.style.background = "transparent";
          row.style.paddingLeft = "8px";
        });
      });
      const onMove = (e: MouseEvent) => {
        tx = e.clientX;
        ty = e.clientY;
      };
      window.addEventListener("mousemove", onMove);
      cleanups.push(() => window.removeEventListener("mousemove", onMove));
      let id = 0;
      const loop = () => {
        if (!alive) return;
        cx += (tx - cx) * 0.13;
        cy += (ty - cy) * 0.13;
        const vel = tx - cx;
        prev.style.transform =
          "translate(" +
          (cx - 150) +
          "px," +
          (cy - 105) +
          "px) rotate(" +
          Math.max(-8, Math.min(8, vel * 0.25)) +
          "deg)";
        id = requestAnimationFrame(loop);
      };
      loop();
      cleanups.push(() => cancelAnimationFrame(id));
    })();

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [onClose]);

  return (
    <div className="ai-portfolio" ref={rootRef}>
      <button className="ai-close" onClick={onClose} title="Back to VS Code (Esc)">
        ✕ Close
      </button>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
