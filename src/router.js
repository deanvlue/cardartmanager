/* eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Login from './components/Login.vue'
import Secure from './components/Secure.vue'

import Home from './components/HelloWorld.vue'

Vue.use(Router)

let router = new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login

        },
        {
            path: '/secure',
            name:'secure',
            component: Secure,
            meta:{
                requiresAuth: true
            }
        },
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.matched.some(record=> record.meta.requiresAuth)){
        if(store.getters.isLoggedIn){
            //console.log("esta logueado?")
            next()
            return
        }
        //console.log("nel pafuera")
        next('/login')
    }else{
        next()
    }
})

export default router