<template>
	<view>
		<view class="compony-detail">
			<!--  -->
			<view class="compony-detail-pic">
				<image src="../../../static/img/5b45cb4b08550.jpg" mode="" class="img"></image>
			</view>
			<view class="compony-detail-info">
				<view class="compony-detail-info-header flex row">
					<view class="logo"><image src="../../../static/logo.png" mode="" class="logo-img"></image></view>
					<view class="compony-name">广州xxxx科技有限公司</view>
				</view>
				<view class="compony-detail-info-address flex row row_between">
							<view class="address flex row">
								<view class="iconfont icon-zhifeiji"></view>
								<view class="">	广州</view>
							</view>
							
								<view class="address flex row">
								<view class="iconfont icon-zhifeiji"></view>
								<view class="">	020-12345678</view>
							</view>
							
								<view class="address flex row">
								<view class="iconfont icon-zhifeiji"></view>
								<view class="">主营：服务/产品</view>
							</view>
				
				</view>
				<view class="compony-detail-info-cotent flex col">
					<view class="compony-detail-info-cotent-header">
						公司简介
					</view>
					<rich-text class="compony-detail-info-cotent-text" :nodes="word"></rich-text>
					
				</view>
			</view>
			<!--  -->
	
		</view>
		<!-- 产品服务 -->
		<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					产品服务
				</view>
				<view class="index-notice-header-more">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in 3">
					<view class="index-notice-content-img flex">
						<image src="../../../static/img/yhr.jpg" mode="" class="img"></image>
					</view>
					<view class="index-notice-content-right flex col">
							<view class="index-notice-content-right-title">
								共享按摩椅转租信息
							</view>
							<view class="index-notice-content-right-text">
								提升酒店硬件配置，营造良好用户体验酒
								店硬件配置，营造良好用户体验!
							</view>
							<!-- <view class="index-notice-content-right-date">
								2019年04月08日
							</view> -->
					</view>
			</view>
		</view>  
		<!--  -->
		<!-- 需求资源 -->
		<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					需求资源
				</view>
				<view class="index-notice-header-more">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in 3">
					<view class="index-notice-content-img flex">
						<image src="../../../static/img/yhr.jpg" mode="" class="img"></image>
					</view>
					<view class="index-notice-content-right flex col">
							<view class="index-notice-content-right-title">
								共享按摩椅转租信息
							</view>
							<view class="index-notice-content-right-text">
								提升酒店硬件配置，营造良好用户体验酒
								店硬件配置，营造良好用户体验!
							</view>
							<!-- <view class="index-notice-content-right-date">
								2019年04月08日
							</view> -->
					</view>
			</view>
		</view>  
		<!--  -->
			<!-- 需求资源 -->
		<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					供应资源
				</view>
				<view class="index-notice-header-more">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in 3">
					<view class="index-notice-content-img flex">
						<image src="../../../static/img/yhr.jpg" mode="" class="img"></image>
					</view>
					<view class="index-notice-content-right flex col">
							<view class="index-notice-content-right-title">
								共享按摩椅转租信息
							</view>
							<view class="index-notice-content-right-text">
								提升酒店硬件配置，营造良好用户体验酒
								店硬件配置，营造良好用户体验!
							</view>
							<!-- <view class="index-notice-content-right-date">
								2019年04月08日
							</view> -->
					</view>
			</view>
		</view>  
	</view>
</template>

<script>
	export default {
		data() {
			return {
				word:"商家诉求大多相同、市场上的选择却如万花筒一般，美团服务市场上百家优质服务商入驻，共同为商家提供全品类服务。解决品牌、连锁、单店等各类商家经营真实需求。同时，美团服务市场也诚邀各垂直领域优质服务商入驻，合作共赢等你来站！"
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
		color: #333333;
			background: #e8e7e7;
	}
.compony-detail{
	background: #ffffff;
	width: 90%;
	margin: 10upx auto;
	.compony-detail-pic{
		width: 100%;
		height: 300upx;
		.img{
			width:100%;
			height: 100%;
		}
	}
	.compony-detail-info{
		width: 100%;
		.compony-detail-info-header{
			width: 90%;
			margin: 0 auto;
			height: 120upx;
			align-items: center;
			.logo{
				width: 80upx;
				height: 80upx;
				.logo-img{
					width: 100%;
					height: 100%;
				}
			}
			.compony-name{
				font-size: 32upx;
				font-weight: 600;
				margin-left: 30upx;
			}
		}
		.compony-detail-info-address{
			width: 90%;
			margin: 20upx auto;
			font-size: 28upx;
			color: #666666;
			height: 70upx;
			border-bottom:1px solid #DDDDDD;
		}
		.compony-detail-info-cotent{
			width: 90%;
			margin: 30upx auto;
			.compony-detail-info-cotent-header{
				color: #000000;
				font-size: 32upx;
				font-weight: 600;
			}
			.compony-detail-info-cotent-text{
				margin-top: 30upx;
				font-size: 28upx;
				color: #333333;
				line-height: 40upx;
			}
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
				width: 165upx;
				height: 165upx;
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
			}
		}
	}
}
</style>
