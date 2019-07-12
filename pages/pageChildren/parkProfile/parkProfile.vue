<template>
	<view>
		<!-- 轮播 -->
		<view class="uni-padding-wrap">
		    <view class="page-section swiper">
		        <view class="page-section-spacing">
		            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color='rgba(255, 255, 255, .3)' indicator-active-color='#1758EA'>
		                <swiper-item v-for="(v,i) in bannerList" :key="i">
		                    <view class="swiper-item uni-bg-red">
								<image :src="v.primary" mode="" class="img"></image>
							</view>
		                </swiper-item>
		            </swiper>
		        </view>
		    </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['red', 'blue', 'pink'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,//间隔
				duration: 500,//
				bannerList:[],
			}
		},
		onLoad:function(){ 
			var _self = this
			_self.getBanner()
		},
		methods: {
				getBanner:function(){
					var _self = this
					uni.request({
						url:_self.$api+"ybyfManager/dockingManager/pictureQuery",
						success:function(res){
							console.log(res)
							_self.bannerList = res.data
						}
					})
				},
			}
		
	}
</script>

<style>
.uni-bg-red{
	background: red;
	height: 100%;
}
.uni-bg-red .img{
	width: 100%;
	height: 100%;
}
</style>
