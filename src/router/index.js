import Vue from 'vue'
import Router from 'vue-router'

import Blog from  '../views/blog'
import Detail from '../components/blog/detail'
import BlogList from '../components/blog/list'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'context',
            redirect:'/index',
        },
        {
            path: '/index',
            name: 'Blog',
            component: Blog,
            hidden: true,
            children: [
                {
                    path: '/',
                    name: 'BlogList',
                    component: BlogList,
                },
                {
                    path: '/detail/:id',
                    name: 'Detail',
                    component: Detail,
                }
            ]
        }

    ]
})
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }