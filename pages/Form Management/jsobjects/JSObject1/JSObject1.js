export default {
	DataUpdateRow: async () => {
		//write code here
		await DataUpdateRow.run()
		await DataGetAll.run()
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
