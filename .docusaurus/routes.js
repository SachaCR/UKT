import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/UKT/__docusaurus/debug',
    component: ComponentCreator('/UKT/__docusaurus/debug', '06c'),
    exact: true
  },
  {
    path: '/UKT/__docusaurus/debug/config',
    component: ComponentCreator('/UKT/__docusaurus/debug/config', '3a1'),
    exact: true
  },
  {
    path: '/UKT/__docusaurus/debug/content',
    component: ComponentCreator('/UKT/__docusaurus/debug/content', '0ee'),
    exact: true
  },
  {
    path: '/UKT/__docusaurus/debug/globalData',
    component: ComponentCreator('/UKT/__docusaurus/debug/globalData', '3f2'),
    exact: true
  },
  {
    path: '/UKT/__docusaurus/debug/metadata',
    component: ComponentCreator('/UKT/__docusaurus/debug/metadata', '6e5'),
    exact: true
  },
  {
    path: '/UKT/__docusaurus/debug/registry',
    component: ComponentCreator('/UKT/__docusaurus/debug/registry', '406'),
    exact: true
  },
  {
    path: '/UKT/__docusaurus/debug/routes',
    component: ComponentCreator('/UKT/__docusaurus/debug/routes', 'e87'),
    exact: true
  },
  {
    path: '/UKT/blog',
    component: ComponentCreator('/UKT/blog', '9a9'),
    exact: true
  },
  {
    path: '/UKT/blog/archive',
    component: ComponentCreator('/UKT/blog/archive', '365'),
    exact: true
  },
  {
    path: '/UKT/blog/authors',
    component: ComponentCreator('/UKT/blog/authors', '9b6'),
    exact: true
  },
  {
    path: '/UKT/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/UKT/blog/authors/all-sebastien-lorber-articles', '4d4'),
    exact: true
  },
  {
    path: '/UKT/blog/authors/yangshun',
    component: ComponentCreator('/UKT/blog/authors/yangshun', 'cbe'),
    exact: true
  },
  {
    path: '/UKT/blog/first-blog-post',
    component: ComponentCreator('/UKT/blog/first-blog-post', '9ea'),
    exact: true
  },
  {
    path: '/UKT/blog/long-blog-post',
    component: ComponentCreator('/UKT/blog/long-blog-post', 'cf7'),
    exact: true
  },
  {
    path: '/UKT/blog/mdx-blog-post',
    component: ComponentCreator('/UKT/blog/mdx-blog-post', 'bab'),
    exact: true
  },
  {
    path: '/UKT/blog/tags',
    component: ComponentCreator('/UKT/blog/tags', '24c'),
    exact: true
  },
  {
    path: '/UKT/blog/tags/docusaurus',
    component: ComponentCreator('/UKT/blog/tags/docusaurus', '731'),
    exact: true
  },
  {
    path: '/UKT/blog/tags/facebook',
    component: ComponentCreator('/UKT/blog/tags/facebook', '2bc'),
    exact: true
  },
  {
    path: '/UKT/blog/tags/hello',
    component: ComponentCreator('/UKT/blog/tags/hello', '497'),
    exact: true
  },
  {
    path: '/UKT/blog/tags/hola',
    component: ComponentCreator('/UKT/blog/tags/hola', '088'),
    exact: true
  },
  {
    path: '/UKT/blog/welcome',
    component: ComponentCreator('/UKT/blog/welcome', '8ad'),
    exact: true
  },
  {
    path: '/UKT/boxe',
    component: ComponentCreator('/UKT/boxe', '417'),
    exact: true
  },
  {
    path: '/UKT/contacts',
    component: ComponentCreator('/UKT/contacts', '3aa'),
    exact: true
  },
  {
    path: '/UKT/horaires-des-cours',
    component: ComponentCreator('/UKT/horaires-des-cours', 'fbb'),
    exact: true
  },
  {
    path: '/UKT/karate',
    component: ComponentCreator('/UKT/karate', '8be'),
    exact: true
  },
  {
    path: '/UKT/krav-maga',
    component: ComponentCreator('/UKT/krav-maga', '416'),
    exact: true
  },
  {
    path: '/UKT/mentions-legales',
    component: ComponentCreator('/UKT/mentions-legales', '912'),
    exact: true
  },
  {
    path: '/UKT/multi-sports',
    component: ComponentCreator('/UKT/multi-sports', 'bc4'),
    exact: true
  },
  {
    path: '/UKT/tai-chi',
    component: ComponentCreator('/UKT/tai-chi', 'afb'),
    exact: true
  },
  {
    path: '/UKT/docs',
    component: ComponentCreator('/UKT/docs', '59a'),
    routes: [
      {
        path: '/UKT/docs',
        component: ComponentCreator('/UKT/docs', 'bce'),
        routes: [
          {
            path: '/UKT/docs',
            component: ComponentCreator('/UKT/docs', '39e'),
            routes: [
              {
                path: '/UKT/docs/category/tutorial---basics',
                component: ComponentCreator('/UKT/docs/category/tutorial---basics', '975'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UKT/docs/category/tutorial---extras',
                component: ComponentCreator('/UKT/docs/category/tutorial---extras', '2d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UKT/docs/intro',
                component: ComponentCreator('/UKT/docs/intro', 'aa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UKT/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/UKT/docs/tutorial-basics/congratulations', '22b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UKT/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/UKT/docs/tutorial-basics/create-a-blog-post', '843'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UKT/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/UKT/docs/tutorial-basics/create-a-document', '033'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UKT/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/UKT/docs/tutorial-basics/create-a-page', '69f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UKT/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/UKT/docs/tutorial-basics/deploy-your-site', '615'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UKT/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/UKT/docs/tutorial-basics/markdown-features', '9ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UKT/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/UKT/docs/tutorial-extras/manage-docs-versions', 'cc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/UKT/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/UKT/docs/tutorial-extras/translate-your-site', '774'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/UKT/',
    component: ComponentCreator('/UKT/', '55c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
