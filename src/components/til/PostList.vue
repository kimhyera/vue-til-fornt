<template lang="">
	<li v-for="postItem in postList" :key="postItem._id">
		<div class="post-title">
			<a :href="`/post/${postItem._id}`">
				{{ postItem.title }}
			</a>
		</div>
		<div class="post-contents">
			<router-link
				:to="{
					name: 'PostEdit',
					params: { id: postItem._id.toString() },
				}"
			>
				{{ postItem.contents }}</router-link
			>
		</div>
		<div class="post-time">
			{{ postItem.createdAt }}

			<button
				class="btn btn-outline-light"
				@click="deleteItem(postItem._id)"
			>
				삭제
			</button>
		</div>
	</li>
</template>
<script>
import { deletePost } from '@/api/index';
export default {
	name: 'postList',
	props: {
		postList: {
			type: Array,
		},
	},
	emits: ['loadPostList'],
	setup(props, { emit }) {
		async function deleteItem(id) {
			try {
				const { data } = await deletePost(id);

				console.log(data);

				alert('게시물이 삭제 되었습니ㅏ다');

				// emit('refresh');

				emit('loadPostList');
			} catch (error) {
				console.log('asdf');
				console.log(error.response.data.message);
			}
		}

		return {
			deleteItem,
		};
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
