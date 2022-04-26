<template lang="">
	<li v-for="postItem in postList" :key="postItem._id">
		<div class="post-title">
			{{ postItem.title }}
		</div>
		<div class="post-contents">
			{{ postItem.contents }}
		</div>
		<div class="post-time">
			{{ postItem.createdAt }}
		</div>
	</li>
</template>
<script>
export default {
	name: 'postList',
	props: {
		postList: {
			type: Array,
		},
	},
};
</script>
<style lang="scss">
li {
	display: flex;
	border-bottom: 1px solid #ddd;
	padding: 10px 0;
	> div {
		margin-right: 10px;
	}
}
</style>
