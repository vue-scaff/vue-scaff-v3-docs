# 配置参考

## 全局配置

::: tip 提示 1

- 可以在 `package.json` 文件的属性名 `configAlias` 中修改配置的文件路径。
- 默认名称是 `scaff.config.js`.
  :::

::: tip 提示 2

- `vue-scaff` 以 `/src` 为根目录，不可修改。
  :::

### 入口文件

```js
module.exports = {
  app: `App.vue`,
  mount: `#app`,
};
```

### 主题配置

```js
module.exports = {
  'primary-color': '#e23',
};
```

> 更多功能即将推出 ...

### 提取规则

💯 一种可配置的提取文件上下文的能力

```js
// Default Configuration
module.exports = {
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
};
```

[更多用法请看这里 ↗︎](/development.md#use-of-extract)

### 内置全局注册

```js
module.exports = {
  host: true,
  api: true,
  route: true,
  store: true,
  mixin: true,
};
```

::: tip 提示

当某个属性的值设置为 `true` 时，注册目录中的同名文件将被全局注册。
:::

[更多用法请看这里 ↗︎](/development.md)

## 本地配置

> 通过 `vue-cli` 或 `vite` 构建，支持本地配置

1. 通过 `cli` 构建，使用 `vue.config.js` [查看官方文档](https://cli.vuejs.org/)
2. 通过 `vite` 构建，使用 `vite.config.js` [查看官方文档](https://vitejs.dev/)
