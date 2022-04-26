import axios from 'axios';
// 액시오스 초기화 함수
const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});
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
export { registerUser, loginUser, fetchPosts };
