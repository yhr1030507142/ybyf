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
				 	<li class="li-25">手机号码</li>
					<li class="li-25">申请时间</li>
				 	<li class="li-25">操作</li>
				 </ul>
			 </view>
		 	
		 	<ul class="tr" v-for="(v,i) in list" :key="i" @tap="goDetail(v.id)">
		 	<li class="li-25">{{v.name}}</li>
		 	<li class="li-25">{{v.phone}}</li>
		 	<li class="li-25">{{v.createTime}}</li>
		 	<li class="li-25">
			待审核
			</li>
		 	</ul> 
		 </view>
		 
	 <!-- <uni-pagination total="20"></uni-pagination> -->
	 <view class="pagination">
		 <uni-pagination 
		    
		     :total="50" 
		     :current="10"
			 @change="changePage">
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
			}  
		},
		onLoad(option) { 
			var _self =this
			_self.getInfo()
		},
		onShow(){
		
		},
		methods: {
			change(e){
				console.log(e)
			},

			changePage(type){
				//console.log(type.current)
				this.currentPage = type.current
				this.searchContent()
			},
			getInfo:function(){
				var _self =this
				 uni.request({
				 	url:_self.$api+"dockingManager/cardQuery",
					method:"GET",
					data:{
						id:0,
						optionId:uni.getStorageSync("openId")
					},
					success:function(res){
						console.log(res)
						_self.list = res.data
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
				justify-content: center;
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
		justify-content: center;
		align-items: center;
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
	width: 20%;
}
.li-25{
	width: 25%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
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
