<template>
	<header id="header">
		<div class="floatclear">
			<h1>
				<span @click="backRouter">
					<img src="@/assets/img/icon/Components_Back_button.png" alt="back" />
				</span>
				<button>{{ options.title }}</button>
			</h1>
		</div>
	</header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	props: ["options"],
	methods: {
		backRouter() {
			this.$router.go(-1);
		}
	}
});
</script>
