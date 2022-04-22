<template>
	<div class="main_banner">
		<div class="banner_slide">
			<swiper :slides-per-view="1">
				<swiper-slide class="default_banner">
					<div class="text-box">
						<h2>인생맛집을 만나다</h2>
						<p>빅데이터로 만나는 인생맛집!</p>
					</div>
					<a href="javascript:;" class="blind link">
						이벤트 바로가기
					</a>
				</swiper-slide>
				<swiper-slide v-for="(item, i) in banners" :key="i">
					<div class="img_banner_slide">
						<img
							:src="slide.imgPath + item.sBannerImgFile"
							alt=""
						/>
					</div>
				</swiper-slide>

				<swiper-slide v-for="(item, i) in banners" :key="i">
					<div class="img_banner_slide">
						<img
							:src="slide.imgPath + item.sBannerImgFile"
							alt=""
						/>
					</div>
				</swiper-slide>

				<div className="page_num ">
					<strong>{{ slide.index }}</strong
					><i>/</i>
					<span>
						{{ slide.size }}
					</span>
				</div>
			</swiper>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from '@/assets/api/main';
const main = new Main();
// import Swiper core and required components
import SwiperCore, { Navigation, Autoplay } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

// install Swiper components
SwiperCore.use([Navigation, Autoplay]);

export default defineComponent({
	components: {
		Swiper,
		SwiperSlide,
	},

	data() {
		return {
			banners: [],
			slide: {
				imgPath:
					'https://tsmartshop.mannashop.co.kr/imgreader.php?t=1&f=',
				index: 1,
				size: 0,
			},

			swiperOptions: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 10,
				autoplay: true,
			},
		};
	},

	created() {
		console.log('asdfa');
		this.onLoadBanner();
	},

	methods: {
		async onLoadBanner() {
			try {
				const res = await main.fetchBanner();

				this.banners = res.data?.aBannerList;

				this.slide.size = this.banners.length;
			} catch (error) {
				console.log('error', error);
			}
		},
	},
});
</script>
