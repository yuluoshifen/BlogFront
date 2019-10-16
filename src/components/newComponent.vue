<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="ClickMe">Click</button>
  </div>
</template>

<script>
export default {
  name: 'newComponent',
  props: ['fromApp'],
  data () {
    return {
      msg: 'lalala'
    }
  },
  methods: {
    ClickMe: function () {
      console.log(this.fromApp)
      this.$emit('newComponentEvent', this.msg)
    }
  },
  event: {
    newAddItem: function (item) {
      console.log(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    color: #42b983;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
