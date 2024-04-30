import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
     title: "FRONTEND PREPARATIONS",
     tagline: "Frontend Interview Questions and Answers",
     favicon: "img/favicon.png",

     // Set the production url of your site here
     url: "https://your-docusaurus-site.example.com",
     // Set the /<baseUrl>/ pathname under which your site is served
     // For GitHub pages deployment, it is often '/<projectName>/'
     baseUrl: "/",

     // GitHub pages deployment config.
     // If you aren't using GitHub pages, you don't need these.
     organizationName: "Vivek", // Usually your GitHub org/user name.
     projectName: "Javascript", // Usually your repo name.

     onBrokenLinks: "throw",
     onBrokenMarkdownLinks: "warn",

     // Even if you don't use internationalization, you can use this field to set
     // useful metadata like html lang. For example, if your site is Chinese, you
     // may want to replace "en" with "zh-Hans".
     i18n: {
          defaultLocale: "en",
          locales: ["en"],
     },

     presets: [
          [
               "classic",
               {
                    docs: {
                         sidebarPath: "./sidebars.ts",
                         // Please change this to your repo.
                         // Remove this to remove the "edit this page" links.
                         editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    },
                    blog: {
                         showReadingTime: true,
                         // Please change this to your repo.
                         // Remove this to remove the "edit this page" links.
                         editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    },
                    theme: {
                         customCss: "./src/css/custom.css",
                    },
               } satisfies Preset.Options,
          ],
     ],

     themeConfig: {
          // Replace with your project's social card
          image: "img/docusaurus-social-card.jpg",
          navbar: {
               title: "FRONTEND",
               logo: {
                    alt: "My Site Logo",
                    src: "img/favicon.png",
               },
               items: [
                    {
                         type: "docSidebar",
                         sidebarId: "tutorialSidebar",
                         position: "left",
                         label: "Tutorial",
                    },
                    // {to: '/blog', label: 'Blog', position: 'left'},
                    {
                         href: "https://github.com/Vivek563/FrontendInterviewQuestion",
                         label: "GitHub",
                         position: "right",
                    },
               ],
          },

          prism: {
               theme: prismThemes.github,
               darkTheme: prismThemes.dracula,
          },
     } satisfies Preset.ThemeConfig,
};

export default config;
