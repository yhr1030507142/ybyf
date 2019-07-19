<template>
	<view class="box">
				
			<!-- 选择 -->
			<view class="select">
				<view class="select-box flex row">
					<view class="select-title">
						所在园区
					</view>
					<view class="select-end select-input" placeholder-style="text-align: right">{{list.name}}</view>
	
				</view>
			</view>
	<!--  -->
		<!-- 选择 -->
			<view class="select">
				<view class="select-box flex row">
					<view class="select-title">
						上门地址
					</view>
					<view class="select-end select-input" placeholder-style="text-align: right">{{list.address}}</view>

				</view>
			</view>
	<!--  -->
		<!-- 选择 -->
			<view class="select">
				<view class="select-box flex row">
					<view class="select-title">
						联系电话
					</view>
					<view class="select-end select-input" placeholder-style="text-align: right">{{list.phone}}</view>
	
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
						
					</view>
				</view>
				<rich-text class="textarea-select-content" :nodes="list.sketch"></rich-text>
			</view>
	<!--  -->
	 <!-- 选择 -->
	 		<view class="select">
	 			<view class="select-box flex row">
	 				<view class="select-title">
	 					报修日期
	 				</view>
	 				<view class="select-end select-input" placeholder-style="text-align: right">{{list.createTime}}</view>
	 			</view>
	 		</view>
	 <!--  -->
		</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				list:[],
			}
		},
		onLoad:function(option){
			var _self = this
			_self.id = option.id
			_self.getInfo()
		},
		methods: {
			getInfo:function(){
				var _self = this
				uni.request({
					url:_self.$api+"dockingManager/repairQuery",
					data:{id:_self.id,optionId:uni.getStorageSync("openId")},
					method:"GET",
					success:function(res){
						_self.list = res.data[0]
					}	
				})
			},
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

