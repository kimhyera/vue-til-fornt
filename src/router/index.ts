import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		component: () => import('@/views/til/LoginPage.vue'),
	},
	{
		path: '/signup',
		component: () => import('@/views/til/SignupPage.vue'),
	},
	{
		path: '/main',
		component: () => import('@/views/til/MainPage.vue'),
	},

	{
		path: '/guide',
		component: () => import('@/components/Guide.vue'),
	},
	// {
	// 	path: '/layout',
	// 	name: 'layout',
	// 	component: () => import('../layouts/Layout.vue'),
	// 	children: [
	// 		{
	// 			path: '/gateway',
	// 			name: 'Gateway',
	// 			component: () => import('../views/Gateway.vue'),
	// 		},
	// 	],
	// },
];

const router = createRouter({
	history: createWebHistory(''),
	routes,
});

export default router;
