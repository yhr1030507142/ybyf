<template>
	<view class="box">


   		<!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row row_between">
   				<view class="select-title">
   					公司名称
   				</view>
				<view class="selec-name">
					<input type="text" v-model="name" style="text-align: right;">
				</view>
   			</view>
   		</view>
   <!--  --> 
      		   		<!-- 选择 -->
      				<view class="select">
      					<view class="select-box flex row row_between">
      						<view class="select-title">
      							联系方式
      						</view>
      						<view class="selec-name">
      							<input type="text" v-model="phone" style="text-align: right;" maxlength="11">
      						</view>
      					</view>
      				</view>
      		<!--  -->
				<!-- 选择 -->
					<view class="select">
					
						<view class="select-box flex row row_between">
							<view class="select-title">
								地址
							</view>
							<view class="selec-name">
								<input type="text" v-model="address" style="text-align: right;">
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
							<view class="selec-name">
								<input type="text" v-model="network" style="text-align: right;">
							</view>
						</view>
					</view>
			<!--  --> 
		<!-- 选择 -->
				<view class="select">
					
					 <picker @change="bindPickerChange" :value="index" :range="array" class="picker">
					   
					
					<view class="select-box flex row row_between">
						<view class="select-title">
							入驻类型(已选择：{{branch_name}})
						</view>
						<view class="select-end flex row">
							 <view class="uni-input" v-if="index == ''">请选择</view>
							 <view class="uni-input uni-input1" v-else="">{{array[index]}}</view>
							 <view class="iconfont icon-xiala1 icon" style="font-size: 12upx;"></view>
						</view>
					</view>
					</picker>
				</view>
		<!--  -->
		<!-- 选择 -->
				<view class="textarea-select flex col">
					<view class="textarea-select-box flex row row_between">
						<view class="textarea-select-title">
							简介
						</view>
						<view class="textarea-select-end">
							请输入简介
						</view>
					</view>
					<textarea class="textarea-select-content" v-model="sketch"></textarea>
				</view>
		<!--  -->
		<!-- 选择 -->
				<view class="select">
				
					<view class="select-box flex row row_between">
						<view class="select-title">
							企业注册号
						</view>
						<view class="selec-name">
							<input type="text" v-model="nots" style="text-align: right;" >
						</view>
					</view>
				</view>
		<!--  -->
				<!-- 选择 -->
				<view class="select">
				
					<view class="select-box flex row row_between">
						<view class="select-title">
							用户名称
						</view>
						<view class="selec-name">
							<input type="text" v-model="userName" style="text-align: right;">
						</view>
					</view>
				</view>
				<!--  -->
				<!--  -->
				<!-- 选择 -->
				<view class="select">
				
					<view class="select-box flex row row_between">
						<view class="select-title">
							主营
						</view>
						<view class="selec-name">
							<input type="text" v-model="camp" style="text-align: right;">
						</view>
					</view>
				</view>
		<!--  -->
		<!--  -->
		<view class="textarea-select flex col">
			<view class="textarea-select-box flex row row_between">
				<view class="textarea-select-title">
					原图
				</view>
				<view class="textarea-select-end">
					
				</view>
			</view>
			<view class="textarea-select-content flex row">
				<image :src="primary" mode="" class="img"  @tap="chooseImage"></image>
			</view>
		</view>
		<!--  -->
		<!--  -->
		<view class="textarea-select flex col">
			<view class="textarea-select-box flex row row_between">
				<view class="textarea-select-title">
					缩略图
				</view>
				<view class="textarea-select-end">
					
				</view>
			</view>
			<view class="textarea-select-content flex row">
				<image :src="shrink" mode="" class="img"   @tap="chooseImage1"></image>
			</view>
		</view>
		<!--  -->
				
			 <!-- 选择 -->
				<!-- 	<view class="select">
						<view class="select-box flex row row_between">
							<view class="select-title">
								添加图片
							</view>
						</view>
						<view class="select-pic">
									<view class="uni-list list-pd">
									<view class="uni-list-cell cell-pd">
										<view class="uni-uploader">
											<view class="uni-uploader-head">
												<view class="uni-uploader-title">点击可预览选好的图片</view>
												<view class="uni-uploader-info">{{imageList.length}}/9</view>
											</view>
											<view class="uni-uploader-body">
												<view class="uni-uploader__files">
													<block v-for="(image,index) in imageList" :key="index">
														<view class="uni-uploader__file">
															<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
														</view>
													</block>
													<view class="uni-uploader__input-box">
														<view class="uni-uploader__input" @tap="chooseImage"></view>
													</view>
												
												</view>
											</view>
										</view>
									</view>
								</view>
							
						</view>
					</view> -->
			<!--  -->
			
		
			
			<!--  -->
  <button type="primary" class="btn" @tap="EditInfo">修改</button>
	</view>
</template>

<script>
	import {uniCollapse,uniCollapseItem} from "@dcloudio/uni-ui"
	import prompt from '../../prompt.vue';
	export default {
		data() {
			return {
                index: "",
				array:[],
				array1:[],
				name:'',
				phone:'',
				address:'',
				network:'',
				Id:"",
				sketch:'',
				branch:'',
				pull:'',
				branch_name:'',
				nots:'',
				userName:'',
				camp:'',
				shrink:'',
				primary:'',
				
				
				
				selectValue:"",   
				imageList:[],
				date: "",
				list:[],
				pic:[],
				
				
				
				
			}
		},
		onLoad:function(option){
			var _self = this
			_self.Id = option.id
			_self.getKindList()	
			
		},
		onShow:function(){
			
		},
		methods: {
			getKindList:function(){
				var _self = this
				uni.request({
					url:_self.$api+'dockingManager/branchQuery',
					success:function(res){
						var array=[]
						var array1=[]
						for(var i = 0;i<res.data.length;i++){
							array[i] =  res.data[i].name
							array1[i] = res.data[i].id
						}
						_self.array = array
						_self.array1 = array1
						_self.getInfo()
					}
				})
				
			},
			bindPickerChange: function(e) {
				var _self = this
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value 
				this.pull = _self.array1[_self.index]
				this.branch_name =  _self.array[_self.index]
			},
				getInfo:function(){
					var _self =this
					 uni.request({
					 	url:_self.$api+"dockingManager/tradeQuery", 
					 	data:{id:_self.Id}, 
						method:"GET",
						success:function(res){
							_self.name = res.data[0].name
							_self.address = res.data[0].address
							_self.network = res.data[0].network
							_self.phone = res.data[0].phone
							_self.sketch = res.data[0].sketch
							_self.branch = res.data[0].branch
							_self.pull = res.data[0].branch
							_self.index = _self.array1.indexOf(_self.branch) 
							_self.branch_name = _self.array[_self.index]
							_self.nots = res.data[0].nots
							_self.userName = res.data[0].userName
							_self.camp = res.data[0].camp
							if(res.data[0].primary==''||res.data[0].primary==undefined|| res.data[0].primary == null){
								_self.primary = '../../../staic/img/timg1.jpg'
							}else{ 
								_self.primary = res.data[0].primary.replace(/\"/g, "");
							}
							if(res.data[0].shrink==''||res.data[0].shrink==undefined || res.data[0].shrink == null){
								
								_self.shrink = '../../../staic/img/timg1.jpg' 
							}else{
								_self.shrink = res.data[0].shrink.replace(/\"/g, "");
							}
							console.log(res.data[0].shrink)
							console.log(res.data[0].primary)
							console.log(res.data[0].primary.replace(/\"/g, ""))
							// console.log(_self.imageList)
							// if(_self.imageList==''||_self.imageList==undefined){
							// 	_self.imageList = []
							// }else{
							// 	_self.imageList = res.data[0].shrink.split(',')
							// }
							console.log(res)
	
						}
					 })
				}, 
				/**
				 * 修改企业
				 */
				
				EditInfo:function(){
					var _self =this
					var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
					console.log(reg.test(_self.network))
					var myreg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
					if(_self.index == ""){
						uni.showToast({
							title:"请选择企业类型",
							icon:"none"
						})
						return false
					}else if(_self.name == ""){
						uni.showToast({
							title:"请输入公司名称",
							icon:"none"
						})
						return false
					}
					
					else if(reg.test(_self.network)){
						uni.showToast({
							title:"官网不允许输入中文",
							icon:"none"
						})
						return false
					} 
					else if(_self.sketch == ""){
						uni.showToast({
							title:"请输入简介",
							icon:"none"
						})
						return false
					}
					else if(_self.phone == ""){
						uni.showToast({
							title:"请输入联系方式",
							icon:"none"
						})
						return false
					}else if(!myreg.test(_self.phone)){
							uni.showToast({
							title:"联系电话格式不正确",
							icon:"none"
						})
						return false
					}
					uni.request({
						url:_self.$api+"dockingManager/tradeUpdate", 
						data:{id:uni.getStorageSync('tradeId'),name:_self.name,sketch:_self.sketch,phone:_self.phone,address:_self.address,branch:_self.pull,network:_self.network,nots:_self.nots,upperId:uni.getStorageSync('componyId'),userName:_self.userName,camp:_self.camp,primary:_self.primary,shrink:_self.shrink}, 
						method:"GET",
						success:function(res){ 
							if(res.data ==98){
								uni.showToast({
									title:"您尚未认证",
									icon:'none'
								})
								return false
							}else if(res.data ==99){
								uni.showModal({
								title: '提示',
								content: '此操作需用户授权，是否进行授权',
								success: function (res) {
									if (res.confirm) {
										//跳转到授权页面  
										uni.navigateTo({
											url:"../../login/login"  
										})
										console.log('用户点击确定');
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
							
								return false
							}else if(res.data ===0){
									uni.showToast({
									title:"修改失败"
							})
								return false
							}else if(res.data ==1){
									uni.showToast({
									title:"修改成功",
									success:function(){
										setTimeout(function(){
											uni.navigateBack({
												delta: 1,
												animationType: 'pop-out',
												animationDuration: 100
											});
										},1000)
									}
								})
								return false
							}else{
								uni.showToast({
									title:"系统异常"
								})
								return false
							}
							console.log(res)
						} 
						
					})
				},
				/**
				 * 上传图片
				 */
				chooseImage: async function() {
					var _self = this
						uni.chooseImage({
							success: (res) => {
								var tempFilePaths = res.tempFilePaths;
								uni.uploadFile({
									url: _self.$api+'dockingManager/upload', //仅为示例，非真实的接口地址
									//url: "http://www.tp5.com/index", //仅为示例，非真实的接口地址
									filePath: tempFilePaths[0],
									name: 'file', 
									formData: {
										'user': 'test'
									},
									success: (uploadFileRes) => {
										_self.primary = uploadFileRes.data.replace(/\"/g, "")
										console.log(uploadFileRes)
									}
								  }); 
							} 
						})
					},
					chooseImage1: async function() {
						var _self = this
							uni.chooseImage({
								success: (res) => {
									var tempFilePaths = res.tempFilePaths;
									uni.uploadFile({
										url: _self.$api+'dockingManager/upload', //仅为示例，非真实的接口地址
										//url: "http://www.tp5.com/index", //仅为示例，非真实的接口地址
										filePath: tempFilePaths[0],
										name: 'file', 
										formData: {
											'user': 'test'
										},
										success: (uploadFileRes) => {
											_self.shrink = uploadFileRes.data.replace(/\"/g, "")
											console.log(uploadFileRes)
										}
									  }); 
								} 
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
			 },
			 check_zh:function(obj){ 
			   return obj.replace(/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/g,'')
			 },
		 },
		 wacth:{
			
		 }
	}
</script>

<style lang="scss">
page{
	background: #e8e7e7;
}
input{
	color: #000000;
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
			padding-bottom: 50upx;
			.name{
			}
			.img{
				width: 60%;
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
