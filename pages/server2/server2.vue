<template>
		<view class="">
			<!--  -->
			<view class="compony-header flex row">
					<input type="text" class="search" v-model="name" placeholder="请输入搜索关键字"  placeholder-style="font-size:24upx;">
					<view class="icon" @tap="searchInfo">
						<image src="../../static/img/search.png" mode="" class="img"></image> 
					</view>
			</view>
				<!--  -->
				<!--  -->
				<view class="flex  server-box col">
					<ul class='server-ul'>
						<li class='server-li' v-for='(v,i) in iconList' :key='i' @click="goTOChildren(v.id,v.name)">
							<view class="server-icon">
									<!-- <view class="iconfalv iconfont icon"></view> -->
									<image :src="v.primary" mode="" class="primary-img"></image>
							</view>
							<view class="server-word">{{v.name}}</view>
						</li>
					</ul>
				<view class="page-box">
					 <view class="pagination">
							 <uni-pagination 
							     :total="branch" 
							     :current="currentPage"
								 @change="changePage"
								 :pageSize="pageSize"
								 >
							 </uni-pagination>  
					</view>	
				</view>
				
				</view>
				<!--  -->
				<!-- 我要入驻 -->
				<view class="server-box-pic" @tap="goTO('serverEnter')">
						<image src="../../static/img/rzfw.jpg" mode="" class="img"></image>
				</view>
				<!--  -->
				
				
	<!--  -->			
</view>
	
</template>

<script>
	import uniPagination from '@dcloudio/uni-ui/lib/uni-pagination/uni-pagination.vue'
	export default {
		data() {
			return {
				name:'',
				iconList:[], 
				currentPage:1,
				branch:0,
				pageSize:9,
			} 
		},
		onLoad:function(){
			var _self = this
			_self.getList()
			uni.startPullDownRefresh();
		},
		onPullDownRefresh:function() {
			var _self = this
			_self.getList()
			
		},
		methods: {
			getList:function(){
				var _self = this
				uni.request({
					url:_self.$api+'dockingManager/titleQuery',
					data:{branch:_self.currentPage,live:_self.pageSize,name:_self.name},
					success:function(res){
						
						console.log(res)
						console.log(res.data) 
						_self.iconList = res.data
						if(res.data == '' || res.data == []){ 
							_self.branch = 0
						}else{
							_self.branch = res.data[0].total
						}
						uni.stopPullDownRefresh();
					}
					
				})
			},
			//切换
			changePage:function(e){
				console.log(e.current)
				var _self = this
				_self.currentPage = e.current
				_self.getList()
			},
			// 跳转
				goTO:function(content){ 
				uni.navigateTo({
					url:"../serverPage/"+content+"/"+content
				})
			},
			searchInfo:function(){
				this.getList()
			},
			goTOChildren:function(id,name){
				console.log(id)
				uni.navigateTo({
					url:"../serverPage/tax/tax?id="+id+'&tax_name='+name
				})
			}
		},
		 components:{uniPagination}
	}
</script>

<style lang="scss">
	page{
		 background: #cccccc;
	} 
	.compony-header{
		width: 90%;
		margin: 30upx auto;
		background: #ffffff;
			.search{
				width: 70%;
				border-radius: 2px;
				// border: 1upx solid #dddddd;
				height: 70upx;
				padding-left: 10%;
				border-right: none;
				font-size: 28upx;
			}
			.icon{
				position: absolute;
				right: 80upx;
				top: 20upx;
				width: 45upx;
				height: 45upx;
				.img{
					width: 100%;
					height: 100%;
				}
		}
	} 
	
	// 
	.server-box{
		width: 90%;
		margin: 0 auto;
		justify-content: flex-start;
		.server-ul{
			background: #ffffff;
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			.server-li{
				width: 33.3%;
				height: 260upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background: #ffffff;
				.server-icon{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 120upx;
					height: 120upx;
					border-radius: 50%;
					overflow: hidden;
					.primary-img{
						width: 100%;
						height: 100%;
					}
					.icon{
						font-size: 60upx;
					}
				}
				.server-word{
					font-size: 28upx;
					margin-top: 15upx;
				}
			}
		}
	}
	// 
	.server-box-pic{
		width: 90%;
		height: 300upx;
		margin: 30upx auto;
		.img{
			width:100%;
			height: 100%; 
		}
	}
	//分页
	.page-box{
		width: 100%;
		height: 100upx;
		background: #ffffff;
		padding-top: 50upx;
	}
	.pagination{
		width: 70%; 
		margin: 30upx auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	uni-pagination{
			width: 100%;
		}
</style>
