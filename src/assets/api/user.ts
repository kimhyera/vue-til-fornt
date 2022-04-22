import Api from './axios';

export default class User extends Api {
	static signIn: any;
	constructor() {
		// 상위 Class의 모든걸 참조
		super();
	}

	signIn(params: any) {
		const url = '/api/loginExec.php';
		return this.request('post', url, params, '');
	}
	authTel(params: any) {
		const url = '/api/app/homeApi.php?p=acceptIdCheckExec';
		return this.request('post', url, params, '');
	}
}
