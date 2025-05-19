# 如何在 react 项目中配置快速生成模版代码

## 在线配置网站

https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode

## 配置文件位置

在 vscode 中，配置文件位置在：设置->用户片段->typescriptreact.json, 你可以在里面配置你的代码片段。

## 配置的代码片段

```json
{
  // Place your snippets for typescriptreact here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  "Print to console": {
    "prefix": "loga",
    "body": ["console.log('$1');", "$2"],
    "description": "Log output to console"
  },
  "react ts": {
    "prefix": "treact",
    "body": [
      "import React,{memo} from \"react\"; ",
      "interface IProps {",
      "   children? : React.ReactNode;",
      "}",
      "const ${1:Home}:React.FC<IProps> = () =>  {",
      "  return(",
      "     <div>",
      "        <div>${1:Home}</div>",
      "     </div>",
      "  )",
      "}",
      "export default memo(${1:Home});"
    ],
    "description": "react ts"
  }
}
```

## 生效效果

```js
// 输入 treact 然后回车
import React, { memo } from "react";
interface IProps {
  children?: React.ReactNode;
}
const Home: React.FC<IProps> = () => {
  return (
    <div>
      <div>Home</div>
    </div>
  );
};
export default memo(Home);
```
