<template>
	<view class="">
		<view class="content">
			<!-- <view class="header">
				<input type="text" class="search" v-model="SearchInput">
				<view class="icon" @tap="searchContent()">
					<image src="../../static/img/search.png" mode="" class="img"></image>
				</view>
			</view> -->
		 </view>
		 <view class="middle">
			 <view class="head">
				 <ul class="th flex row row-between">
				 	<li class="li-10">申请人</li>
				 	<li class="li-30">手机号码</li>
					<li class="li-30">申请时间</li>
				 	<li class="li-10">操作</li>
				 </ul>
			 </view>
		 	<view class="flex row" v-show="branch == 0" style="min-height: 700upx;width: 90%;margin: 0 auto;">
		 		<image src="../../../static/img/null2.png" mode="" class="null_img"></image>
		 	</view>
		 	<ul class="tr" v-for="(v,i) in list" :key="i" @tap="goDetail(v.id)">
		 	<li class="li-10">{{v.name}}</li>
		 	<li class="li-30">{{v.phone}}</li>
		 	<li class="li-30">{{v.createTime | rTime}}</li>
		 	<li class="li-10">
			待审核
			</li>
		 	</ul> 
		 </view>
		 
	 <!-- <uni-pagination total="20"></uni-pagination> -->
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
	
	  
</template> 

<script>
import uniPagination from '@dcloudio/uni-ui/lib/uni-pagination/uni-pagination.vue'
	export default {
		data() {
			return {
			pageNum:5,
			currentPage:1,
			SearchInput:"",
			total:0,
			searchList:[],
			list:[],
			branch:0,
			pageSize:10
			}  
		},
		onLoad(option) { 
			var _self =this
			_self.getInfo()
		},
		onPullDownRefresh:function(){
			var _self = this
			_self.getInfo()
		},
		onShow(){
			var _self =this
			_self.getInfo()
		},
		methods: {
			change(e){
				console.log(e)
			},

			changePage(type){
				//console.log(type.current)
				this.currentPage = type.current
				this.getInfo()
			},
			getInfo:function(){
				var _self =this
				 uni.request({
				 	url:_self.$api+"dockingManager/cardQuery",
					data:{optionId:uni.getStorageSync("openId"),branch:_self.currentPage,live:_self.pageSize,id:0},
					method:"GET",
					success:function(res){
						console.log(res)
						if(res.data == ""){
							_self.branch = []
						}else{
							_self.branch = res.data[0].branch
						}
						_self.list = res.data  
						 uni.stopPullDownRefresh();
					}
				 })
			},
			goDetail:function(id){
				uni.navigateTo({
					url:"../auditContent/auditContent?id="+id
				})
			}
		},
		watch:{
			
		},
		filters:{
			rTime:function(data){
				if(data==null||data==undefined){
					return data
				}else{
					return data.slice(0,11)
				}
			}
		},
		components:{uniPagination}
	}
</script>

<style lang="scss">
.header{
	margin-top:30upx;
	position: relative;
	width: 100%; 
	height: 70upx;
	.search{
		margin-top: 70upx;
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
		width: 55upx;
		height: 55upx;
		.img{
			width: 100%;
			height: 100%;
		}
	}
}
.middle{
	margin-top: 30upx;
	.head{
		width: 100%;
		.th{
			width: 90%;
			margin: 0 auto;
			height: 100upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			li{
				font-weight: 600;
				font-size: 28upx;
				height: 100upx;
				color: #7E2C2E;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
			}
		}
	}
.tr{
	width: 90%;
	margin: 0 auto;
	border-bottom:1upx solid #DDDDDD;
	min-height: 100upx;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	li{
		font-size: 28upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		text-align: left;
		text-overflow: ellipsis;
	}
}
	
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
.li-10{
	width: 15%;
}
.li-30{
	width: 30%;
}
.li-25{
	width: 25%;
	.icon{
		font-size: 56upx;
	}
}
.red{
	color: red;
}
.blue{
	color: #1758EA;
}
</style>
