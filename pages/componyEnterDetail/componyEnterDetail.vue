<template>
	<view>
		<view class="compony-detail">
			<!--  -->
			<view class="compony-detail-pic">
				<image :src="List.primary" mode="" class="img"></image>
			</view>
			<view class="compony-detail-info">
				<view class="compony-detail-info-header flex row">
					<!-- <view class="logo"><image :src="List.shrink" mode="" class="logo-img"></image></view> -->
					<view class="compony-name">{{List.name}}</view>
				</view>
				<view class="compony-detail-info-address flex row row_between">
							<view class="address flex row">
								<view class="iconfont icondizhi"></view>
								<view class="">{{List.address | changeData}}</view>
							</view>
							
								<view class="address flex row">
								<view class="iconfont icondianhua"></view>
								<view class="">{{List.phone}}</view>
							</view>
							
								<view class="address flex row">
								<view class="iconfont"></view>
								<view class="">主营:{{List.branch_name | changeData}}</view>
							</view>
				
				</view>
				<view class="compony-detail-info-cotent flex col">
					<view class="compony-detail-info-cotent-header">
						公司简介
					</view>
					<rich-text class="compony-detail-info-cotent-text" :nodes="List.sketch | changeData"></rich-text>
					
				</view>
			</view>
			<!--  -->
	
		</view>
		<!-- 产品服务 -->
		<view class="index-notice flex col" v-for='(v,i) in  nameList' :key='i'>
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					{{v.name}}
				</view>
				<view class="index-notice-header-more" @tap="goProductMore(v.id,v.stationedId,v.name)">
					查看更多> 
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(val,index) in v.declareNewList" :key="index" @tap="goProductDetail(val.Id,val.branch,val.mark,v.name)">
					<view class="index-notice-content-img flex">
						<image :src="val.shrink | getPic" mode="" class="img"></image>
					</view>
					<view class="index-notice-content-right flex col">
							<view class="index-notice-content-right-title">
								{{val.name}}
							</view>
							<view class="index-notice-content-right-text">
								{{val.sketch}} 
							</view>
					</view>
			</view>
		</view>  
		<!--  -->
		<!-- 需求资源 -->
	<!-- 	<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					需求资源
				</view>
				<view class="index-notice-header-more" @tap="gotoSupplyMore()">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in supplyList2" :key="i" @tap="goInfoDetail(v.Id,1,v.branch)">
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
					</view>
			</view>
		</view>  -->
		<!--  -->
			<!-- 需求资源 -->
	<!-- 	<view class="index-notice flex col">
			<view class="index-notice-header flex row row_between">
				<view class="index-notice-header-tilte">
					供应资源
				</view>
				<view class="index-notice-header-more" @tap="gotoSupplyMore1()">
					查看更多>
				</view>
			</view>
			<view class="index-notice-content flex row" v-for="(v,i) in supplyList" :key="i" @tap="goInfoDetail(v.Id,0,v.branch)">
					<view class="index-notice-content-img flex">
						<image  :src="v.shrink | getPic" mode="" class="img"></image>
					</view>
					<view class="index-notice-content-right flex col">
							<view class="index-notice-content-right-title">
								{{v.name}}
							</view>
							<view class="index-notice-content-right-text">
									{{v.sketch}}
							</view>
						
					</view>
			</view>
			
		</view>  -->
		<!--  -->
		 <view class="park-box-select">
			 <button type="primary" class="btn" @tap="apply">立即咨询</button>
		 </view>
			 <!--  -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				word:"132",
				id:"",
				List:[],
				nameList:[],
				supplyList:[],
				supplyList2:[],
				serverList:[],
			
			}
		},
		onLoad:function(option){
			var _self = this
			_self.id = option.id
			_self.getInfo()
			_self.getDataList()
			// _self.getNeedInfo()
			// _self.getSupplyInfo()
			// _self.getServerInfo()
		},
		methods: {
				getInfo:function(){
				var _self = this
				 uni.request({
				 	url:_self.$api+"dockingManager/stationedQuery",
					data:{id:_self.id,name:"",pull:0}, 
					success:function(res){
						console.log(res)
						_self.List = res.data[0]
					}
				 })
			},
			/**
			 * 立即咨询
			 */
			apply:function(){
				var _self = this
				 uni.makePhoneCall({
					phoneNumber: _self.List.phone //仅为示例
				 });
			},
			/**
			 * 获取动态子列表，例如：产品服务(模块)
			 */
			getDataList:function(){
				var _self = this
				uni.request({
					url:_self.$api+'dockingManager/titleBranchQuery',
					data:{id:_self.id,optionId:uni.getStorageSync('optionId')},
					success:function(res){
						console.log(res)
						_self.nameList = res.data
					}
				})
			},
			/**
			 * 获取模块下子内容
			 */
			getChildList:function(mark,branch){
				var _self = this
				uni.request({
					url:_self.$api+'dockingManager/declareNewQuery',
					data:{id:0,mark:mark,branck:branch,optionId:uni.getStorageSync('optionId')},
					success:function(res){
						console.log(res)
						_self.serverList[i] = res.data
					}
				})
			},
			/**
			 * 需求资源
			 */
			getNeedInfo:function(){ 
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/declareQuery",
					data:{id:"0",mark:1,optionId:uni.getStorageSync("openId"),branch:_self.id},
					method:"GET",
					success:function(res){
						_self.supplyList2 = res.data.slice(0,2) 
						console.log(res.data)
					}
				})
			},
			/**
			 * 供应信息
			 */
			getSupplyInfo:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/declareQuery",
					data:{id:"0",mark:0,optionId:uni.getStorageSync("openId"),branch:_self.id},
					method:"GET",
					success:function(res){ 
						_self.supplyList = res.data.slice(0,2)
						console.log(res.data)
					}
				})
			},
			/**
			 * server产品
			 */
			getServerInfo:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/totalQuery",
					data:{pull:18,id:0,optionId:uni.getStorageSync("openId"),branch:_self.id},
					method:"GET",
					success:function(res){
						_self.serverList = res.data.slice(0,2)
						console.log(res.data)
					}
				})
			},
			/**
			 * 更多产品
			 */
			goProductMore:function(mark,branch,part_name){
				var _self = this
				uni.navigateTo({
					url:"../pageChildren/componyProduct/componyProduct?mark="+mark+'&branch='+branch+'&part_name='+part_name
				})
			},
			/**
			 * 产品详情
			 */
			goProductDetail:function(id,branch,mark,part_name){
				uni.navigateTo({
					url:"../pageChildren/productDetail/productDetail?id="+id+"&branch="+branch+"&part_name="+part_name+'&mark='+mark
				})
			},
			/**
			 * 更多资源
			 */
			gotoSupplyMore:function(){
				var _self = this

				uni.navigateTo({
					url:"../pageChildren/componyInfo/componyInfo?id="+_self.id
				})
			},
			/**
			 * 更多供应
			 */
			gotoSupplyMore1:function(){
				var _self = this
				uni.navigateTo({
					url:"../pageChildren/componyInfo1/componyInfo1?id="+_self.id
				})
			},
			/**
			 * 详情
			 */
			goInfoDetail:function(id,mark,branch){
				uni.navigateTo({
					url:"../infoPage/infoDetail/infoDetail?id="+id+"&mark="+mark+"&branch="+branch
				})
			}
		},
		filters:{
			getPic:function(res){
				return res.split(',')[0]
			},
			changeData:function(data){
				 if(data == undefined || data==null || data ==''){
					 return '暂无'
				 }else{
					 return data
				 }
			},
		}
	}
</script>

<style lang="scss">
	page{
		color: #333333;
			background: #e8e7e7;
	}
	.btn{
		border-radius: 5upx;
		background: #1758EA !important;
	}
.compony-detail{
	background: #ffffff;
	width: 90%;
	margin: 10upx auto;
	.compony-detail-pic{
		width: 100%;
		height: 300upx;
		.img{
			width:100%;
			height: 100%;
		}
	}
	.compony-detail-info{
		width: 100%;
		.compony-detail-info-header{
			width: 90%;
			margin: 0 auto;
			height: 120upx;
			align-items: center;
			.logo{
				width: 80upx;
				height: 80upx;
				.logo-img{
					width: 100%;
					height: 100%;
				}
			}
			.compony-name{
				font-size: 32upx;
				font-weight: 600;
				margin-left: 30upx;
			}
		}
		.compony-detail-info-address{
			width: 90%;
			margin: 20upx auto;
			font-size: 28upx;
			color: #666666;
			min-height: 70upx;
			border-bottom:1px solid #DDDDDD;
			flex-wrap: wrap;
			
			.address{
				margin-right: 20upx;
				padding-bottom: 20upx;
			}
		}
		.compony-detail-info-cotent{
			width: 90%;
			margin: 30upx auto;
			.compony-detail-info-cotent-header{
				color: #000000;
				font-size: 32upx;
				font-weight: 600;
			}
			.compony-detail-info-cotent-text{
				margin-top: 30upx;
				font-size: 28upx;
				color: #333333;
				line-height: 40upx;
				min-height: 500upx;
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
			width:30%;
			.img{
				width: 160upx;
				height: 160upx;
			}
		}
		.index-notice-content-right{
			width: 68%;
			margin-left: 20upx;
			flex: 1;
			font-size: 28upx;
			height: 160upx;
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
.park-box-select{
	padding-bottom: 30upx; 
}
</style>
