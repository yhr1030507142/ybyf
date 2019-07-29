<template>
	<view>
		<!-- 图片 -->
		<view class="park-box flex col">
				<view class="park-box-pic">
					<image  :src="List.primary" mode="" class="img"></image>
				</view>
				<view class="park-box-content flex col">
					<view class="park-box-content-header">
						{{List.name}}
					</view>
					<view class="park-date">
						活动开始时间：{{List.create_time}}
					</view>
					<rich-text class="park-box-content-middle" :nodes="List.content">
					</rich-text>
				</view>
		</view>
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
		    <view class="bottom_btn_right" @tap="toContact()">
				直接联系
			</view>
			
		</view>
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
	</view>
</template>

<script>
	import {uniPopup} from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue" 
	export default {
		data() {  
			return {
			word:"<p>商家诉求大多相同、市场上的选择却如万花筒一般，美团服务市场上百家优质服务商入驻，共同为商家提供全品类服务。解决品牌、连锁、单店等各类商家经营真实需求。同时，美团服务市场也诚邀各垂直领域优质服务商入驻，合作共赢等你来站！</p><p>商家诉求大多相同、市场上的选择却如万花筒一般，美团服务市场上百家优质服务商入驻，共同为商家提供全品类服务。解决品牌、连锁、单店等各类商家经营真实需求。同时，美团服务市场也诚邀各垂直领域优质服务商入驻，合作共赢等你来站！</p>",
			showPopupMiddleImg:false,
			showPopupMiddleImg1:false,
			List:[],
			id:"",
			collection:1,
			}
		},
		onLoad:function(option){ 
			var _self = this
			_self.id = option.id
			_self.getInfo()
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
					url:_self.$api+"dockingManager/totalQuery",
					data:{id:_self.id,pull:3,optionId:uni.getStorageSync("openId"),branch:0},
					method:"GET",
					success:function(res){
						_self.List = res.data[0]
						console.log(res.data)
						if(res.data[0].state === undefined || res.data[0].state===null){
							_self.collection = 1
						}else{
							_self.collection = 2
						}
					}
				})
			},
			collect:function(){
				var _self = this
				if(this.collection == 1){ 
					uni.request({
						url:_self.$api+"dockingManager/totalHideAdd",
						data:{id:_self.id,mark:0,optionId:uni.getStorageSync("openId")},
						success:function(res){
							console.log(res)
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
						url:_self.$api+"dockingManager/totalHideDelete",
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
			 * 直接联系
			 */
			toContact:function(){
				var _self = this
				 uni.makePhoneCall({
					phoneNumber: _self.List.phone //仅为示例
					});
				// uni.showModal({
				// 	title: '联系人电话',
				// 	content: '13008838897',
				// 	success: function (res) {
				// 		if (res.confirm) {
				// 			
				// 		} else if (res.cancel) {
				// 			console.log('用户点击取消');
				// 		}
				// 	}
				// });
			}
		},
		 components: {uniPopup},
		
	}
</script>

<style lang="scss"> 
	page{
		background: #e8e7e7;
	}
	.color1{
		color: #f4ea2a;
	}
.park-box{
	width: 90%;
	margin: 0 auto;
	.park-box-pic{
		margin-top: 20upx;
		width: 100%;
		height: 300upx;
		.img{
			width: 100%;
			height: 100%;
		}
	}
	.park-box-content{
		padding-top: 30upx;
		padding-bottom: 40upx;
		background: #ffffff;
		width: 100%;
		color: #333333;
		.park-box-content-header{
			height: 70upx;
			width: 90%;
			margin: 0 auto;
			font-size:32upx;
			font-weight: 600;
			align-items: center;	
		}
		.park-date{
			color: #999999;
			font-size: 24upx;
			width: 90%;
			margin: 0 auto;
		}
		.park-box-content-middle{
			width: 90%;
			margin: 20upx auto;
			font-size: 28upx;
			line-height: 50upx;
			color: #333333;
			min-height: 600upx;
		}
	}
}
.park-box-select{
		width: 90%;
		margin: 30upx auto;
		min-height: 100upx;
		background: #ffffff;
		.park-box-select-box{
			    height: 100upx;
				align-items: center;
				width: 90%;
				margin: 0 auto;
				.park-box-select-title{
					font-size: 28upx;
					color:#000000;
				}
				.park-box-select-end{
					font-size: 28upx;
					color: #999999;
				}
				.park-box-select-input{
					margin-left: 20upx;
					flex: 1;
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
