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
				this._createEntityModel(item)
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
				oEvent.preventDefault();
				var item = oEvent.getSource();
				this._download(item)
					.then((blob) => {
						var url = window.URL.createObjectURL(blob);
						//open in the browser
						window.open(url);					
					})
					.catch((err)=> {
						console.log(err);
					});					
			},


			_download: function (item) {
				var settings = {
					url: "/v2/odata/v4/" + item.getUrl(),
					method: "GET",
					xhrFields:{
						responseType: "blob"
					}
				}	

				return new Promise((resolve, reject) => {
					$.ajax(settings)
					.done((result, textStatus, request) => {
						resolve(result);
					})
					.fail((err) => {
						reject(err);
					})
				});						
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

			_createEntityModel: function (item) {
				var oModel = this.getView().getModel();
				var field_ID =  this.getView().getBindingContext().getProperty("ID");
				var sPath = `/Images`;

				var oData = {
					mediaType: item.getMediaType(),
					fileName: item.getFileName(),
					size: item.getFileObject().size,
					field_ID
					//IsActiveEntity: true
				};

				return new Promise((resolve, reject) => {
				oModel.create(sPath, oData, 
					{ success: (oData, response) => resolve(oData.ID),
					error: (error) => reject(error) });
				});
			},

			_uploadContent: function (item, id) {
				debugger
				var url = `/v2/odata/v4/main/Images(${id})/content`
				item.setUploadUrl(url);
				var oUploadSet = this.byId("UploadSet");
				oUploadSet.setHttpRequestMethod("PUT")
				oUploadSet.uploadItem(item);
			}
		});
	});