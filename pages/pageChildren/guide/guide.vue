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
					<rich-text class="park-box-content-middle" :nodes="v.content">
					</rich-text>
				</view>
		</view>
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
			<view class="park-box-select-box flex row">
				<view class="park-box-select-title">
					需要面积
				</view>
				<input type="text" placeholder="请输入需要面积" class="park-box-select-end park-box-select-input" placeholder-style="text-align: right">
		
			</view>
		</view>
		<!--  -->
		<!--  -->
		 <view class="park-box-select">
			 <button type="primary" class="btn">入园申请</button>
		 </view>
			 <!--  -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
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
					url:_self.$api+"dockingManager/totalQuery",
					data:{id:"0",pull:2},
					method:"GET",
					success:function(res){
						console.log(res)
						var data = res.data
						_self.list = res.data
					}
					
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
