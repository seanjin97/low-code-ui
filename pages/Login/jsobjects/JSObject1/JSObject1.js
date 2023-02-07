export default {

	Login: async () => {
		if (Username.text && Password.text) {
					const res = await LOGIN.run()
					showAlert(`logged in successfully`)
					storeValue("token", res.access_token)
					navigateTo("Form Management")
		}
	},
}