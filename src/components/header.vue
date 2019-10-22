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
          <a @click="openLogin">登录</a>
          |
          <a @click="openRegister">注册</a>
        </div>
        <div class="search">
          <input type="text" placeholder="搜索" />
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import Login from "../view/login";
import Register from "../view/register";
export default {
  name: "Header",
  data() {
    return {
      isShowLoginDialog: false,
      isShowRegisterDialog: false
    };
  },
  methods: {
    openLogin() {
      this.isShowLoginDialog = true
    },
    openRegister() {
      this.isShowRegisterDialog = true
    }
  },
  watch: {
    $route(to, from) {
      console.log(to.meta.title);
    }
  },
  components: {
    Login,
    Register
  }
};
</script>

<style>
.is-active {
  background-color: rgba(0, 0, 0, 0.03);
  color: #409eff;
}
</style>