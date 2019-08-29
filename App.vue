<script>
	export default {
		onLaunch: function() {
		// if(!uni.getStorageSync("openId")){
		// 	uni.redirectTo({
		// 		url:"./load/load"
		// 	})
		// } 
			console.log('App Launch')
		},   
		onShow: function() {
			
			console.log('App Show')
		}, 
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style> 
	/*每个页面公共css */
</style>
