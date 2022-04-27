<template lang="">
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title:</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea
						id="contents"
						type="text"
						rows="5"
						v-model="contents"
					/>

					<p
						v-if="!isContentsValid"
						class="validation-text warning isContentTooLong"
					>
						10자 이하로 써주세요~
					</p>
				</div>
				<button type="submit" class="btn btn-primary-1">Edit</button>
			</form>

			<p class="log">
				{{ logMessage }}
			</p>
		</div>
	</div>
</template>
<script lang="ts">
import { watchEffect, ref, defineComponent, computed } from 'vue';
import { fetchPost, editPost } from '@/api/index';

import { useRoute, useRouter } from 'vue-router';

export default {
	setup() {
		const route = useRoute();
		const router = useRouter();

		const contents = ref('');
		const title = ref('');

		const logMessage = ref('');

		const id = route.params.id;
		const isTyping = ref(false);

		const isContentsValid = computed(() => {
			return contents.value.length <= 10;
		});

		watchEffect(() => {
			console.log(isTyping.value);

			if (contents.value.length <= 10) {
				isTyping.value = true;
			} else {
				isTyping.value = false;
			}
		});

		//특정 post 불러오기
		const loadPost = async () => {
			try {
				const { data } = await fetchPost(id);

				contents.value = data.contents;
				title.value = data.title;
			} catch (error) {
				console.log('asdf');
				console.log(error.response.data.message);
			}
		};

		loadPost();

		//수정하기

		async function submitForm() {
			try {
				await editPost(id, {
					title: title.value,
					contents: contents.value,
				});
				router.push('/main');
			} catch (error) {
				console.log(error);
				logMessage.value = error;
			}
		}

		return {
			title,
			contents,
			submitForm,
			logMessage,
			isContentsValid,
		};
	},
};
</script>
<style lang=""></style>
