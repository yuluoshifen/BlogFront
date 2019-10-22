<template>
  <div id="app">
    <Register/>
    <!-- <Header/>
    <div class="content">
      <router-view/>
      <Sidebar/>
    </div> -->
  </div>
</template>

<script>

import Store from './storage'
import Login from './view/login'
import Register from './view/register'
import Header from './components/header'
import Sidebar from './components/sidebar'
export default {
  name: 'App',
  // data () {
  //   return {
  //     title: 'Practice Vue',
  //     html: '<span>this is a label</span>',
  //     newItem: '',
  //     items: Store.fetch(),
  //     fromNew: ''
  //   }
  // },
  // methods: {
  //   toggleColor: function (e) {
  //     e.color = !e.color
  //   },
  //   AddItem: function () {
  //     this.items.push(
  //       {
  //         label: this.newItem,
  //         color: false
  //       })
  //     this.newItem = ''
  //     this.$refs('newAddItem', this.itmes)
  //   },
  //   fromNewFunction: function (msg) {
  //     this.fromNew = msg
  //   }
  // },
  // watch: {
  //   items: {
  //     handler: function (items) {
  //       Store.save(items)
  //     },
  //     deep: true
  //   }
  // },
  components: {
    Login,
    Register,
    Header,
    Sidebar
  },
  // event: {
  //   newComponentEvent: function (msg) {
  //     this.fromNew = msg
  //   }
  // }
}
</script>