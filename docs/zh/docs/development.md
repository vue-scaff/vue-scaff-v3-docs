# 高阶开发经验

## 基础使用

> 😜 我们对 Vue 全家桶做了些许优化，希望给您带来不一样的卓越开发体验 ~

### 1. 如何发送请求？

::: tip 提示

1. `vue-scaff` 内置 `http` 请求（基于 `ky`），使用 `$http` 关键字唤起
2. 并提供 `host` 与 `api` 配置方式，用 `$api` 访问
3. 支持请求类型 `get`、`post`、`put`、`head`、`patch`、`delete`，在 `$http` 实例上使用同名方法

:::

第一步：配置 host，在 registry/host.js 中

```js
{
  host: <host_address>
}
```

第二步：配置请求地址，在 registry/api.js 中

```js
export default ({ host }) => {
  return {
    mock: <api_address>,
  };
};
```

第三步：在 vue 中调用

```js
await this.$http(this.$api.mock).get(params);
```

或，在 store 中调用

```js
export default ({ $http, $api }) => {
  const actions = {
    async GET_MOCK_DATA({}, params) {
      await $http($api.mock).get(params);
    },
  };
  return { actions };
};
```

### 2. 如何使用 STORE（状态管理）

::: tip 提示
考虑到数据驱动的实际应用场景，`vue-scaff` 在不破坏原生 vuex 的前提下，对其进行了些许优化：

1. 每个 `store.js` 文件需要 export 一个函数，`vue-scaff` 会将 `registry.utils` 注入其中
2. 在函数的尾部，`vue-scaff` 会根据所 return 的 `state` 与 `actions` 进行 module 注册，且默认开启 `namespace`
3. `vue-scaff` 会甄别函数中所返回的 json 数据，如果其键值在 `state` 中真实有效，则会自动更新到 `state` 中
4. 此外，如果在 `registry.mixin` 中进行 map 配置，则可在 vue 中直接使用 module
5. 最后，`vue-scaff` 提供一个全局 `store` 配置，可在 `/registry/store.js` 中进行配置

:::

一份完整的 store 示例

```js
export default ({ $http, $api }) => {
  const state = {
    author: 'who',
  };

  const actions = {
    async GET_MOCK_DATA({ commit }, params = {}) {
      return {
        author: 'joenix',
      };
    },
  };

  return { state, actions };
};
```

storeMapping 配置，在 registry.maxin 中

```js
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      // Global Store
      app: app => app,
      // Sample
      sample: ({ sample }) => sample,
    }),
  },
};
```

在 vue 中使用

```js
// 属性访问
this.sample.author; // who

// 函数调用
const { author } = this.$store.dispatch('sample/GET_MOCK_DATA'); // joenix
```

### 3. 模块化路由配置

::: tip 提示

1. `vue-scaff` 的默认路由规则，会汲取 `/src/pages` 下 `route.js` 文件中的配置，并注册到 `vue-router` 中
2. 此外，`vue-scaff` 提供一个全局 `route` 配置，可在 `/registry/route.js` 中进行配置

:::

全局 route 配置示例

```js
export default [
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: '404',
    },
  },
  {
    path: '/',
    redirect: {
      name: 'index',
    },
  },
];
```

局部 route 配置示例

```js
export default () => {
  return {
    path: '/sample',
    name: 'sample',
    component: () => import('@/pages/sample/index.vue'),
  };
};
```

### 4. 组件封装

::: tip 提示

1. 组件的默认配置规则系 `/components/*.vue`，即：`vue-scaff` 会汲取配置目录下的 `.vue` 文件，并以组件中的 `name` 作为组件名称，注册组件。
2. 当 `.vue` 文件中没有 `name` 配置时，会以 `.vue` 文件的文件名代替 `name`，注册组件。

:::

此处没有示例 😜

### 5. 指令拓展

::: tip 提示

1. 默认配置：`/directives/*.js`
2. 以文件名作为指令名称注册。

:::

示例，`/directives/css.js`

```js
export default (element, { value }) => {
  target.style = { ...target.style, { ...value } }
}
```

在 template 中的调用示例

```vue
<div v-css={ position: 'absolute' } />
```

### 6. 国际化（i18n）

::: tip 提示

1. `vue-scaff` 会检测浏览器的语言环境，并调用对应的 `i18n` 文件配置
2. 默认配置规则：`/i18n/*.js`
3. 文件名请采用标准的国际化（internationalization）命名规则，如：简体中文 - `zh-CN.js`

:::

配置示例

```js
export default util => {
  return {
    lang: '中文',
  };
};
```

在 template 中的调用示例

```vue
<div>{{ $t('lang') }}</div>
```

### 7. 自定义（属性或方法）

> 除了默认配置外，`vue-scaff` 还提供了一种 自定义 的方式，可用于创建 配置预设 或 工具函数 等。

第一步：在配置文件的 `extract` 中添加如下配置

```json
{
  "extract": {
    "custom": "/custom/*.js"
  }
}
```

第二步：在 `src` 下创建同名目录 `custom`，并在该目录下创建 esm 文件

```sh
· `/src`
   └─ `/custom`
       └─ `/meta.js`（示例）
```

第三步：编写数据，并调用

```js
// meta.js
export default {
  author: 'joenix',
  birth: '1985-09-13',
};

// 在 vue 中调用
console.log(this.custom.meta);

// 在 store 中使用
export default ({ custom }) => {
  const state = {
    author: custom.author
  }
  return { state };
};
```

## 进阶使用

### 1. 什么是 `extract`（汲取）？

::: tip 说明

1. `vue-scaff` 独创了一种上下文汲取技术，利用 `globEager`（`cli` 版本下为 `require`）特性，扫描项目文档并根据内置的 `worker` 工作流，对文件进行归类与注册处理
2. 所有被汲取的 `extracts` 类别，均会以对象的形式被注入到 `/src/scaff.ts`（`cli` 版本在 `/src/main.js`） 中的 export 函数中，开发者可以对其进行配置或拓展操作

:::

代码示例

```js
export default ({ app, util, route, store, i18n }, next) => {
  // some code
  ...

  // 实例化 App
  next();
};
```

### 2. proxy.config

::: tip 说明

`{extract}.proxy.config` 可用于对 `extract` 进行配置操作

:::

示例一：向 `route` 中添加配置

```js
export default ({ route }) => {
  route.proxy.config = settings => {
    settings.push({
      path: '/sample',
      name: 'sample',
      component: () => import('/src/pages/sample/index.vue'),
    });
  };
};
```

示例二：配置 `route` 模式

```js
export default ({ route }) => {
  route.proxy.config = settings => {
    return {
      mode: 'hash',
      base: '/path/to/project',
    };
  };
};
```

### 3. proxy.extension

::: tip 说明

`{extract}.proxy.config` 允许开发者对 `extract` 进行拓展操作，即：`extract` 实例化之后所提供的 APIs

:::

示例一：使用 `beforeEach` 拦截器

```js
export default ({ route }) => {
  route.proxy.extension = instance => {
    instance.beforeEach((to, from, next) => {
      next();
    });
  };
};
```

示例二：为 `store` 添加三方插件

```js
import VuexORM from '@vuex-orm/core';

export default ({ store }) => {
  const database = new VuexORM.Database();

  return {
    plugins: [VuexORM.install(database)],
  };
};
```

### 4. 通过 get 获取原始配置

::: tip 说明

`vue-scaff` 为每个 `extract` 额外提供了一个 `get` 函数，旨在获取其 module 化的原始配置

:::

示例：在入口处调用 `utils` 中的方法 `foreach`，从而注册 Icons

```js
import * as Icons from '@ant-design/icons-vue';

export default ({ app, util }) => {
  util.get().foreach(Icons, (icon, key) => {
    app.component(key, icon);
  });
};
```
