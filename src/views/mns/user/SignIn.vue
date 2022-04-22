<template>
	<div class="login-box">
		<ul class="login-input">
			<li>
				<span class="input-wrap">
					<input
						type="text"
						placeholder="아이디를 입력하세요."
						v-model="sLoginId"
					/>
					<i
						><button>
							<img
								src="@/assets/img/icon/btn_delet.png"
								alt="입력취소"
							/></button
					></i>
				</span>
				<p>아이디를 입력하세요.</p>
			</li>
			<li>
				<span class="input-wrap">
					<input
						type="password"
						placeholder="비밀번호를 입력하세요."
						v-model="sLoginPwd"
					/>
					<i
						><button>
							<img
								src="@/assets/img/icon/btn_delet.png"
								alt="입력취소"
							/></button
					></i>
				</span>
				<p>비밀번호를 입력하세요.</p>
			</li>
		</ul>

		<ul class="login_option floatclear">
			<li>
				<span class="agreement-design">
					<input type="checkbox" v-model="sKeepLogin" />
					<label for="autoLoginChk">자동로그인</label>
				</span>
			</li>
			<li>
				<span class="agreement-design">
					<input type="checkbox" v-model="sSaveId" />
					<label for="saveIdChk">아이디저장</label>
				</span>
			</li>
			<li>
				<router-link to="/mns/findIdPw">ID/PW 찾기</router-link>
			</li>
		</ul>

		<p><button @click="submitSignIn">로그인</button></p>
		<div>
			<p>
				스마트샵이 처음 이신가요?
				<router-link to="/mns/signUpPolicy">회원가입</router-link>
			</p>
		</div>
	</div>
	<!--//login_box-->

	<span class="kakao_login"><a>소셜 계정 로그인</a></span>

	<!-- 카카오 계정으로 변경 -->
	<div class="center_pop full_btn_pop" v-show="isKakao">
		<div>
			<div>
				<h2>만나샵에 이미 가입 하셨습니다.</h2>
				<p>기존 로그인을 삭제하고 카카오로 로그인<br />하시겠습니까?</p>
				<div class="pop_two_btn">
					<ul class="floatclear">
						<li><button class="no_btn">아니오</button></li>
						<li><button class="yes_btn">예</button></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<Alert v-if="isAlert" :options="alertOption" @close="closeAlert" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

import Alert from '@/components/common/mns/popup/Alert.vue';

export default defineComponent({
	data() {
		return {
			sLoginId: '',
			sLoginPwd: '',
			sKeepLogin: false,
			sSaveId: false,
			isKakao: false,
			isAlert: false,
			alertOption: {},
			menuOption: {
				type: 'back',
				title: '로그인',
			},
		};
	},

	components: {
		Alert,
		//Menu
	},

	methods: {
		...mapActions('user', {
			signIn: 'signIn',
		}),

		async submitSignIn() {
			const data = {
				sLoginId: this.sLoginId,
				sLoginPwd: this.sLoginPwd,
				sKeepLogin: this.sKeepLogin,
				sSaveId: this.sSaveId,
				sLeaveChk: '',
				sLoginType: '',
				sTel: '',
			};

			const res = await this.signIn(data);
			if (res.RETURN_CODE === '-1') {
				this.alertOption = {
					title: res.RETURN_MESSAGE,
				};

				this.isAlert = true;
			}
		},

		closeAlert() {
			this.isAlert = false;
		},
	},
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/views/user/_user.scss';
</style>
