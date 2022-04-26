<template lang="">
	<Header></Header>
	<div class="wrapper">
		<div class="content">
			<router-view />
		</div>
	</div>
</template>
<script>
import Header from '@/components/til/Header.vue';

export default {
	components: {
		Header,
	},
};
</script>
<style lang="scss">
@import '~@/assets/scss/style.scss';
.wrapper {
	padding: 0 15px;
	max-width: 1000px;
	margin: 0 auto;
}

.content {
	padding: 30px 0 60px;
}
</style>
