# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 第一天

### 手动新增目录结构说明
1. components里面放公共组件，其中common里面的组件可以放在其他项目，而content里面的组件只用于当前项目
2. assets里面放公共资源CSS，img
3. views里面放的是每个部分的组件，如home，category
4. router路由相关
5. store vuex状态相关
6. network网络相关
7. common公共JS文件
8. vue.config.js配置文件
9. .editorconfig 一些项目的编写规范，如缩进

### 操作
1. 引入两个css文件，base.css,normallize.css。并且导入。
2. vue.config.js里面给目录起别名


## 第二天
1. 项目的模块化划分：tabbar->路由的映射关系