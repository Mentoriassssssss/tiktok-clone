import Home from '../pages/home'
import Following from '../pages/following'

const publicRoutes = [
    {path:'/', component: Home},
    {path:'/following', component: Following},
]

const privateRoutes = [
]

export {publicRoutes, privateRoutes}