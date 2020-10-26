import Vue from 'vue';
import Router from 'vue-router';

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'
import ForgetPassword from '@/views/auth/ForgetPassword'
import ResetPassword from '@/views/auth/ResetPassword'

import Dashboard from '@/views/app/Dashboard'

import ListBootcamp from '@/views/app/bootcamps/ListBootcamp'
import Bootcamp from '@/views/app/bootcamps/Bootcamp'
import AddBootcamp from '@/views/app/bootcamps/AddBootcamp'
import EditBootcamp from '@/views/app/bootcamps/EditBootcamp'

import Home from '@/views/Home'

Vue.use(Router)


function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
  }
  
const routes=[
    {
        path: '/',
        name: 'home',
        components:{
            default:Home,
            header:Header,
            footer:Footer
        } 
    },
    {
        path: '/login',
        name: 'login',
        components:{
            default:Login,
            header:Header,
            footer:Footer
        } 
    },
    {
        path: '/register',
        name: 'register',
        components:{
            default:Register,
            header:Header,
            footer:Footer
        } 
    },
    {
        path: '/forget-password',
        name: 'forget-password',
        components:{
            default:loadView(`auth/${ForgetPassword}`),
            header:Header,
            footer:Footer
        } 
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        components:{
            default:loadView(`auth/${ResetPassword}`),
            header:Header,
            footer:Footer
        } 
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        components:{
            default:Dashboard,
            sidebar:Sidebar
        } 
    },
    {
        path: '/bootcamps',
        name: 'bootcamps',
        components:
        {
            default:ListBootcamp,
            sidebar:Sidebar
        }, 
        children: [
            {
                path: ':id(\\d+)',
                name: 'bootcamp',
                component:Bootcamp
            },
            {
                path: 'add',
                name: 'add-bootcamp',
                component:AddBootcamp
            },
            {
                path: 'edit',
                name: 'edit-bootcamp',
                component:EditBootcamp
            }

        ],
    },
    {
        path: '*',
        redirect: '/'
    }
    
]

const router = new Router({
    mode: 'history',
    routes
})


export default router