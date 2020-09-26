<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <myfirstcomponent></myfirstcomponent>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import myfirstcomponent from './components/myfirstcomponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    myfirstcomponent
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
@import './assets/css/styles.css';
</style>
