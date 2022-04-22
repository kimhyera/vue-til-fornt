import Api from './axios';

export default class Common extends Api {
	constructor() {
		// 상위 Class의 모든걸 참조
		super();
	}

	getGateway(params: any) {
		const url = '/api/gateway.php';
		return this.request('query', url, params, '');
	}
}
