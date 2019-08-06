<template>
	<view class="box">
		<!-- 选择 -->
		<view class="select">
			
			 <picker @change="bindPickerChange" :value="index" :range="array" class="picker">
			   
			
			<view class="select-box flex row row_between">
				<view class="select-title">
					供求选择
				</view>
				<view class="select-end flex row">
					 <view class="uni-input" v-if="index == ''">请选择</view>
					 <view class="uni-input uni-input1" v-else="">{{array[index]}}</view>
					 <view class="iconfont icon-xiala1 icon"></view>

				</view>
			</view>
			</picker>
		</view>
   <!--  -->
   		<!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row">
   				<view class="select-title">
   					标题
   				</view>
				<input type="text" placeholder="请输入标题" style="text-align: right;" v-model="title" class="select-end select-input" placeholder-style="text-align: right">

   			</view>
   		</view>
   <!--  -->
   <!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row">
   				<view class="select-title">
   					联系方式
   				</view>
   				<input type="number" placeholder="请输入联系方式" style="text-align: right;" v-model="phone" class="select-end select-input" placeholder-style="text-align: right" maxlength="11">
   
   			</view>
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
			<textarea class="textarea-select-content" v-model="textarea"></textarea>
   		</view>
   <!--  -->
   <!-- 选择 -->
   		<view class="select">
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
										<progress :percent="percent" active stroke-width="3" backgroundColor="#999" @activeend="showOrHide" v-show="showBox"/>
									</view>
								</view>
							</view>
						</view>
					</view>
				
			</view>
   		</view>
   <!--  -->
   <button type="primary" class="btn" @tap="addInfo">确定发布</button>
	</view>
</template>

<script>
	import {uniCollapse,uniCollapseItem} from "@dcloudio/uni-ui"
	export default {
		data() {
			return {
				array: ["供应信息","需求信息"],
				array1:[0,1],
                index: "",
				selectValue:"", 
				imageList:[],
				title:"",
				textarea:"",
				pathArr:[],
				listPath:[],
				phone:"",
				percent:0,
				showBox:false,
				state:false,
			}
		},
		onLoad:function(){
			var _self = this
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value 
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			chooseImage: async function() {
				var _self = this
					if (this.imageList.length === 9) {
						let isContinue = await this.isFullImg();
						console.log("是否继续?", isContinue);
						if (!isContinue) {
							return;
						}
					}
					uni.chooseImage({
						success: (res) => {
							console.log(res)
							console.log(JSON.stringify(res.tempFilePaths));
							var tempFilePaths = res.tempFilePaths;
							this.imageList = this.imageList.concat(res.tempFilePaths);
							for(var i =0;i<tempFilePaths.length;i++){
							uni.uploadFile({
								url: _self.$api+'dockingManager/upload', //仅为示例，非真实的接口地址
								//url: "http://www.tp5.com/index", //仅为示例，非真实的接口地址
								filePath: tempFilePaths[i],
								name: 'file', 
								formData: {
									'user': 'test'
								},
								success: (uploadFileRes) => {
									_self.pathArr = _self.pathArr.concat(JSON.parse(uploadFileRes.data))
									console.log(_self.pathArr)
								}
							  }); 
							}
							_self.state = true
						} 
					})
				},
				isFullImg: function() {
					return new Promise((res) => {
						uni.showModal({
							content: "已经有9张图片了,是否清空现有图片？",
							success: (e) => {
								if (e.confirm) {
									this.imageList = [];
									res(true);
								} else {
									res(false)
								}
							},
							fail: () => {
								res(false)
							}
						})
					})
				},
			showOrHide:function(){
					this.showBox = false
				},
			addInfo:function(){
				var _self = this
				var myreg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
				if(_self.index == ""){
					uni.showToast({
						title:"请选择供求",
						icon:"none"
					})
					return false
				}else if(_self.title == ""){
					uni.showToast({
						title:"请输入标题",
						icon:"none"
					})
					return false
				}
				// else if(_self.percent != 100 && _self.imageList.length>0){
				// 
				// 	uni.showToast({
				// 		title:"图片正在上传，请稍后提交",
				// 		icon:"none"
				// 	})
				// 	return false
				// }
				else if(_self.state == false && _self.imageList.length>0){ 
					uni.showToast({
						title:"图片正在上传，请稍后提交1",
						icon:"none"  
					})
					return false
				}
				else if(_self.textarea == ""){
					uni.showToast({
						title:"请输入简介",
						icon:"none"
					})
					return false
				}
				// else if(_self.pathArr.length === 0){
				// 	uni.showToast({
				// 		title:"请上照片",
				// 		icon:"none"
				// 	})
				// 	return false
				// }
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
					for(var i =0;i<_self.pathArr.length;i++){
						_self.listPath.push({testName1:_self.pathArr[i]})
						console.log(_self.listPath)
					}
					_self.listPath.push({phone:_self.phone,mark:_self.index,name:_self.title,sketch:_self.textarea,optionId:uni.getStorageSync("openId")})
					console.log(JSON.stringify(_self.listPath))
				uni.request({
					url:_self.$api+"dockingManager/declareAdd",
					data:JSON.stringify(_self.listPath),
					method:"POST",
					success:function(res){
						if(res.data ==98){
							uni.showToast({
								title:"您尚未认证"
							})
							return false
						}else if(res.data ==99){
								uni.showToast({
								title:"您尚未登录"
						})
							return false
						}else if(res.data ==0){
								uni.showToast({
								title:"发布失败"
						})
							return false
						}else if(res.data ==1){
								uni.showToast({
								title:"发布成功",
								success:function(){
									setTimeout(function(){
										uni.switchTab({
											url:"../index/index"
										})
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
			}
		},
		 components: {uniCollapse,uniCollapseItem}
	}
</script>

<style lang="scss">
page{
	background: #e8e7e7;
}
.btn{
	background: #1758EA !important;
}
.uni-input1{
	color: #000000;
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
				.select-end{
					font-size: 28upx;
					color: #999999;
					align-items: center;
					.icon{
						font-size: 12upx;
					}
				}
				.select-input{
					margin-left: 20upx;
					flex: 1;
					color: #000000;
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
			min-height: 300upx;
			width: 90%;
			margin: 0 auto; 
		}
	}
}
.uni-uploader-head{
	font-size: 28upx;
}
</style>
