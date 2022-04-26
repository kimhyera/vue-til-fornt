<template>
	<div class="contents">
		<div class="form-wrapper">
			<h1 class="page-header">Create Post</h1>
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title:</label>
					<input
						id="title"
						type="text"
						v-model="title"
						class="form-input"
					/>
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea
						id="contents"
						type="text"
						rows="5"
						v-model="contents"
						class="form-input"
					/>
					<p
						v-if="!isContentsValid"
						class="validation-text warning isContentTooLong"
					>
						Contents length must be less than 250
					</p>
				</div>
				<div class="text-left mt-10">
					<button type="submit" class="btn btn-outline-light mr-5">
						Create
					</button>

					<a href="/main" class="btn btn-dark">목록</a>
				</div>
			</form>
			<p class="log">
				{{ logMessage }}
			</p>
		</div>
	</div>
</template>

<style>
.form-wrapper {
	width: 600px;
	margin: 0 auto;
}
</style>

<script>
import { ref } from 'vue';
import { createPost } from '@/api/index';

export default {
	name: 'postWhite',
	emits: ['add-post'],
	setup() {
		const title = ref('');
		const contents = ref('');
		const logMessage = ref('');

		const submitForm = async () => {
			try {
				const response = await createPost({
					title: title.value,
					contents: contents.value,
				});
				console.log(response);
				logMessage.value = '등록되었습니다.';
			} catch (error) {
				console.log(error.response.data.message);
				logMessage.value = error.response.data.message;
			}
		};

		return {
			title,
			contents,
			logMessage,
			submitForm,
		};
	},
};
</script>
