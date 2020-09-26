<template>
  <div id="app">
    <header_component></header_component>
  </div>
</template>

<script>
import header_component from './components/header_component'

export default {
  name: 'App',
  components: {
    header_component,
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
