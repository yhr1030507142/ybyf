<template>
	<view>
		
		<view class="compony-detail">
			<!--  -->
			<view class="compony-detail-pic">
				<!-- 轮播 -->
				<view class="uni-padding-wrap">
				    <view class="page-section swiper">
				        <view class="page-section-spacing">
				            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color='rgba(255, 255, 255, .3)' indicator-active-color='#1758EA'>
				                <swiper-item v-for="(v,i) in shrink" :key="i">
				                    <view class="swiper-item uni-bg-red">
										<image :src="v" mode="" class="img"></image>
									</view>
				                </swiper-item>
				            </swiper>
				        </view>
				    </view>
				</view>
				<!--  -->
			</view>
			
			<view class="compony-detail-info">
				<view class="compony-detail-info-header flex row">
					<view class="compony-name">{{supplyList.name}}</view>
				</view>
				<view class="compony-detail-info-address flex row row_between">
							<view class="address flex row">
								<view class="">{{supplyList.create_time}}</view>
							</view>
							
							
								<view class="address flex row">
								<view class="iconfont icon-zhifeiji"></view>
								<view class="">主营：服务/产品</view>
							</view>
				
				</view>
				<view class="compony-detail-info-cotent flex col">
					<view class="compony-detail-info-cotent-header">
						
					</view>
					<rich-text class="compony-detail-info-cotent-text" :nodes="supplyList.sketch"></rich-text>
					
				</view>
			</view>
			<!--  -->
	
		</view>
		
		<!--  -->
	
			<!--  -->
		 
		<view class="bottom_btn flex row">
			<view class="bottom_btn_left flex row">
				<button class="bottom_btn_left_block flex col" open-type="share">
					<view class="iconfont icon-zhuanfa icon"></view>
					<view class="">
						转发
					</view>
				</button>
				<view class="bottom_btn_left_block flex col" @tap="collect">
					<view class="iconfont icon" :class="collection==1?'icon-shoucang':'icon-shoucang2 color1'"></view>
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
				background: ['red', 'blue', 'pink'],
				indicatorDots: true,
				indicator1:false,
				autoplay: true,
				interval: 2000,//间隔
				duration: 500,//
				mark:"",
				id:"",
				supplyList:[],
				collection:1,
				shrink:[],
			}
		},
		onLoad:function(option){
			var _self = this
			_self.mark = option.mark
			_self.id = option.id
			
			console.log(_self.mark+"/"+_self.id)
			_self.getInfo()
		},
		onShow:function(){
				var _self = this
			
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
			},
			getInfo:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/declareQuery",
					data:{id:_self.id,mark:_self.mark,optionId:uni.getStorageSync("openId")},
					method:"GET",
					success:function(res){
						console.log(res)
						_self.shrink = res.data[0].shrink.split(',')
						console.log(_self.shrink)
						_self.supplyList = res.data[0]
						if(res.data[0].state === undefined || res.data[0].state===null){
							_self.collection =1
						}else{
							_self.collection =2
						}
					}
				})
			},
			/**
			 * 收藏
			 */
				collect:function(){
				var _self = this
				if(_self.collection == 1){
					uni.request({
						url:_self.$api+"dockingManager/activityHideAdd",
						data:{id:_self.id,mark:0,optionId:uni.getStorageSync("openId")},
						success:function(res){
							if(res.data==1){
								console.log("收藏成功")
								_self.collection = 2
							}
							else{
								uni.showToast({
									title:"收藏失败",
									icon:"none"
								})
							} 
						}
					})
				}else{
						uni.request({
						url:_self.$api+"dockingManager/activityHideDelete",
						data:{id:_self.id,optionId:uni.getStorageSync("openId")},
						success:function(res){
								if(res.data==1){
								console.log("取消收藏成功")
								_self.collection = 1
							}
							else{
								uni.showToast({
									title:"取消收藏失败",
									icon:"none"
								})
							}						
						},
						})
				}
			},
			/**
			 * 转发
			 */
			onShareAppMessage: function (options) {
					var _self = this
					if (options.from === 'button') {
					  // 来自页面内转发按钮
					  console.log(options.target)
					}
					return {
					  //## 此为转发页面所显示的标题
					  //title: '好友代付', 
					  //## 此为转发页面的描述性文字
					  desc: _self.supplyList.name, 
					  //## 此为转发给微信好友或微信群后，对方点击后进入的页面链接，可以根据自己的需求添加参数
					  path:  'pages/infoPage/infoDetail/infoDetail?id='+_self.id, 
					  //## 转发操作成功后的回调函数，用于对发起者的提示语句或其他逻辑处理
					  success: function(res) {
						  uni.request({
						  url:_self.$api+"dockingManager/activityHideAdd",
						  data:{id:_self.id,mark:1,optionId:uni.getStorageSync("openId")},
						  success:function(res){
							  console.log(res)
							  	console.log("转发成功")
						  },
						  })  
					  },
					  //## 转发操作失败/取消 后的回调处理，一般是个提示语句即可
					  fail: function() {
						  console.log("error")
					  }
					}
			},
		},
		 components: {uniPopup},
	}
</script>

<style lang="scss">
	page{
		color: #333333;
			background: #e8e7e7;
	}
	.color1{
		color: #f4ea2a;
	}
	.uni-padding-wrap{
		width: 100% !important;
	}
.uni-bg-red{
	height: 100%;
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
		button::after {
				border: none;
				border-radius:0;
				color: #333333;
		}
		.button-hover{
			border: 0;
			background:#ffffff;
			color:rgba(0, 0, 0, 1);
			color: #333333;
		}
		.bottom_btn_left_block{
			color: #333333;
			padding: 0;
			font-size: 28upx;
			line-height: 42upx;
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
