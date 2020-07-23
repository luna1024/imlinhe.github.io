(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{480:function(t,s,n){"use strict";n.r(s);var a=n(27),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"eslint-配置项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eslint-配置项"}},[t._v("#")]),t._v(" ESLint 配置项")]),t._v(" "),n("blockquote",[n("p",[t._v("ESLint 规则配置可在 "),n("a",{attrs:{href:"https://cn.eslint.org/docs/rules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint中文网"),n("OutboundLink")],1),t._v(" 查看。")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * ESLint的JSON文件是允许JavaScript注释的，但在gist里显示效果不好，所以我把.json文件后缀改为了.js\n */")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * ESLint 配置文件优先级：\n * .eslintrc.js(输出一个配置对象)\n * .eslintrc.yaml\n * .eslintrc.yml\n * .eslintrc.json（ESLint的JSON文件允许JavaScript风格的注释）\n * .eslintrc（可以是JSON也可以是YAML）\n *  package.json（在package.json里创建一个eslintConfig属性，在那里定义你的配置）\n */")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * 你可以通过在项目根目录创建一个.eslintignore文件告诉ESLint去忽略特定的文件和目录\n * .eslintignore文件是一个纯文本文件，其中的每一行都是一个glob模式表明哪些路径应该忽略检测\n */")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ESLint默认使用Espree作为其解析器")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//同时babel-eslint也是用得最多的解析器")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parser"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"espree"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//parser解析代码时的参数")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parserOption"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定要使用的ECMAScript版本，默认值5")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecmaVersion"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置为script(默认)或module（如果你的代码是ECMAScript模块)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sourceType"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这是个对象，表示你想使用的额外的语言特性,所有选项默认都是false")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecmafeatures"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//允许在全局作用域下使用return语句")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"globalReturn"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//启用全局strict模式（严格模式）")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"impliedStrict"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//启用JSX")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsx"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//启用对实验性的objectRest/spreadProperties的支持")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"experimentalObjectRestSpread"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定环境，每个环境都有自己预定义的全局变量，可以同时指定多个环境，不矛盾")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//效果同配置项ecmaVersion一样")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es6"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browser"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commonjs"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mocha"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jquery"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果你想使用来自某个插件的环境时，确保在plugins数组里指定插件名")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//格式为：插件名/环境名称（插件名不带前缀）")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react/node"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定环境为我们提供了预置的全局变量")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对于那些我们自定义的全局变量，可以用globals指定")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置每个变量等于true允许变量被重写，或false不允许被重写")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"globals"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"globalVar1"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"globalVar2"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ESLint支持使用第三方插件")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在使用插件之前，你必须使用npm安装它")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全局安装的ESLint只能使用全局安装的插件")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//本地安装的ESLint不仅可以使用本地安装的插件还可以使用全局安装的插件")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//plugin与extend的区别：extend提供的是eslint现有规则的一系列预设")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//而plugin则提供了除预设之外的自定义规则，当你在eslint的规则里找不到合适的的时候")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//就可以借用插件来实现了")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugins"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint-plugin-airbnb"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//插件名称可以省略eslint-plugin-前缀")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//具体规则配置")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//off或0--关闭规则")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//warn或1--开启规则，警告级别(不会导致程序退出)")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//error或2--开启规则，错误级别(当被触发的时候，程序会退出)")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eqeqeq"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warn"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//你也可以使用对应的数字定义规则严重程度")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curly"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果某条规则有额外的选项，你可以使用数组字面量指定它们")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//选项可以是字符串，也可以是对象")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quotes"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"double"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one-var"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"var"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"let"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"never"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"const"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"never"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//配置插件提供的自定义规则的时候，格式为：不带前缀插件名/规则ID")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react/curly"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ESLint支持在配置文件添加共享设置")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//你可以添加settings对象到配置文件，它将提供给每一个将被执行的规则")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果你想添加的自定义规则而且使它们可以访问到相同的信息，这将会很有用，并且很容易配置")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sharedData"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Eslint检测配置文件步骤：")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.在要检测的文件同一目录里寻找.eslintrc.*和package.json")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.紧接着在父级目录里寻找，一直到文件系统的根目录")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3.如果在前两步发现有root：true的配置，停止在父级目录中寻找.eslintrc")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4.如果以上步骤都没有找到，则回退到用户主目录~/.eslintrc中自定义的默认配置")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//extends属性值可以是一个字符串或字符串数组")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数组中每个配置项继承它前面的配置")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可选的配置项如下")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.字符串eslint：recommended，该配置项启用一系列核心规则，这些规则报告一些常见问题，即在(规则页面)中打勾的规则")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.一个可以输出配置对象的可共享配置包，如eslint-config-standard")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可共享配置包是一个导出配置对象的简单的npm包，包名称以eslint-config-开头，使用前要安装")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//extends属性值可以省略包名的前缀eslint-config-")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3.一个输出配置规则的插件包，如eslint-plugin-react")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一些插件也可以输出一个或多个命名的配置")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//extends属性值为，plugin：包名/配置名称")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4.一个指向配置文件的相对路径或绝对路径")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5.字符串eslint：all，启用当前安装的ESLint中所有的核心规则")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该配置不推荐在产品中使用，因为它随着ESLint版本进行更改。使用的话，请自己承担风险")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"standard"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:react/recommended"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./node_modules/coding-standard/.eslintrc-es6"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:all"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);