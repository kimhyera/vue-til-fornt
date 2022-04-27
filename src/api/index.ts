import axios from 'axios';
import { setInterceptors } from '@/api/common/interseptors';
// CREATE - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}

// 액시오스 초기화 함수

function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

// 액시오스 초기화 함수
function createInstanceWithAuth(url: any) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});
	return setInterceptors(instance);
}
const instance = createInstance();
const posts = createInstanceWithAuth('posts');

// 회원가입 API
function registerUser(userData: any) {
	return instance.post('signup', userData);
}
// 로그인 API
function loginUser(userData: any) {
	return instance.post('login', userData);
}

// 학습 노트 데이터 목록을 조회하는 API
function fetchPosts() {
	return posts.get('/');
}

// 특정 학습 노트를 조회하는 API
function fetchPost(postId: any) {
	return posts.get(postId);
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData: any) {
	return posts.post('/', postData);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(postId: any) {
	return posts.delete(postId);
}

// 학습 노트 데이터를 수정하는 API
function editPost(postId: any, postData: any) {
	return posts.put(postId, postData);
}

export {
	registerUser,
	loginUser,
	fetchPosts,
	fetchPost,
	createPost,
	deletePost,
	editPost,
};
