<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>

			<loading-spinner v-if="isLoading"></loading-spinner>
			<post-list v-else :postList="postList"></post-list>
			<br />

			<div class="text-right">
				<!-- <a="/postWrite" class="btn btn-primary-2">
					글쓰기
				</r> -->
			</div>
		</div>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/til/LoadingSpinner.vue';
import PostList from '@/components/til/PostList.vue';
import { ref } from '@vue/reactivity';
import { fetchPosts } from '@/api/index';

export default {
	components: { LoadingSpinner, PostList },
	setup() {
		const postList = ref([]);

		const isLoading = ref(false);

		const loadPostList = async () => {
			isLoading.value = true;
			try {
				const { data } = await fetchPosts();
				postList.value = data.posts;
				isLoading.value = false;
			} catch (error) {
				console.log(error.response.data);
			}
		};

		loadPostList();

		return {
			postList,
			isLoading,
		};
	},
};
</script>

<style></style>
