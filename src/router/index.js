import { createRouter, createWebHistory } from 'vue-router'
import Search from '../views/Search.vue'
import Filter from '../views/Filter.vue'
import Id from '../views/Id.vue'
import Sede from '../views/Sede.vue'
import Configure from '../views/Configure.vue'


const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: Search,
            component: Search,
            meta: {
                title: 'Search'
            }
        },
        {
            path: '/filter',
            name: Filter,
            component: Filter,
            meta: {
                title: 'Filter'
            }
        },
        {
            path: '/id',
            name: Id,
            component: Id,
            meta: {
                title: 'Id'
            }
        },
        {
            path: '/sede',
            name: Sede,
            component: Sede,
            meta: {
                title: 'Sede'
            }
        },
        {
            path: '/configure',
            name: Configure,
            component: Configure,
            meta: {
                title: 'Configure'
            }
        }
    ]
})

router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title = toRoute.meta && toRoute.meta.title;
  
    next();
  })
  
export default router
