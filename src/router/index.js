import { createRouter, createWebHistory } from 'vue-router'
import RootView from '../views/RootView.vue'
import CourtOfFerns from '../components/projects/CourtOfFerns.vue';
import HomeAccess from '../components/projects/HomeAccess.vue';
import Invisible from '../components/projects/Invisible.vue';
import Jokes from '../components/projects/Jokes.vue';
import Journey from '../components/projects/Journey.vue';
import Lazar from '../components/projects/Lazar.vue';
import Maquisard from '../components/projects/Maquisard.vue';
import ObjectGet from '../components/projects/ObjectGet.vue';
import TallerThan from '../components/projects/TallerThan.vue';
import TopChess from '../components/projects/TopChess.vue';
import TowerTower from '../components/projects/TowerTower.vue';
import Yellbot from '../components/projects/Yellbot.vue';
import Visual from '../components/Visual.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RootView
    },{
      path: "/projects",
      children: [
        { path: "court_of_ferns", component: CourtOfFerns },
        { path: "home_access", component: HomeAccess },
        { path: "invisible_networks", component: Invisible },
        { path: "jokes4miles", component: Jokes },
        { path: "journey", component: Journey },
        { path: "lazar", component: Lazar },
        { path: "maquisard", component: Maquisard },
        { path: "object_get", component: ObjectGet },
        { path: "taller_than_space", component: TallerThan },
        { path: "top_chess", component: TopChess },
        { path: "ttt", component: TowerTower },
        { path: "yellbot", component: Yellbot },
        { path: "visual", component: Visual}
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
