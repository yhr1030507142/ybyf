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
		<!-- 中间导航 -->
		<view class="index-content flex row_between">
			<view class="index-content-left">
				<view class="index-content-left-introfuce flex col">
							<view class="iconfont icon-qiyejianjie icon"></view>
							<view class="index-content-left-introfuce-word">园区简介</view>
							
				</view>
				<view class="index-content-left-info flex row row_between">
					<view class="flex col index-content-left-info-left">
							<view class="iconfont icon-jiaoyijilu icon"></view>
							<view class="index-content-left-info-word">
								供求信息
							</view>
					</view>
					<view class="flex col index-content-left-info-right">
						<view class="iconfont icon-qiyeguanli icon">
							
						</view>
						<view>
							入驻企业
						</view>
					</view>
				</view>
				<view class="index-content-left-rent flex col">
					<view class="iconfont icon-huiyishi icon">
						
					</view>
					<view>
						租会议室
					</view>
				</view>
			</view>
			<view class="index-content-right">
					<view class="index-content-right-oriented flex row">
							<view class="iconfont icon-fangxiang icon"></view>
							<view class="index-content-right-oriented-word">入园导向</view>	
					</view>
					<view class="index-content-right-server flex col">
						<view class="iconfont icon-fuwu icon"></view>
						<view class="">
							园区服务
						</view>
					</view>
					
					<view class="index-content-right-head flex col">
						<view class="iconfont icon-liebiaofenlei icon"></view>
						<view class="">
							园区头条
						</view>
					</view>
						
						<view class="index-content-right-wuye flex row row_between">
						<view class="flex col index-content-right-wuye-left">
								<view class="iconfont icon-weixiujilu icon"></view>
								<view class="index-content-left-info-word">
									维修申请
								</view>
						</view>
						<view class="flex col index-content-right-wuye-right">
							<view class="iconfont icon-shenqing icon">
								
							</view>
							<view>
								物业建议
							</view>
						</view>
					</view>
			</view>
		</view>
	
		<!-- 活动公告 -->
		<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					活动公告
				</view>
				<view class="index-notice-header-more">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row">
					<view class="index-notice-content-img flex">
						<image src="../../static/img/yhr.jpg" mode="" class="img"></image>
					</view>
					<view class="index-notice-content-right flex col">
							<view class="index-notice-content-right-title">
								共享按摩椅转租信息
							</view> 
							<view class="index-notice-content-right-text">
								提升酒店硬件配置，营造良好用户体验酒
								店硬件配置，营造良好用户体验!
							</view>
							<view class="index-notice-content-right-date">
								2019年04月08日
							</view>
					</view>
			</view>
		</view>
	<!-- 园区动态 -->
	<view class="index-dynamic">
		<view class="index-dynamic-header flex row col">
			<view class="index-dynamic-header-title flex col"> 
				园区动态 
			</view>
			<view class="index-dynamic-content">
				 <swiper class="swiper swiper1" :indicator-dots="indicator1" :autoplay="autoplay" :interval="interval" :duration="duration" next-margin="100upx" previous-margin="100upx">
				    <swiper-item v-for="(v,i) in bannerList" :key="i">
				        <view class="swiper-item lunbo1 flex col">
							<image :src="v.primary" mode="" class="img1"></image>
							<view class="lunbo1-title">
								共享按摩椅转租信息
							</view>
							<view class="lunbo1-date">
								2019-03-05
							</view>
						</view>
				    </swiper-item>
				</swiper>
		    </view>
	    </view>
	</view>
	<!-- 园区头条 -->
	<view class="index-notice flex col">
		<view class="index-notice-header flex row row_between">
			<view class="index-notice-header-tilte">
				园区头条
			</view>
			<view class="index-notice-header-more">
				查看更多>
			</view>
		</view>
		<view class="index-notice-content flex row">
				<view class="index-notice-content-img flex">
					<image src="../../static/img/yhr.jpg" mode="" class="img"></image>
				</view>
				<view class="index-notice-content-right flex col">
						<view class="index-notice-content-right-title">
							共享按摩椅转租信息
						</view>
						<view class="index-notice-content-right-text">
							提升酒店硬件配置，营造良好用户体验酒
							店硬件配置，营造良好用户体验!
						</view>
						<view class="index-notice-content-right-date">
							2019年04月08日
						</view>
				</view>
		</view>
	</view>  
	<!-- fixed -->
	<view class="addInfo flex col" @tap="gotoPostMessage">
		<view class="icon-zhifeiji iconfont icon-fix"></view>
		<view class=""> 
			发布信息
		</view>
	</view>
	<!-- end-fixed -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
			background: ['red', 'blue', 'pink'],
            indicatorDots: true,
			indicator1:false,
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
			gotoPostMessage:function(){
				uni.navigateTo({
					url:"../postMessage/postMessage"
				})
			}
		}
	}
</script>

<style lang="scss">
$height :800upx;
page{
	background: #e8e7e7;
}

.addInfo{
	width: 150upx;
	height: 150upx;
	border-radius: 50%;
	opacity: 0.8;
	background: #FFA41B;
	color: #ffffff;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 30upx;
	right: 30upx;
	align-items: center;
	justify-content: center;
	font-size: 28upx;
	.icon-fix{
		font-size: 72upx;
	}
}
.uni-bg-red{
	background: red;
	height: 100%;
}
.uni-bg-red .img{
	width: 100%;
	height: 100%;
}
.index-content{
	width: 90%;
	margin: 30upx auto;
	 .index-content-left{
		width: 49%;
		height: $height;
		
		.index-content-left-introfuce{
			width: 100%;
			height: 350upx;
			background:#2867F4;
			color: #ffffff;
			font-size: 28upx;
			align-items: center;
			justify-content: center;
			.icon{
				font-size: 84upx;
			}
			.index-content-left-introfuce-word{
				margin-top: 20upx;
			}
		}
		.index-content-left-info{
			margin-top: 10upx;
			height: 150upx;
			.icon{
				font-size: 60upx;
			}
			.index-content-left-info-left{
				width: 49%;
				height: 100%;
				background: #79A1FB;
				color: #ffffff;
				font-size: 28upx;
				justify-content: center;
				align-items: center;
			}
			.index-content-left-info-right{
				width: 49%;
				height: 100%;
				background: #87C9F3;
				color: #ffffff;
				font-size: 28upx;
				justify-content: center;
				align-items: center;
			}
		}
		.index-content-left-rent{
			margin-top: 10upx;
			justify-content: center;
			align-items: center;
			background: #5A7ED0;
			height: 250upx;
			color: #ffffff;
			font-size: 28upx;
			.icon{
				font-size: 84upx;
			}
		}
	}
	 .index-content-right{
		width: 49%;
		height: $height;
		.index-content-right-oriented{
			background: #739EFF;
			color: #ffffff;
			font-size: 28upx;
			height: 120upx;
			justify-content: center;
			align-items: center;
			.icon{
				font-size: 48upx;
				margin-right: 10upx;
			}
		}
		.index-content-right-server{
			margin-top: 10upx;
			height: 300upx;
			font-size: 28upx;
			background: #5282ED;
			color: #ffffff;
			justify-content: center;
			align-items: center;
			.icon{
				font-size: 84upx;
			}
		}
		.index-content-right-head{
			margin-top: 10upx;
			background: #1B51C9;
			font-size: 28upx;
			height: 200upx;
			justify-content: center;
			align-items: center;
			color: #ffffff;
			.icon{
				font-size: 84upx;
			}
		}
		.index-content-right-wuye{
		margin-top: 10upx;
		height: 120upx;
		.icon{
			font-size: 48upx;
		}
		.index-content-right-wuye-left{
			width: 49%;
			height: 100%;
			background: #2867F4;
			color: #ffffff;
			font-size: 28upx;
			justify-content: center;
			align-items: center;
		}
		.index-content-right-wuye-right{
			width: 49%;
			height: 100%;
			background: #5282ED;
			color: #ffffff;
			font-size: 28upx;
			justify-content: center;
			align-items: center;
		}
		}
	}
}
.index-notice{
	background: #ffffff;
	width: 90%;
	margin: 30upx auto;
	.index-notice-header{
		width: 90%;
		margin: 0 auto;
		height: 120upx;
		align-items: center;
		.index-notice-header-tilte{
			font-size: 40upx;
			font-weight: 800;
			color: #000000;
		}
		.index-notice-header-more{
			font-size: 28upx;
			color: #999999;
		}
	}
	.index-notice-content{
		width: 90%;
		margin: 0 auto;
		padding-bottom: 30upx;
		.index-notice-content-img{
			.img{
				width: 230upx;
				height: 230upx;
			}
		}
		.index-notice-content-right{
			margin-left: 20upx;
			flex: 1;
			font-size: 28upx;
			.index-notice-content-right-title{
				font-size: 36upx;
				color: #000000;
				font-weight: 600;
			}
			.index-notice-content-right-text{
				font-size: 28upx;
				color: #999999;
				margin-top: 20upx;
			}
			.index-notice-content-right-date{
				margin-top: 20upx;
				font-size: 24upx;
				color: #999999;
			}
		}
	}
}
.index-dynamic{
	background: #ffffff;
	width: 90%;
	margin: 30upx auto;
	height: 520upx;
	.index-dynamic-header{
		width: 90%;
		margin: 0 auto;
		height: 100upx;
		.index-dynamic-header-title{
			margin-top: 20upx;
			height: 100upx;
			font-size: 36upx;
			font-weight: 600;
			color: #000000;
		}
	}
	.index-dynamic-content{
		margin-top: 70upx;
		height: 400upx;
		width: 100%;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		.swiper1{
			height: 400upx;
		}
	}
}
//  
.img1{
			height: 300upx;
	}
.lunbo1{
			height: 400upx;
			align-items: center;
			justify-content: center;
			font-size: 28upx;
			.lunbo1-title{
				margin-top: 50upx;
				font-size: 36upx;
				font-weight: 600;
			}
			.lunbo1-date{
				font-size: 24upx;
				color: #999999;
			}
		}
</style>
