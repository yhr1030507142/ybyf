<template>
    <view>
		<!-- 活动公告 -->
		<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					法律服务
				</view>
				<view class="index-notice-header-more" @tap="learMore('lawServer')">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in laywerList" :key="i" @tap="goToDetail('lawServerDetail',v.Id)">
					<view class="index-notice-content-img flex">
						<image :src="v.shrink" mode="" class="img"></image>
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
	<!-- 知识产权 -->
		<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					知识产权
				</view>
				<view class="index-notice-header-more" @tap="learMore('intellectual')">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in intellectualList" :key="i" @tap="goToDetail('intellectualDetail',v.Id)">
					<view class="index-notice-content-img flex">
						<image :src="v.shrink" mode="" class="img"></image>
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
	<!-- 税务服务 -->
		<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					税务服务
				</view>
				<view class="index-notice-header-more" @tap="learMore('tax')">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in taxList" :key="i" @tap="goToDetail('taxDetail',v.Id)">
					<view class="index-notice-content-img flex">
						<image :src="v.shrink" mode="" class="img"></image>
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
<!-- 人力资源 -->
		<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					人力资源
				</view>
				<view class="index-notice-header-more" @tap="learMore('human')">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in humanList" :key="i" @tap="goToDetail('humanDetail',v.Id)">
					<view class="index-notice-content-img flex">
						<image :src="v.shrink" mode="" class="img"></image>
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
<!-- 办公用品 -->
		<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					办公用品
				</view>
				<view class="index-notice-header-more" @tap="learMore('office')">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in officeList" :key="i" @tap="goToDetail('officeDetail',v.Id)">
					<view class="index-notice-content-img flex">
						<image :src="v.shrink" mode="" class="img"></image>
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
		<!-- 品牌设计 -->
				<view class="index-notice flex col">
					<view class="index-notice-header flex row row_between">
						<view class="index-notice-header-tilte">
							品牌设计
						</view>
						<view class="index-notice-header-more" @tap="learMore('brand')">
							查看更多>
						</view>
					</view>
					<view class="index-notice-content flex row" v-for="(v,i) in brandList" :key="i" @tap="goToDetail('brandDetail',v.Id)">
							<view class="index-notice-content-img flex">
								<image :src="v.shrink" mode="" class="img"></image>
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
		<!-- 高薪申报 -->
				<view class="index-notice flex col">
					<view class="index-notice-header flex row row_between">
						<view class="index-notice-header-tilte">
							高薪申报
						</view>
						<view class="index-notice-header-more" @tap="learMore('goodMoney')">
							查看更多>
						</view>
					</view>
					<view class="index-notice-content flex row" v-for="(v,i) in goodMoneyList" :key="i" @tap="goToDetail('goodMoneyDetail',v.Id)">
							<view class="index-notice-content-img flex">
								<image :src="v.shrink" mode="" class="img"></image>
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
				<!-- 家政清洁 -->
						<view class="index-notice flex col">
							<view class="index-notice-header flex row row_between">
								<view class="index-notice-header-tilte">
									家政清洁
								</view>
								<view class="index-notice-header-more" @tap="learMore('clean')">
									查看更多>
								</view>
							</view>
							<view class="index-notice-content flex row" v-for="(v,i) in cleanList" :key="i" @tap="goToDetail('cleanDetail',v.Id)">
									<view class="index-notice-content-img flex">
										<image :src="v.shrink" mode="" class="img"></image>
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
									<!-- 快递物流 -->
								<view class="index-notice flex col">
									<view class="index-notice-header flex row row_between">
										<view class="index-notice-header-tilte">
											家政清洁
										</view>
										<view class="index-notice-header-more" @tap="learMore('logistics')">
											查看更多>
										</view>
									</view>
									<view class="index-notice-content flex row" v-for="(v,i) in logisticsList" :key="i" @tap="goToDetail('logisticsDetail',v.Id)">
											<view class="index-notice-content-img flex">
												<image :src="v.shrink" mode="" class="img"></image>
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
	<view class="addInfo flex col"  @tap="learMore('serverEnter')">
		<view class="icon-zhifeiji iconfont icon-fix"></view>
		<view class=""> 
			我要入驻
		</view>
	</view>
	<!-- end-fixed -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
			laywerList:[],
			intellectualList:[],
			taxList:[],
			humanList:[],
			officeList:[],
			brandList:[],
			goodMoneyList:[],
			cleanList:[],
			logisticsList:[],
			}
		},
		onLoad:function(){ 
			var _self = this
			_self.getLawyer()
			_self.getintellectual()
			_self.getTax()
			_self.getHuman()
			_self.getOffice()
			_self.getBrand()
			_self.getGoodMoney()
			_self.getClean()
			_self.getLogistics()
		},
		methods: {
			/** 
			 * 获取法律服务
			 */
			getLawyer:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/totalQuery",
					data:{id:"0",optionId:uni.getStorageSync("openId"),pull:3,branch:0},
					method:"GET",
					success:function(res){ 
						var data = res.data
						_self.laywerList = data.slice(0,2)
					}
					
				})
			},
			goToDetail:function(content,id){
				uni.navigateTo({
					url:"../serverPage/"+content+"/"+content+"?id="+id
				})
			},
			/**
			 * 更多
			 */
			learMore:function(content){
				uni.navigateTo({
					url:"../serverPage/"+content+"/"+content
				})
			},
			/**
			 * 知识产权
			 */
			getintellectual:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/totalQuery",
					data:{id:"0",optionId:uni.getStorageSync("openId"),pull:9,branch:0},
					method:"GET",
					success:function(res){ 
						var data = res.data
						_self.intellectualList = data.slice(0,2)
					}
					
				})
			},
			/**
			 * 税务服务
			 */
			getTax:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/totalQuery",
					data:{id:"0",optionId:uni.getStorageSync("openId"),pull:10,branch:0},
					method:"GET",
					success:function(res){ 
						var data = res.data
						_self.taxList = data.slice(0,2)
					}
					
				})
			},
			/**
			 * 人力资源
			 */
			getHuman:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/totalQuery",
					data:{id:"0",optionId:uni.getStorageSync("openId"),pull:11,branch:0},
					method:"GET",
					success:function(res){ 
						var data = res.data
						_self.humanList = data.slice(0,2)
					}
					
				})
			},
		/**
		 * 办公用品
		 */
		getOffice:function(){
			var _self = this
			uni.request({
				url:_self.$api+"dockingManager/totalQuery",
				data:{id:"0",optionId:uni.getStorageSync("openId"),pull:7,branch:0},
				method:"GET",
				success:function(res){ 
					var data = res.data
					_self.officeList = data.slice(0,2)
				}
				
			})
		},
		/**
		 * 品牌设计
		 */
		getBrand:function(){
			var _self = this
			uni.request({
				url:_self.$api+"dockingManager/totalQuery",
				data:{id:"0",optionId:uni.getStorageSync("openId"),pull:8,branch:0},
				method:"GET",
				success:function(res){ 
					var data = res.data
					_self.brandList = data.slice(0,2)
				}
				
			})
		},
		/**
		 * 高薪申报
		 */
		getGoodMoney:function(){
			var _self = this
			uni.request({
				url:_self.$api+"dockingManager/totalQuery",
				data:{id:"0",optionId:uni.getStorageSync("openId"),pull:12,branch:0},
				method:"GET",
				success:function(res){ 
					var data = res.data
					_self.goodMoneyList = data.slice(0,2)
				}
				
			})
		},
		/**
		 * 家政清洁
		 */
		getClean:function(){
			var _self = this
			uni.request({
				url:_self.$api+"dockingManager/totalQuery",
				data:{id:"0",optionId:uni.getStorageSync("openId"),pull:13,branch:0},
				method:"GET",
				success:function(res){ 
					var data = res.data
					_self.cleanList = data.slice(0,2)
				}
				
			})
		},
			/**
			 * 快递物流
			 */
			getLogistics:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/totalQuery",
					data:{id:"0",optionId:uni.getStorageSync("openId"),pull:14,branch:0},
					method:"GET",
					success:function(res){ 
						var data = res.data
						_self.logisticsList = data.slice(0,2)
					}
					
				})
			},
			
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
			height: 320upx;
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
			height: 270upx;
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
			width: 30%;
			.img{
				width: 200upx;
				height: 200upx;
			}
		}
		.index-notice-content-right{
			width: 60%;
			justify-content: space-between;
			margin-left: 20upx;
			flex: 1;
			font-size: 28upx;
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
				height:110upx;
				// word-break: break-all;/*允许在单词内换行*/
				 text-overflow: ellipsis;
				 white-space: wrap;
				  display:-webkit-box; 
				 -webkit-line-clamp:3;
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
				width: 90%;
				margin-top: 50upx;
				font-size: 36upx;
				font-weight: 600;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.lunbo1-date{
				font-size: 24upx;
				color: #999999;
			}
		}
</style>
