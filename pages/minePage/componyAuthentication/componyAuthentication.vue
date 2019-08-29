<template>
	<view class="box">
		<!-- 选择 -->
		<view class="select">
			
			
			   
			
			<view class="select-box flex row row_between">
				<view class="select-title">
					<text class="red">*</text>企业
				</view>
				<input type="text" placeholder="请输入企业名称" style="text-align: right;" class="select-end select-input" placeholder-style="text-align: right" v-model="compony_name">
			</view>
		</view>
   <!--  -->
   		<!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row">
   				<view class="select-title">
   						<text class="red">*</text>姓名
   				</view>
				<input type="text" placeholder="请输入法人名称" style="text-align: right;" v-model="name" class="select-end select-input" placeholder-style="text-align: right">

   			</view>
   		</view>
   <!--  -->
   	<!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row">
   				<view class="select-title">
   						<text class="red">*</text>手机号
   				</view>
   				<input type="number" maxlength="11" style="text-align: right;" placeholder="请输入联系方式" v-model="tel" class="select-end select-input" placeholder-style="text-align: right">
   
   			</view>
   		</view>
   <!--  -->
      		<!-- 选择 -->
      			<view class="select">
      				<view class="select-box flex row">
      					<view class="select-title">
      							<text class="red">*</text>企业注册号
      					</view>
      					<input type="text" placeholder="请输入企业注册号" style="text-align: right;" class="select-end select-input" placeholder-style="text-align: right" v-model="compony_num">
      	
      				</view>
      			</view>
      	<!--  -->
   <!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row row_between">
   				<view class="select-title">
   					<text class="red">*</text>上传营业执照
   				</view>
				<view class="select-title" style="font-size: 24upx;color: #999999;">图片大小不得超过5M，格式为jpg,png</view>
   			</view>
			<view class="select-pic">
						<view class="uni-list list-pd">
						<view class="uni-list-cell cell-pd">
							<view class="uni-uploader">
								<view class="uni-uploader-head">
									<!-- <view class="uni-uploader-info">{{imageList.length}}/9</view> -->
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
   <button type="primary" class="btn" @tap="addAudit">确定认证</button>
	</view>
</template>

<script>
	import {uniCollapse,uniCollapseItem} from "@dcloudio/uni-ui"
	export default {
		data() {
			return {
				array: ['中国', '美国', '巴西', '日本'],
                index: "",
				selectValue:"", 
				imageList:[],
				compony_name:"",
				name:"",
				compony_num:"",
				pathArr:[],
				listPath:[],
				tel:"",
				percent:0,
				showBox:false,
				state:false,
				
			}
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
								_self.state = true 
							}
						}); 
					   }	
					}
				})
			},
			showOrHide:function(){
					this.showBox = false
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
				/**
				 * 提交认证
				 */
				addAudit:function(){
					var _self = this
					if(_self.compony_name == ""){
						uni.showToast({
							title:"企业名称不能为空",
							icon:"none"
						})
						return false
					}else if(_self.name == ""){
						uni.showToast({
							title:"法人姓名不能为空",
							icon:"none"
						})
						return false
					}
					// else if(_self.percent != 100 && _self.imageList.length>0){
					// 		uni.showToast({
					// 			title:"图片正在上传，请稍后提交",
					// 			icon:"none"
					// 		})
					// 		return false
					// 	}
					else if(_self.compony_num == ""){
						uni.showToast({
							title:"企业注册号不能为空",
							icon:"none"
						})
						return false
					}
					else if(_self.tel == ""){
						uni.showToast({
							title:"请输入联系方式",
							icon:"none"
						})
						return false
					}else if(_self.imageList.length === 0){
						uni.showToast({
							title:"请上传企业照片",
							icon:"none" 
						})
						return false
					}else if(_self.state == false && _self.imageList.length>0){ 
					uni.showToast({
						title:"图片正在上传，请稍后提交",
						icon:"none"  
					})
					return false
					}
					
					for(var i =0;i<_self.pathArr.length;i++){
						_self.listPath.push({testName1:_self.pathArr[i]})
					}
					_self.listPath.push({store:0,nots:_self.compony_num,trade:_self.compony_name,phone:_self.tel,name:_self.name,optionId:uni.getStorageSync("openId")})
					uni.request({
						url:_self.$api+"dockingManager/cardAdd",
						data:JSON.stringify(_self.listPath),
						method:"POST",
						success:function(res){
							console.log(res)   
								if(res.data == 1){ 
								uni.setStorageSync("componyOwner",4)
								uni.showToast({
									title:"提交成功",
									success:function(){
										setTimeout(function(){
											uni.switchTab({ 
												url:"../../../pages/mine/mine"
											})
										},1000)
									}
								})
								return false
							}
							else if(res.data == 99){
								uni.showToast({
									title:"您尚未进行登录，亲登录后重试",
									icon:"none"
								})
								return false
							}
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
.red{
	color: red;
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
						font-size: 50upx;
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
