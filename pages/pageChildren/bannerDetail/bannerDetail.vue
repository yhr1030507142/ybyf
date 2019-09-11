<template>
	<view>
		<!-- 图片 -->
		<view class="park-box flex col">
				<view class="park-box-pic">
					<image :src="list.primary" mode="" class="img" @click="previewImage(list.primary)"></image>
					
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
			<view class="select">
				<view class="select-box flex row">
					<view class="select-title">
						姓名
					</view>
					<input type="text" placeholder="请输入姓名" style="text-align: right;" v-model="title" class="select-end select-input" placeholder-style="text-align: right">
				</view>
			</view>
		<!--  -->
		<!-- 选择 -->
			<view class="select">
				<view class="select-box flex row">
					<view class="select-title">
					联系方式
					</view>
					<input type="number" placeholder="请输入联系方式" style="text-align: right;" v-model="title_phone" class="select-end select-input" placeholder-style="text-align: right" maxlength="11">
				</view>
			</view>
		<!--  -->
	
				
		<!--  -->
		 <view class="park-box-select">
			 <button type="primary" class="btn" @tap="addData">合作咨询</button>
		 </view>
			 <!--  -->
			  <view class="park-box-select">
			 <button type="primary" class="btn" @tap="apply"><text class="iconfont icondianhua"></text>{{list.phone}}</button> 
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
				title:'',
				title_phone:'',
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
			previewImage: function(e) {
				uni.previewImage({
					current: e,
					urls: [e]
				})
			},
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
				var myreg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;
				if(_self.title == ""){
						uni.showToast({
						title:"请输入您的姓名",
						icon:"none"
					})
					return false
				}
				if(_self.title_phone == ""){
						uni.showToast({
						title:"请输入您的联系方式",
						icon:"none"
					})
					return false
				}
				if(!myreg.test(_self.title_phone)){
						uni.showToast({
						title:"联系电话格式不正确",
						icon:"none"
					})
					return false
				}
				uni.request({
					url:_self.$api+"dockingManager/stayAdd",
					data:{
						id:_self.id,
						optionId:uni.getStorageSync("openId"),
						name:_self.title,
						sketch:'',
						phone:_self.title_phone
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
		background: #E0AF2F !important;
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
}	.select{
		width: 90%;
		margin: 30upx auto;
		min-height: 100upx;
		background: #ffffff;
		.picker{
			height: 100%;
		}
		.select-box{
			    height: 100upx;
				align-items: center;
				width: 90%;
				margin: 0 auto;
				.select-title{
					font-size: 28upx;
					color:#000000;
				}
				.select-end{
					font-size: 28upx;
					color: #999999;
					align-items: center;
					.icon{
						font-size: 12upx;
					}
				}
				.select-input{
					margin-left: 20upx;
					flex: 1;
					color: #000000;
				}
		}
		.select-pic{
			width: 90%;
			margin: 0 auto;
			height: 300upx;
		}
	}
	.textarea-select{
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
			font-size: 32upx;
		}
	}
</style>
