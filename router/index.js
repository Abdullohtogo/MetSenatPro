import {createRouter, createWebHistory} from "vue-router";

const routes=[
    {
        path:'/',
        name:'Home',
        component:()=>import('../pages/index.vue')
    },

    {
        path:'/login',
        name:'login',
        component:()=>import('../pages/login.vue')
    },
    {
        path:'/customer',
        name:'customer',
        component:()=>import('../pages/customer.vue')
    },
    {
        path:'/addstudents',
        name:'addstudents',
        component:()=>import('../pages/addstudents.vue')
    },
    {
        path:'/student',
        name:'student',
        component:()=> import('../pages/student.vue')
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;
