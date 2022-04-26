import store from '@/store/index';

export function setInterceptors(instance: any) {
	// Add a request interceptor
	instance.interceptors.request.use(
		function (config: any) {
			// Do something before request is sent
			// console.log(config);
			config.headers.Authorization = store.state.token;
			return config;
		},
		function (error: any) {
			// Do something with request error
			return Promise.reject(error);
		}
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function (response: any) {
			// Any status code that lie within the range of 2xx cause this function to trigger
			// Do something with response data
			return response;
		},
		function (error: any) {
			// Any status codes that falls outside the range of 2xx cause this function to trigger
			// Do something with response error
			return Promise.reject(error);
		}
	);
	return instance;
}
