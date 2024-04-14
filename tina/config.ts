import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  // Replace with your content repo name
  localContentPath: "../../astro-tina-cloudinary-starter-content",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blogs",
        path: "content/blogs",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: true,
            templates: [
              {
                name: "HeaderLink",
                label: "HeaderLink",
                fields: [
                  {
                    name: "children",
                    label: "children",
                    type: "rich-text",
                  },
                  {
                    name: "href",
                    label: "href",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Published date",
            required: true,
            ui: {
              dateFormat: "YY-MM-DD",
            },
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated date",
            ui: {
              dateFormat: "YY-MM-DD",
            },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero image",
          },
        ],
      },
    ],
  },
});
