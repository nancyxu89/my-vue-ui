/** @format */

import Vue from 'vue'
import Router from 'vue-router'
// import App from './App.vue'
import Layout from './views/Layout.vue'
import Home from './views/Home.vue'
import Header from './components/header.vue'
import Drag from './views/Drag.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'layout',
			component: Layout,
			children: [
				{
					path: '',
					component: Home
				},
				{
					path: 'drag',
					name: 'Drag',
					component: Drag
				},
				{
					path: 'about',
					name: 'about',
					component: () => import('./views/About.vue')
				}
			]
		},
		{
			path: '/header',
			name: 'header',
			component: Header
		}
		// 	{
		// 		path: '/about',
		// 		name: 'about',
		// 		// route level code-splitting
		// 		// this generates a separate chunk (about.[hash].js) for this route
		// 		// which is lazy-loaded when the route is visited.
		// 		component: () =>
		// 			import(/* webpackChunkName: "about" */ './views/About.vue')
		// 	}
	]
})
