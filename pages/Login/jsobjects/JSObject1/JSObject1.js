export default {

	Login: async () => {
		if (Username.text && Password.text) {
					const res = await LOGIN.run()
					showAlert(`${res.user} logged in successfully`)

					storeValue("userObject", res)
					navigateTo("Form Management")
		}
	},
}