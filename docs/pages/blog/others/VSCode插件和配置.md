# VSCode 插件和配置

<br/>

> vscode 是一款非常好的编辑器, 它的好很大一部分取决于丰富的插件库, 由于安装的插件比较多, 配置也比较多(个人喜欢瞎弄), 这里做一个插件和配置的备份, 纯粹个人配置, 做个参考

### 插件

- **Auto Close Tag**

  自动闭合 HTML 标签

- **Better Comments**

  注释插件

- **Bracket Pair Colorizer**

  允许使用颜色标识匹配的括号

- **Chinese (Simplified) Language Pack for Visual Studio Code**

  适用于 VS Code 的中文（简体）语言包

- **Code Runner**

  运行代码片段（需要指定运行语言使用`Ctrl + Alt + J`）

- **Debugger for Chrome**

  用于在 Google Chrome 浏览器或支持 Chrome DevTools 协议的其他目标中调试 JavaScript 代码的 VS Code 扩展

- **ESLint**

  提高代码可读性、统一性，适合协作开发

- **GitLens — Git supercharged**

  增强 Visual Studio 代码内置的 Git 功能

- **language-stylus**

  支持 stylus 高亮

- **Markdown Preview Enhanced**

  Markdown 预览

- **npm**

  支持运行文件中定义的 npm 脚本 package.json 并根据定义的依赖项验证已安装的模块。

- **npm Intellisense**

  在 import 语句中自动填充 npm 模块

- **Panda Theme**

  熊猫主题

- **Path Intellisense**

  自动填充文件名

- **Prettier - Code formatter**

  美化 javascript，JSON，CSS，Sass，和 HTML 在 Visual Studio 代码

- **Sass**

  scss 插件

- **Vetur**

  vue 工具

- **vscode-icons**

  icon 插件

- **Vue 2 Snippets**

  vue 2.x 语法提示

- **React-Native/React/Redux snippets for es6/es7**

  react 语法插件

### 配置 (setting.json)

```json
{
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.lineHeight": 26,
  "editor.fontFamily": "Monaco, 苹方-简",
  "editor.letterSpacing": 0.5,
  "editor.fontSize": 16,
  "editor.minimap.renderCharacters": false,
  "files.autoSave": "onFocusChange",
  "files.insertFinalNewline": true,
  "workbench.settings.editor": "json",
  "workbench.iconTheme": "vscode-icons",
  "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
  "workbench.colorTheme": "Panda Syntax",
  // git 树状显示
  "gitlens.views.repositories.files.layout": "tree",
  // 在命令行运行code runner
  "code-runner.runInTerminal": true,
  "vetur.validation.template": false,
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.mpx": "vue" // mpx文件关联到vue文件
  },
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "aligned-multiple"
    },
    "prettyhtml": {
      "printWidth": 120, // No line exceeds 100 characters
      "singleQuote": false, // Prefer double quotes over single quotes
      "wrapAttributes": true,
      "sortAttributes": false
    },
    "prettier": {
      // Prettier option here
      "semi": false, //  #去掉代码结尾的分号 
      "singleQuote": true, //  #使用单引号替代双引号 
      "eslintIntegration": true //  #让prettier使用eslint的代码格式进行校验 
    }
  },
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue"
  ],
  "prettier.printWidth": 120,
  // 在jsx中把'>' 是否单独放一行
  "prettier.jsxBracketSameLine": false,
  // 在jsx中使用单引号代替双引号
  "prettier.jsxSingleQuote": false,
  // jsx自动修复有问题，取消js的format
  "editor.formatOnSave": false,
  // Enable/disable default JavaScript formatter (For Prettier)
  "javascript.format.enable": false,
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  // 自动格式化
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.tabWidth": 2,
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // 页面报错信息提醒
  "eslint.options": {
    "parserOptions": {
      "ecmaVersion": 7, // 允许使用 es7 语法
      "sourceType": "module", // 使用 module/import 导入导出
      "ecmaFeatures": { // 添加ES特性支持，使之能够识别ES6语法
        "jsx": true
      }
    },
    "rules": {
      "func-names": 0, //函数表达式必须有名字
      "no-restricted-syntax": 0, // 禁止使用for in for of语法
      "no-plusplus": 0, // 禁止使用++，--
      "no-multi-spaces": 1, //不能用多余的空格
      "no-underscore-dangle": [
        "off",
        "always"
      ], // 1, 标识符不能以_开头或结尾
      "consistent-return": 0, //return 后面是否允许省略
      "comma-spacing": 2, //逗号前后的空格
      "comma-dangle": [
        2,
        "never"
      ], //对象字面量项尾不能有逗号
      "key-spacing": 2, //对象字面量中冒号的前后空格
      "array-bracket-spacing": [
        "error",
        "always"
      ], // 数组前后空格
      "camelcase": 0, // 2 强制驼峰法命名
      "no-prototype-builtins": 0, //禁止直接调用 Object.prototypes 的内置属性
      "no-mixed-operators": 0, // 禁止混合使用不同的操作符
      "one-var": 0, //禁止使用连续声明
      "no-var": 2, //禁用var，用let和const代替
      "no-bitwise": 0, //禁止使用按位运算符
      "no-restricted-globals": 0, // 禁用特定的全局变量
      "no-multi-assign": 0, // 禁止连续赋值
      "no-useless-escape": 0, // 禁用不必要的转义字符
      "max-len": [
        0,
        100,
        4
      ], //字符串最大长度
      "import/prefer-default-export": 0,
      "one-var-declaration-per-line": 0, //要求或禁止在变量声明周围换行
      "prefer-const": 0,
      "dot-location": 0, //对象访问符的位置，换行的时候在行首还是行尾
      "react-hooks/exhaustive-deps": 0, // 禁止检查 Hook 的规则
    }
  }
  // -------------------------- 分割线 -------------------------------
}
```

### 主题

上面的配置文件里有--- [Panda Syntax](https://marketplace.visualstudio.com/items?itemName=tinkertrain.theme-panda)，如图：

![](../images/vscode-theme.png)

<Vssue :title="$title" />
