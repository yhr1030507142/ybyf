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
						发布时间:{{details.createTime}}
					</view>
					<rich-text class="park-box-content-middle" :nodes="details.content">
					</rich-text>
				</view>
		</view>
		<!--  -->
		 
		<!-- <view class="bottom_btn flex row">
			<view class="bottom_btn_left flex row">
				<view class="bottom_btn_left_block flex col">
					<view class="iconfont icon-zhuanfa icon"></view>
					<view class="">
						转发
					</view>
				</view>
				<view class="bottom_btn_left_block flex col">
						<view class="iconfont icon-shoucang icon"></view>
					<view class="">
						收藏
					</view>
				</view>	
				
			</view>
		    <view class="bottom_btn_right" @tap="apply()">
				我要报名
			</view>
			
		</view> -->
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
			id:""
			}
		},
		onLoad:function(option){ 
			var _self = this
			_self.id = option.id
			console.log(_self.id)
			_self.getInfo()
		},
		methods: {
			getInfo:function(){
				var _self = this
				uni.request({ 
					url:_self.$api+"dockingManager/totalQuery",
					data:{id:_self.id,pull:18},
					method:"GET",
					success:function(res){
						console.log(res)
						_self.details = res.data[0]
						console.log(res)
					}
				})
			},
		},
		 components: {uniPopup},
		
	}
</script>

<style lang="scss"> 
	page{
		background: #e8e7e7;
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
		.bottom_btn_left_block{
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
