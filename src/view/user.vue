<template>
  <div class="user">
    <h1>个人主页</h1>
    <div class="u_module">
        <div class="u_item">
            <label for="text">用户名</label>
            <div class="fill_all"><i class="fa fa-user-circle"></i><input type="text" class="fill"></div>
        </div>
        <div class="u_tip">请输入25字以内的用户名</div>
    </div>
    <div class="u_module">
        <div class="u_item">
            <label for="email">邮箱</label>
            <div class="fill_all"><i class="fa fa-envelope"></i><input type="email" class="fill"></div>
        </div>
        <div class="u_tip">如：name@website.com</div>
    </div>
    <div class="u_module">
        <div class="u_item">
            <label for="avatar">头像</label>
            <div class="fill_all"><input type="file"></div>
        </div>
        <div class="u_tip">请上传正常的头像</div>
    </div>
    <div class="u_button">
        <button>修改</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
//   components: {
//     Article
//   }
}
</script>