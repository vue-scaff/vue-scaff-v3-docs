---
home: true
heroImage: https://oss.vue-scaff.com/vue-scaff-fox.png
heroText: vue-scaff
tagline: AOP・VUE-SCAFFOLD
heroAlt: AOP・VUE-SCAFFOLD
actions:
  - text: 开始使用
    link: /docs/configure.html
    type: primary
actionLink: /
features:
  - title: 开箱即用
    details: 内置路由、请求、状态管理、语法检查、国际化等，并支持热更新（HRM）开发方式。
  - title: 面向切面
    details: 零配置的切面化机制，轻松沉淀可抽象、可复用、可移植的模块，即使小白亦可拥有高效的项目交付能力。
  - title: 跨端编译
    details: 目前提供 Web、H5、小程序（Uni-App）、桌面应用（Electron） 等终端模板，更多模板即将来袭。
footer: MIT licensed | copyright © 2022 - present by joenix.com ・ 沪ICP备20017142号-2
pageClass: vue-scaff-docs
---

::: tip Tips

- vue-scaff requires Node.js `>= 12.22.0`
- if using `typescript`, please update Node.js to `^12.22.0` or `^14.17.0` or `>= 16.0.0`

:::

## 获取 vue-scaff

> 请确保命令行能连接到 GitHub. `ping github.com`

<CodeGroup>

  <CodeGroupItem title="YARN" active>

```bash
yarn create vue-scaff project-name
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm create vue-scaff project-name
```

  </CodeGroupItem>

  <CodeGroupItem title="NPX">

```bash
npx create-vue-scaff project-name
```

  </CodeGroupItem>

</CodeGroup>

<div class="features qr">
  <div class="feature">
    <img src="https://oss.vue-scaff.com/qr/me.jpg" />
  </div>
  <div class="feature">
    <img src="https://oss.vue-scaff.com/qr/gp.jpg" />
  </div>
</div>
