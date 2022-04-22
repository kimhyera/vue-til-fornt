<template>
	<div>개인정보 관리</div>
	<div id="main">
		<div className="my_info_update">
			<ul>
				<li>
					<div>
						<h3>아이디</h3>
						<span>
							<input type="text" placeholder="아이디를 입력하세요" defaultValue="shwon" readonly />
						</span>
					</div>
				</li>
				<li>
					<div>
						<h3>비밀번호</h3>
						<span>
							<input type="password" placeholder="비밀번호를 입력하세요" defaultValue="1234567" readonly />
						</span>
						<router-link to="/mns/changePwd">수정</router-link>
					</div>
				</li>
				<li>
					<div>
						<h3>휴대폰 번호</h3>
						<span>
							<input type="tel" placeholder="휴대폰 번호를 입력하세요" defaultValue="010 1234 5678" readonly />
						</span>
						<router-link to="/mns/changeTel">수정</router-link>
					</div>
				</li>
				<li>
					<div>
						<h3>마케팅 정보 수신 동의</h3>
						<span className="agreement_design">
							<input type="checkbox" name="agreement" id="save_id" className="save_id" checked />
							<label for="save_id">SMS 수신동의</label>
						</span>
					</div>
				</li>
			</ul>
			<p className="floatclear">
				<span>
					<a href="#">로그아웃</a>
				</span>
				<span>
					<a href="#">회원탈퇴</a>
				</span>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {};
	},

	

	methods: {},
});
</script>

<style lang="scss" scoped></style>
