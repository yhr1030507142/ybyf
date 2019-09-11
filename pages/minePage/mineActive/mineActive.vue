<template>
	<view>
		<view class="box">
			<!-- 活动公告 -->
			<view class="index-notice flex col">
				<view class="index-notice-content flex row" v-show="ListLen == 0">
					<image src="../../../static/img/null2.png" mode="" class="null_img"></image>
				</view>
				<view class="index-notice-content flex row " v-for="(v,i) in List" :key="i" @tap="goActiveDetail(v.Id)">
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
			<!--  -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				List:[],
				ListLen:0,
			}
		},
		onLoad:function(){
			var _self = this
			 _self.getInfo()
		},
		onShow:function(){
			var _self = this
			 _self.getInfo()
		},
		methods: {
			getInfo:function(){
				var _self = this
				 uni.request({
				 	url:_self.$api+"dockingManager/activityReportQuery",
					data:{id:0,optionId:uni.getStorageSync("openId")},
					success:function(res){
						console.log(res.data)
						_self.List = res.data  
						_self.ListLen = res.data.length
					} 
				 })
			},
				/**
			 * 活动详情
			 */
			goActiveDetail:function(id){
				var _self = this
				uni.navigateTo({
					url:"../../pageChildren/activity/activity?id="+id
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #e8e7e7;
	}
.box{
	width: 90%;
	margin: 30upx auto;
	.index-notice{
		background: #ffffff;
		padding-top: 30upx;
		margin: 30upx auto;
		min-height: 1200upx;
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
					height:200upx;
				}
			}
			.index-notice-content-right{
				margin-left: 20upx;
				flex: 1;
				font-size: 28upx;
				   height: 200upx;
				   width: 200upx;
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
					margin-top: 10upx;
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
}
.marin-100{
	margin-top: 30upx;
}
</style>
