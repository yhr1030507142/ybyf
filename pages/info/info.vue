<template>
	<view>
		<view class="info">
			<view class="info-header flex row">
	
				<!-- <view class="info-header-btn flex row row_center"  :class="[active:info-header-btn-active?'']">供应信息</view> -->
				<view class="info-header-btn flex col" :class="[active==1?'info-header-btn-active':'']"  @tap="changeActive(1)">
					<text>供应信息</text>
					<view class="line" v-show="active==1"></view>
				</view>
				<view class="info-header-btn flex col" :class="[active==2 ?'info-header-btn-active':'']" @tap="changeActive(2)">
					<text>需求信息</text>
					<view class="line" v-show="active==2"></view>
					</view>
			</view>
			
				<!-- 需求资源 -->
			<view class="index-notice flex col">
				<view class="index-notice-content flex row" v-for="(v,i) in 3">
						<view class="index-notice-content-img flex">
							<image src="../../static/img/yhr.jpg" mode="" class="img"></image>
						</view>
						<view class="index-notice-content-right flex col">
								<view class="index-notice-content-right-title">
									共享按摩椅转租信息
								</view>
								<view class="index-notice-content-right-text">
									提升酒店硬件配置，营造良好用户体验酒
									店硬件配置，营造良好用户体验!
								</view>
								<view class="index-notice-content-right-date flex row">
										<view class="flex row position-icon">
										
										<view class="">2019年04月08日</view>
									</view>
										<view class="flex row">
										<view class="iconfont icon-zhifeiji"></view>
										<view class="">互联网</view>
									</view>
								</view>
						</view>
				</view>
			</view>  
			<!--  -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active:1,
				activeClass:"info-header-btn-active"
			}
		},
		methods: {
			changeActive:function(i){
				this.active=i
			}
		}
	}
</script>

<style lang="scss">
page{
		color: #333333;
		background: #e8e7e7;
	}
.info{
	width: 90%;
	margin: 10upx auto;
	background: #ffffff;
	.info-header{
		width: 100%;
		height: 120upx;
		font-size: 28upx;
		justify-content: space-around;
		.info-header-btn{
			width: 50%;
			height: 100%;
			justify-content: center;
			align-items: center;
			.line{
				width: 60upx;
				height: 6upx;
				background: #1758EA;
				margin-top: 6upx;
			}
		}
		.info-header-btn-active{
			font-size: 32upx;
			font-weight: 600;
			color: #333333;
		}
	}
}
.index-notice{
	background: #ffffff;
	width: 90%;
	margin: 30upx auto;
	.index-notice-header{
		width: 90%;
		margin: 0 auto;
		height: 120upx;
		align-items: center;
		.index-notice-header-tilte{
			font-size: 40upx;
			font-weight: 800;
			color: #000000;
		}
		.index-notice-header-more{
			font-size: 28upx;
			color: #999999;
		}
	}
	.index-notice-content{
		width: 90%;
		margin: 0 auto;
		padding-bottom: 30upx;
		.index-notice-content-img{
			.img{
				width: 155upx;
				height: 155upx;
			}
		}
		.index-notice-content-right{
			margin-left: 20upx;
			flex: 1;
			font-size: 28upx;
			justify-content: space-between;
			.index-notice-content-right-title{
				font-size: 32upx;
				color: #000000;
				font-weight: 600;
			}
			.index-notice-content-right-text{
				font-size: 28upx;
				color: #999999;
				margin-top: 10upx;
			}
			.index-notice-content-right-date{
				margin-top: 10upx;
				font-size: 24upx;
				color: #999999;
				.position-icon{
						margin-right: 30upx;
					}
			}
		}
	}
}
</style>
