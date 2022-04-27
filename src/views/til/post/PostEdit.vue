<template lang="">
	<div class="form-container">
		<post-edit-form></post-edit-form>
	</div>
</template>
<script>
import PostEditForm from '@/components/til/post/PostEditForm.vue';

export default {
	components: { PostEditForm },
	props: {
		id: {
			type: String,
			required: true,
		},
	},

	setup(props) {
		console.log('porps', props);
	},
};
</script>
<style lang=""></style>
