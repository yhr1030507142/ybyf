<template>
	<view>
		<!-- 图片 -->
		<view class="park-box flex col">
				
				<!-- <view class="park-box-pic">
					<image :src="details.shrink" mode="" class="img"></image>
				</view> -->
				<view class="park-box-content flex col">
					<view class="park-box-content-header">
						<view class="flex row row_between">
							<view></view>
							<!-- {{part_name}}详情 -->
							<view class="flex row">
								
								<view class="iconfont iconxiugai" @click="editContent()" v-show="(Id == tradeId && tube==1) || (Id == tradeId &&com_mark=== 0) " style="margin-right: 20upx;"></view>
								<view class="iconfont iconiconfontshanchu" @click="deleteContent()" v-show="(Id == tradeId && tube==1) || (Id == tradeId &&com_mark=== 0) "></view>
							</view>
						</view> 
						{{details.name}}
					</view>
					<view class="park-date">
						发布时间:{{details.create_time}}
					</view>
					<rich-text class="park-box-content-middle" :nodes="details.sketch">
					</rich-text>
					<view class="textarea-select flex col">
						<view class="textarea-select-box flex row row_between">
							<view class="textarea-select-title">
								缩略图
							</view>
							<view class="textarea-select-end">	
							</view>
						</view>
						<view class="textarea-select-content flex row" style="padding-bottom: 10upx;">
							<image :src="details.small_primary" mode="" class="img"    @tap="previewImage1(details.small_primary)"></image>
						</view>
					</view>
					
					<view class="textarea-select flex col">
						<view class="textarea-select-box flex row row_between">
							<view class="textarea-select-title">
								图片
							</view>
							<view class="textarea-select-end">	
							</view>
						</view>
						<view class="textarea-select-content flex row">
							<image :src="v" mode="" class="img"  v-for="(v,i) in  pic"  :key="i"  @tap="previewImage(v)"></image>
						</view>
					</view>
				</view>
		</view>
		<!--  -->
		 
		<view class="bottom_btn flex row">
			<view class="bottom_btn_left flex row">
				<button class="bottom_btn_left_block flex col" open-type="share">
					<view class="iconfont iconfenxiang icon"></view>
					<view class="">
						转发
					</view>
				</button>
				<view class="bottom_btn_left_block flex col" @tap="collect">
					<view class="iconfont icon" :class="collection==1?'iconshoucang':'iconshoucang2 color1'"></view>
					<view class="">
						收藏
					</view>
				</view>	
				
			</view>
		    <view class="bottom_btn_right" @tap="apply()">
				<text v-if="!checkTitle">直接联系</text>
				<text v-if="checkTitle">{{details.phone}}</text>
			</view>
			
		</view>
			
		<!-- </view> --> 
			 <!--  -->
						<!-- <uni-popup :show="showPopupMiddleImg" type="middle" mode="insert" @hidePopup="hidePopup">
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
						</uni-popup> -->
	</view>
</template>

<script>
	import {uniPopup} from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue" 
	export default {
		data() {  
			return {
			details:[],
			id:"",
			branch:"",
			mark:'',
			part_name:'',
			collection:1,
			pic:[],
			tube:'',
			com_mark:999,
			checkTitle:false,
			upper_id:'',
			Id:'',
			tradeId:'',
			}
		},
		onLoad:function(option){ 
			var _self = this
			_self.id = option.id
			_self.branch = option.branch
			_self.mark = option.mark
			_self.part_name = option.part_name
			_self.tradeId = uni.getStorageSync('tradeId')
			_self.tube = uni.getStorageSync('tube') 
			_self.com_mark = uni.getStorageSync('mark')
			_self.upper_id = option.upper_id
			_self.Id = option.Id
			console.log(option)
			
			console.log(_self.tradeId)
			console.log(_self.Id)
			console.log(_self.com_mark)
			console.log(_self.id)
			console.log(option)
			_self.getInfo()
			_self.checkAuth()
		},
		onShow:function(){
			var _self  = this
			_self.getInfo()
			_self.checkAuth()
		},
		methods: {
			/**
			 * 判断是否验证
			 */
			checkAuth:function(){
				var _self = this
				uni.request({ 
					url:_self.$api+"dockingManager/judgeCard",
					data:{optionId:uni.getStorageSync("openId")},
					method:"GET",
					success:function(res){
						console.log(res)
						if(res.data==0){
							_self.checkTitle = false
						}
						if(res.data==1){
							_self.checkTitle = true
						}
					}
				})
			},
			getInfo:function(){
				var _self = this
				uni.request({ 
					url:_self.$api+"dockingManager/declareNewQuery",
					data:{id:_self.id,optionId:uni.getStorageSync("openId"),branch:_self.branch,mark:_self.mark},
					method:"GET",
					success:function(res){
						console.log(res)
						//用户mark为undefined该用户未收藏
						if(res.data[0].state === undefined || res.data[0].state===null){
							_self.collection = 1
						}else{
							_self.collection = 2
						} 
						_self.details = res.data[0]
						
						if(res.data[0].shrink==""){
							_self.pic= []
						}else{
							_self.pic = res.data[0].shrink.split(',')
						}
						console.log(res)
					}
				})
			},
			previewImage1: function(e) {
				console.log(e)
				uni.previewImage({
					current: e,
					urls: [e]
				})
			},
			previewImage: function(e) {
				uni.previewImage({
					current: e,
					urls: this.pic
				})
			},
			/**
			 * @param {Object} options
			 * 删除
			 */
			deleteContent:function(){
				  var _self = this
				  uni.showModal({
								title: '提示',
								content: '是否删除此内容',
								success: function (res) {
										if (res.confirm) {
											uni.request({
												url:_self.$api+'dockingManager/titleDeclareDelete',
												data:{id:_self.id},
															success:function(res){
																if(res.data==1){
																	uni.showToast({
																		title:'删除成功'
																	})
																	uni.navigateBack({
																		delta: 1,
																		animationType: 'pop-out',
																		animationDuration: 200
																	});
																	return
																}else{
																	uni.showToast({
																		title:'删除失败',
																		icon:'none'
																	})
																	return
																}
															}
											})
										} else if (res.cancel) {
											console.log('用户点击取消');
										}
									}
								});  
			},
			/**
			 * @param {Object} options
			 * 修改
			 */
			editContent:function(){
				 var _self = this
				 uni.navigateTo({
				 	url:'../productDetailEdit/productDetailEdit?id='+_self.id+'&branch='+_self.branch+'&mark='+_self.mark
				 })
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
					  desc: _self.details.name, 
					  //## 此为转发给微信好友或微信群后，对方点击后进入的页面链接，可以根据自己的需求添加参数
					  path:  'pages/pageChildren/productDetail/productDetail?id='+_self.id+'&branch='+_self.branch+'&optionId='+uni.getStorageSync("openId")+'&mark='+mark,
					  //## 转发操作成功后的回调函数，用于对发起者的提示语句或其他逻辑处理
					  success: function(res) {
						  uni.request({
						  url:_self.$api+"dockingManager/totalHideAdd",
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
			//拨打电话
			apply:function(){
				var _self = this
				if(_self.checkTitle){
					uni.makePhoneCall({
					phoneNumber: _self.details.phone //仅为示例
					});
				}else{
					uni.showToast({
						title:"您尚未进行认证，请先进行认证",
						icon:"none"
					})
					return false
				}
			},
			/**
			 * 收藏
			 * 
			 */
			collect:function(){
				var _self = this
				if(this.collection == 1){
					uni.request({
						url:_self.$api+"dockingManager/hideAdd",
						data:{id:_self.id,mark:0,optionId:uni.getStorageSync("openId")},
						success:function(res){
							console.log(res)
							if(res.data==1){
								console.log("收藏成功")
								_self.collection = 2
							}
							else if(res.data==99){
								uni.showModal({
								title: '提示',
								content: '此操作需用户授权，是否进行授权',
								success: function (res) {
									if (res.confirm) {
										//跳转到授权页面  
										uni.navigateTo({
											url:"../../login/login"  
										})
										console.log('用户点击确定');
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
							}
							else if(res.data ==98){
									uni.showToast({
									title:"您尚未进行认证，请先进行认证",
									icon:"none"
								})
								return false
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
						url:_self.$api+"dockingManager/hideDelete",
						data:{id:_self.id,optionId:uni.getStorageSync("openId")},
						success:function(res){
							console.log(res)
							if(res.data==1){
								console.log("取消收藏成功")
								_self.collection = 1 
							}else if(res.data==99){
								uni.showModal({
									title: '提示',
									content: '此操作需用户授权，是否进行授权',
									success: function (res) {
										if (res.confirm) {
											//跳转到授权页面  
											uni.navigateTo({
												url:"../login/login"  
											})
											console.log('用户点击确定');
										} else if (res.cancel) {
											console.log('用户点击取消');
										}
									}
								});
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
			margin: 30upx auto;
		}
		.park-box-content-middle{
			width: 90%;
			margin: 20upx auto;
			font-size: 28upx;
			line-height: 50upx;
			color: #333333;
			min-height: 150upx;
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
		background: #E0AF2F;
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
.textarea-select{
		margin: 10upx auto;
		min-height: 300upx;
		background: #ffffff;
		width: 100%;
		.textarea-select-box{
			height: 100upx;
			width: 90%;
			margin: 0 auto;
			align-items: center;
				.textarea-select-title{
				font-size: 28upx;
				color:#000000;
			}
			.textarea-select-end{
				font-size: 28upx;
				color: #999999;
			}
		}
		.textarea-select-content{
			min-height: 300upx;
			width: 90%;
			margin: 0 auto; 
			flex-wrap: wrap;
			padding-bottom: 150upx;
			.img{
				width: 30%;
				height: 200upx;
				margin-left: 20upx;
				margin-top: 30upx;
			}
		}
	}
</style>
