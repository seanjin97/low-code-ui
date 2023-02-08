export default {

	Login: async () => {
		if (Username.text && Password.text) {
			// hello
					const res = await LOGIN.run()
					showAlert(`logged in successfully`)
					storeValue("token", res.access_token)
					navigateTo("Form Management")
		}
	},
}