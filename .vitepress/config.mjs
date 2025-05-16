import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans",
  title: "高峰的个人博客",
  description: "技术博客爱好者,专注于web开发技术分享。",
  base: "/gaofeng-blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "示例", link: "/about-vue3" },
    ],
    outline: {
      label: "本页内容",
    },
    sidebar: [
      {
        text: "html5",
        items: [
          { text: "h5中的rem", link: "/src/articles/h5/rem.md" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      // {
      //   text: "css3",
      //   items: [
      //     // { text: "Markdown Examples", link: "/markdown-examples" },
      //     // { text: "Runtime API Examples", link: "/api-examples" },
      //   ],
      // },
      {
        text: "数据结构",
        items: [
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "基础算法",
        items: [
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "前端框架之Vue3",

        items: [
          { text: "杂谈vue3", link: "/src/articles/about-vue3" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "前端框架之React",

        items: [
          {
            text: "craco.config配置文件的记录",
            link: "/src/articles/react/craco-config",
          },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "前端框架之Angular",

        items: [
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "后端Java",

        items: [
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "后端框架springboot",
        items: [
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "数据库mysql",
        items: [
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    notFound: {
      title: "页面未找到",
      quote:
        "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
