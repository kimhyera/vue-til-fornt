<template>
	<div id="main">
		<Header :options="setHeaderOpt"> </Header>
		<div class="container">
			<router-view />
		</div>
	</div>
	<Nav v-if="setNav" />
</template>
<script>
import { computed, defineComponent, ref } from 'vue';

import Header from '@/components/common/mns/Header.vue';
import Nav from '@/components/common/mns/Nav.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
	components: {
		Nav,
		Header,
	},

	setup() {
		const route = useRoute();

		// type: '', //main, menu, regular
		// 	btype: '', //close, back

		let setHeaderOpt = ref(
			computed(() => {
				if (route.name === 'Main') {
					return {
						type: 'main',
						btype: '',
						name: '메인',
					};
				} else {
					return {
						type: 'regular',
						btype: '',
						name: '제목을 설정하세요',
					};
				}
			})
		);

		const setNav = ref(
			computed(() => {
				if (route.name === 'Loin') {
					return false;
				} else {
					return true;
				}
			})
		);

		return { setHeaderOpt, setNav };
	},
});
</script>
<style></style>
