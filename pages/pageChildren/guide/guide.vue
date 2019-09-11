<template>
	<view>
		<!-- 图片 -->
		<view class="park-box flex col" v-for="(v,i) in list" :key="i">
				<view class="park-box-pic">
					<image :src="v.primary" mode="" class="img"></image>
				</view>
				<view class="park-box-content flex col">
					<view class="park-box-content-header">
						{{v.name}}
					</view>
					<rich-text class="park-box-content-middle" :nodes="v.content | imgData">
					</rich-text>
				</view>
		</view>
		<!--  -->
	
		 <view class="park-box-select">
			<view class="park-box-select-box flex row">
				<view class="park-box-select-title">
					联系人
				</view>
				<input type="text" v-model="name" style="text-align: right;" placeholder="请输入联系人" class="park-box-select-end park-box-select-input" placeholder-style="text-align: right">
		
			</view>
		</view>
		<!--  -->
				<!--  -->
		 <view class="park-box-select">
			<view class="park-box-select-box flex row">
				<view class="park-box-select-title">
					联系电话
				</view>
				<input type="number" v-model="phone" style="text-align: right;" placeholder="请输入联系电话" class="park-box-select-end park-box-select-input" placeholder-style="text-align: right" maxlength="11">
		
			</view>
		</view>
		<!--  -->
				<!--  -->
		 <view class="park-box-select">
			<view class="park-box-select-box flex row">
				<view class="park-box-select-title">
					需要面积
				</view>
				<input type="text" v-model="area" style="text-align: right;" placeholder="请输入需要面积" class="park-box-select-end park-box-select-input" placeholder-style="text-align: right">
		
			</view>
		</view>
		<!--  -->
		<!--  -->
		 <view class="park-box-select">
			 <button type="primary" class="btn" @tap="enterApply">入园申请</button>
		 </view>
			 <!--  -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				name:"",
				phone:"",
				area:""
			}
		},
		onLoad:function(){ 
			var _self = this
			_self.getInfo()
		},
		methods: {
			getInfo:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/releaseMainQuery",
					data:{id:"0",pull:1,optionId:uni.getStorageSync("openId")},
					method:"GET", 
					success:function(res){
						console.log(res)
						var data = res.data
						_self.list = res.data
					}
					
				})
			},
			enterApply:function(){
				var _self = this
				var myreg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
				if(_self.name == ""){
						uni.showToast({
						title:"请输入联系人",
						icon:"none"
					})
					return false
				}else if(!myreg.test(_self.phone)){
						uni.showToast({
						title:"联系电话格式不正确",
						icon:"none"
					})
					return false
				}else if(_self.area==""){
						uni.showToast({
						title:"请输入需要面积",
						icon:"none"
					})
					return false
				}
				uni.request({
					url:_self.$api+"dockingManager/admissionAdd",
					data:{
						name:_self.name,phone:_self.phone,noddles:_self.area,optionId:uni.getStorageSync("openId")
					},
					success:function(res){
						console.log(res)
						if(res.data ==1){
							uni.showToast({
								title:"申请成功",
								success:function(){
									setTimeout(function(){
										uni.switchTab({
											url:"../../../pages/index/index"
										})
									},1000)
								}
							})
							return false
						}
						if(res.data ==99){
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
								return false
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
			
		},
		 filters:{
			 imgData:function(newdata){
				 return newdata.replace(/<img/gi, '<img style="max-width:100%;height:auto;display:block"')
                                        .replace(/<section/g,'<div')
                                        .replace(/\/section>/g,'\div>');
			 }
		 }
		 
	}
</script>

<style lang="scss">
	page{
		background: #e8e7e7;
	}
	.btn{
		background: #E0AF2F !important;
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
		img{
			max-width: 100%;
		}
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
			img{
				width: 100%;
			}
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
</style>
