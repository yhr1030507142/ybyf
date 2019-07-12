<template>
	<view>
		<view class="compony">
			<view class="compony-header flex row">
				<view class="compony-header-left flex row">
					<view class="compony-header-left-word">
						分类
					</view>
					<view class="iconfont icon-xiala icon"></view>
				</view>
				<view class="compony-header-right flex">
					 <input type="text" class="search" v-model="SearchInput" placeholder="请输入搜索关键字"  placeholder-style="font-size:24upx;">
					<view class="icon" @tap="searchContent()">
						<image src="../../static/img/search.png" mode="" class="img"></image> 
					</view>
				</view>
			</view>
			
			<!--  -->
				<!-- 活动公告 -->
			<view class="index-notice flex col">
				<view class="index-notice-header flex row row_between">
					<view class="index-notice-header-tilte">
						活动公告
					</view>
					<view class="index-notice-header-more">
						查看更多>
					</view>
				</view>
				<view class="index-notice-content flex row" v-for="(v,i) in 10">
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
										<view class="iconfont icon-zhifeiji"></view>
										<view class="">互联网</view>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background: #e8e7e7;
}
.compony{
	width: 90%;
	margin: 10upx auto;
	.compony-header{
		width: 100%;
		height: 70upx;
		.compony-header-left{
			width: 20%;
			height: 100%;
			font-size: 24upx;
			background: #1758EA;
			color: #ffffff;
			justify-content: center;
			align-items: center;
			.icon{
				font-size: 56upx;
			}
		}
		.compony-header-right{
			width:80%;
			height: 100%;
			position: relative;
			background: #ffffff;
			font-size: 24upx;
			.search{
				width: 90%;
				border-radius: 2px;
				border: 1upx solid #dddddd;
				height: 70upx;
				padding-left: 10%;
			}
			.compony-header-left-word{
				margin-left: 20upx; 
			}
			.icon{
				position: absolute;
				right: 20upx;
				top: 10upx;
				width: 45upx;
				height: 45upx;
				.img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.index-notice{
		background: #ffffff;
		
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
				width: 30%;
				.img{
					width: 150upx;
					height:150upx;
				}
			}
			.index-notice-content-right{
				justify-content: space-between;
				width: 60%;
				margin-left: 20upx;
				flex: 1;
				font-size: 28upx;
				.index-notice-content-right-title{
					font-size: 32upx;
					color: #000000;
					font-weight: 600;
				}
				.index-notice-content-right-text{
					font-size: 28upx;
					color: #999999;
					margin-top: 10upx;
					height:80upx;
					width: 100%;
					overflow: hidden;
					word-break: break-all;/*允许在单词内换行*/
					text-overflow: ellipsis;
				    white-space: wrap;
					 display:-webkit-box; 
					-webkit-line-clamp:2;
					-webkit-box-orient:vertical;
				}
				.index-notice-content-right-date{
					margin-top: 10upx;
					font-size: 24upx;
					color: #1758EA;
					.position-icon{
						margin-right: 30upx;
					}
				}
			}
		}
	}
}
</style>
