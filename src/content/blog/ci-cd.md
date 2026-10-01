---
title: Your Pipeline Is a Privileged User
description: A CI/CD pipeline holds production credentials and runs code unsupervised. Here's what happens when you treat it like the privileged user it is.
date: 2026-10-01
tags: [devsecops, cicd, security, access-control]
---

The most privileged user I've worked with this year isn't a person.

I've spent a good chunk of my internship building out CI/CD and deployment automation, and the mental shift that's stuck with me is this: **a pipeline isn't a workflow. It's an identity.**

It holds credentials. It reaches production. It executes code without a human approving that specific run. Everything downstream trusts its output implicitly. If you wrote that description on a form, no security team would approve the account.

## Onboarding a pipeline like a privileged user

So I've started designing pipelines the way you'd onboard a privileged user:

- **Least privilege** - What is the smallest set of permissions that still lets this run? Not "what's convenient."
- **Separate identities per environment** - So staging can't reach anything production owns.
- **Short-lived credentials** - Prefer them over standing ones wherever the tooling allows it.
- **Pinned versions** - So what the build pulls in today is what it pulled in yesterday.
- **Treat the pipeline config itself as protected** - Changing *how* you deploy is as sensitive as changing *what* you deploy.

None of that is exotic. It's just applying identity and access principles to a machine instead of a person.

## The takeaway

> Automation doesn't remove trust from a system. It concentrates it into one place - and that place deserves the same scrutiny you'd give any account with production access.
