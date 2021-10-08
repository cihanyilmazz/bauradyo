import Vue from 'vue'
import VueRouter from 'vue-router'
import Anasayfa from '../views/Anasayfa.vue'
import YayinAkisi from '../views/YayinAkisi.vue'
import Podcast from '../views/Podcast.vue'
import Haberler from '../views/Haberler.vue'
import Iletisim from '../views/Iletisim.vue'
import HaberDetay from '../views/HaberDetay.vue'
import GizlilikSozlesmesi from '../views/GizlilikSozlesmesi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/anasayfa',
    name: 'Anasayfa',
    component: Anasayfa
  },
  {
    path: '/yayin-akisi',
    name: 'YayinAkisi',
    component: YayinAkisi
  },
  {
    path: '/podcast',
    name: 'Podcast',
    component: Podcast
  },
  {
    path: '/haberler',
    name: 'Haberler',
    component: Haberler
  },
  {
    path: '/haber-detay',
    name: 'HaberDetay',
    component: HaberDetay
  },
  {
    path: '/iletisim',
    name: 'Iletisim',
    component: Iletisim
  },
  {
    path: '/gizlilik-sozlesmesi',
    name: 'gizlilik-sozlesmesi',
    component: GizlilikSozlesmesi
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
