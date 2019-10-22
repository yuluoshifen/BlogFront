<template>
  <div class="login">
    <div class="l_login_text">
        <h2>注册</h2>
    </div>
    <form action="">
        <div class="l_module">
            <label for="text">用户名</label>
            <div><i class="fa fa-user-circle"></i><input type="text"></div>
        </div>
        <div class="l_module">
            <label for="email">邮箱</label>
            <div><i class="fa fa-envelope"></i><input type="email"></div>
        </div>
        <div class="l_module" style="line-height: 70px">
            <button>注册</button>
        </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Register',
//   components: {
//     Article
//   }
}
</script>