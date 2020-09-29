import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import LastArticle from './components/LastArticle'
import blog from './components/Blog'
import Formulario from './components/Formulario'
import Pagina from './components/Pagina'
import ErrorComponent from './components/ErrorComponent'
import myfirstcomponent from './components/myfirstcomponent'
import Peliculas from './components/Peliculas'

Vue.config.productionTip = false

Vue.use(vueRouter);

const routes = [
  {'path': '/home', component: LastArticle},
  {'path': '/last-article', component: LastArticle},
  {'path': '/my-components', component: LastArticle},
  {'path': '/', component: LastArticle},
  {'path': '/blog', component: blog},
  {'path': '/formulario', component: Formulario},
  {'path': '/pagina/:id?', name: 'Pagina', component: Pagina},
  {'path': '*', component: ErrorComponent},
  {'path': '/myfirstcomponent', component: myfirstcomponent},
  {'path': '/peliculas', component: Peliculas}
];

const router = new vueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
