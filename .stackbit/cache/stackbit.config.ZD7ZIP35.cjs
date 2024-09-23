"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_path = require("path");
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");

// content/models/link.ts
var Link = {
  type: "object",
  name: "Link",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true
    },
    {
      type: "string",
      name: "url",
      label: "URL",
      required: true
    },
    {
      type: "enum",
      name: "variant",
      label: "Variant",
      options: [
        { label: "Default", value: "default" },
        { label: "Secondary", value: "secondary" },
        { label: "Outline", value: "outline" },
        { label: "Ghost", value: "ghost" },
        { label: "Link", value: "link" }
      ],
      default: "default"
    }
  ]
};

// content/models/image.ts
var Image = {
  type: "object",
  name: "Image",
  fields: [
    {
      type: "string",
      name: "alt",
      label: "Alt Text"
    },
    {
      type: "image",
      name: "url",
      label: "Image",
      required: true
    }
  ]
};

// src/utils/slugify.ts
function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, "");
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  return str;
}

// content/models/author.ts
var Author = {
  type: "data",
  name: "Author",
  labelField: "name",
  filePath({ data }) {
    const { name } = data;
    return Promise.resolve(`content/authors/${slugify(name)}.json`);
  },
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      required: true
    },
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "model",
      name: "image",
      label: "Image",
      models: ["Image"]
    }
  ]
};

// content/models/hero-section.ts
var HeroSection = {
  type: "object",
  name: "hero-section",
  label: "Hero Section",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      required: true
    },
    {
      type: "model",
      name: "image",
      label: "Image",
      models: ["Image"]
    },
    {
      type: "string",
      name: "className",
      label: "Class Name"
    },
    {
      type: "list",
      name: "cta",
      label: "Call to Action",
      items: {
        type: "model",
        models: ["Link"]
      }
    }
  ]
};

// content/models/promo-banner.ts
var PromoBanner = {
  type: "object",
  name: "promo-banner",
  label: "Promo Banner",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      required: true
    },
    {
      type: "string",
      name: "className",
      label: "Class Name"
    },
    {
      type: "list",
      name: "cta",
      label: "Call to Action",
      items: {
        type: "model",
        models: ["Link"]
      }
    }
  ]
};

// content/models/markdown-section.ts
var MarkdownSection = {
  type: "object",
  name: "markdown",
  label: "Markdown Section",
  fields: [
    {
      type: "markdown",
      name: "content",
      label: "Content",
      required: true
    },
    {
      type: "string",
      name: "className",
      label: "Class Name"
    }
  ]
};

// content/models/faq-section.ts
var FAQsSection = {
  type: "object",
  name: "faq-section",
  label: "FAQs Section",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle"
    },
    {
      type: "string",
      name: "className",
      label: "Class Name"
    },
    {
      type: "boolean",
      name: "isSingleMode",
      label: "Single Mode?",
      default: true
    },
    {
      type: "list",
      name: "faqs",
      label: "FAQs",
      items: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "question",
            label: "Question"
          },
          {
            type: "string",
            name: "answer",
            label: "Answer"
          }
        ]
      }
    }
  ]
};

// content/models/cards-section.ts
var CardsSection = {
  type: "object",
  name: "cards-section",
  label: "Cards Section",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle"
    },
    {
      type: "string",
      name: "className",
      label: "Class Name"
    },
    {
      type: "list",
      name: "cards",
      label: "Cards",
      items: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "model",
            name: "image",
            label: "Image",
            models: ["Image"]
          },
          {
            type: "model",
            name: "link",
            label: "Link",
            models: ["Link"]
          }
        ]
      }
    }
  ]
};

// content/models/testimonials-section.ts
var TestimonialsSection = {
  type: "object",
  name: "testimonials",
  label: "Testimonials Section",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle"
    },
    {
      type: "string",
      name: "className",
      label: "Class Name"
    },
    {
      type: "list",
      name: "testimonials",
      label: "Testimonials",
      items: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "quote",
            label: "quote",
            required: true
          },
          {
            type: "reference",
            name: "author",
            label: "Author",
            models: ["Author"]
            // required: true,
          }
        ]
      }
    }
  ]
};

// content/models/sections-page.ts
var SectionsPage = {
  name: "sections-page",
  label: "Sections Page",
  filePath({ data }) {
    const { slug } = data;
    if (slug === "/") {
      return Promise.resolve("content/pages/index.json");
    }
    return Promise.resolve(`content/pages${slug}.json`);
  },
  type: "page",
  fields: [{
    type: "string",
    name: "title",
    label: "Title",
    required: true
  }, {
    type: "slug",
    name: "slug",
    label: "Slug"
  }, {
    type: "list",
    name: "sections",
    label: "Sections",
    items: {
      type: "model",
      models: ["hero-section", "promo-banner", "markdown", "faq-section", "cards-section", "testimonials"]
    }
  }],
  hideContent: true
};

// content/models/blog-post.ts
var BlogPost = {
  name: "blog-post",
  label: "Blog Post",
  filePath({ data }) {
    const { slug } = data;
    if (slug === "/") {
      return Promise.resolve("content/posts/index.json");
    }
    return Promise.resolve(`content/posts${slug}.json`);
  },
  type: "page",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true
    },
    {
      type: "slug",
      name: "slug",
      label: "Slug"
    },
    {
      type: "model",
      name: "image",
      label: "Image",
      models: ["Image"]
    },
    {
      type: "markdown",
      name: "content",
      label: "Content"
    },
    {
      type: "list",
      name: "authors",
      label: "Authors",
      items: {
        type: "reference",
        models: ["Author"]
      }
    }
  ],
  hideContent: true
};

// content/models/index.ts
var models_default = [
  Link,
  Image,
  Author,
  HeroSection,
  PromoBanner,
  MarkdownSection,
  FAQsSection,
  CardsSection,
  TestimonialsSection,
  SectionsPage,
  BlogPost
];

// stackbit.config.ts
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "0.6.0",
  ssgName: "nextjs",
  contentSources: [
    new import_cms_git.FileSystemContentSource({
      contentDirs: ["content"],
      rootPath: (0, import_path.resolve)("/Users/arsenygurevich/Documents/Development/generic-demo"),
      models: models_default,
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ],
  sitemap({ documents }) {
    const pages = documents.filter((document) => ["sections-page", "blog-post"].includes(document.modelName));
    return pages.map((page) => {
      const slug = page.fields.slug?.value || "";
      return {
        urlPath: getUrlByTypeFromSlug(page.modelName, slug),
        document: page
      };
    }).filter((entry) => entry.urlPath.length > 0);
  }
});
function getUrlByTypeFromSlug(type, slug) {
  if (type === "sections-page") {
    return slug;
  }
  if (type === "blog-post") {
    return `blog/${slug}`;
  }
  return "";
}
//# sourceMappingURL=stackbit.config.ZD7ZIP35.cjs.map
