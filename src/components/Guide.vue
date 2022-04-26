<template>
	<div class="guide-wrapper">
		<dl class="card">
			<dt>
				<h1 class="title">Color</h1>
			</dt>
			<dd>
				<h2 class="title-sub">Normal</h2>
				<div>
					<span class="color-box bg-primary-1"> primary-1 </span>
					<span class="color-box bg-primary-2"> primary-2 </span>
					<span class="color-box bg-light">light</span>

					<span class="color-box bg-dark">dark</span>
				</div>
			</dd>
		</dl>
		<dl class="card">
			<dt>
				<h1 class="title">Button</h1>
			</dt>
			<dd>
				<h2 class="title-sub">Normal</h2>
				<div>
					<button type="button" class="btn btn-primary-1">
						primary-1
					</button>
					<button type="button" class="btn btn-primary-2">
						primary-2
					</button>
					<button type="button" class="btn btn-light">light</button>

					<button type="button" class="btn btn-dark">dark</button>
				</div>

				<h2 class="title-sub">on state</h2>

				<div>
					<button type="button" class="btn btn-primary-1 on">
						primary-1
					</button>
					<button type="button" class="btn btn-primary-2 on">
						primary-2
					</button>
					<button type="button" class="btn btn-light on">
						light
					</button>

					<button type="button" class="btn btn-dark on">dark</button>
				</div>

				<h2 class="title-sub">Disabled</h2>

				<div>
					<button type="button" class="btn btn-primary-1" disabled>
						primary-1
					</button>
					<button type="button" class="btn btn-primary-2" disabled>
						primary-2
					</button>

					<button type="button" class="btn btn-light" disabled>
						light
					</button>

					<button type="button" class="btn btn-dark" disabled>
						dark
					</button>
				</div>
			</dd>
		</dl>
		<dl class="card">
			<dt>
				<h1 class="title">Button Size</h1>
			</dt>
			<dd>
				<h2 class="title-sub">col full</h2>
				<div>
					<button type="button" class="btn btn-dark">확인</button>
				</div>

				<h2 class="title-sub">col 2</h2>
				<div class="d-flex">
					<button type="button" class="btn btn-dark">아니오</button>

					<button type="button" class="btn btn-light">예</button>
				</div>

				<h2 class="title-sub">width auto</h2>
				<div>
					<button type="button" class="btn btn-light w-auto">
						중복확인
					</button>

					<button type="button" class="btn btn-primary-1 w-auto">
						중복확인
					</button>
					<button type="button" class="btn btn-primary-1">
						확인
					</button>
				</div>

				<h2 class="title-sub">on state</h2>

				<div>
					<button type="button" class="btn btn-primary-1 on">
						primary-1
					</button>
					<button type="button" class="btn btn-primary-2 on">
						primary-2
					</button>
					<button type="button" class="btn btn-light on">
						light
					</button>

					<button type="button" class="btn btn-dark on">dark</button>
				</div>

				<h2 class="title-sub">Disabled</h2>

				<div>
					<button type="button" class="btn btn-primary-1" disabled>
						primary-1
					</button>
					<button type="button" class="btn btn-primary-2" disabled>
						primary-2
					</button>

					<button type="button" class="btn btn-light" disabled>
						light
					</button>

					<button type="button" class="btn btn-dark" disabled>
						dark
					</button>
				</div>
			</dd>
		</dl>
		<dl class="card">
			<dt>
				<h1 class="title">Button wrap</h1>
			</dt>
			<dd>
				<h2 class="title-sub">인증</h2>
				<div></div>

				<h2 class="title-sub">on state</h2>

				<div>
					<button type="button" class="btn btn-primary-1 on">
						primary-1
					</button>
					<button type="button" class="btn btn-primary-2 on">
						primary-2
					</button>
					<button type="button" class="btn btn-primary-3 on">
						primary-3
					</button>
				</div>

				<h2 class="title-sub">Disabled</h2>

				<div>
					<button type="button" class="btn btn-primary-1" disabled>
						primary-1
					</button>
					<button type="button" class="btn btn-primary-2" disabled>
						primary-2
					</button>
					<button type="button" class="btn btn-primary-3" disabled>
						primary-3
					</button>
				</div>
			</dd>
		</dl>

		<div class="row">
			<div class="col-6">
				<dl class="card">
					<dt>
						<h1 class="title">checkbox</h1>
					</dt>
					<dd>
						<div class="form-check-wrap">
							<input
								class="form-check-input"
								id="flexCheckDefault"
								type="checkbox"
							/>
							<label
								class="form-check-label"
								for="flexCheckDefault"
								>Default checkbox</label
							>
						</div>
						<div class="form-check-wrap">
							<input
								class="form-check-input"
								id="flexRadioDefault2"
								type="checkbox"
								name="flexRadioDefault2"
								checked=""
							/>
							<label
								class="form-check-label"
								for="flexRadioDefault2"
								>Default checked checkbox</label
							>
						</div>

						<div class="form-check-wrap">
							<input
								class="form-check-input"
								id="flexRadioDisabled"
								type="checkbox"
								name="flexRadioDisabled"
								disabled=""
							/>
							<label
								class="form-check-label"
								for="flexRadioDisabled"
								>Disabled checkbox</label
							>
						</div>
						<div class="form-check-wrap">
							<input
								class="form-check-input"
								id="flexRadioDisabled"
								type="checkbox"
								name="flexRadioDisabled"
								checked
								disabled=""
							/>
							<label
								class="form-check-label"
								for="flexRadioDisabled"
								>Disabled checkbox</label
							>
						</div>
					</dd>
				</dl>
			</div>
			<div class="col-6">
				<dl class="card">
					<dt>
						<h1 class="title">Radio input</h1>
					</dt>
					<dd>
						<div class="form-check-wrap">
							<input
								class="form-check-input"
								id="flexRadioDefault1"
								type="radio"
								name="flexRadioDefault"
							/>
							<label
								class="form-check-label"
								for="flexRadioDefault1"
								>Default radio</label
							>
						</div>
						<div class="form-check-wrap">
							<input
								class="form-check-input"
								id="flexRadioDefault2"
								type="radio"
								name="flexRadioDefault"
								checked=""
							/>
							<label
								class="form-check-label"
								for="flexRadioDefault2"
								>Default checked radio</label
							>
						</div>

						<div class="form-check-wrap">
							<input
								class="form-check-input"
								id="flexRadioDisabled"
								type="radio"
								name="flexRadioDisabled"
								disabled=""
							/>
							<label
								class="form-check-label"
								for="flexRadioDisabled"
								>Disabled radio</label
							>
						</div>
						<div class="form-check-wrap">
							<input
								class="form-check-input"
								id="flexRadioDisabled"
								type="radio"
								name="flexRadioDisabled"
								checked
								disabled=""
							/>
							<label
								class="form-check-label"
								for="flexRadioDisabled"
								>Disabled radio</label
							>
						</div>
					</dd>
				</dl>
			</div>
		</div>

		<dl class="card">
			<dt>
				<h1 class="title">Select</h1>
			</dt>
			<dd>
				<h2 class="title-sub">Normal</h2>
				<div class="form-select-wrap">
					<select name="" id="" class="form-select form-input-md">
						<option value="">브랜드 전체 01</option>
						<option value="">브랜드 전체 02</option>
						<option value="">브랜드 전체 03</option>
					</select>
				</div>

				<h2 class="title-sub">Disabled</h2>

				<div class="form-select-wrap">
					<select
						name=""
						id=""
						class="form-select form-input-md"
						disabled
					>
						<option value="">브랜드 전체 01</option>
						<option value="">브랜드 전체 02</option>
						<option value="">브랜드 전체 03</option>
					</select>
				</div>
			</dd>
		</dl>

		<dl class="card">
			<dt>
				<h1 class="title">Text Input</h1>
			</dt>
			<dd>
				<div class="row">
					<div class="col-6">
						<h2 class="title-sub">Normal</h2>
						<div>
							<input type="text" class="input-form" />
						</div>

						<h2 class="title-sub">Disabled</h2>

						<div>
							<input type="text" class="input-form" disabled />
						</div>

						<h2 class="title-sub">error</h2>

						<div>
							<input type="text" class="input-form error" focus />
						</div>

						<span class="error-msg">
							비밀번호가 다릅니다. 다시 한번 확인해주세요.
						</span>
					</div>

					<div class="col-6">
						<h2 class="title-sub">중복확인</h2>

						<div>
							<input type="text" class="input-form" />
						</div>

						<h2 class="title-sub">인증확인</h2>

						<div>
							<input type="text" class="input-form" />
						</div>

						<h2 class="title-sub">date</h2>

						<div>
							<input type="text" class="input-form" />
						</div>
					</div>
				</div>
			</dd>
		</dl>

		<dl class="card">
			<dt>
				<h1 class="title">Textarea</h1>
			</dt>
			<dd>
				<div class="row">
					<div class="col-6">
						<h2 class="title-sub">Normal</h2>
						<div>
							<textarea
								name=""
								class="form-textarea"
								id=""
								cols="30"
								rows="10"
								placeholder="최소 10자 이상 솔직한 리뷰를 남겨주세요!"
							></textarea>
						</div>
					</div>

					<div class="col-6">
						<h2 class="title-sub">Disabled</h2>

						<div>
							<textarea
								disabled
								name=""
								class="form-textarea"
								id=""
								cols="30"
								rows="10"
								placeholder="최소 10자 이상 솔직한 리뷰를 남겨주세요!"
							></textarea>
						</div>
					</div>
				</div>
			</dd>
		</dl>

		<dl class="card">
			<dt>
				<h1 class="title">Shop</h1>
			</dt>
			<dd>
				<div class="row">
					<div class="col-6">
						<h2 class="title-sub">Count</h2>
						<div>- + 수량</div>
					</div>

					<div class="col-6">
						<h2 class="title-sub"></h2>

						<div></div>
					</div>
				</div>
			</dd>
		</dl>
	</div>
</template>

<style lang="scss">
.guide-wrapper {
	max-width: 750px;
	margin: 0 auto;
	padding: 40px 0 100px;
}
.card {
	border: 1px solid #ddd;
	margin-bottom: 20px;
	dt {
		background: #efefef;
		padding: 10px;
	}

	dd {
		padding: 12px 16px;
	}
	.title {
		font-weight: 700;
		color: #000;
		font-size: 20px;
	}

	.title-sub {
		font-size: 18px;
		font-weight: 500;
		padding: 15px 0 10px;
		margin-bottom: 0;
		color: #000;
	}
	.color-box {
		width: 100px;
		border-radius: 3px;
		display: inline-block;
		padding: 10px;
		color: #fff;
	}
}

.form-check-wrap {
	margin-top: 6px;
}
</style>
