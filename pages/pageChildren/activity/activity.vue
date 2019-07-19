<template>
	<view>
		<!-- 图片 -->
		<view class="park-box flex col">
				<view class="park-box-pic">
					<image :src="details.shrink" mode="" class="img"></image>
				</view>
				<view class="park-box-content flex col">
					<view class="park-box-content-header">
						{{details.name}}
					</view>
					<view class="park-date">
						活动开始时间:{{details.open_time}}
					</view>
					<rich-text class="park-box-content-middle" :nodes="details.content">
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
		    <view class="bottom_btn_right" @tap="apply()">
				我要报名
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
								<view>{{errorMessage}}</view>
								<view class="authentication" @tap="goAudit()">
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
			content:"",
			name:"",
			open_time:"",
			shrink:"",
			showPopupMiddleImg:false,
			showPopupMiddleImg1:false,
			details:[],
			id:"",
			collection:1,
			report:"",
			errorMessage:""
			}
		},
		onLoad:function(option){ 
			var _self = this
			_self.id = option.id
			_self.getInfo()
		},
		methods: {
			apply:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/activityReport",
					data:{id:_self.id,optionId:uni.getStorageSync("openId"),report:_self.report},
					success:function(res){
						if(res.data ==2){
							_self.errorMessage = "您尚未进行认证"
							_self.showPopupMiddleImg1 = true
							return false
						}
						else if(res.data ==1){
							_self.errorMessage = "恭喜你,报名成功"
							_self.showPopupMiddleImg = true
							
							return false
						}
						else if(res.data == 6){
							uni.showToast({
								title:"活动已暂停",
								icon:"none"
							})
							return false
						}
						else if(res.data == 7){
							uni.showToast({
								title:"活动已结束",
								icon:"none"
							})
							return false
						}
						else if(res.data == 8){
							uni.showToast({
								title:"活动未开始",
								icon:"none"
							})
							return false
						}
						console.log(res.data)
					}
				})
			},
			hidePopup:function(){
				this.showPopupMiddleImg = false
			},
			hidePopup1:function(){
				this.showPopupMiddleImg1 = false
			},
			getInfo:function(){
				var _self = this
				console.log(_self.id)
				uni.request({
					url:_self.$api+"dockingManager/activityTubeQuery",
					data:{id:_self.id,optionId:uni.getStorageSync("openId")},
					success:function(res){
						_self.details = res.data[0]
						if(res.data[0].reply === undefined || res.data[0].reply===null){
							_self.report =1
						}else{
							_self.report =0
						}
						if(res.data[0].mark === undefined || res.data[0].mark===null){
							_self.collection = 1
						}else{
							_self.collection = 2
							
						}
						console.log(res)
					}
				})
			},
			/**
			 * 跳转认证
			 */
			goAudit:function(){
				uni.switchTab({
					url:"../../../pages/mine/mine"
				})
			},
			collect:function(){
				var _self = this
				if(this.collection == 1){
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
						  desc: _self.details.name, 
						  //## 此为转发给微信好友或微信群后，对方点击后进入的页面链接，可以根据自己的需求添加参数
						  path:  'pages/pageChildren/activity/activity?id='+_self.id, 
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
		background: #e8e7e7;
	}
.color{
	color: yellow;
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
			margin: 30upx auto;
		}
		.park-box-content-middle{
			width: 90%;
			margin: 20upx auto;
			font-size: 28upx;
			line-height: 50upx;
			color: #333333;
			min-height: 500upx;
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
