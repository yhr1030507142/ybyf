<template>
	<view>
		<view class="compony">
			<view class="compony-header flex row">
				<picker @change="bindPickerChange" :value="index" :range="array" class="picker  flex row">
				<view class="compony-header-left flex row">
					
					<view class="compony-header-left-word">
						<text v-if="pull==0">全部</text><text v-if="pull!=0">{{array[index]}}</text>
					</view>
					<view class="iconfont icon-xiala1 icon"></view>
					
				</view>
				</picker>
				<view class="compony-header-right flex">
					 <input type="text" class="search" v-model="SearchInput" placeholder="请输入搜索关键字"  placeholder-style="font-size:24upx;">
					<view class="icon" @tap="searchInfo">
						<image src="../../static/img/search.png" mode="" class="img"></image> 
					</view>
				</view>
			</view> 
			
			<!--  -->
				<!-- 活动公告 -->
			<view class="index-notice flex col">
				<view class="index-notice-header flex row row_between">
					<view class="index-notice-header-tilte">
						
					</view>
					<view class="index-notice-header-more">
					</view>
				</view>
				<view class="index-notice-content flex row" v-for="(v,i) in comPonyList" :key="i" @tap="gotoDetail(v.Id)">
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
								<view class="index-notice-content-right-date flex col">
									<view class="flex row position-icon">
										<view class="iconfont icon-chanpinshezhi icon1"></view>
										<view class="">{{v.branch_name}}</view> 
									</view>
										<view class="flex row">
										<view class="iconfont icon-dingwei1"></view>
										<view class="">{{v.address}}</view>
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
				comPonyList:[],
				SearchInput:"",
				branch:[],
				array: [],
				array1:[0,1],
				index: "",
				pull:0,
			}
		},
		onLoad:function(){
			var _self = this
			_self.getInfo()
			_self.getBranchQuery()
		},  
		methods: {
			bindPickerChange: function(e) {
				var _self = this
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value 
				this.pull = _self.array1[_self.index]
				_self.getInfo()
			},
			//http://java.gzbigbang.cn/ybyfManager/dockingManager/cardLower
			getInfo:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/stationedQuery",
					data:{id:"0",pull:_self.pull,name:_self.SearchInput},
					method:"GET",
					success:function(res){
						console.log(res)
						_self.comPonyList = res.data.slice(0,10)
						console.log(res.data)
					}
				}) 
			}, 
			/**
			 * 获取分类
			 */ 
			getBranchQuery:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/branchQuery",
					data:{},
					method:"GET",
					success:function(res){
						console.log(res)
						var array=[]
						var array1=[]
						res.data.push({name:"全部",id:0})
						for(var i = 0;i<res.data.length;i++){
							array[i] =  res.data[i].name
							array1[i] = res.data[i].id
						}
						_self.array = array
						_self.array1 = array1
						console.log(_self.array)
					}
				}) 
				
			},
			searchInfo:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/stationedQuery",
					data:{id:0,name:_self.SearchInput,pull:_self.pull},
					method:"GET",
					success:function(res){
						console.log(res)
						_self.comPonyList = res.data.slice(0,10)
					}
				}) 
			},
			gotoDetail:function(id){
				uni.navigateTo({
					url:"../componyEnterDetail/componyEnterDetail?id="+id
				})
			},
		},
		watch:{
			SearchInput:function(newData){
				var _self = this
				if(newData == ""){
					_self.getInfo()
				}else{
					_self.searchInfo()
				}
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #e8e7e7;
}
.icon1{
	font-size: 30upx;
	margin-right: 4upx;
}
.compony{
	width: 90%;
	margin: 10upx auto;
	.compony-header{
		width: 100%;
		height: 70upx;
		.picker{
			width: 20%;
			height: 70upx;
			font-size: 24upx;
			background: #1758EA;
			color: #ffffff;
			justify-content: center;
			 align-items: center;
		.compony-header-left{
			width: 100%;
			height: 100%;
			font-size: 24upx;
			background: #1758EA;
			color: #ffffff;
			justify-content: center;
		    align-items: center;
			.icon{
				font-size: 10upx;
				z-index: 999;
			}
		  }
		}
		.compony-header-right{
			width:80%;
			height: 100%;
			position: relative;
			background: #ffffff;
			font-size: 24upx;
			.search{
				width: 70%;
				border-radius: 2px;
				border: 1upx solid #dddddd;
				height: 70upx;
				padding-left: 10%;
				border-right: none;
			}
			.compony-header-left-word{
				margin-left: 20upx; 
			}
			.icon{
				position: absolute;
				right: 20upx;
				top: 10upx;
				width: 45upx;
				height: 45upx;
				.img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.index-notice{
		background: #ffffff;
		min-height: 1000upx ;
		margin: 30upx auto;
		.index-notice-header{
			width: 90%;
			margin: 0 auto;
			height: 30upx;
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
					width: 210upx;
					height:210upx;
				}
			}
			.index-notice-content-right{
				justify-content: space-between;
				width: 60%;
				margin-left: 20upx;
				flex: 1;
				font-size: 28upx;
				height: 210upx;
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
					width: 100%;
					overflow: hidden;
					word-break: break-all;/*允许在单词内换行*/
					text-overflow: ellipsis;
				    white-space: wrap;
					 display:-webkit-box; 
					-webkit-line-clamp:2;
					-webkit-box-orient:vertical;
				}
				.index-notice-content-right-date{
					margin-top: 10upx;
					font-size: 24upx;
					color: #1758EA;
					.position-icon{
						margin-right: 30upx;
					}
				}
			}
		}
	}
}
</style>
