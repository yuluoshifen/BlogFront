<template>
  <div class="bread">
    <p>
      <a href="#"><i class="fa fa-home"></i>首页</a> » <a href="#">{{sort}}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Bread",
  data() {
    return {
      sort: this.$route.meta.title
    };
  }
};
</script>