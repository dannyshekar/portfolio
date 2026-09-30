---
title: This portfolio
description: My corner of the internet. A fast static site with my experience, a skills matrix modelled on MITRE ATT&CK, and a blog.
date: 2026-09-30
tech: [Astro, TypeScript, CSS, Markdown]
status: building
featured: true
# repo: https://github.com/yourname/portfolio
# demo: https://yourdomain.dev
---

## Why I built it

A LinkedIn profile lists what I've done, but it can't show *how I think*. I wanted one place for the
projects I'm building, the things I'm learning as I move from software engineering into security, and
longer write-ups when something finally makes sense.

## How it works

- **[Astro](https://astro.build)** turns Markdown files into plain static HTML. There's no database and
  no server-side code, so there's very little to attack. That seemed like the right choice for a
  security portfolio.
- Every job, project, post and note is a `.md` file in `src/content/`.
- The skills section is laid out like a MITRE ATT&CK matrix, the framework I use in my coursework.

## What's next

- [ ] Deploy it with HTTPS and good security headers (CSP, HSTS)
- [ ] Write up my first HackTheBox machine / SIEM home lab
- [ ] Custom domain
