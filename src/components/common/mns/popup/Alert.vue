<template>
	<div class="center-pop full_btn_pop">
		<div>
			<div>
				<h2>{{ options.title }}</h2>
				<div class="pop_btn">
					<button @click="$emit('close')">확인</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent ({
		props: ['options'],
		data() {
			return {
			}
		},

		mounted() {
		},

		methods: {
		},
	})
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/components/popup/_alert.scss';
</style>