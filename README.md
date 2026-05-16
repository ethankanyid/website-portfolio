# Ethan Kanyid – Portfolio

Personal portfolio site hosted on GitHub Pages. Covers background, skills, experience, education, and projects.

**Live site:** https://ethan.kanyid.dev

## Structure

```
index.html              — Home / About (root, served by GitHub Pages)
CNAME                   — Custom domain config
README.md
assets/
  images/               — favicon, social icons, photos, badges
  pdfs/                 — resume, project posters
src/
  style.css             — Dark green theme, CSS custom properties
  html/
    resume.html         — Resume (collapsible sections, skill tags)
    internship.html     — Projects > Internship (SULI poster)
    capstone.html       — Projects > Capstone (poster + live demo)
    cyser.html          — Projects > CySER (FOA adversarial ML research poster)
    homelab.html        — Projects > Homelab
  js/
    script.js           — Typewriter effect
    section-collapse.js — Collapsible section toggle
    pdf-selector.js     — (unused, kept for reference)
```

---

## TODO Tracker

Four active workstreams: **Website Portfolio**, **School Code Repo**, **School Docs Repo**, **Homelab Repo**.

---

### 1. Website Portfolio (`website-portfolio`)

#### Content
- [ ] Wire in homelab repo link once public
- [ ] Wire in school code repo link once created
- [ ] Wire in school docs repo link once created

#### Pages
- [ ] Build out homelab.html full write-up (servers, networking, AI stack) once diagrams/screenshots ready

#### UI / Features
- [ ] Tweak "View PDF" button in resume — style and placement to match other toolbar links
- [ ] Light / dark mode toggle next to name in navbar
- [ ] Clicking name in navbar takes you home (link logo to index.html)
- [ ] Mobile support

---

### 2. School Code Repo

A GitHub repo for school coding projects and coursework.

- [ ] Decide structure: monorepo with subdirs, or separate repos for capstone / budget app / coursework
  - Option A: single repo with `capstone/`, `budget-app/`, `coursework/` subdirs
  - Option B: separate repos per project, linked from a central index
- [ ] Add capstone code (coordinate with team on permissions/ownership)
- [ ] Add budget app code
- [ ] Add Areas of Study coursework (see bottom of this README)
- [ ] Write README per project with context and write-up
- [ ] Link repo (or individual projects) from the website portfolio

---

### 3. School Documentation Repo

A GitHub repo for non-code school work — papers, reports, research docs — that relates to the code repo but doesn't belong in it.

- [ ] Organize by course / project / area of study
- [ ] Include any docs that pair with code repo projects (capstone docs, CySER research notes, etc.)
- [ ] Include any docs from internship
- [ ] Write top-level README explaining the relationship to the code repo
- [ ] Link from website portfolio (or integrate into a combined "Academics" section)

---

### 4. Homelab Repo

A GitHub repo exposing non-sensitive homelab config, documentation, and infrastructure notes.

- [ ] Finish local documentation and organization of homelab setup
- [ ] Audit what is and isn't safe to make public (configs, keys, hostnames, IPs)
- [ ] Create public GitHub repo with sanitized configs and documentation
- [ ] Write README covering architecture, services, and design decisions
- [ ] Link repo from homelab.html on the website
- [ ] Add architecture diagram and screenshots to both the repo and homelab.html

---

## Old Areas of Study

Documented here from original resume; not currently displayed on site.

- **Systems Programming** — C and C++, memory management, file systems
- **Computer Architecture & Assembly** — x86 Assembly, stack frames, registers
- **Cybersecurity** — Buffer overflows, SQL injection, XSS, use-after-free bugs
- **Cryptography** — Hashing, encryption, PKI, digital signatures, classical ciphers
- **Quantum Cryptography** — Entanglement, superposition, BB84, E91 protocols
- **Functional Programming** — Lisp, Standard ML, recursion, immutability
- **Data Structures & Algorithms** — Lists, trees, sorting, searching, complexity
- **Automata Theory** — Finite automata, regex, Turing machines
