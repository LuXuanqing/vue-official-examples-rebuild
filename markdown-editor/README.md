# Markdown 编辑器
参考官方示例做的DEMO，并在此基础上更改了绑定在`textarea`上的事件。使用原生的input事件代替了示例中使用的`_.debounce`(其实并不太清楚它做了什么，看起来类似于`setInterval`)
## 主要用到的知识点
- v-bind单向绑定数据
- computed处理数据
- 使用了marked.js把Markdown转换成html
- v-html
- v-on绑定事件,并使用$event传入事件
