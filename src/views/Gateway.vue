<template>
	<div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
	name: 'App',

	data() {
		return {
			isAppVersion: 'mns',
			isAppLoading: true,
			path: '' as any,
		};
	},

	mounted() {
		console.log(this.$route);
		this.path = this.$route.fullPath.split('?')[1];
		this.gateway();
	},

	methods: {
		...mapActions({
			getGateway: 'getGateway',
		}),

		gateway() {
			const data = {
				s: this.path,
			};
			this.getGateway(data);
		},
	},
});
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
