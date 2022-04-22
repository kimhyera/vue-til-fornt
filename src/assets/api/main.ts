import axios from 'axios';
export default class Main {
	constructor() {}
	fetchBanner() {
		return axios.get('/api/app/homeApi.php?p=aBannerList');
	}
	fetchLikeMenu() {
		return axios.get('/api/app/homeApi.php?p=aLikeMenuList');
	}
}
