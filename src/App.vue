<template>
  <div id="app">
    <Dialog>
      <Login v-if="openLogin" />
      <Register v-if="openRegister" />
    </Dialog>
    <Header v-on:openDialog="open" />
    <div class="content">
      <!-- <router-view /> -->
      <User />
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Store from "./storage";
import Dialog from "./components/dialog";
import Login from "./view/login";
import Register from "./view/register";
import User from "./view/user";
import Password from "./view/password";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
export default {
  name: "App",
  data() {
    return {
      openLogin: false,
      openRegister: false,
      title: "Practice Vue",
      html: "<span>this is a label</span>",
      newItem: "",
      items: Store.fetch(),
      fromNew: ""
    };
  },
  methods: {
    open: function(openDialog) {
      if (openDialog == "login") {
        this.openLogin = true;
      }

      if (openDialog == "register") {
        this.openRegister = true;
      }
    },
    AddItem: function() {
      this.items.push({
        label: this.newItem,
        color: false
      });
      this.newItem = "";
      this.$refs("newAddItem", this.itmes);
    },
    fromNewFunction: function(msg) {
      this.fromNew = msg;
    }
  },
  watch: {
    toggleColor: function(e) {
      e.color = !e.color;
    },
    items: {
      handler: function(items) {
        Store.save(items);
      },
      deep: true
    }
  },
  components: {
    Dialog,
    Login,
    Register,
    User,
    Password,
    Header,
    Sidebar
  }
  // event: {
  //   newComponentEvent: function (msg) {
  //     this.fromNew = msg
  //   }
  // }
};
</script>