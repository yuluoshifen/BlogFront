<template>
  <div class="hello">
    <div class="top">
      <div class="nav">
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
      </div>
    </div>
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