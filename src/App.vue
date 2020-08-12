<template>
  <div id="app">
    <Nav/>
    <b-container>
      <router-view/>
    </b-container>
    <Login/>
    <Register/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Login from '@/components/Login'
import Register from '@/components/Register'

export default {
  components: {
    Nav,
    Login,
    Register
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
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
