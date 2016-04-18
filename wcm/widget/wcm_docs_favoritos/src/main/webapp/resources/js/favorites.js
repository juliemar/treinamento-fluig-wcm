var Favorites = SuperWidget.extend({
	widgetStyle: null,
	datatable: null,

	bindings: {
		local: {
			'key=0': ['click_removeFavorites'],
			'key=1': ['click_updateFile'],
		}
	},

	init: function() {
		this.initTable();
	},

	initTable: function() {
		var self = this;
		var idGrid = "#ecm_favorites_grid_" + self.instanceId;
		var idPage = "#ecm_favorites_page_" + self.instanceId;
		var idButtons = "#ecm_favorites_buttons_" + self.instanceId;
		var cfg = {};
		if (self.widgetStyle == 'simple'){
			 cfg.obj = {
	           	url:ECM.restUrl + "favorites/getFavotiresList/",
	           	colNames:["", "${i18n.getTranslation('favorites.description')}"],
	           	colModel:[
	           	    {name:'iconPath',index:'iconPath', width:15, formatter:Favorites.formatIconPath, sortable:false},
	           	    {name:'documentDescription',index:'documentDescription', formatter:Favorites.iconPathLink, sortable:false}
	           	],jsonReader : {
	                id: "documentId"
	            },
	            sortorder: "asc",
	            multiselect: true,
	            autowidth: true,
	            height: '100%'
	         };

			cfg.idDivGrid = idGrid;
			self.datatable = WCMC.datatable(cfg);
		}else{
			cfg.obj = {
	           	url:ECM.restUrl + "favorites/getFavotiresList/",
	           	colNames:["", "${i18n.getTranslation('favorites.description')}", "${i18n.getTranslation('favorites.size')}",
	           	            "${i18n.getTranslation('favorites.code')}","${i18n.getTranslation('favorites.version')}"
	           	],
	           	colModel:[
	           	    {name:'iconPath',index:'iconPath', width:25, formatter:Favorites.formatIconPath, sortable:false},
	           	    {name:'documentDescription',index:'documentDescription', formatter:Favorites.iconPathLink, sortable:false},
	           	    {name:'size',index:'size', width:60, sorttype:'number', formatter:Favorites.formatSizeDocument, search:false, sortable:false},
	           	    {name:'documentId',index:'documentId', width:45, sorttype:'number', sortable:false},
	           		{name:'version',index:'version', width:45, sorttype:'number', search:false, sortable:false}
	           	],jsonReader : {
	                id: "documentId"
	            },
	           	pager: idPage,
	            sortorder: "asc",
	            multiselect: true,
	            autowidth: true,
	            height: '100%'
	         };

			cfg.idDivGrid = idGrid;
			cfg.idDivButtons = idButtons;

			cfg.buttons = [{
				label: "${i18n.getTranslation('favorites.buttons.remove.label')}",
				title:"${i18n.getTranslation('favorites.buttons.remove.title')}"
			},
			{
				label: "${i18n.getTranslation('favorites.update.file')}",
				title:"${i18n.getTranslation('favorites.update.file')}"
			}];
			self.datatable = WCMC.datatable(cfg);
			self.datatable.bind('datatable-loadComplete', function(){
				$('.datatable-buttonsEventFunction', self.DOM).removeAttr('onclick');
			});
		}
	},

	removeFavorites : function(el, ev){
		var self = this;
	    WCMAPI.Delete({
	        url: ECM.restUrl + "favorites/newDeleteItem/",
	        data: {"docsToDelete" : self.datatable.selectedRows},
	        success: function(data){
	        	self.datatable.reloadGrid();
	        }
	    });
    },

	formatIconPath: function(cellvalue, options, rowObject) {
    	var icon = '<img width="24" src="' + cellvalue + '"/>';

        if(rowObject.allocated)
            icon += "<img id ='imgCheckOut" + rowObject.documentId + "'" +
            		" src='/ecm_resources/resources/assets/images/locked.png'" +
            		" style='position: absolute; margin-left: -15px; margin-top: 8px;' " +
            		" title='${i18n.getTranslation('navigation.checkOutDocument')}'>";

        return icon;
    },

    iconPathLink: function(cellvalue, options, rowObject){
    	var cell;
        if (rowObject.documentType === "1" || rowObject.documentType === "4") {
            cell = '<span class="documentFavorites-description" onclick="Favorites.getContent(' + options.rowId + ');"> ' + cellvalue + '</span>';
        } else if(rowObject.documentType === "2") {
            cell = '<span class="documentFavorites-description" onclick="Favorites.initDocumentView(' + options.rowId + ');">' + cellvalue + '</span>';
        } else if(rowObject.documentType === "5") {
        	cell = '<span class="documentFavorites-description" onclick="Favorites.initCardView(' + options.rowId + ');">' + cellvalue + '</span>';
        } else if(rowObject.documentType === "9") {
        	cell = '<span class="documentFavorites-description" onclick="Favorites.initApplication(' + options.rowId + ', \''+ rowObject.customParameter +'\');">' + cellvalue + '</span>';
        } else {
        	cell = '<span>' + cellvalue + '</span>';
        }
        return cell;
    },

    getContent: function(currentId) {
		var documentUrl = WCMAPI.getProtectedContextPath() + "/"
				+ WCMAPI.getTenantCode()
				+ "/ecmnavigation?app_ecm_navigation_doc=" + currentId;
		window.location.replace(documentUrl);
	},

	initDocumentView: function(docId){
        ECM.documentView = {};
        var cfg = {
             	url: "/ecm_documentview/documentView.ftl",
             	width: 750,
             	height: 500,
            	maximized:true,
            	showbtclose: false,
             	titlle: "${i18n.getTranslation('favorites.documentView')}",
             	callBack: function(){
                     ECM.documentView.getDocument(docId);
                }
             };
        ECM.documentView.panel = WCMC.panel(cfg);
    },

    initCardView: function(docId){
        ECM.documentView = {};
        var cfg = {
        	url: "/ecm_documentview/documentView.ftl",
        	width: 750,
        	height: 500,
        	showbtclose: false,
        	title: "${i18n.getTranslation('favorites.cardView')}",
        	callBack: function(){
                ECM.documentView.getDocument(docId);
            }
        };
        ECM.documentView.panel = WCMC.panel(cfg);
    },

    initApplication: function(docId, customParameter){
    	var data = {};
    	data.documentId = docId;
    	data.version = 1000;
    	data.customParameter = customParameter;
    	WCMAPI.Create({
		    url: ECM.restUrl + "applicationPublisher/getApplicationRunnerXml/",
		    data: data,
		    success: function(xml){
		    	ECM.core.executeApplication(xml);
		    }
		});
    },

    formatSizeDocument: function(cellvalue, options, rowObject){
		if(rowObject.documentType == "2" || rowObject.documentType == "8"){
		    return ECM.core.formatSize(rowObject.size);
        }
		return "";
	},
	
	updateFile: function(el, ev) {
		var self = this,
			docsSelecteds = self.datatable.selectedRows,
			documentIdSelected,
			document,
			documentType,
			documentVersion;
			
		if(docsSelecteds.length <= 0) {
			FLUIGC.toast({
                message: '${i18n.getTranslation("favorites.select.a.file")}',
                type: 'warning'
        	});
		} else if(docsSelecteds.length > 1) {
			FLUIGC.toast({
                message: '${i18n.getTranslation("favorites.only.one.file")}',
                type: 'warning'
        	});
		} else {
			documentIdSelected = self.datatable.selectedRows[0];
			document = self.datatable.invData.filter(function(obj) {
				return obj.documentId == documentIdSelected;
			});
			documentType = document[0].documentType;
			documentVersion = document[0].version;
			if(documentType === "2") {
				ECMBC.updateDocument({
		    		id: documentIdSelected,
		    		version: documentVersion
		    	}, function(err, data) {
		    		if(err) {
		    			FLUIGC.toast({
		                    message: err.response.responseText,
		                    type: 'danger'
		            	});
		    			return;
		    		}
		    		FLUIGC.toast({
		                message: '${i18n.getTranslation("favorites.success.update.file")}',
		                type: 'success'
		        	});
		    		self.datatable.reloadGrid();
		    	});

			} else {
				FLUIGC.toast({
                    message: '${i18n.getTranslation("favorites.unable.update.file")}',
                    type: 'warning'
            	});
			}
		}
	}
});
