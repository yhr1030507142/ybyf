<template>
	<view>
		<view class="box">
			<view class="index-notice index-notice1 flex col" v-show="ListLen == 0 && ListLen1==0 && List2Len==0&& com_List_Len==0"> 
			<view class="index-notice-content flex row">
				<image src="../../../static/img/null2.png" mode="" class="null_img"></image>
			</view>
			</view> 
				<!-- 首页收藏 -->
			
			<!-- <view class="index-notice flex col" v-show="ListLen1>0">
			<view class="mine-title">园区内容收藏</view>
				<view class="index-notice-content flex row " v-for="(v,i) in List0" :key="i" @tap="goLawerDetail(v.Id,v.mark)">
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
			</view> -->
			<!--  -->
			<!-- 供求 -->
			<view class="index-notice flex col" v-show="ListLen>0"> 
			<view class="mine-title">供求信息收藏</view>
				<view class="index-notice-content flex row " v-for="(v,i) in List" :key="i" @tap="goInfoDetail(v.Id,v.mark,v.branch)">
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
			<!-- 服务 -->
			<view class="index-notice flex col" v-show="ListLen1>0">
			<view class="mine-title">园区服务收藏</view>
				<view class="index-notice-content flex row " v-for="(v,i) in List1" :key="i" @tap="goLawerDetail(v.Id,v.mark)">
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
			<!-- 活动公告 -->
			<view class="index-notice flex col" v-show="List2Len>0">
			<view class="mine-title">活动收藏</view>
				<view class="index-notice-content flex row " v-for="(v,i) in List2" :key="i" @tap="goActiveDetail(v.Id)">
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
		
			<!--  -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				List0:[],//园区内容
				List:[],
				List1:[], 
				List2:[],
				com_List:[],
				List0Len:0,
				ListLen:0,
				ListLen1:0,
				List2Len:0,
				com_List_Len:0,
			}
		},
		onLoad:function(){
			var _self = this
			// _self.getInfo0() 
			_self.getInfo()
			_self.getInfo1()
			_self.getInfo2()
		},
		onShow:function(){
			var _self = this
			_self.getInfo()
			_self.getInfo1()
			_self.getInfo2()
		},
		methods: {
			
			
			/**
			 * 园区内容收藏
			 */
			getInfo0:function(){
				var _self = this
				 uni.request({
				 	url:_self.$api+"dockingManager/releaseHideQuery",
					data:{id:0,optionId:uni.getStorageSync("openId")},
					method:"GET",
					success:function(res){
						console.log(res)
						_self.List0Len = res.data.length
						_self.List0 = res.data
						//.slice(0,2)  
					}
				 })
			},
			/**
			 * 我的供应收藏
			 */
			getInfo:function(){
				var _self = this
				 uni.request({
				 	url:_self.$api+"dockingManager/demandHideQuery",
					data:{id:0,optionId:uni.getStorageSync("openId")},
					method:"GET", 
					success:function(res){
						console.log(res)
						_self.ListLen = res.data.length
						_self.List = res.data
						console.log(_self.List.length)
						//.slice(0,2)  
					}
				 })
			},
			/**
			 * 园区服务收藏
			 */
			getInfo1:function(){
				var _self = this
				 uni.request({
				 	url:_self.$api+"dockingManager/totalHideQuery",
					data:{id:0,optionId:uni.getStorageSync("openId")},
					method:"GET",
					success:function(res){
						console.log(res)
						_self.List1 = res.data
						console.log(res.data)
						_self.ListLen1 = _self.List1.length
					}
				 })
			},
			/**
			 * 我的活动收藏
			 */
				getInfo2:function(){
				var _self = this 
				 uni.request({
				 	url:_self.$api+"dockingManager/hideQuery",
					data:{id:0,optionId:uni.getStorageSync("openId")},
					method:"GET",
					success:function(res){
						_self.List2 = res.data
						_self.List2Len = _self.List2.length
					}
				 })
			},
			/**
			 * @param {Object} id
			 * @param {Object} mark
			 * @param {Object} trade
			 * @param {Object} branch
			 * 获取入住企业
			 */
			// getComList:function(){
			// 	var _self = this 
			// 	 uni.request({
			// 	 	url:_self.$api+"dockingManager/hideQuery",
			// 		data:{id:0,optionId:uni.getStorageSync("openId")},
			// 		method:"GET",
			// 		success:function(res){
			// 			_self.com_List = res.data
			// 			_self.com_List_Len = _self.com_List.length
			// 		}
			// 	 })
			// 	
			// },
			/**
			 * 企业收藏
			 * 
			 */
			/**
			 * 供应详情
			 */
			goInfoDetail:function(id,mark,branch){
				var _self = this
				console.log(id)
				console.log(mark)
				if(branch ==0){
						uni.navigateTo({
							url:"../../infoPage/infoDetail/infoDetail?id="+id+'&mark='+mark
						})
					
				}else{
					uni.navigateTo({
					url:"../../pageChildren/productDetail/productDetail?id="+id+'&mark='+mark+'&branch='+branch
					})
				}
				
			},
			/**
			 * 活动详情
			 */
			goActiveDetail:function(id){
				console.log('1231')
				var _self = this
				uni.navigateTo({
					url:"../../pageChildren/activity/activity?id="+id
				})
			},
			/**
			 * 其他收藏详情
			 */
			goLawerDetail:function(id,mark){
				var _self = this
				uni.navigateTo({
					url:"../../serverPage/taxDetail/taxDetail?id="+id+'&pull='+mark
				})
			}
		},
		filters:{
			getPic:function(res){
				if(res == "" || res==undefined){ 
					return " "
				}else{
					return res.split(',')[0] 
				}
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: #e8e7e7;
	}
.index-notice1{
	min-height: 1000upx;
}
.mine-title{
	width: 90%;
	margin: 0 auto;
	padding-bottom: 30upx;
}
.box{
	width: 90%;
	margin: 30upx auto;
	.index-notice{
		background: #ffffff;
		padding-top: 30upx;
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
					height:200upx;
					margin: 0px auto;
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
.marin-100{
	margin-top: 30upx;
}

</style>
