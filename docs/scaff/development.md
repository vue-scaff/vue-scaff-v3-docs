# Development Experience

> 😜 Some optimizations, hope to bring you a little surprise ~

## Usage of Extract

::: tip Tips

- The extracted context, which will be registered globally as a property by `app.config.globalProperties`, it can be accessed by keyword `this`.
- If you want to access the built-in properties, you need to add the `$` prefix, such as: `$util`、`$directive`、`$component`, etc.

:::

### 1. \$util

- Default Rule: `/utils/*.js`
- Sample Code:

```js
// Definition in `/utils/plus.js`
export default (a, b) => {
  return a + b;
};
```

```js
// Use in Vue
this.$util.plus(10, 20); // 30
```

### 2. \$component

- Default Rule: `/components/**/*.vue`
- Sample Code:

```vue
<!-- Definition in `/components/message/index.vue` -->
<template>
  <span>{{ info }}</span>
</template>

<script>
export default {
  props: {
    info: String,
  },
};
</script>
```

```vue
<!-- Use in Vue -->
<template>
  <message info="Hello World" />
</template>
```

### 3. \$route

- Default Rule: `/pages/**/route.js`
- Sample Code:

```js
// Definition in `/pages/sample/route.js`
export default () => {
  return {
    path: '/sample',
    name: 'sample',
    component: () => import('@/pages/sample/index.vue'),
  };
};
```

### 4. \$store

:::tip Tips
If you need to use `module` in store, it should to configure mixins in the [registry](#use-of-registry) set.
:::

- Default Rule: `/pages/**/store.js`
- Sample Code:

```js
// Definition in `/pages/sample/store.js`
export default () => {
  const state = {
    nick: `joenix`,
  };

  const mutations = {
    UPDATE_NICK(state, value) {
      state.nick = value;
    },
  };

  const actions = {
    async speaker({ commit }, nickname) {
      commit('UPDATE_NICK', nickname);
    },
  };

  return { state, mutations, actions };
};
```

```js
// Use in Vue
async mounted() {
  // Execute Action
  await this.$store.dispatch('sample/speaker', 'Trump');
  // Access State
  console.log(this.$store.state.sample.name);
}
```

### 5. \$filter

::: tip Tips

`filters` has be removed and no supported in Vue 3.x. [official docs](https://v3.cn.vuejs.org/guide/migration/filters.html)

:::

- Default Rule: `/filters/*.js`
- Sample Code:

```js
// Definition in `/pages/filters/cash.js`
export default value => {
  return `$${value}.00`;
};
```

```vue
<!-- Use in Vue -->
<template>
  <div>{{ $filter.dollar(100) }}</div>
</template>
```

### 6. \$directive

- Default Rule: `/directives/*.js`
- Sample Code:

```js
// Definition in `/directives/position.js`
export default (element, binding) => {
  element.style = { position: `fixed`, ...binding.value };
};
```

```vue
<!-- Use in Vue -->
<template>
  <div v-position="{ top: `100px` }" />
</template>
```

### 7. \$i18n

[More Guides](https://vue-i18n.intlify.dev/)

- Default Rule: `/i18n/*.js`
- Sample Code:

```js
// Definition in `/i18n/en-US.js`
export default () => {
  return {
    hello: `Hello, {message}!`,
  };
};
```

```vue
<!-- Use in Vue -->
<template>
  <div>{{ $t(`hello`, { message: `World` }) }}</div>
</template>
```

### 8. custom

```js
// Rule Set in `scaff.config.js`
module.exports = {
  extract: {
    custom: `/custom/*.js`,
  },
};
```

- Sample Code:

```js
// Definition in `/custom/say.js`
export default word => console.log(`i say: ${word}`);
```

```js
// Use in Vue
mounted() {
  this.custom.say('halo');
}
```

## Extension of Extract

::: tip Tips

- Each extracted context can be accessed in `main.js` (`scaff.ts` in `vite`) as parameters.

:::

```js
export default ({ app, util, route, store, i18n }) => {
  // some code
};
```

:::tip Each of the extracted built-in context mounts a `proxy`

1.  `{context}.proxy.config` can be used to configure the context before instantiation.
2.  `{context}.proxy.extension` allows extending the instantiation of context, before `app.use`.

PS: `{context}.get` can return the original context.

:::

### 1. `proxy.config`

- add a route setting with `config`

```js
export default ({ route }) => {
  route.proxy.config = settings => {
    settings.push({
      path: '/example',
      name: 'example',
      component: () => import('/src/pages/example/index.vue'),
    });
  };
};
```

- update the mode to `hash`

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

### 2. `proxy.extension`

- use `beforeEach` in `extension`

```js
export default ({ route }) => {
  route.proxy.extension = instance => {
    instance.beforeEach((to, from, next) => {
      next();
    });
  };
};
```

- add plugin with `extension` in store

```js
import VuexORM from '@vuex-orm/core';

export default ({ store }) => {
  const database = new VuexORM.Database();

  return {
    plugins: [VuexORM.install(database)],
  };
};
```

### 3. `get`

get the method `foreach` in `utils` by `get`, then register `icons` as `components`

```js
// version: ^3.0.0
import * as Icons from '@ant-design/icons-vue';

export default ({ app, util }) => {
  util.get().foreach(Icons, (icon, key) => {
    app.component(key, icon);
  });
};
```

## Usage of Registry

:::tip Tips
`vue-scaff` will auto-registry the context in the directory with the same name under the `registry` to the global, when property be set `true`.
:::

```js
// Default Configuration
module.exports = {
  host: true,
  api: true,
  route: true,
  store: true,
  mixin: true,
};
```

### 1. host and api

The `host` Configuration will be passed to the `api` as first parameter.

```js
// Definition Host in `/registry/host.js`
export default {
  host: `http://vue-scaff.com`,
};

// Definition Api in `/registry/api.js`
export default ({ host }) => {
  return {
    mock: `${host}/path/to/api`,
  };
};
```

```js
// Use in Vue
mounted() {
  console.log(this.$api.mock);
}

// Use in Store
export default ({ $http, $api }) => {
  const actions = {
    async speaker() {
      await $http.get($api.mock);
    },
  };
};
```

[How to use `$http`](#_1-http)

### 2. registry.route

`registry.route` supports both array and object settings.

```js
// Definition Route in `/registry/route.js`
export default [
  {
    path: '/',
    redirect: {
      name: 'start',
    },
  },
];
```

### 3. registry.store

It's recommended to set `store` in `mixin` as globally set:

```js
{
  state: state => state;
}
```

```js
// Use Globally Store in Vue
this.state.oss;
```

### 4. registry.mixin

```js
// Use `mapState` from `vuex`
import { mapState } from 'vuex';

// Sample Code
export default {
  computed: {
    ...mapState({
      state: state => state,
    }),
  },
};
```

## Advanced Development

### 1. `$http`

Since Version 3, we decided to use `ky` as the base dependency for `$http`.

[Read More](https://www.npmjs.com/package/ky)

```js
// Use in Vue with `$api`
async mounted() {
  await this.$http.post(this.$api.mock, {json: {foo: true}}).json();
}

// Use in Vuex with `$api` (Recommended)
async speaker() {
  await $http.post($api.mock, {json: {foo: true}}).json();
}
```

[How to set `$api`](#_1-host-and-api)

### 2. vuex-fast

:::tip Why Vuex Fast

- For a long time, I've been thingking about a more elegant way of state managing than `Modeling Ideas`.
- Until I thought of this way: [vuex-fast](https://www.npmjs.com/package/vuex-fast), so I integrated it in.
  :::

```js
// Use `return` to update `state`
const state = {
  numeric: {
    a: 100,
    b: 200,
  },
};

const actions = {
  calculate({ state }) {
    return {
      numeric: {
        a: state.a,
        b: state.a + state.b,
      },
    };
  },
};

// Access State
console.log(state.numeric); // { a: 100, b: 300 }
```
