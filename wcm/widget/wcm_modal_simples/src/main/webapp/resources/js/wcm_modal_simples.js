var ModalSimples = SuperWidget.extend({

	//método iniciado quando a widget é carregada
	init: function() {
	},

	//BIND de eventos
	bindings: {
		local: {
			'show-modal': ['click_executeAction']
		},
		global: {
			'save-modal': ['click_executeSave']
		}
	},

	executeSave: function(htmlElement, event) {
		FLUIGC.toast({
	        title: 'Salvar: ',
	        message: 'Vamos Salvar :)',
	        type: 'success'
	    });
	},
	
	executeAction: function(htmlElement, event) {
		var htmlNojs = '<h1>Modal Content</h1>';
		
		
		var myModal = FLUIGC.modal({
			title: 'Title',
			content: htmlNojs,
			id: 'fluig-modal',
			actions: [{
				'label': 'Save',
				'bind': 'data-save-modal',
			},{
				'label': 'Close',
				'autoClose': true
			}]
		}, function(err, data) {
			if(err) {
				// do error handling
			} else {
				// do something with data
			}
		});


	}

});

