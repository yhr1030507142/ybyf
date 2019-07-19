<template>
	<view>
		<view class="mine-header flex col">
			<view class="mine-header-pic">
				<image :src="pic" mode="" class="img"></image>
			</view>
			<view class="mine-header-title">
				{{name}}
			</view>
			<view class="mine-header-title">
				{{trade}}
			</view>	
			<view class="mine-header-btnBox flex row">
				<view class="mine-header-btn" @tap="goto('componyAuthentication')" v-if="componyOwner==3">
				<text class="iconfont icon-renzheng icon"></text>
					认证企业
				</view>
				<view class="mine-header-btn mine-header-btn1"  v-if="componyOwner==4">
				<text class="iconfont icon-renzheng icon"></text>
					您正在认证企业...
				</view>
				<view class="mine-header-btn mine-header-btn1"  v-if="componyOwner==5">
					<text class="iconfont icon-jiarubanji icon"></text>
					您正在认证加入企业...  
 				</view>
				<view class="mine-header-btn" @tap="goto('joinCompony')" v-if="componyOwner==3">
					<text class="iconfont icon-jiarubanji icon"></text>
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
						<view class="iconfont icon-bianji icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的发布</view>		
				</view>
					
				<view class="mine-content-text-server flex col ">
					<view class="mine-content-text-server-top color2" @tap="goto('mineCollect')">
						<view class="iconfont icon-shoucang icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的收藏</view>		
				</view>
				
				<view class="mine-content-text-server flex col ">
					<view class="mine-content-text-server-top color3" @tap="goto('mineActive')">
						<view class="iconfont icon-huodong icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的活动</view>		
				</view>
				
				<view class="mine-content-text-server flex col ">
					<view class="mine-content-text-server-top color4" @tap="goto('repairLog')">
						<view class="iconfont icon-shiwuzhongxin_baoxiu icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">报修记录</view>		
				</view>
				
				<view class="mine-content-text-server flex col ">
					<view class="mine-content-text-server-top color5" @tap="goIndex('rentRoom')">
						<view class="iconfont icon-huiyishi icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">会议室预定</view>		
				</view>
				
				<view class="mine-content-text-server flex col">
					<view class="mine-content-text-server-top color6"  @tap="auditManager">
						<view class="iconfont icon-shenhe icon"></view>
					</view>
					<view class="mine-content-text-server-bottom">我的审核</view>		
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

			}
		},
		onLoad:function(){
			var _self = this
			console.log(uni.getStorageSync("componyOwner"))
			_self.componyOwner = uni.getStorageSync("componyOwner")
			_self.name = uni.getStorageSync("name")
			_self.pic = uni.getStorageSync("pic")
			_self.trade = uni.getStorageSync("trade")
		},
		onShow:function(){
			var _self = this  
			_self.componyOwner = uni.getStorageSync("componyOwner")
		}, 
		methods: {
			goto:function(content){
				uni.navigateTo({
					url:"../minePage/"+content+"/"+content
				})
			},
			goIndex:function(content){
				uni.navigateTo({
					url:"../pageChildren/"+content+"/"+content
				})
			},
			auditManager:function(){
				var _self = this
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
		}
	}
</script>

<style lang="scss">
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
			background: #1758EA;
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
				}
			}
			.mine-content-text-server-bottom{
				margin-top:10upx;
			}
		}
	}
}
.color1{
	background: #1758EA;
}
.color2{
	background: #5282ED;
}
.color3{
	background: #1B51C9;
}
.color4{
	background: #87C9F3;
}
.color5{
	background: #1758EA;
}
.color6{
	background: #5282ED;
}
</style>
