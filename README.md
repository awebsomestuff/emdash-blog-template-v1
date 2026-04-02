# EmDash Blog Pro Template

A feature-rich blog template built with [EmDash](https://github.com/emdash-cms/emdash) and deployed on Cloudflare Workers with D1 and R2.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/awebsomestuff/emdash-template-blog-pro)

## Features

- Featured post hero on the homepage
- Table of contents on post pages
- Related posts section
- Post archive with reading time estimates
- Category and tag archives
- Full-text search
- RSS feed
- SEO metadata
- Dark/light mode
- Editorial typography

## Pages

| Page | Route |
|---|---|
| Homepage | `/` |
| All posts | `/posts` |
| Single post | `/posts/:slug` |
| Category archive | `/category/:slug` |
| Tag archive | `/tag/:slug` |
| Search | `/search` |
| Static pages | `/pages/:slug` |

## Infrastructure

- **Runtime:** Cloudflare Workers
- **Database:** D1
- **Storage:** R2
- **Framework:** Astro + EmDash

## Local Development

```bash
npm install
npx emdash dev
```
