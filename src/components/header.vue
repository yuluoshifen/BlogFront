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
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/study">学习心得</router-link>
          </li>
          <li>
            <router-link to="/life">生活随笔</router-link>
          </li>
          <li>
            <router-link to="/play">游玩攻略</router-link>
          </li>
          <li>
            <router-link to="/message">畅所欲言</router-link>
          </li>
        </ul>
        <div class="about_user">
          <a>登录</a>
          |
          <a>注册</a>
        </div>
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

  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2: 'Welcome to My Vue'
    };
  },

  watch: {
    $route (to, from) {
      console.log(to.meta.title)
    }
  }
};
</script>

<style>
  .is-active {
    background-color: rgba(0,0,0,0.03);
    color: #409eff;
  }
</style>