// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Site du club UKT Beauchamp et Frepillon",
  tagline: "",
  favicon: "img/ukt/ukt-logo.jpg",

  // Set the production url of your site here
  url: "https://karate95.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SachaCR", // Usually your GitHub org/user name.
  projectName: "ukt", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "UKT",
        logo: {
          alt: "UKT Logo",
          src: "img/ukt/ukt-logo.jpg",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          {
            position: "left",
            label: "Karate",
            href: "/karate",
          },
          {
            position: "left",
            label: "Tai Chi",
            href: "/tai-chi",
          },
          {
            position: "left",
            label: "Boxe",
            href: "/boxe",
          },
          {
            position: "left",
            label: "Krav Maga",
            href: "/krav-maga",
          },
          {
            position: "left",
            label: "Multi Sports",
            href: "/multi-sports",
          },

          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://www.facebook.com/UKTKarate95/",
            label: "Facebook",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Contacts",
            items: [
              {
                label: "Contacts",
                to: "/contacts",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/UKTKarate95/",
              },
            ],
          },
          {
            title: "Mention Légales",
            items: [
              {
                label: "Informations Légales",
                to: "/mentions-legales",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UKT Website, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
