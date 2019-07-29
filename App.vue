<script>
	export default {
		onLaunch: function() {
		
			console.log('App Launch')
		},  
		onShow: function() {
		if(!uni.getStorageSync("openId")){
				uni.navigateTo({
					url:"../login/login"
				})
			}
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
