import axios from 'axios';
import { setInterceptors } from '@/api/common/interseptors';

// 액시오스 초기화 함수
function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptors(instance);
}
const instance = createInstance();

// 회원가입 API
function registerUser(userData: any) {
	return instance.post('signup', userData);
}
// 로그인 API
function loginUser(userData: any) {
	return instance.post('login', userData);
}

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
	return instance.get('posts');
}
// 학습 노트 데이터 등록하는 API
function createPost(post: any) {
	return instance.post('posts', post);
}
export { registerUser, loginUser, fetchPosts, createPost };
