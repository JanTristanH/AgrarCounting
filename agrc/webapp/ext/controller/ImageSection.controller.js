sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
	function (
		Controller,
		MessageToast
	) {
		"use strict";

		return Controller.extend("agc.agrc.ext.controller.ImageSection.controller", {
			onInit: function () {
				MessageToast.show("init");
			},

			test: function () {
				MessageToast.show("test");
			},

			onAfterItemAdded: function (oEvent) {
				var item = oEvent.getParameter("item")
				this._createEntity(item)
				.then((id) => {
					this._uploadContent(item, id);
				})
				.catch((err) => {
					console.log(err);
				})
			},

			onUploadCompleted: function (oEvent) {
				var oUploadSet = this.byId("UploadSet");
				oUploadSet.removeAllIncompleteItems();
				oUploadSet.getBinding("items").refresh();
			},

			onOpenPressed: function (oEvent) {	
				// to be implemented			
			},

			_createEntity: function (item) {
					var data = {
						mediaType: item.getMediaType(),
						fileName: item.getFileName(),
						size: item.getFileObject().size
					};
	
					var settings = {
						url: "/v2/odata/v4/main/Images",
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						data: JSON.stringify(data)
					}
	
				return new Promise((resolve, reject) => {
					$.ajax(settings)
						.done((results, textStatus, request) => {
							resolve(results.ID);
						})
						.fail((err) => {
							reject(err);
						})
				})				
			},

			_uploadContent: function (item, id) {
				var url = `/v2/odata/v4/main/Images(${id})/content`
				item.setUploadUrl(url);	
				var oUploadSet = this.byId("UploadSet");
				oUploadSet.setHttpRequestMethod("PUT")
				oUploadSet.uploadItem(item);
			}			
		});
	});