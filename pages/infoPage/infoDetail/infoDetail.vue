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
								<view class="">主营：服务/产品</view>
							</view>
				
				</view>
				<view class="compony-detail-info-cotent flex col">
					<view class="compony-detail-info-cotent-header">
						
					</view>
					<rich-text class="compony-detail-info-cotent-text" :nodes="word"></rich-text>
					
				</view>
			</view>
			<!--  -->
	
		</view>
		
		<!--  -->
	
			<!--  -->
		 
		<view class="bottom_btn flex row">
			<view class="bottom_btn_left flex row">
				<view class="bottom_btn_left_block flex col">
					<view class="iconfont icon-zhuanfa icon"></view>
					<view class="">
						转发
					</view>
				</view>
				<view class="bottom_btn_left_block flex col">
						<view class="iconfont icon-shoucang icon"></view>
					<view class="">
						收藏
					</view>
				</view>	
				
			</view>
		    <view class="bottom_btn_right" @tap="apply()">
				直接联系
			</view>
			
		</view>
			 <!--  -->
			 	 <!--  -->
						 <uni-popup :show="showPopupMiddleImg" type="middle" mode="insert" @hidePopup="hidePopup">
							<view class="uni-center center-box modal-pic-box flex col">
								<image  src="../../../static/logo.png" class="modal-pic"></image>
								恭喜你,报名成功
							</view>
						</uni-popup>
						
						 <uni-popup :show="showPopupMiddleImg1" type="middle" mode="insert" @hidePopup="hidePopup1">
							<view class="uni-center center-box modal-pic-box flex col">
								<image  src="../../../static/logo.png" class="modal-pic"></image>
								<view>抱歉，您不是企业用户不能报名</view>
								<view class="authentication">
									去认证企业用户 
								</view>
							</view>
						</uni-popup>
						<!--  -->
	</view>
</template>

<script>
	import {uniPopup} from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue" 
	export default {
		data() {
			return {
				word:"商家诉求大多相同、市场上的选择却如万花筒一般，美团服务市场上百家优质服务商入驻，共同为商家提供全品类服务。解决品牌、连锁、单店等各类商家经营真实需求。同时，美团服务市场也诚邀各垂直领域优质服务商入驻，合作共赢等你来站！"
			}
		},
		methods: {
				apply:function(){
				this.showPopupMiddleImg1 = true
			},
			hidePopup:function(){
				this.showPopupMiddleImg = false
			},
			hidePopup1:function(){
				this.showPopupMiddleImg1 = false
			}
		},
		 components: {uniPopup},
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
			padding-bottom: 200upx;
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

.bottom_btn {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 100upx;
	align-items: center;
	.bottom_btn_left{
		height: 100%;
		background: #ffffff;
		width: 40%;
		font-size: 28upx;
		color: #666666;
		justify-content: center;
		.bottom_btn_left_block{
			flex: 1;
			height: 100%;
			justify-content: center;
			align-items: center;
			.icon{
				font-size: 32upx;
			}
		}
	}
	.bottom_btn_right{
		width: 60%;
		background: #1758EA;
		text-align: center;
		height: 100upx;
		line-height: 100upx;
		color: #ffffff;
		font-size: 28upx;
	}
}
.modal-pic-box{
	width: 500upx;
	height: 450upx;
	background: #ffffff;
	align-items: center;
	border-radius: 10upx;
	font-size: 32upx;
	color: #000000;
	font-weight: 600;
	position: relative;
	.modal-pic{
		width: 300upx;
		height: 200upx;
		margin-top: 30upx;
		margin-bottom: 30upx;
	}
	.authentication{
		width: 100%;
		height: 90upx;
		background: #1758EA;
		color: #ffffff;
		text-align: center;
		line-height: 90upx;
		position: absolute;
		bottom: 0;
		font-size: 28upx;
		font-weight: 600;
		border-bottom-left-radius: 10upx;
		border-bottom-right-radius: 10upx;
	}
}
</style>
