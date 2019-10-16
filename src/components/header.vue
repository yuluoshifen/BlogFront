<template>
  <div class="hello">
    <div>
      <div class="nav">
        <ul>
          <li>
            <a href="#">
              <img src="../image/logo.png" alt />
            </a>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
