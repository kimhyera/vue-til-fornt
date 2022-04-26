<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>

			<loading-spinner></loading-spinner>
			<post-list></post-list>
		</div>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/til/LoadingSpinner.vue';
import PostList from '@/components/til/PostList.vue';
import { ref, onMounted } from '@vue/reactivity';
import { fetchPosts } from '@/api/index';

export default {
	components: { LoadingSpinner, PostList },
	setup() {
		const postList = ref([]);

		const loadPostList = async () => {
			const data = await fetchPosts();

			console.log(data);

			postList.value = data;
		};

		loadPostList();

		return {
			postList,
		};
	},
};
</script>

<style></style>
