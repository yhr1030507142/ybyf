<template>
	<view>
		<view class="info">
			<view class="info-header flex row">
	
				<!-- <view class="info-header-btn flex row row_center"  :class="[active:info-header-btn-active?'']">供应信息</view> -->
				<view class="info-header-btn flex col" :class="[active==1?'info-header-btn-active':'']"  @tap="changeActive(1)">
					<text>供应信息</text>
					<view class="line" v-show="active==1"></view>
				</view>
				<view class="info-header-btn flex col" :class="[active==2 ?'info-header-btn-active':'']" @tap="changeActive(2)">
					<text>需求信息</text>
					<view class="line" v-show="active==2"></view>
					</view>
			</view>
			
				<!-- 需求资源 -->
			<view class="index-notice flex col" v-show="active==1">
				<view class="index-notice-content flex row" v-for="(v,i) in supplyList" :key="i" @tap="lookDetail(v.Id,0)">
						<view class="index-notice-content-img flex">
							<image :src="v.shrink | getPic" mode="" class="img"></image>
						</view>
						<view class="index-notice-content-right flex col">
								<view class="index-notice-content-right-title">
									{{v.name}}
								</view>
								<view class="index-notice-content-right-text">
									{{v.sketch}}
								</view>
								<view class="index-notice-content-right-date flex row">
										<view class="flex row position-icon">
										
										<view class="">{{v.create_time | getTime}}</view>
									  </view>
										<!-- <view class="flex row">
										<view class="iconfont icon-chanpinshezhi icon1"></view> 
										<view class="kind_name">{{v.branch_name}}</view>
									</view> -->
								</view>
						</view>
				</view>
			</view>  
			<!--  -->
				<!-- 需求资源 -->
			<view class="index-notice flex col" v-show="active==2">
				<view class="index-notice-content flex row" v-for="(v,i) in supplyList2" :key="i" @tap="lookDetail(v.Id,1)">
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
								<view class="index-notice-content-right-date flex row">
										<view class="flex row position-icon">
										
										<view class="">{{v.create_time | getTime}}</view> 
									</view>
										<!-- <view class="flex row">
										<view class="iconfont icon-zhifeiji"></view>
										<view class="">互联网互联网互联网互联网</view>
									</view> -->
								</view>
						</view>
				</view>
			</view>  
			<!--  -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active:1,
				activeClass:"info-header-btn-active",
				supplyList:[],
				supplyList2:[],
				shrink:"",
			}
		},
		onLoad:function(){
			var _self = this
			_self.getInfo()
			_self.getInfo1()
		},
		methods: {
			changeActive:function(i){
				this.active=i
			},
			getInfo:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/declareQuery",
					data:{id:"0",mark:0,optionId:uni.getStorageSync("openId"),branch:0}, 
					method:"GET",
					success:function(res){
						_self.supplyList = res.data
						_self.shrink = res.data
						console.log(res.data) 
					} 
				})
			}, 
			getInfo1:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/declareQuery",
					data:{id:"0",mark:1,optionId:uni.getStorageSync("openId"),branch:0},
					method:"GET",
					success:function(res){
						_self.supplyList2 = res.data
						console.log(res.data)
					}
				})
			},
			lookDetail:function(id,mark){
				uni.navigateTo({
					url:"../infoPage/infoDetail/infoDetail?id="+id+"&mark="+mark
				})
			}
		},
		filters:{
			getPic:function(res){
				return res.split(',')[0]
			},
			getTime:function(res){
				return res.slice(0,11)
			}
		}
	}
</script>

<style lang="scss">
page{
		color: #333333;
		background: #e8e7e7;
	}
.icon1{
	font-size:30upx;
	margin-right: 4upx;
}
.info{
	width: 90%;
	margin: 10upx auto;
	background: #ffffff;
	.info-header{
		width: 100%;
		height: 120upx;
		font-size: 28upx;
		justify-content: space-around;
		.info-header-btn{
			width: 50%;
			height: 100%;
			justify-content: center;
			align-items: center;
			.line{
				width: 60upx;
				height: 6upx;
				background: #1758EA;
				margin-top: 6upx;
			}
		}
		.info-header-btn-active{
			font-size: 32upx;
			font-weight: 600;
			color: #333333;
		}
	}
}
.index-notice{
	background: #ffffff;
	width: 90%;
	margin: 30upx auto;
	min-height: 1000upx;
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
			margin-left: 20upx;
			flex: 1;
			font-size: 28upx;
			justify-content: space-between;
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
				.position-icon{
						margin-right: 30upx;
					}
				.flex{
					.kind_name{
						
					}
				}
			}
		}
	}
}
</style>
