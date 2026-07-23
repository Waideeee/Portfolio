// aiPortfolioMarkup.ts — markup for "the AI Portfolio" (converted from the
// standalone HTML design). Interactions live in AIPortfolio.tsx.

export const AI_PORTFOLIO_MARKUP = `<div id="root" style="position:relative;width:100%;background:var(--bg);color:var(--fg);">

  <!-- LOADER -->
  <div id="loader" style="position:fixed;inset:0;z-index:1000;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;transition:transform .9s cubic-bezier(.76,0,.24,1);">
    <div style="font-family:'Instrument Serif',serif;font-style:italic;font-size:clamp(30px,5vw,58px);color:var(--fg);letter-spacing:-.01em;">Lia Samantha Pitero</div>
    <div style="width:min(280px,60vw);height:1px;background:var(--line);position:relative;overflow:hidden;">
      <div id="load-fill" style="position:absolute;inset:0;width:0%;background:var(--accent);"></div>
    </div>
    <div style="display:flex;justify-content:space-between;width:min(280px,60vw);font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--muted);">
      <span>LOADING</span><span id="load-num">000</span>
    </div>
  </div>

  <!-- CUSTOM CURSOR -->
  <div id="cur-ring" style="position:fixed;top:0;left:0;width:38px;height:38px;border:1px solid var(--accent);border-radius:50%;pointer-events:none;z-index:900;transform:translate(-50%,-50%);transition:width .25s,height .25s,background .25s,border-color .25s;display:flex;align-items:center;justify-content:center;will-change:transform;"><span id="cur-label" style="font-family:'JetBrains Mono',monospace;font-size:9px;color:#0a0d0a;opacity:0;transition:opacity .2s;letter-spacing:.04em;">VIEW</span></div>
  <div id="cur-dot" style="position:fixed;top:0;left:0;width:5px;height:5px;border-radius:50%;background:var(--accent);pointer-events:none;z-index:901;transform:translate(-50%,-50%);will-change:transform;"></div>

  <!-- scroll progress -->
  <div id="scroll-bar" style="position:fixed;top:0;left:0;height:2px;width:0%;background:var(--accent);z-index:200;"></div>

  <!-- NAV -->
  <nav id="nav" style="position:fixed;top:0;left:0;width:100%;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:22px 5vw;transition:background .4s,backdrop-filter .4s,padding .4s,border-color .4s;border-bottom:1px solid transparent;mix-blend-mode:difference;">
    <a href="#top" data-cursor="1" style="font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;letter-spacing:.02em;color:#fff;">LSP<span style="vertical-align:super;font-size:9px;">©</span></a>
    <div style="display:flex;align-items:center;gap:26px;">
      <a href="#about" data-nav="" data-cursor="1" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#fff;">About</a>
      <a href="#work" data-nav="" data-cursor="1" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#fff;">Work</a>
      <a href="#skills" data-nav="" data-cursor="1" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#fff;">Skills</a>
      <a href="#contact" data-nav="" data-cursor="1" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#fff;">Contact</a>
      <button id="ai-theme" data-cursor="1" title="Toggle theme" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#fff;display:flex;align-items:center;gap:7px;">
        <span id="theme-ico" style="display:inline-block;width:11px;height:11px;border-radius:50%;border:1px solid #fff;background:transparent;"></span>
        <span id="theme-txt">moon</span>
      </button>
    </div>
  </nav>

  <!-- HERO -->
  <section id="top" style="position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;overflow:hidden;padding:0 5vw;">
    <canvas id="hero-canvas" style="position:absolute;inset:0;width:100%;height:100%;display:block;opacity:.85;"></canvas>
    <div style="position:absolute;inset:0;background:radial-gradient(120% 90% at 85% 0%,var(--accent-soft) 0%,transparent 50%);pointer-events:none;"></div>

    <div style="position:relative;z-index:3;width:100%;max-width:1320px;margin:0 auto;">
      <div data-reveal="" data-reveal-delay="0" style="display:flex;align-items:center;gap:14px;margin-bottom:30px;">
        <span style="width:7px;height:7px;border-radius:50%;background:var(--accent);"></span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:12.5px;letter-spacing:.06em;color:var(--muted);">PORTFOLIO — 2026 / AVAILABLE FOR OJT</span>
      </div>
      <h1 style="font-size:clamp(42px,8.4vw,124px);line-height:0.95;font-weight:500;letter-spacing:-0.035em;margin:0;max-width:15ch;text-wrap:balance;">
        <span data-reveal="" data-reveal-delay="60" style="display:inline-block;">ASPIRING</span>
        <span data-reveal="" data-reveal-delay="120" class="ser" style="display:inline-block;color:var(--accent);font-size:1.04em;padding:0 .06em;">software&nbsp;engineer,</span><br>
        <span data-reveal="" data-reveal-delay="180" style="display:inline-block;">building</span>
        <span data-reveal="" data-reveal-delay="240" class="ser" style="display:inline-block;font-size:1.04em;">full‑stack</span>
        <span data-reveal="" data-reveal-delay="300" style="display:inline-block;">products</span><br>
        <span data-reveal="" data-reveal-delay="360" style="display:inline-block;">&amp;</span>
        <span data-reveal="" data-reveal-delay="420" class="ser" style="display:inline-block;color:var(--accent);font-size:1.04em;">web&nbsp;apps.</span>
      </h1>
    </div>

    <!-- hero bottom row -->
    <div style="position:absolute;left:5vw;right:5vw;bottom:30px;z-index:3;display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap;">
      <div data-reveal="" data-reveal-delay="480" style="display:flex;gap:20px;flex-wrap:wrap;">
        <a href="https://github.com/Waideeee" target="_blank" data-cursor="1" class="hsoc" style="font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--muted);transition:color .25s;">GitHub ↗</a>
        <a href="https://www.linkedin.com/feed/" target="_blank" data-cursor="1" class="hsoc" style="font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--muted);transition:color .25s;">LinkedIn ↗</a>
        <a href="https://www.instagram.com/krapatigzz/" target="_blank" data-cursor="1" class="hsoc" style="font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--muted);transition:color .25s;">Instagram ↗</a>
        <a href="https://www.facebook.com/esocrawr" target="_blank" data-cursor="1" class="hsoc" style="font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--muted);transition:color .25s;">Facebook ↗</a>
      </div>
      <div data-reveal="" data-reveal-delay="520" style="text-align:right;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--fg);"><span id="local-time">--:--:--</span> <span style="color:var(--muted);">MNL</span></div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);margin-top:4px;letter-spacing:.06em;">PANDACAN, MANILA · PH</div>
      </div>
    </div>

    <div style="position:absolute;bottom:30px;left:50%;transform:translateX(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:9px;">
      <span style="font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--muted);letter-spacing:.12em;">SCROLL</span>
      <div style="width:20px;height:32px;border:1px solid var(--line);border-radius:11px;display:flex;justify-content:center;padding-top:6px;"><span style="width:3px;height:6px;border-radius:2px;background:var(--accent);animation:scrolld 1.7s infinite;"></span></div>
    </div>
  </section>

  <!-- NAME MARQUEE -->
  <div style="border-top:1px solid var(--line);border-bottom:1px solid var(--line);overflow:hidden;padding:16px 0;">
    <div style="display:flex;width:max-content;animation:marq 30s linear infinite;align-items:center;">
      <span style="display:flex;gap:34px;padding-right:34px;align-items:center;font-family:'Space Grotesk';font-weight:500;font-size:clamp(28px,4vw,58px);letter-spacing:-.02em;text-transform:uppercase;"><span>Lia Samantha Pitero</span><span style="color:var(--accent);font-size:.55em;">✦</span><span class="ser" style="text-transform:none;color:var(--muted);">full-stack developer</span><span style="color:var(--accent);font-size:.55em;">✦</span></span>
      <span aria-hidden="true" style="display:flex;gap:34px;padding-right:34px;align-items:center;font-family:'Space Grotesk';font-weight:500;font-size:clamp(28px,4vw,58px);letter-spacing:-.02em;text-transform:uppercase;"><span>Lia Samantha Pitero</span><span style="color:var(--accent);font-size:.55em;">✦</span><span class="ser" style="text-transform:none;color:var(--muted);">full-stack developer</span><span style="color:var(--accent);font-size:.55em;">✦</span></span>
    </div>
  </div>

  <!-- ABOUT -->
  <section id="about" style="position:relative;max-width:1320px;margin:0 auto;padding:130px 5vw 80px;">
    <div data-reveal="" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--muted);margin-bottom:42px;display:flex;align-items:center;gap:12px;"><span style="color:var(--accent);">(01)</span> ABOUT <span style="flex:1;height:1px;background:var(--line);"></span></div>
    <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:70px;align-items:start;">
      <div>
        <p data-reveal="" style="font-size:clamp(24px,3vw,42px);line-height:1.28;font-weight:400;letter-spacing:-0.02em;margin:0 0 34px;text-wrap:pretty;">
          I'm a Computer Science student building <span class="ser" style="color:var(--accent);">practical, user-focused</span> applications — from full-stack web platforms to mobile apps that solve <span class="ser">real problems</span> for students, communities &amp; everyday people.
        </p>
        <p data-reveal="" data-reveal-delay="100" style="font-size:16px;line-height:1.7;color:var(--muted);margin:0 0 44px;max-width:56ch;">
          Currently pursuing my BSCS at Philippine Christian University in Manila, and looking for an OJT / internship in Full-Stack Development or Software Engineering. I care about clean interfaces, sensible data models, and shipping things people actually use.
        </p>
        <div data-reveal="" data-reveal-delay="180" style="display:grid;grid-template-columns:repeat(4,1fr);gap:26px;border-top:1px solid var(--line);padding-top:30px;">
          <div><div style="font-family:'Space Grotesk';font-weight:500;font-size:clamp(30px,3.4vw,44px);letter-spacing:-.02em;"><span data-count="8">0</span></div><div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);margin-top:6px;">GitHub repos</div></div>
          <div><div style="font-family:'Space Grotesk';font-weight:500;font-size:clamp(30px,3.4vw,44px);letter-spacing:-.02em;"><span data-count="4">0</span></div><div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);margin-top:6px;">full-stack systems</div></div>
          <div><div style="font-family:'Space Grotesk';font-weight:500;font-size:clamp(30px,3.4vw,44px);letter-spacing:-.02em;"><span data-count="18" data-suffix="+">0</span></div><div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);margin-top:6px;">technologies</div></div>
          <div><div style="font-family:'Space Grotesk';font-weight:500;font-size:clamp(30px,3.4vw,44px);letter-spacing:-.02em;">’23</div><div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);margin-top:6px;">coding since</div></div>
        </div>
      </div>
      <div data-reveal="" data-reveal-delay="120" style="position:relative;justify-self:center;">
        <div style="position:absolute;inset:-16px;border:1px dashed var(--line);border-radius:50%;animation:spin 30s linear infinite;"></div>
        <div style="position:relative;width:min(320px,72vw);aspect-ratio:3/4;border-radius:200px;overflow:hidden;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,var(--accent-soft),transparent);"><span style="font-family:'Instrument Serif',serif;font-style:italic;font-size:72px;color:var(--accent);opacity:.45;">LSP</span>
          <img src="/projects/profile.jpg" alt="Lia Samantha Pitero" onerror="this.style.display='none'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 15%;transition:transform .6s ease;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='none'">
        </div>
      </div>
    </div>
  </section>

  <!-- ROLE MARQUEE -->
  <div style="overflow:hidden;padding:14px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
    <div style="display:flex;width:max-content;animation:marqr 26s linear infinite;font-family:'JetBrains Mono',monospace;font-size:14px;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;">
      <span style="display:flex;gap:30px;padding-right:30px;"><span>Full-Stack Development</span><span style="color:var(--accent);">✦</span><span>Web Development</span><span style="color:var(--accent);">✦</span><span>Software Engineering</span><span style="color:var(--accent);">✦</span><span>UI / UX</span><span style="color:var(--accent);">✦</span><span>Open to OJT</span><span style="color:var(--accent);">✦</span></span>
      <span aria-hidden="true" style="display:flex;gap:30px;padding-right:30px;"><span>Full-Stack Development</span><span style="color:var(--accent);">✦</span><span>Web Development</span><span style="color:var(--accent);">✦</span><span>Software Engineering</span><span style="color:var(--accent);">✦</span><span>UI / UX</span><span style="color:var(--accent);">✦</span><span>Open to OJT</span><span style="color:var(--accent);">✦</span></span>
    </div>
  </div>

  <!-- WORK -->
  <section id="work" style="position:relative;max-width:1320px;margin:0 auto;padding:120px 5vw 70px;">
    <div data-reveal="" style="display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:50px;flex-wrap:wrap;">
      <h2 style="font-size:clamp(40px,7vw,96px);font-weight:500;letter-spacing:-.03em;margin:0;line-height:.95;">⤵ Selected <span class="ser" style="color:var(--accent);">work</span></h2>
      <span style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--muted);">(02) — <!--PCOUNT--> PROJECTS</span>
    </div>

    <div id="proj-list" style="border-top:1px solid var(--line);">
      <!--PROJECT_ROWS-->
    </div>

    <!-- floating preview -->
    <div id="proj-preview" style="position:fixed;top:0;left:0;width:300px;height:210px;pointer-events:none;z-index:60;opacity:0;transition:opacity .3s;will-change:transform;border-radius:10px;overflow:hidden;border:1px solid var(--line);">
      <img class="pp-img" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:none;z-index:1;"><div class="pp-card" style="position:absolute;inset:0;background:#11140f;display:flex;flex-direction:column;justify-content:space-between;padding:18px;background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.04) 0,rgba(255,255,255,0.04) 1px,transparent 1px,transparent 11px);">
        <div class="pp-tag" style="font-family:'JetBrains Mono',monospace;font-size:10.5px;color:rgba(255,255,255,.6);">tech stack</div>
        <div class="pp-title" style="font-family:'Space Grotesk';font-weight:600;font-size:26px;color:#fff;letter-spacing:-.02em;">Project</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:10.5px;color:rgba(255,255,255,.5);">VIEW ON GITHUB ↗</div>
      </div>
    </div>
  </section>

  <!-- MANIFESTO -->
  <section style="position:relative;max-width:1320px;margin:0 auto;padding:90px 5vw;">
    <div data-reveal="" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--muted);margin-bottom:34px;">/ APPROACH</div>
    <p data-reveal="" style="font-size:clamp(23px,3.5vw,50px);line-height:1.22;font-weight:400;letter-spacing:-.02em;margin:0;text-wrap:pretty;">
      My journey into coding was driven by a genuine desire to solve <span class="ser" style="color:var(--accent);">real-world problems</span>. Seeing most CS/IT students spend countless hours struggling without effective digital tools pushed me to act. I am determined to become a <span class="ser">successful programmer</span> — one who can develop <span class="ser" style="color:var(--accent);">meaningful solutions</span> to the technology challenges we face today.
    </p>
  </section>

  <!-- SKILLS -->
  <section id="skills" style="position:relative;max-width:1320px;margin:0 auto;padding:70px 5vw 100px;">
    <div data-reveal="" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--muted);margin-bottom:50px;display:flex;align-items:center;gap:12px;"><span style="color:var(--accent);">(03)</span> TECH STACK <span style="flex:1;height:1px;background:var(--line);"></span></div>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0;border-top:1px solid var(--line);">
      <div data-reveal="" style="padding:36px 36px 36px 0;border-bottom:1px solid var(--line);border-right:1px solid var(--line);">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--accent);margin-bottom:22px;">FRONTEND</div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <span class="chip" data-cursor="1">React.js</span><span class="chip" data-cursor="1">Next.js</span><span class="chip" data-cursor="1">TypeScript</span><span class="chip" data-cursor="1">JavaScript</span><span class="chip" data-cursor="1">HTML</span><span class="chip" data-cursor="1">CSS</span><span class="chip" data-cursor="1">Bootstrap</span>
        </div>
      </div>
      <div data-reveal="" data-reveal-delay="80" style="padding:36px 0 36px 36px;border-bottom:1px solid var(--line);">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--accent);margin-bottom:22px;">BACKEND</div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <span class="chip" data-cursor="1">PHP</span><span class="chip" data-cursor="1">Laravel</span><span class="chip" data-cursor="1">Python</span><span class="chip" data-cursor="1">Node.js</span><span class="chip" data-cursor="1">FastAPI</span>
        </div>
      </div>
      <div data-reveal="" data-reveal-delay="40" style="padding:36px 36px 36px 0;border-bottom:1px solid var(--line);border-right:1px solid var(--line);">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--accent);margin-bottom:22px;">DATABASE &amp; CLOUD</div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <span class="chip" data-cursor="1">PostgreSQL</span><span class="chip" data-cursor="1">MySQL</span><span class="chip" data-cursor="1">MongoDB</span><span class="chip" data-cursor="1">Firebase</span><span class="chip" data-cursor="1">Cloudinary</span><span class="chip" data-cursor="1">AWS</span>
        </div>
      </div>
      <div data-reveal="" data-reveal-delay="120" style="padding:36px 0 36px 36px;border-bottom:1px solid var(--line);">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--accent);margin-bottom:22px;">TOOLS</div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <span class="chip" data-cursor="1">Git</span><span class="chip" data-cursor="1">GitHub</span><span class="chip" data-cursor="1">Docker</span><span class="chip" data-cursor="1">VS Code</span><span class="chip" data-cursor="1">Figma</span><span class="chip" data-cursor="1">Canva</span>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" style="position:relative;padding:110px 5vw 50px;border-top:1px solid var(--line);overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(90% 120% at 50% 110%,var(--accent-soft) 0%,transparent 55%);pointer-events:none;"></div>
    <div style="position:relative;max-width:1320px;margin:0 auto;">
      <div data-reveal="" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--muted);margin-bottom:30px;"><span style="color:var(--accent);">(04)</span> — LET'S WORK TOGETHER</div>
      <h2 data-reveal="" style="font-size:clamp(40px,9vw,140px);line-height:.94;font-weight:500;letter-spacing:-.04em;margin:0 0 40px;">
        Open to <span class="ser" style="color:var(--accent);">OJT</span>, <span class="ser">commissions</span><br>&amp; new <span class="ser" style="color:var(--accent);">opportunities.</span>
      </h2>
      <a href="mailto:sammysammy0510@gmail.com" data-cursor="1" data-reveal="" data-reveal-delay="120" style="display:inline-flex;align-items:center;gap:14px;font-size:clamp(18px,2.6vw,32px);font-weight:400;border-bottom:1px solid var(--fg);padding-bottom:8px;margin-bottom:64px;transition:gap .25s;" onmouseover="this.style.gap='22px'" onmouseout="this.style.gap='14px'">
        sammysammy0510@gmail.com <span style="color:var(--accent);">→</span>
      </a>
      <div data-reveal="" data-reveal-delay="180" style="display:flex;gap:14px;flex-wrap:wrap;">
        <a href="https://github.com/Waideeee" target="_blank" data-cursor="1" class="soc" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--fg);border:1px solid var(--line);padding:12px 20px;border-radius:30px;transition:background .25s,color .25s;">GitHub ↗</a>
        <a href="https://www.linkedin.com/feed/" target="_blank" data-cursor="1" class="soc" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--fg);border:1px solid var(--line);padding:12px 20px;border-radius:30px;transition:background .25s,color .25s;">LinkedIn ↗</a>
        <a href="https://www.facebook.com/esocrawr" target="_blank" data-cursor="1" class="soc" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--fg);border:1px solid var(--line);padding:12px 20px;border-radius:30px;transition:background .25s,color .25s;">Facebook ↗</a>
        <a href="https://www.instagram.com/krapatigzz/" target="_blank" data-cursor="1" class="soc" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--fg);border:1px solid var(--line);padding:12px 20px;border-radius:30px;transition:background .25s,color .25s;">Instagram ↗</a>
        <a href="tel:+639566597749" data-cursor="1" class="soc" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--fg);border:1px solid var(--line);padding:12px 20px;border-radius:30px;transition:background .25s,color .25s;">0956 659 7749 ↗</a>
        <a href="/resume/Lia_Pitero_CV.pdf" target="_blank" data-cursor="1" class="soc" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#0a0d0a;background:var(--accent);border:1px solid var(--accent);padding:12px 20px;border-radius:30px;">Résumé ↗</a>
      </div>

      <div style="margin-top:90px;padding-top:26px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;">
        <span style="font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--muted);">© 2026 Lia Samantha Pitero</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--muted);">Made with care in Manila — <span id="local-time2">--:--:--</span> MNL</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--muted);">BSCS · PCU</span>
      </div>
    </div>
  </section>

</div>

`;
