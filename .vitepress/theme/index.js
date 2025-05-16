import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";

export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  // Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(ElementPlus);
  },
};
