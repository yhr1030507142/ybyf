<template>
	<view>
		<view class="content flex col" >
			<view class="pic flex row row_center">
				<image src="../../static/mangseng.jpeg" mode="" class="pic-img"></image>
			</view>
			<view class="word flex row row_center">
				只有授权才能进入小程序哦！！！
			</view>
			<button class="btn" open-type="getUserInfo" @getuserinfo="wxGetUserInfo" withCredentials="true">授权进入小程序</button>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad:function(){ 
			var _self = this
		},
		methods: {
			wxGetUserInfo:function(res){
				if (!res.detail.iv) {
					uni.showToast({
						title: "您取消了授权,登录失败",
						icon: "none"
					}); 
					return false;
				}
			var _self = this
			if(uni.getStorageSync("opneId")){
				uni.setStorageSync("name",JSON.parse(res.detail.rawData).nickName)
				uni.setStorageSync("pic",JSON.parse(res.detail.rawData).avatarUrl)
				_self.getMyInfo()
			}else{
				_self.getLogin()
				uni.setStorageSync("name",JSON.parse(res.detail.rawData).nickName)
				uni.setStorageSync("pic",JSON.parse(res.detail.rawData).avatarUrl)
			}
			uni.switchTab({
				url:"../index/index"
			})
		},
	getMyInfo:function(){
		var _self = this
		 uni.request({
		 	url:_self.$api+"dockingManager/cardIdQuery",
			data:{optionId:uni.getStorageSync("openId")},
			success:function(res){ 
				console.log(res)
				
				 if(res.data == ""){ 
					uni.setStorageSync("trade","")
					uni.setStorageSync("componyOwner","3") 
				}else{
					if(res.data[0].state ==1  &&res.data[0].mark==0){
							uni.setStorageSync("componyOwner","1")
							uni.setStorageSync("trade",res.data[0].trade)  
					}else if(res.data[0].state ==1  &&res.data[0].mark==1){
						uni.setStorageSync("componyOwner","2")
						uni.setStorageSync("trade",res.data[0].upper_name)  
					}else if(res.data[0].state ==0  &&res.data[0].mark==0){
						//正在认证企业审核
						uni.setStorageSync("componyOwner","4")
					}else if(res.data[0].state ==0  &&res.data[0].mark==1){
						//正在加入企业审核
						uni.setStorageSync("componyOwner","5")
					}
					else{
						uni.setStorageSync("componyOwner","3") 
					}
				}
			}
		 })
	},
		getLogin:function(){
				var _self = this
				uni.login({
					provider: 'weixin',
					success:function(res){
						console.log(res)
						_self.code = res.code
						console.log(res.code)  
						uni.request({
							url:_self.$api+"Wechat/Land",
							data:{code:_self.code},
							success:function(res){
								
								console.log(res)    
								_self.openId=res.data[0].openid
								uni.setStorageSync("openId",res.data[0].openid)
								_self.getMyInfo()    
							}  
						}) 
					}
				})
		},
		

		}
	}
</script>

<style lang="scss">
	page{
		background: rgba(0,0,0,.8);
		
	}
	.content{
		z-index: 999;
		width: 70%;
		margin: 200upx auto;
		height: 500upx;
		background: #ffffff;
		border-radius: 10upx;
		justify-content: space-between;
		.pic{
			width:100%;
			margin-top:30upx;
			.pic-img{
				width: 150upx;
				height: 150upx;
			}
		}
		.word{
			font-size: 32upx;
		}
		.btn{
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			width: 100%;
			background: #09BB07;
			color: #ffffff;
		}
	}
</style>
