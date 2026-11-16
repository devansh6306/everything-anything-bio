# Everything Anything Bio 🧬

**Everything is biology. Literally everything. And biology is simpler than you think.**

Everything Anything Bio is a blog that connects anything and everything in your life back to the concepts of biology.

It starts with the everyday. Why does coffee wake you up? Why do onions make you cry? What is your body doing right now while you read this?

Then it goes further. The same simple ideas sit underneath tougher science and engineering too. Take a filter membrane that lets some molecules pass while it blocks others. That is exactly what the membrane around every one of your cells does, every second of your life. From the kitchen to the research lab, this blog shows that it all comes back to biology.

## Meet your guide: Mito the Mighty ⚡

Every post is guided by **Mito the Mighty, the Happy Mitochondria**. Mito is the powerhouse of the cell and the cheerful host of this blog, always happy to break big ideas into small, friendly pieces and guide you around the site.

## The look and feel

The site is inspired by the style of science explainer videos: flat, colorful illustrations, bold shapes, soft glowing gradients and lots of space, so every idea is easy to see and fun to explore.

## Goals

- Show that literally everything, from breakfast to cutting-edge research, connects back to biology
- Make biology feel simple, friendly and relevant to everyday life
- Explain tougher concepts with the same clarity as everyday ones
- Be easy to read and navigate on any device
- Explain one concept at a time, clearly, with help from Mito

## Status

🚧 The website foundation is built. The first concept post is coming soon.

Once GitHub Pages is switched on, the site lives at **https://devansh6306.github.io/everything-anything-bio/**

## How the site is organised

It's a plain website (HTML + CSS + a little JavaScript). There's nothing to install or build.

| File | What it is |
| --- | --- |
| `index.html` | The homepage |
| `explore.html` | The list of all posts, with Everyday / Deep dive filters |
| `about.html` | About the blog and Meet Mito |
| `posts/_template.html` | The template for every new post |
| `assets/js/posts.js` | The list of published posts (feeds the homepage and Explore page) |
| `assets/css/style.css` | All the colors and styles; change the colors at the top to re-theme the site |
| `assets/img/` | Mito and other images |

## How to add a new post

1. Copy `posts/_template.html` and give the copy a name like `posts/why-do-onions-make-you-cry.html`.
2. Replace every `[BRACKETED]` placeholder. Keep the building blocks you want (Mito says, Key idea, Zoom in, Quick check…) and delete the rest.
3. Add one entry at the top of `assets/js/posts.js` (there's an example in that file).
4. In `index.html` and `explore.html`, find `posts.js?v=` near the bottom and raise the number by one (e.g. `?v=2` → `?v=3`). This makes browsers fetch the new post list instead of an old saved copy.
5. Commit the changes. The live site updates by itself about a minute later.

If the live site ever looks out of date, do a hard refresh: **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac).

## How to switch on the live website (one time)

1. On GitHub, open this repository and click **Settings**.
2. In the left menu, click **Pages**.
3. Under **Build and deployment → Source**, pick **Deploy from a branch**.
4. Under **Branch**, pick **main** and **/ (root)**, then click **Save**.
5. Wait a minute or two and refresh. GitHub shows the link to your live site at the top of that page.

## Preview it on your own computer

Open `index.html` in any browser. Everything works without a server.
