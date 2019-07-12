<template>
	<view>
		<!-- 图片 -->
		<view class="park-box flex col">
				<view class="park-box-pic">
					<image src="../../../static/img/5b45cb4b08550.jpg" mode="" class="img"></image>
				</view>
				<view class="park-box-content flex col">
					<view class="park-box-content-header">
						入园指南
					</view>
					<view class="park-box-content-middle">
						商家诉求大多相同、市场上的选择却如万花筒一般，美团服务市场上百家优质服务商入驻，共同为商家提供全品类服务。解决品牌、连锁、单店等各类商家经营真实需求。同时，美团服务市场也诚邀各垂直领域优质服务商入驻，合作共赢等你来站！
					</view>
				</view>
		</view>
		<!--  -->
		<!-- 图片 -->
		<view class="park-box flex col">
				<view class="park-box-pic">
					<image src="../../../static/img/5b45cb4b08550.jpg" mode="" class="img"></image>
				</view>
				<view class="park-box-content flex col">
					<view class="park-box-content-header">
						入园流程
					</view>
					<view class="park-box-content-middle">
						商家诉求大多相同、市场上的选择却如万花筒一般，美团服务市场上百家优质服务商入驻，共同为商家提供全品类服务。解决品牌、连锁、单店等各类商家经营真实需求。同时，美团服务市场也诚邀各垂直领域优质服务商入驻，合作共赢等你来站！
					</view>
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
					 <view class="uni-input" v-else="">{{array[index]}}</view>
					 <view class="iconfont icon-xiala icon"></view>
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
				<input type="text" placeholder="请输入联系人" class="park-box-select-end park-box-select-input" placeholder-style="text-align: right">
		
			</view>
		</view>
		<!--  -->
				<!--  -->
		 <view class="park-box-select">
			<view class="park-box-select-box flex row">
				<view class="park-box-select-title">
					联系电话
				</view>
				<input type="text" placeholder="请输入联系电话" class="park-box-select-end park-box-select-input" placeholder-style="text-align: right">
		
			</view>
		</view>
		<!--  -->
		
		<!--  -->
		 <view class="park-box-select">
			 <button type="primary" class="btn">立即咨询</button>
		 </view>
			 <!--  -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: ['中国', '美国', '巴西', '日本'],
                index: "",
			}
		},
		onLoad:function(){ 
			var _self = this
		},
		methods: {
			bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.index = e.target.value
			},
			}
		
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
						font-size: 50upx;
					}
				}
				.park-box-select-input{
					margin-left: 20upx;
					flex: 1;
				}
		}
}
.btn{
	border-radius: 5upx;
	background: #1758EA !important;
}
</style>
