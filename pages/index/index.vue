<template>
    <view>
	<!-- 	<button @tap="getUserInfo()">获取用户信息</button>
		<button @tap="getMyInfo()">获取我的信息</button> -->
<!-- <button class="" open-type="getUserInfo" @getuserinfo="wxGetUserInfo" withCredentials="true">微信授权获取用户信息</button> -->
		<!-- 轮播 -->
        <view class="uni-padding-wrap"> 
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color='rgba(255, 255, 255, .3)' indicator-active-color='#1758EA'>
                        <swiper-item v-for="(v,i) in bannerList" :key="i" @tap="gotoBanner(v.id)">
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
				<view class="index-content-left-introfuce flex col" @tap="goTo('parkProfile')">
							<view class="iconfont icongongsijianjie icon"></view>
							<view class="index-content-left-introfuce-word">园区简介</view>  
							 
				</view> 
				<view class="index-content-left-info flex row row_between">
					<view class="flex col index-content-left-info-left" @tap="goToSwich('info')"> 
							<view class="iconfont iconjiaoyijilu icon"></view>
							<view class="index-content-left-info-word">
								供求信息
							</view>
					</view>
					<view class="flex col index-content-left-info-right" @tap="goToSwich('compony')">
						<view class="iconfont icongongsi icon">
							
						</view>
						<view>
							入驻企业
						</view>
					</view>
				</view>
				<view class="index-content-left-rent flex col" @tap="goTo('rentRoom')">
					<view class="iconfont iconshiwuzhongxin_huiyishishiyong icon">
						
					</view>
					<view>
						租会议室
					</view>
				</view>
			</view>
			<view class="index-content-right">
					<view class="index-content-right-oriented flex row" @tap="goTo('guide')">
							<view class="iconfont iconfangxiang icon"></view>
							<view class="index-content-right-oriented-word">入园导向</view>	
					</view>
					<view class="index-content-right-server flex col" @tap="goToSwich('server2')">
						<view class="iconfont iconfuwu1 icon"></view>
						<view class="">
							园区服务
						</view>
					</view>
					
					<view class="index-content-right-head flex col" @tap="goTo('headerMore')">
						<view class="iconfont iconliebiao icon"></view>
						<view class="">
							园区头条
						</view>
					</view>
						
						<view class="index-content-right-wuye flex row row_between">
						<view class="flex col index-content-right-wuye-left" @tap="goTo('applyFor')">
								<view class="iconfont iconweixiujilu icon"></view>
								<view class="index-content-left-info-word">
									维修申请
								</view>
						</view>
						<view class="flex col index-content-right-wuye-right" @tap="goTo('advice')">
							<view class="iconfont icon971caidan_xinjiantiezi icon">
								
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
				<view class="index-notice-header-more" @tap="learMore()">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in shrink" :key="i" @tap="goToDetail(v.Id)">
					<view class="index-notice-content-img flex">
						<image :src="v.small_primary" mode="" class="img"></image>
					</view>
					<view class="index-notice-content-right flex col">
							<view class="index-notice-content-right-title">
								{{v.name}}
							</view> 
							<view class="index-notice-content-right-text">
								{{v.sketch}}
							</view>
							<view class="index-notice-content-right-date">
								{{v.create_time}}
							</view>
					</view>
			</view>
		</view>
	<!-- 园区公告 -->
		<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					园区公告
				</view>
				<view class="index-notice-header-more" @tap="learParkMore()">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in parkAdviceList" :key="i" @tap="gotoAdvicePark(v.Id)">
					<view class="index-notice-content-img flex">
						<image :src="v.small_primary" mode="" class="img"></image>
					</view>
					<view class="index-notice-content-right flex col">
							<view class="index-notice-content-right-title">
								{{v.name}}
							</view> 
							<view class="index-notice-content-right-text">
								{{v.sketch}}
							</view>
							<view class="index-notice-content-right-date">
								{{v.create_time}}
							</view>
					</view>
			</view>
		</view>
		<!-- 转租公告 -->
			<view class="index-notice flex col">
				<view class="index-notice-header flex row row_between">
					<view class="index-notice-header-tilte">
						转租公告
					</view>
					<view class="index-notice-header-more" @tap="learRentkMore()">
						查看更多>
					</view>
				</view>
				<view class="index-notice-content flex row" v-for="(v,i) in rentList" :key="i" @tap="gotoRent(v.Id)">
						<view class="index-notice-content-img flex">
							<image :src="v.small_primary" mode="" class="img"></image>
						</view>
						<view class="index-notice-content-right flex col">
								<view class="index-notice-content-right-title"> 
									{{v.name}}
								</view> 
								<view class="index-notice-content-right-text">
									{{v.sketch}}
								</view>
								<view class="index-notice-content-right-date">
									{{v.create_time}}
								</view>
						</view>
				</view>
			</view>
				<!-- 园区动态 -->
				<view class="index-notice flex col">
					<view class="index-notice-header flex row row_between">
						<view class="index-notice-header-tilte">
							园区动态
						</view>
						<view class="index-notice-header-more" @tap="goParkMore()">
							查看更多>
						</view>
					</view>
					<view class="index-notice-content flex row" v-for="(v,i) in parkList" :key="i" @tap="gotoPark(v.Id)">
							<view class="index-notice-content-img flex">
								<image :src="v.small_primary" mode="" class="img"></image>
							</view>
							<view class="index-notice-content-right flex col">
									<view class="index-notice-content-right-title"> 
										{{v.name}}
									</view> 
									<view class="index-notice-content-right-text">
										{{v.sketch}}
									</view>
									<view class="index-notice-content-right-date">
										{{v.create_time}}
									</view>
							</view>
					</view>
				</view>
	<!-- 园区动态 -->
	<!-- <view class="index-dynamic">
		<view class="index-dynamic-header flex row col">
			<view class="index-dynamic-header-title flex col"> 
				园区动态 
			</view>
			<view class="index-dynamic-content">
				 <swiper class="swiper swiper1" :indicator-dots="indicator1" :autoplay="autoplay" :interval="interval" :duration="duration" next-margin="100upx" previous-margin="100upx">
				    <swiper-item v-for="(v,i) in parkList" :key="i" @tap="gotoPark(v.Id)">
				        <view class="swiper-item lunbo1 flex col">
							<image :src="v.primary" mode="" class="img1"></image>
							<view class="lunbo1-title">
								{{v.name}}
							</view>
							<view class="lunbo1-date">
								{{v.create_time}}
							</view>
						</view>
				    </swiper-item>
				</swiper>
		    </view>
	    </view>
	</view> -->
	<!-- 园区头条 -->
	<view class="index-notice flex col">
		<view class="index-notice-header flex row row_between">
			<view class="index-notice-header-tilte">
				园区头条
			</view>
			<view class="index-notice-header-more" @tap="headMore()">
				查看更多>
			</view>
		</view>
		<view class="index-notice-content flex row"  v-for="(v,i) in headlineList" :key="i" @tap="gotoHeadLine(v.Id)">
				<view class="index-notice-content-img flex">
					<image :src="v.small_primary" mode="" class="img"></image>
				</view>
				<view class="index-notice-content-right flex col">
						<view class="index-notice-content-right-title">
							{{v.name}}
						</view>
						<view class="index-notice-content-right-text">
							{{v.sketch}}
						</view>
						<view class="index-notice-content-right-date">
							{{v.create_time}}
						</view>
				</view>
		</view>
	</view>  
	<!-- fixed -->
	<view class="addInfo flex col" @tap="gotoPostMessage">
		<view class="iconzhifeiji iconfont icon-fix"></view>
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
			bannerList:[],//banner
			code:"",
			openId:"",
			shrink:[],//活动列表
			parkList:[],//园区动态
			headlineList:[],//园区头条
			parkAdviceList:[],//园区公告
			rentList:[],//转租公告
			}
		},
		onLoad:function(){ 
			var _self = this
			wx.showShareMenu() 
			if(!uni.getStorageSync("openId")&&uni.getStorageSync("openId")!=0){
				uni.navigateTo({
					url:"../load/load"
				})
			}
			_self.getPark()
			_self.getHeadlineList() 
			_self.getAdvice()  
			_self.getRentList() 
			_self.getBanner()
			setTimeout(function(){
				_self.getParkAdvice()
			},1000)
			
			uni.startPullDownRefresh();
		},
		onShow:function(){

		},
		onPullDownRefresh:function() {
			var _self = this
			console.log(uni.getStorageSync("openId"))
			if(!uni.getStorageSync("openId")&&uni.getStorageSync("openId")!=0){
				uni.navigateTo({
					url:"../load/load"
				})
			}
			_self.getBanner()
			_self.getPark()
			_self.getHeadlineList() 
			_self.getAdvice()  
			_self.getRentList() 
			_self.getParkAdvice()
			
		},
		methods: {
		
			/** 
			 * 获取活动公告
			 */
			getAdvice:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/activityTubeQuery",
					data:{id:"0",optionId:uni.getStorageSync("openId")},
					method:"GET",
					success:function(res){ 
						console.log(res)
						var data = res.data
						_self.shrink = data.slice(0,2)
					}
					
				})
			},
			/**
			 * 获取活动公告更多
			 */
			learMore:function(){
				uni.navigateTo({
					url:"../pageChildren/activeMore/activeMore"
				})
			},
			/**
			 * 获取活动公告详情
			 */
			goToDetail:function(id){
				uni.navigateTo({
					url:"../pageChildren/activity/activity?id="+id
				})
			},
			/**
			 * 获取园区动态
			 */
			getPark:function(){
				var _self = this 
				uni.request({
					url:_self.$api+"dockingManager/releaseMainQuery",
					data:{pull:5,optionId:uni.getStorageSync("openId"),id:0},
					method:"GET",
					success:function(res){
						console.log(res)
						_self.parkList = res.data.slice(0,2)
					}
				})
			},
			/**
			 * 更多园区动态
			 */
			goParkMore:function(){
				uni.navigateTo({
					url:"../pageChildren/parkMore/parkMore"
				})
			},
			/**
			 * @param {Object} content
			 * 园区动态详情
			 */
			gotoPark:function(id){
				uni.navigateTo({
					url:"../pageChildren/parkDetail/parkDetail?id="+id
				})
			},
			/**
			 * 园区公告
			 */ 
			getParkAdvice:function(){
				var _self = this 
				uni.request({
					url:_self.$api+"dockingManager/releaseMainQuery",
					data:{pull:3,optionId:uni.getStorageSync("openId"),id:0},
					method:"GET",
					success:function(res){
						console.log(res)
						_self.parkAdviceList = res.data.slice(0,2)
						uni.stopPullDownRefresh();
					}
				})
			},    
			/**
			 * @param {Object} content 
			 * 园区公告详情
			 */
			gotoAdvicePark:function(id){
				uni.navigateTo({
					url:"../pageChildren/parkAdvice/parkAdvice?id="+id
				})
			},
			/**
			 * 更多园区公告
			 */
			learParkMore:function(){
				uni.navigateTo({
					url:"../pageChildren/parkAdviceMore/parkAdviceMore"
				})
			},
			/**
			 * 转租公告
			 */
			getRentList:function(){
				var _self = this 
				uni.request({
					url:_self.$api+"dockingManager/releaseMainQuery",
					data:{pull:4,optionId:uni.getStorageSync("openId"),id:0},
					method:"GET",
					success:function(res){
						_self.rentList = res.data.slice(0,2) 
					}
				})
			}, 
			/**
			 * @param {Object} id
			 * 更多转租公告
			 */
			learRentkMore:function(){
				uni.navigateTo({
					url:"../pageChildren/rentMore/rentMore"
				})
			},
			/**
			 * 转租公告详情
			 */
			gotoRent:function(id){
					uni.navigateTo({
					url:"../pageChildren/rentDetail/rentDetail?id="+id
				})
			},
			/**
			 * @param {Object} content
			 * 园区头条
			 */
			getHeadlineList:function(res){
					var _self = this
				uni.request({
					url:_self.$api+"dockingManager/releaseMainQuery",
					data:{pull:2,optionId:uni.getStorageSync("openId"),id:0},
					method:"GET",
					success:function(res){
						_self.headlineList = res.data.slice(0,2)
					}
				})
			},
			/**
			 * @param {Object} content
			 * 头条更多
			 */
			headMore:function(){
				uni.navigateTo({
					url:"../pageChildren/headerMore/headerMore"
				})
			},
			/**
			 * @param {Object} content
			 */
			gotoHeadLine:function(id){
				uni.navigateTo({ 
					url:"../pageChildren/headerDetail/headerDetail?id="+id
				})
			},
			goTo:function(content){
				uni.navigateTo({ 
					url:"../pageChildren/"+content+"/"+content
				})
			},
			goToSwich:function(content){
				uni.switchTab({
					url:"../"+content+"/"+content
				})
			},
			goToError:function(){
				uni.showToast({
					  title: "页面未开放",
					  icon:"none"
				})
			},
			getBanner:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/pictureQuery",
					data:{id:0},
					success:function(res){
						_self.bannerList = res.data
					} 
				}) 
			}, 
			gotoPostMessage:function(){
				uni.navigateTo({
					url:"../postMessage/postMessage"
				})
			},
			gotoBanner:function(id){ 
				uni.navigateTo({ 
					url:"../pageChildren/bannerDetail/bannerDetail?id="+id
				})
			},
		}
	}
</script>

<style lang="scss">
$height :650upx;
page{
	background: #e8e7e7;
}
.icon{
	color: #EDB200;
}
.addInfo{
	width: 150upx;
	height: 150upx;
	border-radius: 50%;
	background-color:rgba(255,164,27,.8); 
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
			height: 230upx;
			background: #ffffff;
			color: #333333;
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
				background: #ffffff;
				color: #333333;
				font-size: 28upx;
				justify-content: center;
				align-items: center;
			}
			.index-content-left-info-right{
				width: 49%;
				height: 100%;
				background: #ffffff;
				color: #333333;
				font-size: 28upx;
				justify-content: center;
				align-items: center;
			}
		}
		.index-content-left-rent{
			margin-top: 10upx;
			justify-content: center;
			align-items: center;
			background: #ffffff;
			color: #333333;
			height: 230upx;
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
			background: #ffffff;
			color: #333333;
			font-size: 28upx;
			height: 120upx;
			justify-content: center;
			align-items: center;
			.icon{
				font-size: 80upx;
				margin-right: 10upx;
			}
		}
		.index-content-right-server{
			margin-top: 10upx;
			height: 160upx;
			font-size: 28upx;
			background: #ffffff;
			color: #333333;
			justify-content: center;
			align-items: center;
			.icon{
				font-size: 84upx;
			}
		}
		.index-content-right-head{
			margin-top: 10upx;
			background: #ffffff;
			color: #333333;
			font-size: 28upx;
			height: 200upx;
			justify-content: center;
			align-items: center;
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
			background: #ffffff;
			color: #333333;
			font-size: 28upx;
			justify-content: center;
			align-items: center;
		}
		.index-content-right-wuye-right{
			width: 49%;
			height: 100%;
			background: #ffffff;
			color: #333333;
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
			width: 200upx;
			.img{
				width: 200upx;
				height: 200upx;
			}
		}
		.index-notice-content-right{
			width: 200upx;
			justify-content: space-between;
			margin-left: 20upx;
			flex: 1;
			font-size: 28upx;
			height: 200upx;
			.index-notice-content-right-title{
				font-size: 32upx;
				color: #000000;
				font-weight: 600;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.index-notice-content-right-text{
				font-size: 28upx;
				color: #999999;
				margin-top: 10upx;
				// word-break: break-all;/*允许在单词内换行*/
				 text-overflow: ellipsis;
				 white-space: wrap;
				  display:-webkit-box; 
				 -webkit-line-clamp:2;
				 -webkit-box-orient:vertical;
				  overflow: hidden;
			}
			.index-notice-content-right-date{
				margin-top: 10upx; 
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
	height: 570upx;
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
		width: 100%;
	}
.lunbo1{
			height: 400upx;
			align-items: center;
			justify-content: center;
			font-size: 28upx;
			.lunbo1-title{
				width: 90%;
				margin-top: 50upx;
				font-size: 36upx;
				font-weight: 600;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: flex;
				direction: row;
				// justify-content: center;
			}
			.lunbo1-date{
				font-size: 24upx;
				color: #999999;
				margin-top:20upx;
			} 
		}
</style>
