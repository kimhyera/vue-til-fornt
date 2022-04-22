<template>
	<div class="input_user_info fixBtn_pb">
		<div class="user_info_box">
			<h2>회원정보 입력</h2>
			<ul>
				<li class="tel_input_sns floatclear user_id">
					<span class="input_wrap"
						><input
							type="text"
							name="id"
							placeholder="아이디를 입력해 주세요."
							value="" /><i
							><button>
								<img
									src="@/assets/img/icon/btn_delet.png"
									alt="입력취소"
								/></button></i
					></span>
					<p><button @click="onAuthTel">중복확인</button></p>

					<button @click="authTel2">중복확인 변환전</button>
					{{ inputs.id }}

					<p class="error_info">
						아이디는 6~20자리 대소문자와 숫자로만 입력 가능합니다.
					</p>
				</li>
				<li>
					<span class="input_wrap"
						><input
							type="password"
							name="password"
							placeholder="비밀번호 (영대소문자, 숫자를 포함한 6~20자)"
							value="" /><i
							><button>
								<img
									src="@/assets/img/icon/btn_delet.png"
									alt="입력취소"
								/></button></i
					></span>
				</li>
				<li>
					<span class="input_wrap"
						><input
							type="password"
							name="chkPassword"
							placeholder="비밀번호를 다시 한번 입력하세요."
							value=""
					/></span>
					<p class="error_info">
						비밀번호가 다릅니다. 다시 한번 확인해주세요.
					</p>
				</li>
			</ul>
		</div>
		<div class="user_info_box">
			<h2>휴대폰 번호 인증</h2>
			<ul>
				<li class="tel_box">
					<span class="input_wrap"
						><input
							type="number"
							name="strUserTel"
							placeholder="휴대폰 번호를 입력해 주세요. (- 없이 숫자만 입력)"
							maxlength="11"
							value=""
					/></span>
					<p>
						<button type="button" class="btn">인증번호 요청</button>
					</p>
				</li>
				<li class="tel_input_sns floatclear">
					<span class="input_wrap"
						><input
							type="number"
							name="smsAuthNum"
							placeholder="인증번호를 입력해 주세요."
							value="" /><em></em
					></span>
					<p><button id="authOkBtn">인증확인</button></p>
				</li>
			</ul>
		</div>
	</div>
	<p class="fixBottom btn-style1">
		<button id="nextBtn" class="btn btn-full btn-lg">다음</button>
	</p>

	{{ getAuthNo }}
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
	computed: {
		...mapGetters('user', {
			getAuthNo: 'getAuthNo',
		}),
	},
	methods: {
		...mapActions('user', {
			getAuthTel: 'getAuthTel',
		}),
		async authTel2() {
			const res = await this.getAuthTel({ sLoginId: 'teo1828' });
		},
	},
	setup() {
		const inputs = reactive({ id: '', password: '' });

		const onAuthTel = () => {};

		return { inputs, onAuthTel };
	},
});
</script>

<style lang="scss">
@import '~@/assets/scss/views/signup.scss';
</style>
