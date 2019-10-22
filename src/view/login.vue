<template>
  <div class="login" v-if="showLogin">
    <div class="login_inside">
      <div class="l_login_text">
        <h2>登录</h2>
      </div>
      <form action>
        <div class="l_module">
          <label for="email">邮箱</label>
          <div>
            <i class="fa fa-envelope"></i>
            <input type="email" />
          </div>
        </div>
        <div class="l_module">
          <label for="password">密码</label>
          <div>
            <i class="fa fa-key"></i>
            <input type="password" />
          </div>
        </div>
        <div class="l_module" style="line-height: 70px">
          <button>登录</button>
        </div>
      </form>
      <div class="l_commit">
        <a href="#">忘记密码</a>
        |
        <a href="#">立即注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    isShowLoginDialog: {
      type: Boolean,
      default: false
    }
  }
  //   components: {
  //     Article
  //   }
};
</script>