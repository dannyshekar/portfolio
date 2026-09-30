---
title: How to write a post on this site (cheat sheet)
description: A reference for myself — every Markdown feature this blog supports.
date: 2026-09-29
tags: [meta, markdown]
draft: true
---

This post is marked `draft: true`, so it **only shows up while running `npm run dev`** and is left out
when the site is built for the internet. Keep it as a reference or delete it.

## Creating a post

1. Add a new file in `src/content/blog/`, like `my-new-post.md`.
2. The file name becomes the URL: `/blog/my-new-post`.
3. Paste this at the top and fill it in:

```yaml
---
title: My new post
description: One sentence for previews and search engines.
date: 2026-10-01
tags: [javascript, learning]
draft: true   # remove this line when you're ready to publish
---
```

## Formatting

You can use **bold**, *italic*, `inline code`, and [links](https://astro.build).

### Code blocks

Put the language name after the opening backticks to get syntax highlighting:

```python
def fizzbuzz(n):
    for i in range(1, n + 1):
        print("Fizz" * (i % 3 == 0) + "Buzz" * (i % 5 == 0) or i)
```

### Lists, quotes and tables

- Bullet lists
- like this

> Blockquotes for callouts or quotes.

| Syntax      | Result     |
| ----------- | ---------- |
| `**bold**`  | **bold**   |
| `*italic*`  | *italic*   |

### Images

Put the image next to your post file and reference it relatively:

```md
![What the image shows](./my-image.png)
```

---

That's everything you need to know.
