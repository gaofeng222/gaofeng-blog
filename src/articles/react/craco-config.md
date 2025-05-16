---
layout: doc
lastUpdated: true
---

有人也许会说，都有摩托车了，谁还要自行车？目前,`vite`就像是摩托车，甚至是跑车了，性能强大，配置简单。但是，cra 的`eject`命令，就像是自行车。虽然配置复杂，但是可以让你深入了解底层原理，并且可以自定义很多东西。

[[toc]]

::: danger 注意事项
我们在使用 cra 进行项目工程的构造的时候，会发现我们要修改 webpack 的配置，但是 cra 默认是不允许我们直接修改 webpack 的配置文件的。怎么办呢？

这个时候，我们需要安装一个第三方的插件，@craco/craco 来帮助我们修改 webpack 的配置。

这种不侵入的方式，可以让我们在不破坏原有项目结构的情况下，修改 webpack 的配置。

就不用使用 eject 命令了。:tada: :smiley:

:::

## 使用 cra 新建工程项目

`--template`参数可以指定模板类型，比如 `typescript`。不使用的话，默认是 `javascript`。

```bash
npx create-react-app gf-wy-music --template typescript
cd my-app
npm start
```

## @craco/craoc 的安装

```bash
npm install @craco/craco --save-dev
```

## 新建配置文件

在项目根目录下新建一个 `craco.config.js` 文件，在里面编写 webpack 的配置。

```js
/* craco.config.js */
const path = require("path");
module.exports = {
  // 配置别名
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"), // [!code focus]
      "@a": path.resolve(__dirname, "src/assets"), // [!code focus]
      "@c": path.resolve(__dirname, "src/components"), // [!code focus]
      "@v": path.resolve(__dirname, "src/views"), // [!code focus]
    },
    // 省略文件扩展名s
    configure: {
      resolve: {
        extensions: [".js", ".jsx", ".json", ".css", "tsx"], // [!code focus]
      },
    },
    // 配置公共路径
    publicPath:
      process.env.NODE_ENV === "production" // [!code focus]
        ? "/gf-wy-music/ // [!code focus]"
        : "./",
  },
  style: {
    // 配置scss
    sass: {
      loaderOptions: {
        // 修改全局变量
        additionalData: `@use "@a/styles/variables.scss" as *;`, // [!code focus]
        // prependData: `$content-width: 100%;` // 定义全局变量
      },
    },
    postcss: {
      //   plugins: [require('tailwindcss'), require('autoprefixer')]
    },
  },
};
```

## TS 项目配置项目别名的使用

如果项目是使用 ts，在我们进行组件或其他资源进行`import`的时候，省略文件扩展名，ts 是为暴红的。那么在配置别名的时候，需要在 `tsconfig.json` 使用 `paths` 字段。

```js
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "./", //[!code focus]
    "paths": {
      "@/*": ["./src/*"] //[!code focus]
    }
  },
  "include": ["src"]
```
