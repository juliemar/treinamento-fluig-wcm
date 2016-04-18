var DatasetImage = SuperWidget.extend({
	message: null,
	folderId:null,
	init: function () {
//		var template = $('.template-image-view').html();
//		html = Mustache.render(tpl, view);
//		articleview = $('[data-view-images-' + that.instanceId + ']');
//		articleview.html(html);

		this.callFluigImageReader(this.folderId);
	},

	bindings: {
		local: {
			'show-message': ['click_showMessage']
		}
	},

	callFluigImageReader: function (folderId) {
		var that=this;
		
		var constraints = new Array();
		constraints.push(DatasetFactory.createConstraint("parentDocumentId",
				folderId, folderId, ConstraintType.MUST));
		constraints.push(DatasetFactory.createConstraint("activeVersion", true, true, ConstraintType.MUST));

		var myLoading = FLUIGC.loading(this.DOM);
		myLoading.show();
		
		DatasetFactory.getDataset("document", null, constraints, null,{success:function(dataset){
			if (dataset != null && dataset.values.length > 0) {
				var docId = dataset.values[0]['uUID'];
				if (docId == null || docId.length == 0) {
					//this.displayNoDataFoundMessage();
				} else {
					that.loadFluigImages(dataset.values);
					myLoading.hide();
				}
			} else {
				//this.displayNoDataFoundMessage();
			}
		}});
	},

	loadFluigImages: function (data) {
		var that = this;
		var images = new Array();
		for (var index in data) {
			var item = data[index];
			if (item.mimetype && that.mimeTypeIsValidExtension(item)) {
				var image = {
						src: that.getFluigFileUrl(item),
						title: item.documentDescription
				};
				images.push(image);
			}
		}

		console.log(images);

		if (images.length > 0) {
			that.buildImagesShow(images);
		} else {
			//this.displayNoDataFoundMessage();
		}
	},

	buildImagesShow: function (img) {
		try {
			var template = $('.template-image-view').html();
			var html = Mustache.render(template, {images:img});
			var imagesView = $('[data-view-images-' + this.instanceId + ']');
			imagesView.html(html);
		} catch (e) {
			console.log(e);
		}

	},

	getFluigFileUrl: function (item) {
		return WCMAPI.getServerURL()
		+ '/webdesk/streamcontrol/' + item.phisicalFile
		+ '?WDNrDocto=' + item['documentPK.documentId']
		+ '&WDNrVersao=' + item['documentPK.version']
		+ '&WDCompanyId=' + item['documentPK.companyId'];
	},

	mimeTypeIsValidExtension: function(item) {
		var mimeTypes = ['image/jpeg', 'image/bmp', 'image/x-windows-bmp',
		                 'image/pjpeg', 'image/png', 'image/gif'];
		for (var index in mimeTypes) {
			var mime = mimeTypes[index];
			if (item.mimetype == mime) {
				return true;
			}
		}
		return false;
	},

	showMessage: function () {
		$div = $('#helloMessage_' + this.instanceId);
		$message = $('<div>').addClass('message').append(this.message);
		$div.append($message);
	}
});