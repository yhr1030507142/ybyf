<template>
		<view class="box">
			
   		<!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row">
   				<view class="select-title">
   					所在园区
   				</view>
				<input type="text" placeholder="请输入所在园区" style="text-align: right;" class="select-end select-input" placeholder-style="text-align: right" v-model="name">

   			</view>
   		</view>
   <!--  -->
   	<!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row">
   				<view class="select-title">
   					上门地址
   				</view>
   				<input type="text" placeholder="请输入上门地址" style="text-align: right;" class="select-end select-input" placeholder-style="text-align: right" v-model="address">
   
   			</view>
   		</view>
   <!--  -->
   	<!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row">
   				<view class="select-title">
   					联系电话
   				</view>
   				<input type="number" placeholder="请输入联系电话" style="text-align: right;" class="select-end select-input" placeholder-style="text-align: right" v-model="phone" maxlength="11">
   
   			</view>
   		</view>
   <!--  -->
      		<!-- 选择 -->
   		<view class="textarea-select flex col">
   			<view class="textarea-select-box flex row row_between">
   				<view class="textarea-select-title">
				服务内容
   				</view>
   				<view class="textarea-select-end">
   					请输入服务内容
   				</view>
   			</view>
			<textarea class="textarea-select-content" v-model="sketch"></textarea>
   		</view>
   <!--  -->
 
   <button type="primary" class="btn" @tap="addApply">确定</button>
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
				sketch:"",
				name:"",
				address:"",
				phone:"",
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
					if (this.imageList.length === 9) {
						let isContinue = await this.isFullImg();
						console.log("是否继续?", isContinue);
						if (!isContinue) {
							return;
						}
					}
					uni.chooseImage({
						success: (res) => {
							this.imageList = this.imageList.concat(res.tempFilePaths);
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
			addApply:function(){
				var _self = this
				var myreg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
				if(_self.name == ""){
						uni.showToast({
						title:"请输入所在园区",
						icon:"none"
					})
					return false
				}else if(_self.address==""){
						uni.showToast({
						title:"请输入上门地址",
						icon:"none"
					})
					return false
				}else if(!myreg.test(_self.phone)){
						uni.showToast({
						title:"联系电话格式不正确",
						icon:"none"
					})
					return false
				}else if(_self.sketch==""){
						uni.showToast({
						title:"请输入服务内容",
						icon:"none"
					})
					return false
				}
				uni.request({
					url:_self.$api+"dockingManager/repairAdd",
					dataType:"json",
					data:{name:_self.name,address:_self.address,phone:_self.phone,sketch:_self.sketch,optionId:uni.getStorageSync("openId")},
					 header:{
						   "Content-Type": "application/text"
						 },   
					method:"GET",
					success:function(res){
						console.log(res.data)
						if(res.data ==1){ 
							uni.showToast({
								title:"申请成功", 
								success:function(){
									setTimeout(function(){
										uni.switchTab({
											url:"../../../pages/index/index"
										})
									},1000)
								}
							})
							return false 
						}else if(res.data ==99){
							uni.showToast({
								title:"您尚未登录，请登录后重试",
								icon:"none"
							})
							return false
						}
						else{
							uni.showToast({
								title:"申请失败",
								icon:"none"
							})
							return false
						}
					}
					
				})
			
			},
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
.box{
	width: 90%;
	margin: 20upx auto;
	.select{
		width: 100%;
		margin: 30upx auto;
		min-height: 100upx;
		background: #ffffff;
		color:#000000;
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
			font-size: 24upx;
		}
	}
}
.uni-uploader-head{
	font-size: 28upx;
}
</style>
