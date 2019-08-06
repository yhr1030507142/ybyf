<template>
	<view>
		<view class="info">
		
			
				<!-- 需求资源 -->
			<view class="index-notice flex col">
				<view class="index-notice-content flex row" v-for="(v,i) in supplyList" :key="i" @tap="lookDetail(v.Id,0,v.branch)">
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
										<view class="flex row">
										<view class="iconfont icon-chanpinshezhi icon1"></view>
										<view class="kind_name">互联网</view>
									</view> 
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
				id:"",
				branch:0,
			}
		},
		onLoad:function(option){
			var _self = this
			_self.id = option.id
			_self.branch = option.branch
			_self.getInfo()
		},
		methods: {
			getInfo:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/declareQuery",
					data:{id:"0",mark:0,optionId:uni.getStorageSync("openId"),branch:_self.id}, 
					method:"GET",
					success:function(res){
						_self.supplyList = res.data
						_self.shrink = res.data
						console.log(res.data) 
					} 
				})
			},
			lookDetail:function(id,mark,branch){
				uni.navigateTo({
					url:"../../infoPage/infoDetail/infoDetail?id="+id+"&mark="+mark+"&branch="+branch
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
		margin: 30upx auto;
		padding-bottom: 30upx;
		.index-notice-content-img{
			width: 30%;
			.img{
				width: 155upx;
				height: 155upx;
			}
		}
		.index-notice-content-right{
			width: 68%;
			margin-left: 20upx;
			flex: 1;
			font-size: 28upx;
			justify-content: space-between;
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
