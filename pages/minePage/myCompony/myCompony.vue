<template>
	<view class="box">

			<view class="select" v-show="tube==1 || com_mark === 0">
   			<view class="select-box flex row row_between">
   				<view class="select-title">
   					
   				</view>
				<view class="selec-name" @click="goEdit()"><text class="iconfont iconziyuan"></text><text>修改企业信息</text></view>
   			</view>
   		</view>
		
   		<!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row row_between">
   				<view class="select-title">
   					公司名称
   				</view>
				<view class="selec-name">{{list.name}}</view>
   			</view>
   		</view>
   <!--  --> 
      		   		<!-- 选择 -->
      				<view class="select">
      					<view class="select-box flex row row_between">
      						<view class="select-title">
      							联系方式
      						</view>
      						<view class="selec-name">{{list.phone}}</view>
      					</view>
      				</view>
      		<!--  -->
				<!-- 选择 -->
					<view class="select">
					
						<view class="select-box flex row row_between">
							<view class="select-title">
								地址
							</view>
							<view class="select-end flex row"> 
								{{list.address}}
							</view>
						</view>
					
					</view>
			<!--  -->
				<!-- 选择 -->
					<view class="select">
					
						<view class="select-box flex row row_between">
							<view class="select-title">
								官网
							</view>
							<view class="select-end flex row"> 
								{{list.network}}
							</view>
						</view>
					</view>
			<!--  -->
			<!-- 选择 -->
					<view class="textarea-select flex col">
						<view class="textarea-select-box flex row row_between">
							<view class="textarea-select-title">
								我的同事
							</view>
							<view class="textarea-select-end" @tap="gotoManager()">
								更多 
							</view>
						</view>
						<view class="textarea-select-content flex row">
							<view class="name friend_box" v-for="(v,i) in friendList" :key="i">{{v.name}}</view>
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
				<view class="index-notice-content flex row" v-for="(v,i) in supplyList2" :key="i" @tap="goInfoDetail(v.Id,1)">
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
				<view class="index-notice-content flex row" v-for="(v,i) in supplyList" :key="i" @tap="goInfoDetail(v.Id,0)">
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
			<view class="" v-show="tube==1 || com_mark === 0">
				<prompt ref="prompt" @onConfirm="onConfirm" @onCancel="onCancel" title="请输入模块名称" :text="promptText"></prompt>
				<button type="primary" @click="prompt">新增服务模块</button>
			</view>
				<!-- 需求资源 -->
			<view class="index-notice flex col" v-for='(v,i) in dataList' :key='i'>
			
				<view class="index-notice-header flex row row_between">
					<view class="index-notice-header-tilte">
						{{v.name}} 
					</view>
					<view class="flex row">
						<view style='margin-right:20upx;' class="iconfont iconxinzeng" @click="goServerContent(v.id)" v-show="tube==1 || com_mark === '0' || com_mark === 0"></view>
						<view style='margin-right:20upx;' class="iconfont iconiconfontshanchu" @click="deleteContent(v.id)" v-show="tube==1 || com_mark === '0' || com_mark === 0"></view>
						<view class="index-notice-header-more" @tap="gotoSupplyMore2(v.id,v.stationedId,v.name)">
							查看更多>
						</view>
					</view>
					
				</view>
				<view class="index-notice-content flex row" v-for="(v1,i1) in v.declareNewList" :key="i1" @tap="goProductDetail(v1.Id,v1.branch,v1.mark,v.name)">
						<view class="index-notice-content-img flex">
							<image :src="v1.shrink | getPic" mode="" class="img"></image>
						</view>
						<view class="index-notice-content-right flex col">
								<view class="index-notice-content-right-title">
									{{v1.name}}
								</view>
								<view class="index-notice-content-right-text">
									{{v1.sketch}}
								</view>
								<!-- <view class="index-notice-content-right-date">
									2019年04月08日
								</view> -->
						</view>
				</view>
			</view>  
			<!--  -->
			<!--  -->
  
	</view>
</template>

<script>
	import {uniCollapse,uniCollapseItem} from "@dcloudio/uni-ui"
	import prompt from '../../prompt.vue';
	export default {
		data() {
			return {
                index: "",
				selectValue:"",   
				imageList:[],
				date: "",
				list:[],
				pic:[],
				supplyList2:[],
				supplyList:[],
				Id:"",
				tradeId:"",
				productList:[],
				friendList:[],
				dataList:[],
				tube:'',
				com_mark:999,
				
			}
		},
		onLoad:function(option){
			var _self = this
			console.log(option)
			_self.Id = option.componyId
			_self.tube = uni.getStorageSync('tube')
			_self.com_mark = uni.getStorageSync('mark')
			console.log(_self.tube)
			console.log(_self.com_mark)
			_self.getInfo()	
		},
		onShow:function(){
			var _self = this
			_self.getInfo()	
		},
		methods: {
				getInfo:function(){
					var _self =this
					 uni.request({
					 	url:_self.$api+"dockingManager/tradeQuery", 
					 	data:{id:_self.Id}, 
						method:"GET",
						success:function(res){
							console.log(res)
							_self.list = res.data[0]
							_self.tradeId = res.data[0].id
							uni.setStorageSync("tradeId",res.data[0].id)
							// _self.getNeedInfo()
							// _self.getNeedInfo1()
							// _self.getProduct() 
							_self.getMyFriend()  
							_self.getDataList()
							
						}
					 })
				}, 
				/**
				 * 修改企业
				 */
				goEdit:function(){
					var _self =this
					 uni.navigateTo({
					 	url:'../editMyCompony/editMyCompony?id='+_self.Id
					 })
				},
				/**
				 * 需求更多
				 */
				gotoSupplyMore:function(){
					var _self = this
					uni.navigateTo({
						url:"../myComponyNeed/myComponyNeed?id="+_self.tradeId
					})
				},
				/**
				 * 供应更多 
				 */
				gotoSupplyMore1:function(){
					var _self = this
					uni.navigateTo({
						url:"../myComponyApply/myComponyApply?id="+_self.tradeId
					})
				},
				/**
				 * 产品服务
				 */
				getProduct:function(){
					var _self = this
					uni.request({
						url:_self.$api+"dockingManager/totalNewQuery",
						data:{pull:18,id:0,optionId:uni.getStorageSync("openId"),branch:0,trade:_self.tradeId},
						method:"GET",
						success:function(res){
							_self.productList = res.data.slice(0,2) 
							console.log(res)
						}
					})
				},
				gotoSupplyMore2:function(mark,branch,part_name){
					var _self = this
					uni.navigateTo({
					url:"../../pageChildren/componyProduct/componyProduct?mark="+mark+'&branch='+branch+'&part_name='+part_name
						//url:"../myComponyProduct/myComponyProduct?mark="+mark+'&branch='+branch+'&part_name='+part_name
					})
				},
				goInfoDetail:function(id,mark){
					var _self = this
					uni.navigateTo({
						url:"../myComponyNeedDetail/myComponyNeedDetail?id="+id+"&mark="+mark+"&tradeId="+_self.tradeId
					})
				},
				goProductDetail:function(id,branch,mark,part_name){
					var _self = this
					uni.navigateTo({
						url:"../../pageChildren/productDetail/productDetail?id="+id+"&branch="+branch+"&part_name="+part_name+'&mark='+mark
					})
				},
				/**
				 * 模块查询
				 */
				getDataList:function(){
					var _self = this
					uni.request({
						url:_self.$api+"dockingManager/titleBranchQuery",
						data:{optionId:uni.getStorageSync("openId"),id:uni.getStorageSync('tradeId')},
						method:"GET",
						success:function(res){
							_self.dataList = res.data
							console.log(res)
						}
					})
					
				},
				/**
				 * 我的同事
				 */
				getMyFriend:function(){
					var _self = this
					uni.request({
						url:_self.$api+"dockingManager/tradeWorkQuery",
						data:{optionId:uni.getStorageSync("openId"),branch:1,live:4},
						method:"GET",
						success:function(res){
							_self.friendList = res.data
							console.log(res)
						}
					})
				},
				gotoManager:function(){
					var _self = this
					uni.navigateTo({
						url:"../myFriends/myFriends"
					})
				},
				/**
				 * 操作
				 */
				prompt:function(){
				this.$refs.prompt.show();
			},
			onConfirm:function(e){
				var _self = this
				console.log(e);
				let _cost = e;
				if (_cost == '') {
				 uni.showToast({
				 	'title':'请输入服务模块名称',
					'icon':'none'
				 })
				 console.log('你还未输入');
				 return;
				}
				else{  
				  uni.showModal({
				  	title: '提示',
				  	content: '是否新增服务模块:'+_cost, 
				  	showCancel: false,
				  	confirmText: "确定",
					success:function(){
						uni.request({
							url:_self.$api+'dockingManager/titleBranchAdd',
							data:{id:uni.getStorageSync('tradeId'),name:_cost},
							success:function(res){
								if(res.data == 1){
									 uni.showToast({
										'title':'新增成功',
									})
									_self.$refs.prompt.hide();
									_self.getInfo()
									return
								}else{
									 uni.showToast({
										'title':'新增失败，请联系工作人员',
									})
									_self.$refs.prompt.hide();
									return false
								}
							}
						})
					}
				  })
				}
			},
			onCancel:function(){
				this.$refs.prompt.hide();
				this.$refs.prompt.cost = '';
			},
			/**
			* 跳转发布内容
			*/
		   goServerContent:function(id){
			   uni.navigateTo({
			   	url:'../serverContent/serverContent?id='+id
			   })
		   },
		   /**
			* 删除分类
			*/
		   deleteContent:function(id){
			   var _self = this
			   uni.showModal({
				title: '提示',
				content: '是否删除此分类',
				success: function (res) {
						if (res.confirm) {
							uni.request({
								url:_self.$api+'dockingManager/titleBranchDelete',
								data:{id:id},
											success:function(res){
												if(res.data==1){
													uni.showToast({
														title:'删除成功'
													})
													_self.getInfo()
													return
												}else{
													uni.showToast({
														title:'删除失败',
														icon:'none'
													})
													return
												}
											}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});  
		   }
			

		},
		 components: {uniCollapse,uniCollapseItem,prompt},
		  computed: {
		   
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
	background: #e8e7e7;
}
.btn{
	background: #1758EA !important;
}
.box{
	width: 90%;
	margin: 20upx auto;
	.select{
		width: 100%;
		margin: 30upx auto;
		min-height: 100upx;
		background: #ffffff;
		.picker{
			height: 100%;
		}
		.select-box{
			    height: 100upx;
				align-items: center;
				width: 90%;
				margin: 0 auto;
				.select-title{
					font-size: 28upx;
					color:#000000;
				}
				.selec-name{
					font-size: 28upx;
					color: #999999;
				}
				.select-end{
					font-size: 28upx;
					color: #999999;
					align-items: center;
					.icon{
						font-size: 50upx;
					}
				}
				.select-input{
					margin-left: 20upx;
					flex: 1;
				}
		}
		.select-pic{
			width: 90%;
			margin: 0 auto;
			height: 300upx;
		}
	}
	.textarea-select{
		margin: 30upx auto;
		min-height: 300upx;
		background: #ffffff;
		.textarea-select-box{
			height: 100upx;
			width: 90%;
			margin: 0 auto;
			align-items: center;
				.textarea-select-title{
				font-size: 28upx;
				color:#000000;
			}
			.textarea-select-end{
				font-size: 28upx;
				color: #999999;
			}
		}
		.textarea-select-content{
			min-height: 150upx;
			width: 90%;
			margin: 0 auto; 
			flex-wrap: nowrap;
			overflow: hidden;
			justify-content: flex-start;
			.name{
			}
			.img{
				width: 30%;
				height: 200upx;
				margin-left: 20upx;
			}
		}
	}
}
.uni-uploader-head{
	font-size: 28upx;
}
.index-notice{
	background: #ffffff;
	width: 100%;
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
.friend_box{
width:23%;
border:1upx solid #007AFF;
color:#fff;
margin-top:20upx;
font-size:28upx;
text-align:center;
height:70upx;
line-height:70upx;
-webkit-border-radius:5upx;
border-radius:5upx;
overflow: hidden;
background: #007AFF;
text-align: center;
margin-left: 5upx;
}
</style>
