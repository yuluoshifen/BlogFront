<template>
  <div class="user">
    <h1>修改密码</h1>
    <div class="u_module">
        <div class="u_item">
            <label for="password">密码</label>
            <div class="fill_all"><i class="fa fa-key"></i><input type="password" class="fill"></div>
        </div>
        <div class="u_tip">请输入长度不超过16的密码</div>
    </div>
    <div class="u_module">
        <div class="u_item">
            <label for="comfirm_password">确认密码</label>
            <div class="fill_all"><i class="fa fa-key"></i><input type="password" class="fill"></div>
        </div>
        <div class="u_tip">请再次输入上面的密码</div>
    </div>
    <div class="u_button">
        <button>修改</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Password',
//   components: {
//     Article
//   }
}
</script>