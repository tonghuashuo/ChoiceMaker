<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Open Sans", "Droid Sans", "Microsoft YaHei", "WenQuanYi Micro Hei", "Helvetica Neue", Tahoma, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

main {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 15px;
}
</style>
