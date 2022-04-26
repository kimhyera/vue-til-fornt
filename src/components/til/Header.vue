<template lang="">
	<header class="header">
		<div class="wrapper d-flex">
			<h1>header</h1>

			<div class="links ml-auto">
				<!-- 1 -->
				<template v-if="isUserLogin">
					<a
						href="javascript:;"
						@click="logoutUser"
						class="logout-button"
					>
						Logout
					</a>
				</template>
				<!-- 2 -->

				<template v-else>
					<a href="/signup" class="me-2">회원가입</a>
					<a href="/login">로그인</a>
				</template>
			</div>
		</div>
	</header>
</template>
<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
	setup() {
		const store = useStore();

		const isUserLogin = computed(() => store.getters.isLogin);

		const logoutUser = () => {
			store.commit('setLogout');
		};

		return { isUserLogin, logoutUser };
	},
};
</script>
<style lang="scss">
.header {
	background: yellow;
	.links {
		margin-left: auto;
	}
}
</style>
