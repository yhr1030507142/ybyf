<template>
	<view>
		<view class="box">
			<!-- 活动公告 -->
			
			<view class="index-notice flex col">
				<view class="index-notice-header flex row row_center">
					<view class="index-notice-header-tilte">
						{{tax_name}}
					</view>
					<view class="index-notice-header-more">
					</view>
				</view>
				<view class="index-notice-content flex row" v-show="len==0" style="min-height:1000upx;">
					<image src="../../../static/img/null2.png" mode="" class="null_img"></image>
				</view>
				<view class="index-notice-content flex row" v-for="(v,i) in headlineList" :key="i" @tap="goto(v.Id)">
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
			headlineList:[],
			id:'',
			tax_name:'',
			len:0,
			}
		},
		onLoad:function(option){
			var _self = this
			_self.id = option.id
			_self.tax_name = option.tax_name
			console.log(option)
			_self.getInfo()
		},
		methods: {
			getInfo:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/totalMainQuery",
					data:{id:"0",pull:_self.id,optionId:uni.getStorageSync("openId")},
					method:"GET",
					success:function(res){
						console.log(res)
						_self.headlineList = res.data
						_self.len = res.data.length
					}
				})
			},
			goto:function(id){
				var _self = this
				uni.navigateTo({
					url:"../taxDetail/taxDetail?id="+id+'&pull='+_self.id+'&tax_name='+_self.tax_name
				})
			},
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
		min-height:1000rpx;
		margin: 30upx auto;
		.index-notice-header{
			width: 90%;
			margin: 0 auto;
			height: 70upx;
			padding-bottom:30upx;
			align-items: center;
			.index-notice-header-tilte{
				font-size: 40upx;
				font-weight: 800;
				color: #000000;
				margin-top: 50upx;
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
				width: 200upx;
				.img{
					width: 200upx;
					height:200upx;
				}
			}
			.index-notice-content-right{
				width: 200upx;
				margin-left: 20upx;
				flex: 1;
				font-size: 28upx;
				height: 200upx;
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
</style>
