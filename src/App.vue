<template>
  <div id="app">
    <router-view/>
    <Header/>
    <div class="content">
      <!-- <Bread/> -->
      <Article/>
      <!-- <Info/> -->
      <Sidebar/>
    </div>
  </div>
</template>

<script>

import Store from './storage'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Bread from './components/bread'
import Article from './view/article'
import Info from './view/info'
export default {
  name: 'App',
  data () {
    return {
      title: 'Practice Vue',
      html: '<span>this is a label</span>',
      newItem: '',
      items: Store.fetch(),
      fromNew: ''
    }
  },
  methods: {
    toggleColor: function (e) {
      e.color = !e.color
    },
    AddItem: function () {
      this.items.push(
        {
          label: this.newItem,
          color: false
        })
      this.newItem = ''
      this.$refs('newAddItem', this.itmes)
    },
    fromNewFunction: function (msg) {
      this.fromNew = msg
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  },
  components: {
    Header,
    Sidebar,
    Bread,
    Article,
    Info
  },
  event: {
    newComponentEvent: function (msg) {
      this.fromNew = msg
    }
  }
}
</script>

<style>

</style>
