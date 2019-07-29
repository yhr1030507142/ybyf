<template>
	<view>
		
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
			_self.getSetting()
		},
		methods: {
			getSetting:function(){
				var _self = this
				uni.getSetting({
					success:function(res){ 
						console.log(res.authSetting["scope.userInfo"])
						if(res.authSetting["scope.userInfo"] && uni.getStorageSync("openId")){
							//直接登录，获取用户信息
							console.log("你已经授权")
							_self.getMyInfo()
							uni.switchTab({
									url:"../index/index"
							}) 
						}else{ 
								//跳转到授权页面  
							uni.navigateTo({
								url:"../login/login"
							})
						}
					}
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
		}
	}
</script>

<style>

</style>
