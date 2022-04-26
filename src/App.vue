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
.wrapper {
	padding: 0 15px;
}

.content {
	padding: 30px 0 60px;
}
</style>
