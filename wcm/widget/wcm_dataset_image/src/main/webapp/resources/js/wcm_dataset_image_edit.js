var DatasetImageEdit = SuperWidget.extend({
	message: null,
	folderId:null,
	init: function () {
		$('#folderid_' + this.instanceId).val(this.folderId);
		
	},

	bindings: {
		local: {
			'save-folder': ['click_saveId']
		}
	},

	saveId: function () {

		var folderidVal = $('#folderid_' + this.instanceId).val();

		this.saveData({folderId:folderidVal});
	},

	saveData: function (preferences) {

		var myLoading = FLUIGC.loading(this.DOM);
		myLoading.show();

		WCMSpaceAPI.PageService.UPDATEPREFERENCES(
				{
					async: true,
					success: function (data) {
						FLUIGC.toast({
							title: data.message,
							message: '',
							type: 'success'
						});
						myLoading.hide();
					},
					fail: function (xhr, message, errorData) {
						FLUIGC.toast({
							message: message,
							type: 'warning'
						});
						myLoading.hide();
					}
				}, this.instanceId, preferences
		);
	},
});