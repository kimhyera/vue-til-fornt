import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/layout',
		name: 'layout',
		component: () => import('../layouts/Layout.vue'),
		children: [
			{
				path: '/gateway',
				name: 'Gateway',
				component: () => import('../views/Gateway.vue'),
			},
			{
				path: '/mns/guide',
				name: 'Guide',
				component: () => import('../views/test/Guide.vue'),
			},
			{
				path: '/mns',
				name: 'Main',
				component: () => import('../views/mns/Main.vue'),
			},
			{
				path: '/mns/addressSch',
				name: 'AddressSch',
				component: () => import('../views/mns/addressSch/Main.vue'),
			},

			{
				path: '/mns/signin',
				name: 'SignIn',
				component: () => import('../views/mns/user/SignIn.vue'),
			},
			{
				path: '/mns/signUpPolicy',
				name: 'SignUpPolicy',
				component: () => import('../views/mns/user/SignUpPolicy.vue'),
			},
			{
				path: '/mns/signup',
				name: 'SignUp',
				component: () => import('../views/mns/user/SignUp.vue'),
			},

			{
				path: '/mns/findIdPw',
				name: 'FindIdPw',
				component: () => import('../views/mns/user/FindIdPw.vue'),
			},
			{
				path: '/mns/order',
				name: 'orderMain',
				component: () => import('../views/mns/order/Main.vue'),
			},
			{
				path: '/mns/orderOption',
				name: 'OrderOption',
				component: () => import('../views/mns/order/Option.vue'),
			},

			{
				path: '/mns/basket',
				name: 'Basket',
				component: () => import('../views/mns/order/Basket.vue'),
			},

			{
				path: '/mns/pay',
				name: 'Pay',
				component: () => import('../views/mns/order/Pay.vue'),
			},

			{
				path: '/mns/orderFinish',
				name: 'OrderFinish',
				component: () => import('../views/mns/order/Finish.vue'),
			},

			{
				path: '/mns/review',
				name: 'ReviewMain',
				component: () => import('../views/mns/review/Main.vue'),
			},
			{
				path: '/mns/reviewWrite',
				name: 'ReviewWrite',
				component: () => import('../views/mns/review/Write.vue'),
			},

			{
				path: '/mns/mypage',
				name: 'Mypage',
				component: () => import('../views/mns/mypage/Main.vue'),
			},
			{
				path: '/mns/myInfo',
				name: 'MyInfo',
				component: () => import('../views/mns/mypage/MyInfo.vue'),
			},
			{
				path: '/mns/coupon',
				name: 'Coupon',
				component: () => import('../views/mns/mypage/Coupon.vue'),
			},
			{
				path: '/mns/myOrders',
				name: 'MyOrders',
				component: () => import('../views/mns/mypage/MyOrders.vue'),
			},
			{
				path: '/mns/changePwd',
				name: 'ChangePwd',
				component: () => import('../views/mns/mypage/ChangePwd.vue'),
			},
			{
				path: '/mns/changeTel',
				name: 'ChangeTel',
				component: () => import('../views/mns/mypage/ChangeTel.vue'),
			},

			//이용안내: 하위팝업으로 처리
			{
				path: '/mns/siteInfo',
				name: 'SiteInfo',
				component: () => import('../views/mns/siteInfo/Main.vue'),
			},
			{
				path: '/mns/notice',
				name: 'Notice',
				component: () => import('../views/mns/notice/Main.vue'),
			},
			{
				path: '/mns/noticeDetail',
				name: 'NoticeDetail',
				component: () => import('../views/mns/notice/Detail.vue'),
			},
		],
	},

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
		path: '*',
		component: () => import('@/views/til/NotFoundPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
