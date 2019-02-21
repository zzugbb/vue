<template>
  <div id="app">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
}

ul, li, ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* iconfont */
[class*=" my-icon-"], [class^=my-icon-] {
  font-family:"iconfont";
  font-size: inherit;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
