module.exports = function (migration) {
  const cta = migration
    .createContentType("cta")
    .name("CTA")
    .description("A call-to-action content item")
    .displayField("title");
  cta
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  cta
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  cta
    .createField("description")
    .name("Description")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  cta
    .createField("link")
    .name("Link")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ["pageLanding", "pageBlogPost"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  const pageLanding = migration
    .createContentType("pageLanding")
    .name("📄 page - Landing")
    .description("To have an entry point for the app (e.g. Homepage)")
    .displayField("internalName");

  pageLanding
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  pageLanding
    .createField("featuredBlogPost")
    .name("Featured blog post")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["pageBlogPost"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  pageLanding
    .createField("seoFields")
    .name("SEO fields")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["componentSeo"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  pageLanding.changeFieldControl("internalName", "builtin", "singleLine", {
    helpText:
      "This field is only for internal use, and lets us easily recognise an entry",
  });

  pageLanding.changeFieldControl(
    "featuredBlogPost",
    "builtin",
    "entryCardEditor",
    {
      helpText:
        "This blog post is featured at the top of the landing page, displayed as a card",
      showLinkEntityAction: true,
      showCreateEntityAction: false,
    }
  );

  pageLanding.changeFieldControl("seoFields", "builtin", "entryCardEditor", {
    helpText: "These are the SEO fields used for this specific page",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  const componentRichImage = migration
    .createContentType("componentRichImage")
    .name("💎 component - Rich image")
    .description("To describe an image used in rich text fields")
    .displayField("internalName");

  componentRichImage
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  componentRichImage
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkMimetypeGroup: ["image"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  componentRichImage
    .createField("caption")
    .name("Caption")
    .type("Symbol")
    .localized(true)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  componentRichImage
    .createField("fullWidth")
    .name("Full width")
    .type("Boolean")
    .localized(false)
    .required(false)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(false)
    .omitted(false);

  componentRichImage.changeFieldControl(
    "internalName",
    "builtin",
    "singleLine",
    {
      helpText:
        "This field is only for internal use, and lets us easily recognise an entry",
    }
  );

  componentRichImage.changeFieldControl(
    "image",
    "builtin",
    "assetLinkEditor",
    {}
  );

  componentRichImage.changeFieldControl("caption", "builtin", "singleLine", {
    helpText: "Caption shown beneath the image",
  });

  componentRichImage.changeFieldControl("fullWidth", "builtin", "boolean", {
    helpText:
      "This checkbox determines if the image should be the full width of the page, as opposed to fitting in the rich text block it was used in.",
    trueLabel: "Yes",
    falseLabel: "No",
  });

  const componentSeo = migration
    .createContentType("componentSeo")
    .name("💎 component - SEO")
    .description("To have SEO-related properties to the pages we render")
    .displayField("internalName");

  componentSeo
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  componentSeo
    .createField("pageTitle")
    .name("Page title")
    .type("Symbol")
    .localized(true)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  componentSeo
    .createField("pageDescription")
    .name("Page description")
    .type("Text")
    .localized(true)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  componentSeo
    .createField("canonicalUrl")
    .name("Canonical URL")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  componentSeo
    .createField("nofollow")
    .name("nofollow")
    .type("Boolean")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(false)
    .omitted(false);

  componentSeo
    .createField("noindex")
    .name("noindex")
    .type("Boolean")
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(false)
    .omitted(false);

  componentSeo
    .createField("shareImages")
    .name("Share images")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 3,
        },
      },
    ])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkMimetypeGroup: ["image"],
        },
      ],

      linkType: "Asset",
    });

  componentSeo.changeFieldControl("internalName", "builtin", "singleLine", {
    helpText:
      "This field is only for internal use, and lets us easily recognise an entry",
  });

  componentSeo.changeFieldControl("pageTitle", "builtin", "singleLine", {
    helpText: "Sets the meta title of the page.",
  });

  componentSeo.changeFieldControl(
    "pageDescription",
    "builtin",
    "multipleLine",
    {
      helpText: "Sets the page meta description.",
    }
  );

  componentSeo.changeFieldControl("canonicalUrl", "builtin", "urlEditor", {
    helpText: "Consolidates duplicate URLs.",
  });

  componentSeo.changeFieldControl("nofollow", "builtin", "boolean", {
    helpText:
      'When set to "true", disallows search engines from crawling the links on this page.',
    trueLabel: "true",
    falseLabel: "false",
  });

  componentSeo.changeFieldControl("noindex", "builtin", "boolean", {
    helpText:
      'When set to "true", disallows search engines from indexing this page.',
    trueLabel: "true",
    falseLabel: "false",
  });

  componentSeo.changeFieldControl(
    "shareImages",
    "builtin",
    "assetLinksEditor",
    {
      helpText:
        "Images that will be used in share previews on social media and in search results.",
      showLinkEntityAction: true,
      showCreateEntityAction: true,
    }
  );

  const componentAuthor = migration
    .createContentType("componentAuthor")
    .name("💎 component - Author")
    .description("To have author-related properties")
    .displayField("internalName");

  componentAuthor
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  componentAuthor
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  componentAuthor
    .createField("avatar")
    .name("Avatar")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkMimetypeGroup: ["image"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  componentAuthor.changeFieldControl("internalName", "builtin", "singleLine", {
    helpText:
      "This field is only for internal use, and lets us easily recognise an entry",
  });

  componentAuthor.changeFieldControl("name", "builtin", "singleLine", {
    helpText: "The name of the author",
  });

  componentAuthor.changeFieldControl("avatar", "builtin", "assetLinkEditor", {
    helpText: "An avatar used for the author",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  const pageBlogPost = migration
    .createContentType("pageBlogPost")
    .name("📄 page - Blog post")
    .description("To create individual blog posts")
    .displayField("internalName");

  pageBlogPost
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  pageBlogPost
    .createField("seoFields")
    .name("SEO fields")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["componentSeo"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  pageBlogPost
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  pageBlogPost
    .createField("author")
    .name("Author")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["componentAuthor"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  pageBlogPost
    .createField("publishedDate")
    .name("Published date")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  pageBlogPost
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(true)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  pageBlogPost
    .createField("shortDescription")
    .name("Subtitle")
    .type("Text")
    .localized(true)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  pageBlogPost
    .createField("featuredImage")
    .name("Featured image")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkMimetypeGroup: ["image"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  pageBlogPost
    .createField("content")
    .name("Content")
    .type("RichText")
    .localized(true)
    .required(true)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "table",
          "hyperlink",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, table, and link to Url nodes are allowed",
      },
      {
        nodes: {
          "asset-hyperlink": [
            {
              size: {
                max: 10,
              },

              message: null,
            },
          ],

          "embedded-asset-block": [
            {
              size: {
                max: 10,
              },

              message: null,
            },
          ],

          "embedded-entry-block": [
            {
              linkContentType: ["componentRichImage"],
              message: null,
            },
            {
              size: {
                max: 10,
              },

              message: null,
            },
          ],

          "embedded-entry-inline": [
            {
              linkContentType: ["componentRichImage"],
              message: null,
            },
            {
              size: {
                max: 10,
              },

              message: null,
            },
          ],

          "entry-hyperlink": [
            {
              linkContentType: ["pageBlogPost"],
              message: null,
            },
            {
              size: {
                max: 10,
              },

              message: null,
            },
          ],
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  pageBlogPost
    .createField("relatedBlogPosts")
    .name("Related blog posts")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 2,
        },
      },
    ])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["pageBlogPost"],
        },
      ],

      linkType: "Entry",
    });

  pageBlogPost.changeFieldControl("internalName", "builtin", "singleLine", {
    helpText:
      "This field is only for internal use, and lets us easily recognise an entry",
  });

  pageBlogPost.changeFieldControl("seoFields", "builtin", "entryCardEditor", {
    helpText: "These are the SEO fields used for this specific page",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  pageBlogPost.changeFieldControl("slug", "builtin", "slugEditor", {
    helpText:
      "The slug is the part of the URL on which page will be available on https://yourwebsite.com/your-slug-goes-here",
    trackingFieldId: "title",
  });

  pageBlogPost.changeFieldControl("author", "builtin", "entryCardEditor", {
    helpText: "The author of the blog article",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  pageBlogPost.changeFieldControl("publishedDate", "builtin", "datePicker", {
    ampm: "24",
    format: "dateonly",
    helpText: "Date when the blog post was published",
  });

  pageBlogPost.changeFieldControl("title", "builtin", "singleLine", {
    helpText: "The title of the blog post",
  });

  pageBlogPost.changeFieldControl(
    "shortDescription",
    "builtin",
    "multipleLine",
    {
      helpText: "The subtitle of the blog post",
    }
  );

  pageBlogPost.changeFieldControl(
    "featuredImage",
    "builtin",
    "assetLinkEditor",
    {
      helpText:
        "This image appears at the top of the blog post page and is also included in tiles that link to the blog post",
      showLinkEntityAction: true,
      showCreateEntityAction: true,
    }
  );

  pageBlogPost.changeFieldControl("content", "builtin", "richTextEditor", {
    helpText: "This rich text field makes up text of the blog post",
  });

  pageBlogPost.changeFieldControl(
    "relatedBlogPosts",
    "builtin",
    "entryLinksEditor",
    {}
  );
};
