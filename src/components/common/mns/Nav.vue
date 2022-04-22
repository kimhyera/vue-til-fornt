<template>
	<div id="nav" class="nav">
		<ul class="floatclear">
			<li
				class="order"
				data-otd1="Y"
				data-otd2="Y"
				data-otd3="Y"
				data-sot=""
				data-dyn="N"
			>
				<router-link to="/mns/order">주문하기</router-link>
			</li>
			<li class="discount">
				<router-link to="/mns/test">예약하기</router-link>
			</li>
			<li class="home"><router-link to="/mns">HOME</router-link></li>
			<li class="order_list">
				<router-link to="/mns/myOrders">주문내역</router-link>
			</li>
			<li class="mypage">
				<router-link to="/mns/mypage">마이페이지</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {};
	},

	methods: {},
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_nav.scss';
</style>
