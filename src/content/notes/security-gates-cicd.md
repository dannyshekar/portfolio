---
title: Where security gates go in a pipeline
date: 2026-09-20
tags: [devsecops, ci-cd]
draft: true
---

A rough order: **secret scanning** and **SAST** on commit, **dependency (SCA) scanning** at build,
**container image scanning** before pushing to the registry, and **DAST** against a staging deploy.
The earlier a check runs, the cheaper the fix. The later it runs, the more realistic the test.
