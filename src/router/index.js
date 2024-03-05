import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
        path:"/home",
        component:()=> import('../views/Home.vue')
       }, 
       {
        path:"/:patchMatch(.*)",
        name:'NotFound',
        component:()=> import('../views/NotFound.vue')
       }, 
       {
        path:"/pokeapi",
        name:'PokeApi',
        component:()=> import('../components/PokeApi.vue')
       },

    ]
});
export default router;
