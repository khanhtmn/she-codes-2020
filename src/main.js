import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue';
import Rec from './components/Rec.vue';

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
    }
  ]
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


