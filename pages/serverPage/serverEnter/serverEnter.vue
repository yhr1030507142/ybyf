<template>
	<view>
		<!-- 图片 -->
		<view class="park-box flex col" v-for="(v,i) in List" :key="i">
				<view class="park-box-pic">
					<image :src="v.primary" mode="" class="img"></image>
				</view>
				<view class="park-box-content flex col">
					<rich-text class="park-box-content-middle" :nodes="v.sketch">
					</rich-text>
				</view>
		</view>
		<!--  -->
		 <view class="park-box-select">
			  <picker @change="bindPickerChange" :value="index" :range="array" class="picker">
			<view class="park-box-select-box flex row row_between">
				<view class="park-box-select-title">
					入驻类型
				</view>
				<view class="park-box-select-end flex row">
					 <view class="uni-input" v-if="index == ''">请选择</view>
					 <view class="uni-input uni-input1" v-else="">{{array[index]}}</view>
					 <view class="iconfont icon-xiala1 icon"></view>
				</view>
		
			</view>
				</picker>
		</view>
		<!--  -->
		<!--  -->
		 <view class="park-box-select">
			<view class="park-box-select-box flex row">
				<view class="park-box-select-title">
					联系人
				</view>
				<input type="text" placeholder="请输入联系人" style="text-align: right;" v-model="name" class="park-box-select-end park-box-select-input" placeholder-style="text-align: right" maxlength="20">
		
			</view>
		</view>
		<!--  -->
				<!--  -->
		 <view class="park-box-select">
			<view class="park-box-select-box flex row">
				<view class="park-box-select-title">
					联系电话
				</view>
				<input type="number" placeholder="请输入联系电话" style="text-align: right;" v-model="phone" class="park-box-select-end park-box-select-input" placeholder-style="text-align: right" maxlength="11">
		
			</view>
		</view>
		<!--  -->
		
		<!--  -->
		 <view class="park-box-select">
			 <button type="primary" class="btn" @tap="addInfo">立即咨询</button>
		 </view>
			 <!--  -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [],
                index: "",
				List:[],
			}
		},
		onLoad:function(){ 
			var _self = this
			_self.getArr()
			
			
		},
		methods: {
			bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.index = e.target.value
			},
			getArr:function(){
				var _self = this
				uni.request({ 
					url:_self.$api+"dockingManager/titleFaceQuery",
					method:"GET",
					success:function(res){
						console.log(res)
						for(var i = 0;i<res.data.length;i++){
							_self.array[i] = res.data[i].name
						}
						_self.getInfo()
					}
				})
			},
			getInfo:function(){
				var _self = this
				uni.request({ 
					url:_self.$api+"dockingManager/enterSimpleQuery",
					data:{},
					method:"GET",
					success:function(res){
						_self.List = res.data
						console.log(res.data)
					}
				})
			},
			addInfo:function(){
				var _self = this
				var myreg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
				if(_self.name == "" || _self.name==null){
					uni.showToast({
						title:"请输入联系人",
						icon:"none"
					})
					return false
				}else if(!myreg.test(_self.phone)) {
					uni.showToast({
						title:"联系电话格式不正确",
						icon:"none"
					})
					return false
				}else if(_self.index==""){
					uni.showToast({ 
						title:"请选择入驻类型",
						icon:"none"
					})
					return false
				}
				console.log(_self.array[_self.index])
				uni.request({ 
					url:_self.$api+"dockingManager/haltAdd",
					data:{name:_self.name,state:_self.array[_self.index],phone :_self.phone,optionId:uni.getStorageSync("openId")},
					method:"GET",
					success:function(res){
						console.log(res)
						if(res.data == 1){
							uni.showToast({
								title:"提交成功",
								success:function(){
									setTimeout(function(){
										uni.switchTab({
											url:"../../../pages/server2/server2"
										})
									},1000)
								}
							})
							return
						}
						if(res.data == 99){
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
							return
						}
						else{
							uni.showToast({
								title:"提交失败",
								icon:"none",
								})
							return false
						}	
					}
				})
			  }
			}
		
	}
</script>

<style lang="scss">
	page{
		background: #e8e7e7;
	}
	.uni-input1{
		color: #000000;
	}
.park-box{
	width: 90%;
	margin: 0 auto;
	.park-box-pic{
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
			min-height: 200upx;
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
					align-items: center;
					.icon{
						font-size: 12upx;
					}
				}
				.park-box-select-input{
					margin-left: 20upx;
					flex: 1;
					color: #000000;
				}
		}
}
.btn{
	border-radius: 5upx;
	background: #1758EA !important;
}
</style>
