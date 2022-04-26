import { createStore } from 'vuex';

export default createStore({
	state: {
		username: localStorage.getItem('username') || '',
		token: localStorage.getItem('token') || '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
		setToken(state, token) {
			state.token = token;
		},
		setLogout(state) {
			state.username = '';
			state.token = '';
			// 데이터 삭제
			localStorage.removeItem('username');
			localStorage.removeItem('token');
		},
	},
});
