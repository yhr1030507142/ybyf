<template>
	<view>
		<view class="mine-header flex col">
			<view class="mine-header-pic">
				<image src="../../static/img/yhr.jpg" mode="" class="img"></image>
			</view>
			<view class="mine-header-title">
				阿拉丁工程有限公司
			</view>
			<view class="mine-header-btnBox flex row">
				<view class="mine-header-btn">
					<text class="iconfont icon-zhifeiji"></text>
					认证企业
				</view>
				<view class="mine-header-btn">
					<text class="iconfont icon-zhifeiji"></text>

					认证企业
				</view>

			</view>
		</view>
		<view class="mine-content">
			<view class="mine-content-head">
				我的服务
			</view>
			<view class="mine-content-text flex row row_between">
				<view class="mine-content-text-server flex col">
					<view class="mine-content-text-server-top">
						<view class="iconfont icon-fuwu icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的发布</view>		
				</view>
					
				<view class="mine-content-text-server flex col">
					<view class="mine-content-text-server-top">
						<view class="iconfont icon-fuwu icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的发布</view>		
				</view>
				
				<view class="mine-content-text-server flex col">
					<view class="mine-content-text-server-top">
						<view class="iconfont icon-fuwu icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的发布</view>		
				</view>
				
				<view class="mine-content-text-server flex col">
					<view class="mine-content-text-server-top">
						<view class="iconfont icon-fuwu icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的发布</view>		
				</view>
				
				<view class="mine-content-text-server flex col">
					<view class="mine-content-text-server-top">
						<view class="iconfont icon-fuwu icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的发布</view>		
				</view>
				
				<view class="mine-content-text-server flex col">
					<view class="mine-content-text-server-top">
						<view class="iconfont icon-fuwu icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的发布</view>		
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.mine-header{
	width: 100%;
	height: 500upx;
	background: url("../../static/img/yhr.jpg") no-repeat;
	background-size:cover;
	align-items: center;
	.mine-header-pic{
		width: 130upx;
		height: 130upx;
		border-radius:50%;
		margin-top: 50upx;
		.img{
			width: 100%;
			height: 100%;
			border-radius:50%;
		}
	}
	.mine-header-title{
		margin-top: 50upx;
		color: #000000;
		font-size: 32upx;
		font-weight: 600;
	}
	.mine-header-btnBox{
		margin-top: 30upx;
		width: 70%;
		justify-content: space-around;
		.mine-header-btn{
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			border-radius:10upx;
			width: 45%;
			height: 70upx;
			background: #1758EA;
			color: #ffffff;
			font-size: 28upx;
		}
	}
}

.mine-content{
	width: 90%;
	margin: 100upx auto;
	.mine-content-head{
		width: 90%;
		margin: 0 auto;
		height: 100upx;
		font-size: 36upx;
		color: #000000;
		font-weight: 600;
	}
	.mine-content-text{
		width: 90%;
		margin: 0 auto;
		height: 100upx;
		font-size: 32upx;
		color: #000000;
		flex-wrap: wrap;
		.mine-content-text-server{
			align-items: center;
			width: 26%;
			height: 250upx;
			.mine-content-text-server-top{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 150upx;
				background: #1758EA;
				color: #ffffff;
				border-radius:10upx;
				.icon{
					font-size: 60upx;
				}
			}
			.mine-content-text-server-bottom{
				margin-top:10upx;
			}
		}
	}
}
</style>
