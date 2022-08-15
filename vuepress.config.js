const { defaultTheme } = require('@vuepress/theme-default')

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
        href: 'https://oss.vue-scaff.com/vue-scaff-fox.png',
      },
    ],
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'vue-scaff',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'vue-scaff',
      selectLanguageName: '简体中文',
    },
  },

  // Use Plugins
  plugins,

  /**
   * 文档: https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#locale-配置
   * 主题配置
   * ========== ========== ========== ========== ==========
   */
  theme: defaultTheme({

    // 顶部 Logo
    logo: 'https://oss.vue-scaff.com/vue-scaff-fox.png',

    // Github Repo
    repo: 'joenix/vue-scaff',

    // 站点首页
    // home: "/index.md",

    // 边栏菜单
    sidebar: 'auto',

    // Set for Locales
    locales: {
      '/': {
        // 导航菜单
        navbar: navbar.en,
        selectLanguageName: 'English',
      },

      '/zh/': {
        // 导航菜单
        navbar: navbar.cn,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
      },
    },
  }),
};
