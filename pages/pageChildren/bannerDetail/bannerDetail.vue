<template>
	<view>
		<!-- 图片 -->
		<view class="park-box flex col">
				<view class="park-box-pic">
					<image :src="list.primary" mode="" class="img"></image>
				</view>
				<view class="park-box-content flex col">
					<view class="park-box-content-header">
						{{list.name}}
					</view>
					<rich-text class="park-box-content-middle" :nodes="content">
					</rich-text>
				</view>
		</view>
			<!-- 选择 -->
				<view class="textarea-select flex col">
					<view class="textarea-select-box flex row row_between">
						<view class="textarea-select-title">
							留言框
						</view>
						<view class="textarea-select-end">
							请输入留言
						</view>
					</view>
					<textarea class="textarea-select-content" v-model="textMessage"></textarea>
				</view>
		<!--  -->
	
				
		<!--  -->
		 <view class="park-box-select">
			 <button type="primary" class="btn" @tap="addData">立即咨询</button>
		 </view>
			 <!--  -->
			  <view class="park-box-select">
			 <button type="primary" class="btn" @tap="apply">直接联系</button>
			 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				name:"",
				phone:"",
				area:"",
				id:"",
				content:"",
				textMessage:"",
			}
		},
		onLoad:function(option){ 
			var _self = this
			_self.id = option.id
			_self.getInfo()
		},
		methods: {
			getInfo:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/pictureQuery",
					data:{id:_self.id},
					method:"GET",
					success:function(res){
						console.log(res)
						var data = res.data[0]
						_self.list = res.data[0]
						_self.phone = res.data[0].phone
						if(_self.list.content == undefined || _self.list.content==null){
							_self.list.content = ""	
						}else{
							_self.content = _self.list.content
						}
					}
					
				})
			},
			apply:function(){
				var _self = this
				 uni.makePhoneCall({
					phoneNumber: _self.phone //仅为示例
				 });
			},
			addData:function(){
				var _self = this
				if(_self.textMessage == ""){
						uni.showToast({
						title:"请输入留言",
						icon:"none"
					})
					return false
				}
				uni.request({
					url:_self.$api+"dockingManager/stayAdd",
					data:{
						id:_self.id,
						optionId:uni.getStorageSync("openId"),
						name:uni.getStorageSync("name"),
						sketch:_self.textMessage
					},
					success:function(res){
						console.log(res)
						if(res.data ==1){
							uni.showToast({
								title:"请求成功",
								success:function(){
									setTimeout(function(){
										uni.switchTab({
											url:"../../../pages/index/index"
										})
									},1000)
								}
							})
							return false
						}else if(res.data==99){
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
						else{
								uni.showToast({
								title:"申请失败",
								icon:"none"
							})
							return false
						}
					},
				})
			},
			
		} 
		
	}
</script>

<style lang="scss">
	page{
		background: #e8e7e7;
	}
	.btn{
		background: #1758EA !important;
		border-radius:10upx;
		margin-top: 20upx;
	}
.textarea-select{
		width: 90%;
		
		margin: 30upx auto;
		min-height: 300upx;
		background: #ffffff;
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
		}
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
			font-size: 36upx;
			font-weight: 600;
			align-items: center;	
		}
		.park-box-content-middle{
			width: 90%;
			margin: 0 auto;
			font-size: 28upx;
			line-height: 50upx;
		}
	}
}
.park-box-select{
		width: 90%;
		margin: 30upx auto;
		min-height: 100upx;
		// background: #ffffff;
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
</style>
