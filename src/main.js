import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue';
import Rec from './components/Rec.vue';
import Blog from './components/Blog.vue';
import Login from './components/Login.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/rec',
      name: 'Rec',
      component: Rec,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ]
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


