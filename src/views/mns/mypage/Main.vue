<template>
	<Header :options="headerOption"> </Header>

	<div id="main" class="addNav">
		<div className="mypage_box">
			<div className="my_stamp_box">
				<h2>
					<router-link to="/myInfo">{userReducer.user}님</router-link>
				</h2>
				<p>스탬프 적립</p>
				<div className="stamp_box stamp_box_small">
					<ul className="floatclear">
						<li>
							<span>1</span>
						</li>
					</ul>
				</div>
				<ul>
					<li>
						<h3>꼭 알아두세요.</h3>
					</li>
					<li>- 5개의 스탬프가 모이면 10% 할인쿠폰을 발급해 드립니다.{" "}</li>
					<li>- 주문 1건당 1개의 스탬프를 적립해 드립니다.</li>
					<li>- 스탬프 유효기간은 발행일 포함 1년입니다.</li>
				</ul>
			</div>

			<ul className="my_page_list">
				<li className="my_coupon">
					<router-link to="/mns/coupon">할인쿠폰</router-link>
				</li>
				<li className="my_menu">
					<router-link to="/mns/myMenu">나만의 단골메뉴</router-link>
				</li>
				<li className="guide">
					<router-link to="/mns/siteInfo">이용안내</router-link>
				</li>
				<li className="notice">
					<router-link to="/notice">공지사항</router-link>
				</li>
			</ul>
		</div>
	</div>
	<Nav />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/common/mns/Header.vue";
import Nav from "@/components/common/mns/Nav.vue";

export default defineComponent({
	components: { Header, Nav },
	data() {
		return {
			isLogin: false,
			headerOption: {
				type: "regular", //main, menu, regular
				btype: "", //close, back
				name: "마이페이지"
			},
			alertOption: {
				message: "",
				type: "alert"
			}
		};
	},

	

	methods: {}
});
</script>

<style lang="scss"></style>
