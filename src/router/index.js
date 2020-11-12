import Vue from 'vue';
import Router from 'vue-router';
import i18n from '@/i18n'

import AppContainer from '@/components/AppContainer'
import Wrapper from '@/components/Wrapper'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import AppHeader from '@/components/AppHeader'

import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'

import Dashboard from '@/views/app/Dashboard'

import ListBootcamp from '@/views/app/bootcamps/ListBootcamp'
import Bootcamp from '@/views/app/bootcamps/Bootcamp'
import AddBootcamp from '@/views/app/bootcamps/AddBootcamp'
import EditBootcamp from '@/views/app/bootcamps/EditBootcamp'

import Home from '@/views/Home'
import About from '@/views/About'
import NotFound from '@/views/NotFound'
import Contact from '@/views/Contact'
import Pricing from '@/views/Pricing'

Vue.use(Router)

function lazyLoadComponent(componentPath) 
{
    return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${componentPath}.vue`)
}
  
const routes=[    
    {
        path: '/:lang',
        //component: {render (c) { return c('router-view') }},
        component:AppContainer,
        children:[
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
                path: 'about',
                name: 'about',
                components:{
                    default:About,
                    header:Header,
                    footer:Footer
                } 
            },
            {
                path: 'pricing',
                name: 'pricing',
                components:{
                    default:Pricing,
                    header:Header,
                    footer:Footer
                } 
            },
            {
                path: 'contact',
                name: 'contact',
                components:{
                    default:Contact,
                    header:Header,
                    footer:Footer
                } 
            },
            {
                path: 'login',
                name: 'login',
                components:{
                    default:Login
                } 
            },
            {
                path: 'register',
                name: 'register',
                components:{
                    default:Register
                } 
            },
            {
                path: 'forget-password',
                name: 'forget-password',
                components:{
                    default: lazyLoadComponent(`auth/ForgetPassword`),
                    header:Header,
                    footer:Footer
                } 
            },
            {
                path: 'reset-password',
                name: 'reset-password',
                components:{
                    default:lazyLoadComponent(`auth/ResetPassword`),
                    header:Header,
                    footer:Footer
                } 
            },
            {
                path: 'app',
                name: 'app',
                component:Wrapper,
                //meta: { requiresAuth: true },
                children:[
                    {
                        path: 'dashboard',
                        name: 'dashboard',
                        components:{
                            default:Dashboard,
                            sidebar:Sidebar,
                            header:AppHeader
                        }
                    },
                    {
                        path: 'bootcamps',
                        name: 'bootcamps',
                        components:
                        {
                            default:ListBootcamp
                        }, 
                        children: [
                            {
                                path: ':id(\\d+)',
                                name: 'bootcamp',
                                props: to => ({id: Number(to.params.id)}),
                                component:Bootcamp
                            },
                            {
                                path: 'add',
                                name: 'add-bootcamp',
                                component:AddBootcamp,
                                beforeEnter: (to, from, next) => authRoute(to, from, next,['ADMIN','PUBLISHER'])
                            },
                            {
                                path: 'edit',
                                name: 'edit-bootcamp',
                                component:EditBootcamp,
                                beforeEnter: (to, from, next) => authRoute(to, from, next,['ADMIN','PUBLISHER'])
                            }
                        ],
                    },
                ]
            },
        ]
    },
    {
        path: '/error',
        components: {
            default:NotFound,
            header:Header,
            footer:Footer
        } 
    },
    {
        path: '*',
        redirect: `/${i18n.locale}`
    }
]

const router = new Router({
    mode: 'history',
    routes,
    /***
     * savedPosition available only when we use popstate
     * back and next button of browser
     */
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
})

var authRoute=(to,from, next,authType=[])=>{
    let typeUser=localStorage.getItem('dc-type');
    if (authType.includes(typeUser)){
        next();
    }
    else
    {
        next(false)
    }
}

router.beforeEach((to, from, next) => {
    // use the language from the routing param or default language
    let language = to.params.lang;
    if (!language) 
    {
      language = 'fr'
    }
    // set the current language for i18n.
    i18n.locale = language
    
    let token=localStorage.getItem('dc-token');
    if(!token && to.path.indexOf('app')!=0)
    {
        next({path:'/fr/'})
    }

    next()

})
  
export default router