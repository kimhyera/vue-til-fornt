import axios from 'axios';
import qs from 'qs';

export default class Api {
	constructor() {}

	request(type: string, url: string, params: any, headers: any) {
		// type을 전달 받아서 대문자든 소문자든 모두 소문자로 변경
		const method = type.toLowerCase();
		if (type !== 'query') {
			params = qs.stringify(params);
		}

		// method 체크
		switch (method) {
			case 'post': // method가 post일 경우 axios type을 post로 전송
				return axios
					.post(url, params, { headers: headers }) // 파라미터와 헤더 정보를 담아 전송
					.then((res) => {
						return res.data;
					}) // 성공할 경우 response 값을 반환
					.catch((err) => {
						new Promise((resolve, reject) => {
							return reject(err);
						});
					}); // 실패할 경우 error 값을 반환 err만 반환하게 되면 동기처리 오류가 나기 때문에 비동기로 처리
				break;

			case 'get': // method가 post일 경우 axios type을 get으로 전송
				return axios
					.get(url, { params: params }) // 파라미터 값을 담아 전송
					.then((res) => {
						return res.data;
					}) // 성공할 경우 response 값을 반환
					.catch((err) => {
						new Promise((resolve, reject) => {
							return reject(err);
						});
					}); // 실패할 경우 error 값을 반환 err만 반환하게 되면 동기처리 오류가 나기 때문에 비동기로 처리
				break;

			case 'query': // method가 post일 경우 axios type을 get으로 전송
				return axios
					.get(`${url}?${params}`) // 파라미터 값을 담아 전송
					.then((res) => {
						return res.data;
					}) // 성공할 경우 response 값을 반환
					.catch((err) => {
						new Promise((resolve, reject) => {
							return reject(err);
						});
					}); // 실패할 경우 error 값을 반환 err만 반환하게 되면 동기처리 오류가 나기 때문에 비동기로 처리
				break;

			case 'delete': // method가 post일 경우 axios type을 delete로 전송
				return axios
					.delete(url, params) // 파라미터 값을 담아 전송
					.then((res) => {
						return res.data;
					}) // 성공할 경우 response 값을 반환
					.catch((err) => {
						new Promise((resolve, reject) => {
							return reject(err);
						});
					}); // 실패할 경우 error 값을 반환 err만 반환하게 되면 동기처리 오류가 나기 때문에 비동기로 처리
				break;

			case 'put': // method가 post일 경우 axios type을 put으로 전송
				return axios
					.put(url, params, { headers: headers }) // 파라미터와 헤더 정보를 담아 전송
					.then((res) => {
						return res.data;
					}) // 성공할 경우 response 값을 반환
					.catch((err) => {
						new Promise((resolve, reject) => {
							return reject(err);
						});
					}); // 실패할 경우 error 값을 반환 err만 반환하게 되면 동기처리 오류가 나기 때문에 비동기로 처리
				break;
		}
	}
}
