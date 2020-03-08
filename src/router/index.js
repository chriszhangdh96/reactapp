import Home from '../components/home'
import Category from '../components/category'
import Cart from '../components/cart'
import User from '../components/user'
import NotFound from '../components/notfound'
import Login from '../components/login'
import Reg from '../components/reg'
import Detail from '../components/detail'


import Shenghuo from '../components/shenghuo'
import Chufang from '../components/chufang'
import Tiaoliao from '../components/tiaoliao'
import Zibo from '../components/zibo'
import Jiushui from '../components/jiushui'
import Yinpin from '../components/yinpin'


export const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/user',
        component:User
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/reg',
        component:Reg
    },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/404',
        component:NotFound
    }
]

export const subRoutes =[
    {
        path:'/category/shenghuo',
        component:Shenghuo,
    },
    {
        path:'/category/chufang',
        component:Chufang,
    },
    {
        path:'/category/tiaoliao',
        component:Tiaoliao,
    },
    {
        path:'/category/zibo',
        component:Zibo,
    },
    {
        path:'/category/jiushui',
        component:Jiushui,
    },
    {
        path:'/category/yinpin',
        component:Yinpin,
    }
]
