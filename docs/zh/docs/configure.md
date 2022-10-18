# 配置指南

> `vue-scaff` 提供了一种（可配置的）提取上下文的能力，通过汲取 `/scaff.config.js` 文件中的配置内容，从而生成 Aspect 模型。

::: tip 重要提示
`vue-scaff` 以 `/src` 为根目录，不可修改。
:::

## 默认配置

```js
module.exports = {
  // 工程入口
  main: {
    app: `App.vue`,
    mount: `#app`,
  },

  // 是否开启内置功能
  registry: {
    host: true,
    api: true,
    route: true,
    store: true,
    mixin: true,
  },

  // Aspect 配置
  extract: {
    util: '/utils/*.js',
    filter: '/filters/*.js',
    directive: '/directives/*.js',
    route: '/pages/**/route.js',
    store: '/pages/**/store.js',
    component: '/components/**/*.vue',
    style: '/styles/*.less',
    i18n: '/i18n/*.js',
  },

  // 主题配置
  theme: {
    'primary-color': '#ec2c34',
  },

  // Less 变量
  lessVariables: '/variables.module.less',
};
```

::: tip 提示

1. 在 `registry` 中，当某个配置设值为 `true` 时，`vue-scaff` 会检索同名目录（`/registry`）下的同名映射文件，并将该文件注册给 `vue`。
2. `extract` 采用 glob 语法规则（不完全），即：`**` 表示目录通配，`*` 表示文件通配

:::

> 更多功能即将推出 ...

## Vue 生态指引

> `vue-scaff` 提供 `vite` 和 `cli` 两个版本，推荐使用 `vite` 版本

1. 通过 `vite` 构建，使用 `vite.config.js` [查看官方文档](https://vitejs.dev/)
2. 通过 `cli` 构建，使用 `vue.config.js` [查看官方文档](https://cli.vuejs.org/)

[更多用法请看这里 ↗︎](/development.md)
