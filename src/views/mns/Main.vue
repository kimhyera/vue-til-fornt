<template>
	<Banner />
	<div className="addr_box">
		<p>
			주소를 설정해 주세요.
			<router-link to="/mns/addressSch" className="blind"></router-link>
		</p>
		<span class="text-arrow"> 주소변경 </span>
	</div>

	<LikeMenu :isLogin="isLogin" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '@/components/common/mns/main/Banner.vue';
import LikeMenu from '@/components/common/mns/main/LikeMenu.vue';

export default defineComponent({
	components: { Banner, LikeMenu },
	data() {
		return {
			isLogin: false,
			likeMenuList: [],

			alertOption: {
				message: '',
				type: 'alert',
			},
		};
	},

	methods: {},
});
</script>

<style lang="scss"></style>
