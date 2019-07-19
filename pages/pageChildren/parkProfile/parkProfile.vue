<template>
	<view>
		<!-- 图片 -->
		<view class="park-box flex col" v-for="(v,i) in  introduceList" :key="i">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				introduceList:[],
				project:[],
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
					data:{id:"0",pull:1},
					method:"GET",
					success:function(res){
						console.log(res)
						_self.introduceList = res.data
						console.log(res.data)
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
	.park-box-honor{
		width: 90%;
		margin: 30upx auto;
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
</style>
