<template>
	<view>
		<view class="law-pic" v-for="(v,i) in List" :key="i" @tap="goDetail(v.id)">
			<image  :src="v.primary" mode="" class="img"></image>
			<view class="modal">{{v.name}}</view>
		</view>
		
		<!-- <view class="law-pic">
			<image src="../../../static/img/5b45cb4b08550.jpg" mode="" class="img"></image>
			<view class="modal">广东xxxxx律师事务富哦</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				List:[],
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
					data:{id:"0",pull:3},
					method:"GET",
					success:function(res){
						_self.List = res.data
						console.log(res.data)
					}
				})
			},
			goDetail:function(id){
				console.log(id)
				uni.navigateTo({
					url:"../lawServerDetail/lawServerDetail?id="+id
				})
			},
		}
	}
</script>

<style lang="scss">
page{
	background: #e8e7e7;
}
.law-pic{
	width: 90%;
	margin: 30upx auto;
	position: relative;
	.img{
		width: 100%;
		height:300upx;
	}
	.modal{
		width: 100%;
		font-size: 28upx;
		position: absolute;
		bottom: 0;
		height: 70upx;
		line-height: 70upx;
		background: #000000;
		opacity: 0.7;
		color: #ffffff;
		text-align: center;
	}
}
</style>
