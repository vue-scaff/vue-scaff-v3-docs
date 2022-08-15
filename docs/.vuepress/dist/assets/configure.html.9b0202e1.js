import{_ as r,o as i,c,d as s,a,w as p,b as l,e as n,r as o}from"./app.878a1ba4.js";const u={},d=l(`<h1 id="\u914D\u7F6E\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u53C2\u8003" aria-hidden="true">#</a> \u914D\u7F6E\u53C2\u8003</h1><h2 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> \u5168\u5C40\u914D\u7F6E</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A 1</p><ul><li>\u53EF\u4EE5\u5728 <code>package.json</code> \u6587\u4EF6\u7684\u5C5E\u6027\u540D <code>configAlias</code> \u4E2D\u4FEE\u6539\u914D\u7F6E\u7684\u6587\u4EF6\u8DEF\u5F84\u3002</li><li>\u9ED8\u8BA4\u540D\u79F0\u662F <code>scaff.config.js</code>.</li></ul></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A 2</p><ul><li><code>vue-scaff</code> \u4EE5 <code>/src</code> \u4E3A\u6839\u76EE\u5F55\uFF0C\u4E0D\u53EF\u4FEE\u6539\u3002</li></ul></div><h3 id="\u5165\u53E3\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a> \u5165\u53E3\u6587\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">App.vue</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">mount</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#app</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E3B\u9898\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u914D\u7F6E" aria-hidden="true">#</a> \u4E3B\u9898\u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;primary-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#e23&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u66F4\u591A\u529F\u80FD\u5373\u5C06\u63A8\u51FA ...</p></blockquote><h3 id="\u63D0\u53D6\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u63D0\u53D6\u89C4\u5219" aria-hidden="true">#</a> \u63D0\u53D6\u89C4\u5219</h3><p>\u{1F4AF} \u4E00\u79CD\u53EF\u914D\u7F6E\u7684\u63D0\u53D6\u6587\u4EF6\u4E0A\u4E0B\u6587\u7684\u80FD\u529B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Default Configuration</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">extract</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">util</span><span class="token operator">:</span> <span class="token string">&#39;/utils/*.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token string">&#39;/filters/*.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">directive</span><span class="token operator">:</span> <span class="token string">&#39;/directives/*.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">route</span><span class="token operator">:</span> <span class="token string">&#39;/pages/**/route.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">store</span><span class="token operator">:</span> <span class="token string">&#39;/pages/**/store.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;/components/**/*.vue&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&#39;/styles/*.less&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">i18n</span><span class="token operator">:</span> <span class="token string">&#39;/i18n/*.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),k=n("\u66F4\u591A\u7528\u6CD5\u8BF7\u770B\u8FD9\u91CC \u2197\uFE0E"),v=l(`<h3 id="\u5185\u7F6E\u5168\u5C40\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u5168\u5C40\u6CE8\u518C" aria-hidden="true">#</a> \u5185\u7F6E\u5168\u5C40\u6CE8\u518C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">route</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">store</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mixin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5F53\u67D0\u4E2A\u5C5E\u6027\u7684\u503C\u8BBE\u7F6E\u4E3A <code>true</code> \u65F6\uFF0C\u6CE8\u518C\u76EE\u5F55\u4E2D\u7684\u540C\u540D\u6587\u4EF6\u5C06\u88AB\u5168\u5C40\u6CE8\u518C\u3002</p></div>`,3),h=n("\u66F4\u591A\u7528\u6CD5\u8BF7\u770B\u8FD9\u91CC \u2197\uFE0E"),m=s("h2",{id:"\u672C\u5730\u914D\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u672C\u5730\u914D\u7F6E","aria-hidden":"true"},"#"),n(" \u672C\u5730\u914D\u7F6E")],-1),_=s("blockquote",null,[s("p",null,[n("\u901A\u8FC7 "),s("code",null,"vue-cli"),n(" \u6216 "),s("code",null,"vite"),n(" \u6784\u5EFA\uFF0C\u652F\u6301\u672C\u5730\u914D\u7F6E")])],-1),b=n("\u901A\u8FC7 "),g=s("code",null,"cli",-1),y=n(" \u6784\u5EFA\uFF0C\u4F7F\u7528 "),f=s("code",null,"vue.config.js",-1),x=n(),j={href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},L=n("\u67E5\u770B\u5B98\u65B9\u6587\u6863"),N=n("\u901A\u8FC7 "),V=s("code",null,"vite",-1),q=n(" \u6784\u5EFA\uFF0C\u4F7F\u7528 "),B=s("code",null,"vite.config.js",-1),C=n(),E={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},w=n("\u67E5\u770B\u5B98\u65B9\u6587\u6863");function A(I,R){const e=o("RouterLink"),t=o("ExternalLinkIcon");return i(),c("div",null,[d,s("p",null,[a(e,{to:"/development.html#use-of-extract"},{default:p(()=>[k]),_:1})]),v,s("p",null,[a(e,{to:"/development.html"},{default:p(()=>[h]),_:1})]),m,_,s("ol",null,[s("li",null,[b,g,y,f,x,s("a",j,[L,a(t)])]),s("li",null,[N,V,q,B,C,s("a",E,[w,a(t)])])])])}var S=r(u,[["render",A],["__file","configure.html.vue"]]);export{S as default};
