import index from '../pages/index.vue'
import vuejs from '../pages/vuejs.vue'
import events from '../pages/events.vue'
import register from '../pages/register.vue'
import join from '../pages/join.vue'
import music from '../pages/music.vue'
import favorites from '../pages/favorites.vue'
import auth from '../pages/auth.vue'
import live from '../pages/live.vue'



export const routes = [
    { path:'/', component: index },
    { path:'/vuejs', component: vuejs },
    { path:'/', component: live },
    { path:'/vuejs', component: auth },
    { path:'/', component: events },
    { path:'/vuejs', component: register },
    { path:'/', component: join },
    { path:'/vuejs', component: music },
    { path:'/', component: favorites }
]

