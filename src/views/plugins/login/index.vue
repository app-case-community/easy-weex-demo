<template>
	<w-view class="page_login">
        <text>登录界面</text>
		<!-- 头部logo -->
		<w-view class="head">
			<image class="head_logo" />
		</w-view>
		<!-- 登录form -->
		<w-view class="login_form">
			<w-view class="input">
				<image class="img" />
				<input type="text" placeholder="请输入用户账号">
				<image class="img" />
			</w-view>
			<w-view class="line" />
			<w-view class="input">
				<image class="img" />
				<input password type="password" placeholder="请输入密码">
				<image class="img" />
			</w-view>
		</w-view>
		<!-- 登录提交 -->
		<!-- <button class="submit" type="primary" @tap="login">登录</button> -->
		<w-view class="opts">
			<text>立即注册</text>
			<text>忘记密码？</text>
		</w-view>
		<w-view class="quick_login_line">
			<w-view class="line" />
			<text class="text">快速登录</text>
			<w-view class="line" />
		</w-view>
		<w-view class="quick_login_list">
			<image class="item" />
			<image class="item" />
			<image class="item" />
		</w-view>
	</w-view>
</template>
<script>
    import WView from 'v-miniui/packages/view'
	export default {
        components: {WView},
		methods: {
			login() {}
		}
	}
</script>
<style lang="scss" scoped>
	$logo-padding: 60px;
	$img-size: 50px;
	$page-background-color: darkcyan;
	
	page {
		background-color: $page-background-color;
	}
	.page_login {
		padding: 20px;
		min-height: 100%;
		background-color: $page-background-color;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: $logo-padding;
		padding-bottom: $logo-padding;

		.head_logo {
			width: $img-size;
			height: $img-size;
		}
	}

	.login_form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid yellow;
		border-radius: 5px;

		// padding: 10px;
		.line {
			width: 100%;
			height: 1px;
			background-color: aqua;
		}

		.input {
			display: flex;
			padding: 3px;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.img {
				width: 25px;
				height: 25px;
				margin: 5px;
			}

			input {
				outline: none;
				height: 45px;
				// width: 240px;

				&focus {
					outline: none;
				}
			}
		}
	}

	.submit {
		margin-top: 30px;
		width: 100%;
	}

	.opts {
		margin-top: 10px;
		min-width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		text {
			font-size: 15px;
		}
	}

	.quick_login_line {
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.line {
			height: 1px;
			width: 38%;
			background-color: red;
		}

		.text {
			font-size: 13px;
			color: antiquewhite;
			margin: 2px;
		}
	}

	.quick_login_list {
		margin-top: 30px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.item {
			width: 50px;
			height: 50px;
			margin: 20px;
		}
	}
</style>
