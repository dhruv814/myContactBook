<template>
  <div id="app">
    <div id="nav">
      <h1>My Contact Book</h1>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |-->
      <div v-if="!isLoggedIn">
        <router-link to="/login">Login</router-link>|
        <router-link to="/register">Register</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
// import { mapState, mapActions } from 'vuex'
import messageService from "./service/message.service.js";
import router from "./router"

export default {
  name: "app",
  data() {
    return {
      isLoggedIn:false
    };
  },
  computed: {
    
    // ...mapState({
    //     alert: state => state.alert
    // })
  },
  created() {

  },
  methods: {
    // ...mapActions({
    //     clearAlert: 'alert/clear'
    // })
  },
  watch: {
  
    $route (to, from){
      this.isLoggedIn=(localStorage.getItem('user')=='true');
    }
    
  }
};
</script>
