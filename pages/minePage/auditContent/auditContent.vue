<template>
	<view class="box">

   		<!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row row_between">
   				<view class="select-title">
   					申请人
   				</view>
				<view class="selec-name">{{list.name}}</view>
   			</view>
   		</view>
   <!--  -->
      		   		<!-- 选择 -->
      				<view class="select">
      					<view class="select-box flex row row_between">
      						<view class="select-title">
      							手机号码
      						</view>
      						<view class="selec-name">{{list.phone}}</view>
      					</view>
      				</view>
      		<!--  -->
				<!-- 选择 -->
					<view class="select">
						<!-- <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange"> -->
						<view class="select-box flex row row_between">
							<view class="select-title">
								申请时间
							</view>
							<view class="select-end flex row"> 
								{{list.createTime}} 
								 <!-- <view class="iconfont icon-xiala icon"></view> -->
							</view>
						</view>
						<!-- </picker> -->
					</view>
			<!--  -->
	<!-- 选择 -->
   		<view class="textarea-select flex col">
   			<view class="textarea-select-box flex row row_between">
   				<view class="textarea-select-title">
   					图片
   				</view>
   				<view class="textarea-select-end">
   					
   				</view>
   			</view>
			<view class="textarea-select-content flex row">
				<image :src="v" mode="" class="img"  v-for="(v,i) in  pic"  :key="i" @tap="previewImage(i)"></image>
			</view>
   		</view>
   <!--  -->
   <view class="flex row row-between btn-box">
	   <button type="primary" class="btn" @tap="audit(1)">审核通过</button>
	   <button type="primary" class="btn" @tap="audit(2)">审核不通过</button>
   </view>
   
	</view>
</template>

<script>
	import {uniCollapse,uniCollapseItem} from "@dcloudio/uni-ui"
	export default {
		data() {
			const currentDate = this.getDate({
			format: true
			})
			return {
				array: ['中国', '美国', '巴西', '日本'],
                index: "",
				selectValue:"",   
				imageList:[],
				date: currentDate,
				Id:"",
				list:[],
				pic:[],
				
			}
		},
		onLoad:function(option){
			var _self = this
			_self.Id = option.id
			_self.getInfo()
		},
		methods: {
			bindDateChange: function(e) {
			console.log(e)
			this.date = e.target.value
			},
			bindPickerChange: function(e) {
            console.log('picker发送选择改变，携带值为', e.target.value)
            this.index = e.target.value
			},
			previewImage: function(e) {
				uni.previewImage({
					current: e,
					urls: this.pic
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
				getDate:function(type) {
				 const date = new Date();
				 let year = date.getFullYear();
				 let month = date.getMonth() + 1;
				 let day = date.getDate();
				
				 if (type === 'start') {
				     year = year - 60;
				 } else if (type === 'end') {
				     year = year + 2;
				 }
				 month = month > 9 ? month : '0' + month;;
				 day = day > 9 ? day : '0' + day;
				 return `${year}-${month}-${day}`;
				},
				getInfo:function(){
					var _self =this
					 uni.request({
					 	url:_self.$api+"dockingManager/cardQuery",
						method:"GET",
						data:{
							optionId:uni.getStorageSync("openId"),
							id:_self.Id,
							branch:1,
							live:1
						},
						success:function(res){
							console.log(res)
							_self.list = res.data[0]
							if(res.data[0].shrink==""){
								_self.pic= []
							}else{
								_self.pic = res.data[0].shrink.split(',')
							}
						}
					 })
				},
				audit:function(type){
					var _self =this
					uni.request({
						url:_self.$api+"dockingManager/cardTrial",
											method:"GET",
											data:{
												id:_self.Id,
												optionId:uni.getStorageSync("openId"),
												state:type
											},
											success:function(res){
												console.log(res)
												if(res.data == 1){
													uni.showToast({
														title:"操作成功",
														success:function(){
															setTimeout(function(){
																uni.navigateTo({
																	url:"../auditManager/auditManager"
																})
															},1000)
														}
													})
												}else{
													uni.showToast({
														title:"操作失败"
														})
														return false
												}
											}
					})
				}
		},
		 components: {uniCollapse,uniCollapseItem},
		  computed: {
		     startDate() {
		         return this.getDate('start');
		     },
		     endDate() {
		         return this.getDate('end');
		     }
		 },
	}
</script>

<style lang="scss">
page{
	background: #e8e7e7;
}
.btn{
	background: #E0AF2F !important;
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
			min-height: 300upx;
			width: 90%;
			margin: 0 auto; 
			flex-wrap: wrap;
			.img{
				width: 30%;
				height: 200upx;
				margin-left: 20upx;
				margin-top: 20upx;
				padding-bottom: 20upx;
			}
		}
	}
}
.uni-uploader-head{
	font-size: 28upx;
}
</style>
