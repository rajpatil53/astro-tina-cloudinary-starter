# Astro Starter With TinaCMS And Cloudinary

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/rajpatil53/astro-tina-cloudinary-starter)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/rajpatil53/astro-tina-cloudinary-starter)

> This branch is setup to have separate repositories for code and content as mentioned in this [guide](https://tina.io/guides/tinacms/separate-content-repo/guide/). Use `main` branch if you want a single repository for code and content.

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ TinaCMS integration
- ✅ Cloudinary integration for asset management
- ✅ Vercel deployment ready

> Hydbrid or server output targets will need additional configuration for Vercel deployment. Read more [here](https://docs.astro.build/en/guides/integrations-guide/vercel/).

## Caveats

- Asset management using Cloudinary does not work in dev environment as serverless function to handle media interactions is not available.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── api/
│   ├── cloudinary/
│       ├── [...media].js
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── tina/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

The `tina` directory contains files related to TinaCMS. The TinaCMS documentation for Astro integration can be found [here](https://tina.io/docs/frameworks/astro/)

Vercel serverless function required to authenticate the Cloudinary media interactions is added in `api/` directory. Refer [Tina docs](https://tina.io/docs/reference/media/external/cloudinary/) for more details.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                         |
| :------------------------ | :------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                          |
| `npm run dev`             | Starts TinaCMS server and local dev server at `localhost:4321` |
| `npm run build`           | Build your production site to `./dist/`                        |
| `npm run preview`         | Preview your build locally, before deploying                   |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`               |
| `npm run astro -- --help` | Get help using the Astro CLI                                   |

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
