<template>
	<div id='wrap'>
		<div id='header'>
			<div>
				<h1>
					<a href='#'>
						<img src='../../../assets/img/icon/Components_Back_button.png' alt='back'>
					</a>
					<button>가게소개</button>
				</h1>
			</div>
		</div>
		<!--//header-->

		<div id='main'>
			<div class='info_1box'>
				<span><img src='../../../assets/img/review/img_01.png' alt='신도림 홍콩반점0410'></span>
				<div>
					<div>
						<span class='s_open'>영업중</span>
						<ul>
							<li>#배달</li>
							<li>#포장</li>
							<li>#테이블</li>
						</ul>
					</div>
					<h2>신도림 홍콩반점0410</h2>
					<p>대기업 쉐프 출신 요리사가 운영하는 중국 음식점</p>
				</div>
			</div>
			<!--//info_1box-->

			<div class='info_text'>
				<h3>이벤트 안내</h3>
				<p>
				새해를 맞아 첫 주문 고객에 한해 10,000원 이상 첫 주문 시 3,000원 할인이벤트를 진행합니다.
				</p>
			</div>
			<!--info_text-->

			<div class='info_text'>
				<h3>사장님 공지</h3>
				<ul>
					<li>
					이벤트 하나!<br>
					새해를 맞아 첫 주문 고객에 한해 10,000원 이상 첫 주문 시 3,000원 할인이벤트를 진행합니다.
					</li>
					<li class='last'>
					이벤트 둘!<br>
					새해 기념 리뷰이벤트도 진행합니다. 리뷰 약속하고 요청사항에 적어주세요.
					</li>
				</ul>
			</div>
			<!--info_text-->

			<div class='info_text'>
				<h3>매장소개</h3>
				<p>
				대기업 쉐프 출신 요리사가 요리하는 건강하고 맛있는 중국 음식점 입니다. 최고의 맛과 서비스를 제공하기 위해 끊임없이 연구하고 노력하겠습니다.<br>많은 주문부탁드립니다.
				</p>
			</div>
			<!--info_text-->

			<div class='time-info'>
				<h3>영업정보</h3>
				<ul>
					<li>
						<strong>영업시간</strong>
						<div class='week-time'>
							<p class='time-up on'>목요일  12:00~23:50</p>
							<div>
								<ul>
									<li>
										<strong>월 - 금요일 </strong>
										<span>12:00 ~ 23:50</span>
									</li>
									<li>
										<strong>토 - 일요일 </strong>
										<span>10:00 ~ 23:50</span>
									</li>
									<li>
										<strong>공휴일</strong>
										<span>휴무</span>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<strong>가게위치</strong>
						<div class='store-map'>
							<p>서울 구로구 경인로 661</p>
							<div>
								<div class='show-map'>
									<!-- 지도 넣어주세요 -->
								</div>
								<span class='map-pin'>신도림 홍콩반점</span>
								<ul>
									<li class='addr_copy'><a href='#'>주소복사</a></li>
									<li class='show_map'><a href='#'>지도보기</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<strong>연락처</strong>
						<div>
							<p class='tel-input'><a href='tel:02-2485-4868'>02-2485-4868</a></p>
						</div>
					</li>
					<li>
						<strong>원산지</strong>
						<div>
							<p>소고기 미국산, 콩나물 중국산, 배추 한국산, 돼지고기 미국, 중국, 한국 등</p>
						</div>
					</li>
				</ul>
			</div>
			<!--time_info-->

			<div class='delivery-pay'>
				<h3>배달료 정보</h3>
				<ul>
					<li>
						<strong>최소주문 금액</strong>
						<p>15,000원 이상 </p>
					</li>
					<li>
						<strong>배달료 안내 </strong>
						<div>
							0원 이상 ~ 10,000원 미만 3,500원<br>
							10,000원 이상 ~ 20,000원 미만 1,500원<br>
							20,000원 이상 무료
						</div>
					</li>
				</ul>
				<p>
				* 운영방침에 따라 지역별 배달료가 추가될 수 있습니다.<br>&nbsp;&nbsp;&nbsp;배달료는 할인이 포함된 주문 금액으로 책정됩니다.
				</p>
			</div>
			<!--//delivery_pay-->

			<div class='delivery_pay'>
				<h3>사업장 정보</h3>
				<ul>
					<li>
						<strong>상호명</strong>
						<p>사업자 등록증 상호명</p>
					</li>
					<li>
						<strong>대표자</strong>
						<p>대표자명</p>
					</li>
					<li>
						<strong>사업자번호</strong>
						<p>사업자번호</p>
					</li>
				</ul>
			</div>
			<!--//delivery_pay-->
		</div>	
		<!--//main-->
		<p class='copy_pop'>주소가 복사됐습니다.</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent ({
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
	@import '@/assets/scss/style.scss';
	@import '@/assets/scss/views/store/_store.scss';
</style>