<template>
	<div id="header" v-bind:class="[options.type === 'main' ? 'main' : '']">
		<div class="header-row">
			<button class="bookmark" title="북마크" v-if="options.type === 'main'"></button>

			<span class="history-back" v-if="options.btype === 'back'" @click="gotoBack">
				<button>
					<img src="~@/assets/img/icon/Components_Back_button.png" alt="back" />
				</button>
			</span>

			<h1>
				{{ options.name }}
			</h1>

			<ul class="quick-link" v-if="options.type === 'main'">
				<li>
					<a class="blind call" href="tel:01000000000" title="전화"></a>
				</li>
				<li>
					<router-link to="/mns/order" class="blind shop" title="샵으로이동"></router-link>
				</li>
				<li>
					<router-link to="/mns/review" class="blind review" title="리뷰로이동"></router-link>
				</li>
			</ul>

			<span class="right_icon" v-if="options.btype === 'close'">
				<button onClick="{history.goBack}">
					<img src="" alt="닫기" />
				</button>
			</span>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	props: ["options"],
	data() {
		return {};
	},

	components: {},
	methods: {
		gotoBack() {
			this.$router.go(-1);
		}
	}
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_header.scss";
</style>
