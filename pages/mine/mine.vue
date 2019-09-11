<template>
	<view>
		<view class="mine-header flex col">
			<view class="mine-header-pic">
				<image :src="pic" mode="" class="img"></image>
			</view>
			<view class="mine-header-title">
				<view v-if="name==''||name==null">未授权登录，<text @click="login" class="loginClass">点击授权</text></view>
				<view v-else>{{name}}</view>
			</view>
			<view class="mine-header-title">
				{{trade}}
			</view>	
			<view class="mine-header-btnBox flex row">
				<view class="mine-header-btn" @tap="goto('componyAuthentication')" v-if="componyOwner==3">
				<text class="iconfont iconrenzheng icon"></text>
					认证企业
				</view>
				<view class="mine-header-btn mine-header-btn1"  v-if="componyOwner==4">
				<text class="iconfont iconrenzheng icon"></text>
					您正在认证企业...
				</view>
				<view class="mine-header-btn mine-header-btn1"  v-if="componyOwner==5">
					<text class="iconfont iconjiarubanji icon"></text>
					您正在认证加入企业...    
 				</view>
				<view class="mine-header-btn" @tap="goto('joinCompony')" v-if="componyOwner==3">
					<text class="iconfont iconjiarubanji icon"></text>
					加入企业 
				</view>  

			</view>
		</view> 
		<view class="mine-content">
			<view class="mine-content-head">  
				我的服务 
			</view> 
			<view class="mine-content-text flex row row_between">
				<view class="mine-content-text-server flex col ">
					<view class="mine-content-text-server-top color1" @tap="goto('minePublish')">
						<view class="iconfont icon971caidan_xinjiantiezi icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的发布</view>		
				</view>
					
				<view class="mine-content-text-server flex col ">
					<view class="mine-content-text-server-top color2" @tap="goto('mineCollect')">
						<view class="iconfont iconshoucang icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的收藏</view>		
				</view>
				
				<view class="mine-content-text-server flex col ">
					<view class="mine-content-text-server-top color3" @tap="goto('mineActive')">
						<view class="iconfont iconhuodong icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的活动</view>		
				</view>
				
				<view class="mine-content-text-server flex col ">
					<view class="mine-content-text-server-top color4" @tap="goto('repairLog')">
						<view class="iconfont iconshiwuzhongxin_baoxiu icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">报修记录</view>		
				</view>
				
				<view class="mine-content-text-server flex col ">
					<view class="mine-content-text-server-top color5" @tap="goIndex('rentRoom')">
						<view class="iconfont iconshiwuzhongxin_huiyishishiyong icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">会议室预定</view>		
				</view>
				
				<view class="mine-content-text-server flex col">
					<view class="mine-content-text-server-top color6"  @tap="auditManager">
						<view class="iconfont iconshenhexitong icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的审核</view>		
				</view>
				
				<view class="mine-content-text-server flex col">
					<view class="mine-content-text-server-top color7"  @tap="goto('myCompony')">
						<view class="iconfont iconwodeqiye icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的企业</view>		
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				componyOwner:"",
				name:"",
				pic:"",
				trade:"",
				componyId:"",

			}
		},
		onLoad:function(){
			var _self = this
			// wx.showShareMenu() 
			// if(!uni.getStorageSync("openId")){
			// 	uni.navigateTo({
			// 		url:"../load/load"
			// 	})
			// }
			if(uni.getStorageSync('openId')===0||!uni.getStorageSync('openId')||uni.getStorageSync('openId')===undefined){
				_self.pic = '../../../staic/img/head.png'  
			}else{
				_self.pic = uni.getStorageSync("pic")
			} 
			_self.componyOwner = uni.getStorageSync("componyOwner")
			_self.name = uni.getStorageSync("name")
			_self.trade = uni.getStorageSync("trade")
			_self.componyId = uni.getStorageSync("componyId") 
			uni.startPullDownRefresh();
		},
		onPullDownRefresh:function() {
			var _self = this
			// if(!uni.getStorageSync("openId")){
			// 	uni.navigateTo({
			// 		url:"../load/load"
			// 	})
			// }
        _self.getMyInfo()
		_self.componyOwner = uni.getStorageSync("componyOwner")
		_self.name = uni.getStorageSync("name")
		if(uni.getStorageSync('openId')===0||!uni.getStorageSync('openId')||uni.getStorageSync('openId')===undefined){
			_self.pic = '../../static/img/head.png' 
		}else{
			_self.pic = uni.getStorageSync("pic")
		}
		_self.trade = uni.getStorageSync("trade")
		_self.componyId = uni.getStorageSync("componyId") 
    },
		onShow:function(){ 
			var _self = this  
			_self.getMyInfo()
			_self.componyOwner = uni.getStorageSync("componyOwner")
			_self.name = uni.getStorageSync("name")
			_self.trade = uni.getStorageSync("trade") 
			if(uni.getStorageSync('openId')===0||!uni.getStorageSync('openId')||uni.getStorageSync('openId')===undefined){
				_self.pic = '../../static/img/head.png' 
			}else{
				_self.pic = uni.getStorageSync("pic")
			}
			_self.componyId = uni.getStorageSync("componyId") 		
		}, 
		methods: {
			/**
			 * @param {Object} content授权登陆
			 */
			login:function(){
				uni.navigateTo({
					url:"../login/login"  
				})
			},
			goto:function(content){
				var _self = this
				console.log(content)
				if(uni.getStorageSync("openId")===0 || !uni.getStorageSync("openId")){
					console.log('111111111')
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
						return false
					}
				if(content == "myCompony"){
					console.log('222222222222')
						if(uni.getStorageSync("componyOwner")==1 || uni.getStorageSync("componyOwner")==2){
							   _self.componyId = uni.getStorageSync("componyId")
								uni.navigateTo({
									url:"../minePage/"+content+"/"+content+"?componyId="+_self.componyId 
								})
							}
							else{
								uni.showToast({ 
									title:"您尚未加入企业",
									icon:"none"
								}) 
								return false     
							}
						}
				else{
					console.log('333333333')
						uni.navigateTo({
							url:"../minePage/"+content+"/"+content
						})
					}
				
				
			},
			goIndex:function(content){
				var _self = this
				uni.showToast({
					title:'暂未开放',
					icon:'none'
				})
				return false
				if(uni.getStorageSync("openId")===0 || !uni.getStorageSync("openId")){
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
						return false
					} 
				uni.navigateTo({
					url:"../pageChildren/"+content+"/"+content
				})
			},
			auditManager:function(){
				var _self = this
				if(uni.getStorageSync("openId")===0 || !uni.getStorageSync("openId")){
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
						return false
					}
				if(_self.componyOwner==1){
					uni.navigateTo({
						url:"../minePage/auditManager/auditManager"
					}) 
				}else{
					uni.showToast({
						title:"没有权限",
						icon:"none"
					})
				}
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
							uni.setStorageSync("componyId","0")
							uni.setStorageSync("tube","0")
						}else{
							uni.setStorageSync("tube",res.data[0].tube)
							uni.setStorageSync('mark',res.data[0].mark)
							if(res.data[0].state ==1  &&res.data[0].mark==0){
									uni.setStorageSync("componyOwner","1")
									uni.setStorageSync("trade",res.data[0].trade)  
									uni.setStorageSync("componyId",res.data[0].Id) 
							}else if(res.data[0].state ==1  &&res.data[0].mark==1){
								uni.setStorageSync("componyOwner","2")
								uni.setStorageSync("trade",res.data[0].upper_name)  
								uni.setStorageSync("componyId",res.data[0].upper_id)
							}else if(res.data[0].state ==0  &&res.data[0].mark==0){
								//正在认证企业审核
								    uni.setStorageSync("componyOwner","4") 
									uni.setStorageSync("componyId",res.data[0].Id)
							}else if(res.data[0].state ==0  &&res.data[0].mark==1){ 
								//正在加入企业审核
								    uni.setStorageSync("componyOwner","5")
									uni.setStorageSync("componyId",res.data[0].Id) 
							}
							else{
								uni.setStorageSync("componyOwner","3")
								uni.setStorageSync("componyId","0")
							}
						}
						 uni.stopPullDownRefresh();
					}
				 })
			},
		}
	}
</script>

<style lang="scss">
	.loginClass{
		color: #0A98D5;
	}
.mine-header{
	width: 100%;
	height: 500upx;
	background: url("../../static/img/timg.jpg") no-repeat;
	background-size:cover;
	align-items: center;
	.mine-header-pic{
		width: 130upx; 
		height: 130upx;
		border-radius:50%;
		margin-top: 50upx;
		.img{
			width: 100%;
			height: 100%;
			border-radius:50%;
		}
	}
	.mine-header-title{
		margin-top: 50upx;
		color: #333333;
		font-size: 32upx;
		font-weight: 600;
	}
	.mine-header-btnBox{
		margin-top: 30upx;
		width: 70%;
		justify-content: space-around;
		.mine-header-btn1{
			width: 100% !important;
		}
		.mine-header-btn{
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			border-radius:10upx;
			width: 45%;
			height: 70upx;
			background: #E0AF2F;
			color: #ffffff;
			font-size: 28upx;
			.icon{
				display: block;
				margin-left: 10upx;
			}
		}
	}
}

.mine-content{
	width: 90%;
	margin: 100upx auto;
	.mine-content-head{
		width: 90%;
		margin: 0 auto;
		height: 100upx;
		font-size: 36upx;
		color: #333333;
		font-weight: 600;
	}
	.mine-content-text{
		width: 90%;
		margin: 0 auto;
		height: 100upx;
		font-size: 32upx;
		color: #000000;
		flex-wrap: wrap;
		padding-bottom: 300upx;
		.mine-content-text-server{
			align-items: center;
			width: 160upx;
			height: 250upx;
			.mine-content-text-server-top{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 120upx;
				width: 120upx;
				color: #ffffff;
				border-radius:10upx;
				.icon{
					font-size: 60upx;
					color: #E0AF2F;
				}
			}
			.mine-content-text-server-bottom{
				margin-top:10upx;
			}
		}
	}
}
.color1{
	background: #ffffff;
}
.color2{
	background: #ffffff;
}
.color3{
	background: #ffffff;
}
.color4{
	background: #ffffff;
}
.color5{
	background: #ffffff;
}
.color6{
	background: #ffffff;
}
.color7{
	background: #ffffff;
}
</style>
