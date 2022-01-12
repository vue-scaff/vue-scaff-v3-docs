// Use Preset
const preset = require('./preset');

// Get Setting
const { navbar, plugins } = preset;

// Exports
module.exports = {
  // Base URL
  base: '/',

  // Host
  host: '0.0.0.0',

  // 语言设置
  lang: 'zh-CN',

  // 站点标题
  title: 'vue-scaff',

  // 头部信息
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'http://oss.joenix.com/vue-scaff/vue-scaff-fox.png',
      },
    ],
  ],

  locales: {
    '/': {
      title: 'vue-scaff',
    },
  },

  // Use Plugins
  plugins,

  /**
   * 文档: https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#locale-配置
   * 主题配置
   * ========== ========== ========== ========== ==========
   */
  themeConfig: {
    // 顶部 Logo
    logo: 'http://oss.joenix.com/vue-scaff/vue-scaff-fox.png',

    // Github Repo
    repo: 'joenix/vue-scaff',

    // 站点首页
    // home: "/index.md",

    // 边栏菜单
    sidebar: 'auto',

    // 导航菜单
    navbar,
  },
};
