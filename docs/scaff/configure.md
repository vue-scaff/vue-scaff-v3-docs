# Configuration Reference

## Global Configure

::: tip Tips 1

- The file path of configuration can be modified in the property name `configAlias` of `package.json`.
- Default name is `scaff.config.js`.
  :::

::: tip Tips 2

- `vue-scaff` takes `/src` as the root directory, which cannot be modified.
  :::

### Entry of App

```js
module.exports = {
  app: `App.vue`,
  mount: `#app`,
};
```

### Theme

```js
module.exports = {
  'primary-color': '#e23',
};
```

> More features coming soon ...

### Extract Rules Set

💯 An ability that extracts the context of files based on configurations.

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

[For more usage, please check here ↗︎](/scaff/development.md#use-of-extract)

### Built-In Global Registration

```js
module.exports = {
  host: true,
  api: true,
  route: true,
  store: true,
  mixin: true,
};
```

::: tip Tips

When the value of a property is set to `true`, the file which the same name in the registry directory, will be registered globally.
:::

[For more usage, please check here ↗︎](/scaff/development.md)

## Native Configure

> Support Native Configuration by `vue-cli` or `vite`

1. Use `vue.config.js` in `cli` type, [see official docs](https://cli.vuejs.org/)
2. Use `vite.config.js` in `vite` type, [see official docs](https://vitejs.dev/)
