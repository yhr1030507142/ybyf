<!-- prompt组件 -->
<!-- prompt -->
<template>
	<view class="prompt-box" :hidden="isHidden">
		<view class="prompt-content contentFontColor">
			<view class="prompt-title">{{title}}</view>
			<view class="prompt-text">{{text}}</view>
			<input class="prompt-input" type="text" @input="_input" :value="cost"/>
			<view class="prompt-btn-group">
				<button class="btn-item prompt-cancel-btn contentFontColor" @tap="_cancel">{{btn_cancel}}</button>
				<button class="btn-item prompt-certain-btn" @tap="_confirm">{{btn_certain}}</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				multipleSlots: true,// 在组件定义时的选项中启用多slot支持
				isHidden: true,
				cost:''
			};
		},
		props:{
			title: {            
			  type: String,    
			  default: '提示'    
			},
			btn_cancel: {
			  type: String,
			  default: '取消'
			},
			btn_certain: {
			  type: String,
			  default: '确定'
			},
			text:{
				type: String,
				default: '',
			}
		},
		watch:{
			
		},
		methods: {
			hide: function () {
			  this.isHidden=true;
			},
			show(e) {
			  this.isHidden=false;
				if(e!=null&&e!=undefined&&e!=""){
					this.text = e;
				}
			},
			/*
			 * 内部私有方法建议以下划线开头
	 		 * triggerEvent 用于触发事件
			 */
			_cancel () {
				//触发cancel事件，即在外部，在组件上绑定cancel事件即可，bind:cancel，像绑定tap一样
			  this.cost = '';
			  this.hide();
			  this.$emit('onCancel');
			},
			_confirm () {
			  //this.triggerEvent("confirm");
			  console.log(this.cost);
			  this.$emit('onConfirm', this.cost);
			  this.cost = '';
			},
			_input(e){
				//将参数传出去，这样在getInput函数中可以通过e去获得必要的参数
				//this.triggerEvent("getInput",e.detail);
				this.cost = e.detail.value;
			}
		}
	}
</script>

<style>
/* components/vas-prompt/vas-prompt.wxss */
.prompt-box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background: rgba(0, 0, 0, 0.5);
}

.prompt-content {
  position: absolute;
  left: 50%;
  top: 40%;
  width: 80%;
  max-width: 600rpx;
  border: 2rpx solid #ccc;
  border-radius: 10rpx;
  box-sizing: bordre-box;
  transform: translate(-50%, -50%); 
  overflow: hidden;
  background: #fff;
}

.prompt-title {
  width: 100%;
  padding: 20rpx;
  text-align: center;
  font-size: 40rpx;
  border-bottom: 2rpx solid gray;
}
.prompt-input{
  margin: 8%;
  padding: 10rpx 15rpx;
  width: 80%;
  height:85rpx;
  border: 1px solid #ccc;
  border-radius: 10rpx;
}
.prompt-btn-group{
  display: flex;
}

.btn-item {
  width: 35%;
  margin-bottom: 20rpx;
  height: 100rpx;
  line-height: 100rpx;
  background-color: white;
  justify-content: space-around;
}
.prompt-certain-btn{
  color: white;
  background-color: #E0AF2F;
}
.prompt-cancel-btn{
  border: 1px solid #E0AF2F;
}
.contentFontColor {
  color: #868686;
}
.prompt-text{
	margin-top:15rpx;
	font-size:38rpx;
}
</style>
