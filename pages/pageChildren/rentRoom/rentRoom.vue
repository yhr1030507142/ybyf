<template>
	<view class="box">
			<!-- 选择 -->
				<view class="select">
					<view class="select-box flex row">
						<view class="select-title">
							会议室地点
						</view>
						<input type="text" placeholder="请输入标题" style="text-align: right;" v-model="room_address" class="select-end select-input" placeholder-style="text-align: right">
		
					</view>
				</view>
		<!--  -->
		   		<!-- 选择 -->
				<view class="select">
					<view class="select-box flex row">
						<view class="select-title">
							联系人
						</view>
						<input type="text" placeholder="请输入标题"  style="text-align: right;" v-model="room_linkman" class="select-end select-input" placeholder-style="text-align: right">
		
					</view>
				</view>
		<!--  -->
			<!-- 选择 -->
				<view class="select">
					<view class="select-box flex row">
						<view class="select-title">
							联系电话
						</view>
						<input type="number" maxlength="11" style="text-align: right;" placeholder="请输入标题" v-model="room_tel" class="select-end select-input" placeholder-style="text-align: right">
		
					</view>
				</view>
		<!--  -->
			<!-- 选择 -->
				<view class="select">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="select-box flex row row_between">
						<view class="select-title">
							预定日期
						</view>
						<view class="select-end flex row">
							 <view class="uni-input">{{date}}</view>
							 <view class="iconfont icon-xiala1 icon"></view>
						</view>
					</view>
					</picker>
				</view>
		<!--  -->
			<!-- 选择 -->
				<view class="select">
					 <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
					<view class="select-box flex row row_between">
						<view class="select-title">
							预定时间
						</view>
						<view class="select-end flex row">
							 <view class="uni-input">{{time}}</view>
							 <view class="iconfont icon-xiala1 icon"></view>
						</view>
					</view>
					</picker>
				</view>
		<!--  -->
		<!-- 选择 -->
		
		<view class="select">
			 <picker @change="bindPickerChange" :value="index" :range="array" class="picker">
			<view class="select-box flex row row_between">
				<view class="select-title">
					参会人数
				</view>
				<view class="select-end flex row">
					 <view class="uni-input" v-if="index == ''">请选择</view>
					 <view class="uni-input" v-else="">{{array[index]}}</view>
					 <view class="iconfont icon-xiala1 icon"></view>

				</view>
			</view>
			</picker>
		</view>
   <!--  -->
         		<!-- 选择 -->
   		<view class="textarea-select flex col">
   			<view class="textarea-select-box flex row row_between">
   				<view class="textarea-select-title">
   					硬件需求
   				</view>
   				<view class="textarea-select-end">
   				
   				</view>
   			</view>
   			<view class="textarea-select-content">
				  <checkbox-group @change="checkboxChange" class="checkboxGroup flex row">
				  <label :class="item.checked ?  'checkbox selectBox' : 'checkbox '" @click="labelBtn(item.value,index)" v-for="(item,index) in labelList" :key="item.value" >
				    <checkbox :value="item.value" :checked="item.checked" v-show="false"/>{{item.name}}
				  </label>
				</checkbox-group>
			</view>
   		</view>
   <!--  -->
   		<!-- 选择 -->
   		<view class="select">
   			<view class="select-box flex row">
   				<view class="select-title">
   					备注
   				</view>
				<input type="text" placeholder="请输入备注" style="text-align: right;" class="select-end select-input" placeholder-style="text-align: right">

   			</view>
   		</view>
   <!--  -->
   <button type="primary" class="btn">确定发布</button>
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
				array: ['20以下', '50', '100', '100以上'],
                index: "",
				selectValue:"", 
				imageList:[],
				room_address:"广州市越秀区东风东路丽丰中心",
				room_linkman:"陈先生",
				room_tel:"15696565658",
				date: currentDate,
				time: '12:01',
				
				labelName:'',
				labelDataList:'',
				 labelList: [{
				    name: '投影仪',
				    value: '0',
				    checked: false
				  },
				    {
				      name: '幕布',
				      value: '1',
				      checked: false
				    },
				    {
				      name: '电脑',
				      value: '2',
				      checked: false
				    },
				    {
				      name: '麦克风',
				      value: '3',
				      checked: false
				    },
				    {
				      name: '音响',
				      value: '4',
				      checked: false
				    },{
				    name: '白板',
				    value: '0',
				    checked: false
				  },
				    {
				      name: '灯光',
				      value: '1',
				      checked: false
				    },
				    {
				      name: '摄像机',
				      value: '2',
				      checked: false
				    }
				],
					
				
				
			}
		},
		methods: {
			bindPickerChange: function(e) {
            console.log('picker发送选择改变，携带值为', e.target.value)
            this.index = e.target.value
			},
			bindDateChange: function(e) {
            this.date = e.target.value
			},
			bindTimeChange: function(e) {
            this.time = e.target.value
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			  labelBtn:function(name,index){
			  console.log(name,index,"nameindex")
			  this.labelName = name
			  if(this.labelDataList.join(',').indexOf(name) >-1){
			    this.labelList[index].checked = true
			  }else{
			    this.labelList[index].checked = false
			  }
			},
			  checkboxChange: function (e) {
			  this.labelDataList = e.detail.value
			  console.log(e)
			  console.log('checkbox发生change事件，携带value值为：' + e.detail.value)
			  console.log(this.labelDataList,"labelDataList")
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
.checkboxGroup{
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-between;
}
 .selectBox{
	width: 23%;
    background: #1758EA!important;
    color: #fff!important;
	margin-top: 20upx;
	font-size: 28upx;
	text-align: center;
	height: 70upx;
	line-height: 70upx;
  }
  .checkbox{
	 width: 23%;
    // padding: 5upx 10upx;
    border: 1upx solid #cccccc;
    color: #000;
	margin-top: 20upx;
	font-size: 28upx;
	text-align: center;
	height: 70upx;
	line-height: 70upx;
	border-radius: 5upx;
  }
  .content{
    padding: 10upx;
  }
</style>
