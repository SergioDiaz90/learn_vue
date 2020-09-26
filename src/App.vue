<template>
  <div id="app">
    <header_component></header_component>
    <Slider></Slider>
    <div class="center">
      <LastArticle></LastArticle>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
  import header_component from './components/header_component'
  import Slider from './components/Slider'
  import Sidebar from './components/Sidebar'
  import LastArticle from './components/LastArticle'
  import FooterComponent from './components/FooterContent'

  export default {
    name: 'App',
    components: {
      header_component,
      Slider,
      Sidebar,
      LastArticle,
      FooterComponent,
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
