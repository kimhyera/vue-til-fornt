<template>
	<div class="section_box myMenu_list">
		<div class="posi_r">
			<h2 class="section_title">나만의 단골메뉴</h2>
			<span class="moreBtn_wrap"
				><a href="#"
					><img
						src="~@/assets/img/icon/btn_more.png"
						alt="더보기" /></a
			></span>
			<div class="myMenu_wrap">
				<ul
					class="myMenu_box floatclear"
					v-bind:style="{
						width: ulWidth + 'px',
					}"
					v-if="isLogin"
				>
					<li v-for="(item, i) in aLikeMenuList" :key="i">
						<div class="inner">
							<div>
								<div class="myMenu_total myMenu_inner">
									<strong v-if="item.sOrdType === '1'"
										>배달 주문</strong
									>
									<strong v-else-if="item.sOrdType === '2'"
										>포장 주문</strong
									>
									<strong v-else-if="item.sOrdType === '3'"
										>테이블 주문</strong
									>

									<h3>{{ item.sMenuName }}</h3>
									<p>
										{{
											fncMoneyFormat(
												item.iMenuTotalPrice
											)
										}}원
									</p>
								</div>
								<div class="myMenu_all">
									<ul>
										<li
											className="on"
											v-for="(sub, i) in item.aSubData"
											:key="i"
										>
											<h4>
												<button>
													{{ sub.sGoodsName }}
												</button>
											</h4>
											<ul>
												<li>
													기본 :
													{{ sub.iMenuPrice }}원
												</li>

												<li>{{ sub.sOp1Name }}</li>
											</ul>
											<p>{{ sub.iMenuPrice }}원</p>
										</li>
									</ul>
								</div>
							</div>
							<p>
								<button class="btn_cart" data-msn="4402">
									장바구니 담기
								</button>
							</p>
						</div>
					</li>
					<li v-if="aLikeMenuList.length === 0">
						<div class="inner">
							<div>
								<div class="myMenu_blank myMenu_inner">
									<span><a>단골메뉴 등록하기</a></span>
									<p>
										메뉴, 옵션을 선택하는 번거로움 없이<br />한번에
										주문하세요!
									</p>
								</div>
							</div>
						</div>
					</li>
				</ul>

				<div class="myMenu_none" v-if="!isLogin">
					<h2>나만의 단골메뉴를 등록해 보세요!</h2>
					<p>
						주문내역에서 ‘찜’하고 단골메뉴로
						<br />
						등록하면 메뉴, 옵션을 선택하는 번거로움 없이
						<br />
						한번에 주문할 수 있어요!
					</p>
					<span>
						<a>단골메뉴 등록하기</a>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import * as util from '@/assets/js/utils.ts';

export default defineComponent({
	data() {
		return {
			isLogin: true,
			ulWidth: 1159.97,
			aLikeMenuList: [
				{
					iMenuSeqNo: '4505',
					sMenuName: '공기밥외 3개',
					sOrdType: '2',
					iMenuTotalPrice: 38000,
					aSubData: [
						{
							iMenuSeq: '4505',
							iMenuGoodsSeqNo: '5006',
							sGoodsName: '공기밥',
							iMenuPrice: '1000',
							sOrdType: '1',
							iOp1No: null,
							sOp1Name: null,
							iOp1Price: '0',
							iOp2No: null,
							sOp2Name: null,
							iOp2Price: '0',
							iOp3No: null,
							sOp3Name: null,
							iOp3Price: '0',
							iOp4No: null,
							sOp4Name: null,
							iOp4Price: '0',
							sAddGoodsTxt: null,
							iAddGoodsSum: null,
							sAddGoodsAbleYn: 'Y',
							sMenuStatus: '1',
						},
						{
							iMenuSeq: '4505',
							iMenuGoodsSeqNo: '5007',
							sGoodsName: '쭈곱새',
							iMenuPrice: '1000',
							sOrdType: '1',
							iOp1No: '2994',
							sOp1Name: '2인',
							iOp1Price: '0',
							iOp2No: null,
							sOp2Name: null,
							iOp2Price: '0',
							iOp3No: null,
							sOp3Name: null,
							iOp3Price: '0',
							iOp4No: null,
							sOp4Name: null,
							iOp4Price: '0',
							sAddGoodsTxt: util.fncRnArr(
								'햄사리 (3,000원)\r\n우동사리 (2,000원)\r\n새우볼 (3,000원)\r\n놀부부대세트 (21,000원)'
							),
							iAddGoodsSum: '29000',
							sAddGoodsAbleYn: 'Y',
							sMenuStatus: '1',
						},
						{
							iMenuSeq: '4505',
							iMenuGoodsSeqNo: '5008',
							sGoodsName: '자몽에이드',
							iMenuPrice: '6000',
							sOrdType: '1',
							iOp1No: null,
							sOp1Name: null,
							iOp1Price: '0',
							iOp2No: null,
							sOp2Name: null,
							iOp2Price: '0',
							iOp3No: null,
							sOp3Name: null,
							iOp3Price: '0',
							iOp4No: null,
							sOp4Name: null,
							iOp4Price: '0',
							sAddGoodsTxt: null,
							iAddGoodsSum: null,
							sAddGoodsAbleYn: 'Y',
							sMenuStatus: '1',
						},
					],
				},
				{
					iMenuSeqNo: '4505',
					sMenuName: '공기밥외 3......개',
					sOrdType: '1',
					iMenuTotalPrice: 38000,
					aSubData: [
						{
							iMenuSeq: '4505',
							iMenuGoodsSeqNo: '5006',
							sGoodsName: '공기밥',
							iMenuPrice: '1000',
							sOrdType: '1',
							iOp1No: null,
							sOp1Name: null,
							iOp1Price: '0',
							iOp2No: null,
							sOp2Name: null,
							iOp2Price: '0',
							iOp3No: null,
							sOp3Name: null,
							iOp3Price: '0',
							iOp4No: null,
							sOp4Name: null,
							iOp4Price: '0',
							sAddGoodsTxt: null,
							iAddGoodsSum: null,
							sAddGoodsAbleYn: 'Y',
							sMenuStatus: '1',
						},
						{
							iMenuSeq: '4505',
							iMenuGoodsSeqNo: '5007',
							sGoodsName: '쭈곱새',
							iMenuPrice: '1000',
							sOrdType: '1',
							iOp1No: '2994',
							sOp1Name: '2인',
							iOp1Price: '0',
							iOp2No: null,
							sOp2Name: null,
							iOp2Price: '0',
							iOp3No: null,
							sOp3Name: null,
							iOp3Price: '0',
							iOp4No: null,
							sOp4Name: null,
							iOp4Price: '0',
							sAddGoodsTxt: util.fncRnArr(
								'햄사리 (3,000원)\r\n우동사리 (2,000원)\r\n새우볼 (3,000원)\r\n놀부부대세트 (21,000원)'
							),
							iAddGoodsSum: '29000',
							sAddGoodsAbleYn: 'Y',
							sMenuStatus: '1',
						},
						{
							iMenuSeq: '4505',
							iMenuGoodsSeqNo: '5008',
							sGoodsName: '자몽에이드',
							iMenuPrice: '6000',
							sOrdType: '1',
							iOp1No: null,
							sOp1Name: null,
							iOp1Price: '0',
							iOp2No: null,
							sOp2Name: null,
							iOp2Price: '0',
							iOp3No: null,
							sOp3Name: null,
							iOp3Price: '0',
							iOp4No: null,
							sOp4Name: null,
							iOp4Price: '0',
							sAddGoodsTxt: null,
							iAddGoodsSum: null,
							sAddGoodsAbleYn: 'Y',
							sMenuStatus: '1',
						},
					],
				},
			],
		};
	},

	methods: {
		fncMoneyFormat(str) {
			return util.fncMoneyFormat(str);
		},
	},
	watch: {
		array: {
			deep: true,
		},
	},
});
</script>

<style lang="scss"></style>
