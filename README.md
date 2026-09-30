# My Portfolio

A personal site for projects, blog posts and a learning log. Built with [Astro](https://astro.build).

## Running it

```bash
npm install      # only needed the first time
npm run dev      # start the site at http://localhost:4321 (auto-reloads when you save)
npm run build    # build the real site into the dist/ folder
```

## Where things live

| I want to…                          | Edit this                                   |
| ----------------------------------- | ------------------------------------------- |
| Change my name, headline, status, skills, links | `src/site.config.ts`            |
| Add or edit a job / degree          | `.md` file in `src/content/experience/`     |
| Add a project                       | new `.md` file in `src/content/projects/`   |
| Write a blog post                   | new `.md` file in `src/content/blog/`       |
| Add a short "today I learned" note  | new `.md` file in `src/content/notes/`      |
| Edit the About page text            | `src/pages/about.astro`                     |
| Change colors / fonts               | the top of `src/styles/global.css`          |

The file name becomes the URL: `src/content/blog/my-post.md` becomes `/blog/my-post`.

Copy an existing file as a starting point. `src/content/projects/example-project.md` and
`src/content/blog/how-to-write-a-post.md` explain every field.

- **Drafts:** add `draft: true` to a blog post. It shows in `npm run dev` but not on the live site.
- **Featured projects:** `featured: true` puts a project on the home page.
- **Tags:** tags on posts and notes get their own page automatically, e.g. `/tags/css`.

## Putting it online (free)

1. Install [Git](https://git-scm.com/download/win) and create a [GitHub](https://github.com) account.
2. Push this folder to a new GitHub repository.
3. Sign in to [Netlify](https://netlify.com), [Vercel](https://vercel.com) or
   [Cloudflare Pages](https://pages.cloudflare.com) with GitHub and import the repo.
   They detect Astro automatically (build command `npm run build`, output folder `dist`).
4. Every time you push a change, the site redeploys by itself.
5. Update `site` in `astro.config.mjs` to your real URL.

## Project structure

```
src/
├── content/          ← your writing (Markdown)
│   ├── projects/
│   ├── blog/
│   └── notes/
├── pages/            ← each file is a page/URL
├── components/       ← reusable pieces (project card, post list…)
├── layouts/Base.astro← header, footer, <head> shared by every page
├── styles/global.css ← theme colors & typography
├── content.config.ts ← which fields each kind of content has
└── site.config.ts    ← your personal info
```
