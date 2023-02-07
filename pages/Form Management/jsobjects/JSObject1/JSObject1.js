export default {
	DataUpdateRow: async () => {
		//write code here
		if (appsmith.store.userObject.permissions === "ADMIN") {
			await DataUpdateRow.run()
			await DataGetAll.run()
		} else {
			return showAlert("Action not allowed")
		}
	},
	Logout: async () => {
		storeValue("userObject", undefined);
		navigateTo("Login")
	},
	Manage: () => {
		navigateTo("Manage", {"formId": FormList.selectedItem.id, "formName": FormList.selectedItem.name})
	},
	Create: () => {
		navigateTo("Configuration", {"formId": FormList.selectedItem.id, "formName": FormList.selectedItem.name})
	}
}
