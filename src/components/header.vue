<template>
  <div class="header">
    <header>
      <nav class="nav">
        <div class="logo">
          <a href="#">
            <img src="../image/logo.png" alt />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">首页</a>
          </li>
          <li>
            <a href="#">学习心得</a>
          </li>
          <li>
            <a href="#">生活随笔</a>
          </li>
          <li>
            <a href="#">游玩攻略</a>
          </li>
          <li>
            <a href="#">畅所欲言</a>
          </li>
        </ul>
        <div class="search">
          <input type="text" placeholder="搜索">
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data( ) {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2: 'Welcome to My Vue'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
