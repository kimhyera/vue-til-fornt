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

import { ref, watchEffect } from 'vue';
import { validateEmail } from '@/utils/validation';

export default {
	setup() {
		const username = ref('');
		const password = ref('');
		const nickname = ref('');
		const logMessage = ref('');

		const isTyping = ref(false);

		const submitForm = async () => {
			//유효성 검사
			if (username.value.length === 0) {
				logMessage.value = `아이디를 입력해주세요`;

				return;
			}
			if (password.value.length === 0) {
				logMessage.value = `패스워드를 입력해주세요`;

				return;
			}
			if (nickname.value.length === 0) {
				logMessage.value = `닉네임을 입력해주세요`;
				return;
			}

			if (!validateEmail(username.value)) {
				logMessage.value = `유효한 아이디를 입력해주세요.`;

				return;
			}

			const objData = {
				username: username.value,
				password: password.value,
				nickname: nickname.value,
			};

			try {
				const { data } = await registerUser(objData);

				logMessage.value = `asdfasdf`;

				console.log(data, data.username);

				logMessage.value = `${data.username} 님이 가입되었습니다`;
				initForm();

				// logMessage.value = res.username;
			} catch (error) {
				console.log(error.response.data);
				logMessage.value = error.response.data.message;
			}
		};

		function initForm() {
			username.value = '';
			password.value = '';
			nickname.value = '';
		}

		watchEffect(() => {
			console.log(username.value, validateEmail(username.value));

			if (validateEmail(username.value)) {
				logMessage.value = `유효한 아이디입니다.`;
			} else {
				// logMessage.value = ``;
			}
		});

		return {
			username,
			password,
			nickname,
			logMessage,
			submitForm,
			isTyping,
		};
	},
};
</script>

<style></style>
