 <template>
     <view>
 		<!-- 搜索 -->
     <view class="server-input">
				 <input type="text" class="search" v-model="SearchInput" placeholder="请输入搜索关键字"  placeholder-style="font-size:24upx;">
				 <view class="icon" @tap="searchContent()">
				 	<image src="../../static/img/search.png" mode="" class="img"></image> 
				 </view>
		 </view>
 		<!-- 中间导航 -->
 		<view class="index-content flex row_between">
 			<view class="index-content-left">
 				<view class="index-content-left-introfuce flex col">
 							<view class="iconfont icon-qiyejianjie icon"></view>
 							<view class="index-content-left-introfuce-word">法律服务</view>
 							
 				</view>
 				<view class="index-content-left-info flex row row_between">
 					<view class="flex col index-content-left-info-left"> 
 							<view class="iconfont icon-jiaoyijilu icon"></view>
 							<view class="index-content-left-info-word">
 								知识产权
 							</view>
 					</view>
 					<view class="flex col index-content-left-info-right">
 						<view class="iconfont icon-qiyeguanli icon">
 							
 						</view>
 						<view>
 							税务服务
 						</view>
 					</view>
 				</view>
 				<view class="index-content-left-rent flex col">
 					<view class="iconfont icon-huiyishi icon">
 						
 					</view>
 					<view>
 						人力资源
 					</view>
 				</view>
 			</view>
 			<view class="index-content-right">
 					<view class="index-content-right-oriented flex row">
 							<view class="iconfont icon-fangxiang icon"></view>
 							<view class="index-content-right-oriented-word">办公用品</view>	
 					</view>
 					<view class="index-content-right-server flex col">
 						<view class="iconfont icon-fuwu icon"></view>
 						<view class="">
 							品牌设计
 						</view>
 					</view>
 					
 					<view class="index-content-right-head flex col">
 						<view class="iconfont icon-liebiaofenlei icon"></view>
 						<view class="">
 							高新申请
 						</view>
 					</view>
 						
 						<view class="index-content-right-wuye flex row row_between">
 						<view class="flex col index-content-right-wuye-left">
 								<view class="iconfont icon-weixiujilu icon"></view>
 								<view class="index-content-left-info-word">
 									家政清理
 								</view>
 						</view>
 						<view class="flex col index-content-right-wuye-right">
 							<view class="iconfont icon-shenqing icon">
 								
 							</view>
 							<view>
 								快递物流
 							</view>
 						</view>
 					</view>
 			</view>
 		</view>
 	<!-- 我要入驻 -->
	<view class="server-box-pic">
			<image src="../../static/img/5b45cb4b08550.jpg" mode="" class="img"></image>
	</view>
	<!--  -->
 	
 
 	
 
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
			SearchInput:"",
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
 			},
			searchContent:function(){
				
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
 				width: 200upx;
 				height: 200upx;
 			}
 		}
 		.index-notice-content-right{
 			margin-left: 20upx;
 			flex: 1;
 			font-size: 28upx;
 			.index-notice-content-right-title{
 				font-size: 32upx;
 				color: #000000;
 				font-weight: 600;
 			}
 			.index-notice-content-right-text{
 				font-size: 28upx;
 				color: #999999;
 				margin-top: 10upx;
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
		
.server-input{
	margin:10upx auto;
	position: relative;
	width: 90%; 
	height: 70upx;
	background: #ffffff;
	font-size: 24upx;
	.search{
		margin-top: 20upx;
		width: 90%;
		border-radius: 5px;
		border: 1upx solid #dddddd;
		height: 70upx;
		padding-left: 10%;
	}
	.icon{
		position: absolute;
		right: 20upx;
		top: 10upx;
		width: 45upx;
		height: 45upx;
		.img{
			width: 100%;
			height: 100%;
		}
	}
}
.server-box-pic{
	width: 90%;
	height: 300upx;
	margin: 30upx auto;
	.img{
		width:100%;
		height: 100%;
	}
}
 </style>
 