<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id:</label>
			<input
				class="form-input"
				id="username"
				type="text"
				v-model="username"
			/>
		</div>
		<div>
			<label for="password">pw:</label>
			<input
				class="form-input"
				id="password"
				type="text"
				v-model="password"
			/>
		</div>
		<!-- :disabled="!isUsernameValid || !password"  -->
		<br />
		<button type="submit" class="form-input">로그인</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index';
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
	setup() {
		const router = useRouter();
		const store = useStore();
		const username = ref('');
		const password = ref('');
		const logMessage = ref('');

		const submitForm = async () => {
			const objData = {
				username: username.value,
				password: password.value,
			};

			try {
				const { data } = await loginUser(objData);

				const { user, token } = data;

				//vuex 담기
				store.commit('setUsername', user.username);
				store.commit('setToken', token);
				//local storge 에 담기
				localStorage.setItem('username', user.username);
				localStorage.setItem('token', token);

				initForm();

				logMessage.value = data.user.username;

				router.push('/main');
			} catch (error) {
				console.log(error.response.data);
				logMessage.value = error.response.data;
			}
		};

		function initForm() {
			username.value = '';
			password.value = '';
		}

		return { username, password, logMessage, submitForm };
	},
};
</script>

<style></style>
