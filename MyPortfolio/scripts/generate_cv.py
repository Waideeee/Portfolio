# generate_cv.py — builds the downloadable CV PDF from the resume content.
# Source of truth: CV-Pitero.pdf. Run: python scripts/generate_cv.py

import os
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    HRFlowable,
    ListFlowable,
    ListItem,
)

ACCENT = HexColor("#007acc")
DARK = HexColor("#1e1e1e")
MUTED = HexColor("#555555")

OUT = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "public",
    "resume",
    "Lia_Pitero_CV.pdf",
)

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name", parent=styles["Title"], fontSize=20, textColor=DARK,
    alignment=TA_CENTER, spaceAfter=2, leading=24,
)
contact_style = ParagraphStyle(
    "Contact", parent=styles["Normal"], fontSize=9, textColor=MUTED,
    alignment=TA_CENTER, spaceAfter=1,
)
section_style = ParagraphStyle(
    "Section", parent=styles["Heading2"], fontSize=11, textColor=ACCENT,
    spaceBefore=10, spaceAfter=4, leading=13,
)
body_style = ParagraphStyle(
    "Body", parent=styles["Normal"], fontSize=9.5, textColor=DARK,
    alignment=TA_JUSTIFY, leading=13,
)
entry_title = ParagraphStyle(
    "EntryTitle", parent=styles["Normal"], fontSize=10, textColor=DARK,
    leading=13, spaceBefore=4,
)
entry_meta = ParagraphStyle(
    "EntryMeta", parent=styles["Normal"], fontSize=8.5, textColor=MUTED,
    leading=11, spaceAfter=2,
)
bullet_style = ParagraphStyle(
    "Bullet", parent=styles["Normal"], fontSize=9, textColor=DARK, leading=12,
)


def section(title):
    return [
        Paragraph(title.upper(), section_style),
        HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=4),
    ]


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, bullet_style), leftIndent=10) for t in items],
        bulletType="bullet", bulletColor=ACCENT, bulletFontSize=7,
        leftIndent=12, spaceAfter=2,
    )


def entry(title, meta, points):
    flow = [Paragraph(f"<b>{title}</b>", entry_title)]
    if meta:
        flow.append(Paragraph(meta, entry_meta))
    flow.append(bullets(points))
    return flow


story = []

# Header
story.append(Paragraph("LIA SAMANTHA G. PITERO", name_style))
story.append(Paragraph(
    "+63 956 659 7749 &nbsp;|&nbsp; sammysammy0510@gmail.com &nbsp;|&nbsp; Pandacan, Manila",
    contact_style,
))
story.append(Paragraph("github.com/Waideeee", contact_style))
story.append(Spacer(1, 6))

# Professional Summary
story += section("Professional Summary")
story.append(Paragraph(
    "Motivated and eager Computer Science student seeking an On-the-Job Training "
    "opportunity in Full-Stack Development or Software Engineering. Experienced in "
    "building web-based applications using React.js, Node.js, JavaScript, PHP/Laravel, "
    "PostgreSQL, Python, and Firebase through academic and self-made projects. "
    "Passionate about building practical, user-focused applications that solve real "
    "problems — particularly for students and everyday users.",
    body_style,
))

# Project History
story += section("Project History")
story += entry(
    "Point of Sale System — Frontend Developer",
    "Java (Swing/AWT), Excel (Database Integration), Apache POI",
    [
        "Designed and developed a fully interactive desktop GUI to modernize retail "
        "transactions, order processing, and inventory tracking.",
        "Implemented core user-facing interfaces including a dynamic vendor dashboard, "
        "secure multi-user login pages, user registration modules, and product "
        "management screens.",
    ],
)
story += entry(
    "Sociatech — Full-Stack Developer",
    "PHP, React.js, MySQL (Database Integration), CSS, Firebase (Authentication)",
    [
        "Built a containerized digital platform combining the collaborative features of "
        "Brainly, Reddit, and Facebook for online learning and social networking.",
        "Developed core full-stack features: secure signup with email verification, "
        "profile customization, and post drafting/publishing.",
        "Built a responsive UI with JavaScript and the fetch API for real-time community "
        "engagement and administrative actions without page reloads.",
        "Handled audit logging, user blocking, and a content reporting system to maintain "
        "platform safety.",
    ],
)
story += entry(
    "CiviReport — Mobile &amp; Web Admin Barangay Issue Tracking Platform — Full-Stack Developer",
    "Laravel (Jetstream)/PHP, JavaScript, Python, CSS, PostgreSQL (Database Integration), WebSocket",
    [
        "Developed the web-based admin platform using Laravel (Jetstream) and PostgreSQL, "
        "replacing manual, paper-based complaint processes with a structured digital system.",
        "Implemented complaint submission, real-time queue visibility, status tracking, "
        "and audit logging.",
        "Integrated an AI-based urgency classification module (Python) to prioritize "
        "complaints and suggest recommended actions to residents.",
        "Built a FastAPI service layer connecting the admin web platform with the mobile "
        "resident-facing app for real-time data sync.",
    ],
)
story += entry(
    "BarangayPaws — Mobile &amp; Web Admin Pet Registration — Full-Stack Developer",
    "Laravel/PHP, Firebase (Database Integration), Cloudinary (media API), REST API",
    [
        "Developed a commissioned web-based admin platform using Laravel and Firebase to "
        "replace paper-based pet registration, handling approvals, vaccination/deworming "
        "records, announcements, and PDF report generation (RA 9482 compliance).",
        "Built an age-based health scheduling module that auto-computes vaccination and "
        "deworming timelines, with Cloudinary for photo uploads and an admin-verified "
        "photo change workflow.",
        "Connected the Laravel admin platform with the Android app via Firebase for "
        "real-time sync, with role-based access control for RA 10173 compliance.",
    ],
)

# Leadership and Organizational Experience
story += section("Leadership and Organizational Experience")
story += entry(
    "Exploring the New Digital Era", "May 10, 2024",
    [
        "Learned how hacking works and what we can do to protect our data.",
        "Learned how the Cloud works.",
    ],
)
story += entry(
    "Creatives Head — PCU-M Society of Computer Technologists", "2024 – 2025",
    [
        "Created pubmats for events, announcements, and more.",
        "Assisted in budget planning and allocation for students.",
        "Managed a Grade 12 Summit booth for Computer Science.",
    ],
)
story += entry(
    "BootUp: Computer Science Skills Intensive", "October 1, 2024",
    [
        "Built a web-based CRUD management system using PHP and MySQL.",
        "Learned data modeling in Power BI and created interactive visualizations.",
        "Built a real-time object detection project using Roboflow and a smartphone camera.",
    ],
)
story += entry(
    "Vice President-External — PCU-M Society of Computer Technologists", "2025 – 2026",
    [
        "Managed and monitored organizational funds and financial records.",
        "Managed the Grade 12 Summit booth for Computer Science.",
        "Ensured transparency and accuracy in financial transactions.",
        "Managed seminar events.",
    ],
)
story += entry(
    "Gen AI to Z: A Career Summit in an AI-Driven World", "March 17, 2026",
    [
        "Leveraged generative AI tools and prompt engineering for media production.",
        "Adopted an agent-first \"VibeCoding\" workflow to rapidly prototype and debug apps.",
        "Researched real-world AI case studies in investigative journalism and aerospace.",
    ],
)

# Education
story += section("Education")
story.append(Paragraph(
    "<b>Bachelor of Science in Computer Science</b> &nbsp;·&nbsp; 2023 – Present", entry_title))
story.append(Paragraph("Philippine Christian University — Malate, Manila", entry_meta))
story.append(Paragraph(
    "<b>Senior High School</b> &nbsp;·&nbsp; 2020 – 2023", entry_title))
story.append(Paragraph("Jesus Reigns Christian Academy — Malate, Manila", entry_meta))

# Technical Skills
story += section("Technical Skills")
skills = [
    ("Frontend", "HTML, CSS, JavaScript, React.js, TypeScript, Bootstrap, Next.js"),
    ("Backend", "PHP, Python, Laravel/PHP, Node.js"),
    ("Database &amp; Cloud", "MySQL, PostgreSQL, Firebase, MongoDB, Cloudinary, AWS"),
    ("Tools", "Git, GitHub, VS Code, Figma, Canva, Docker"),
]
for label, items in skills:
    story.append(Paragraph(f"<b>{label}:</b> {items}", bullet_style))
story.append(Spacer(1, 4))
story.append(Paragraph("<b>Languages:</b> Filipino (Native), English (Conversational)", bullet_style))
story.append(Paragraph("<b>Interests:</b> Web Development, Full-Stack Development, Software Engineering", bullet_style))

doc = SimpleDocTemplate(
    OUT, pagesize=LETTER,
    leftMargin=0.7 * inch, rightMargin=0.7 * inch,
    topMargin=0.6 * inch, bottomMargin=0.6 * inch,
    title="Lia Samantha G. Pitero — CV", author="Lia Samantha G. Pitero",
)
doc.build(story)
print("Wrote", OUT)
