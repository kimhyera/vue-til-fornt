<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<div>
			<label for="nickname">nickname: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button type="submit">회원 가입</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '@/api/index';
import { ref } from '@vue/reactivity';

export default {
	setup() {
		const username = ref('');
		const password = ref('');
		const nickname = ref('');
		const logMessage = ref('');

		const submitForm = async () => {
			const objData = {
				username: username.value,
				password: password.value,
				nickname: nickname.value,
			};

			try {
				const { data } = await registerUser(objData);
				console.log(data);

				initForm();

				// const { data } = await registerUser(userData);
				// console.log(data.username);
				logMessage.value = `${data.username} 님이 가입되었습니다`;

				// logMessage.value = res.username;
			} catch (error) {
				console.log(error.response.data);
				logMessage.value = error.response.data;
			}
		};

		function initForm() {
			username.value = '';
			password.value = '';
			nickname.value = '';
		}

		return { username, password, nickname, logMessage, submitForm };
	},
};
</script>

<style></style>
