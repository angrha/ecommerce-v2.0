<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    ...mapActions([
      'checkLogin'
    ])
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>
body {
  background-image: url('./assets/pencil.jpg');
  background-size:  cover;
  background-attachment: fixed;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
