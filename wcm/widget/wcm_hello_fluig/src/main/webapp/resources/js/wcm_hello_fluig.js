var HelloWorld = SuperWidget.extend({
	nome: null,
	sobrenome:null,

	init: function () {
		$("#nome_"+this.instanceId).val(this.nome);
		$("#sobrenome_"+this.instanceId).val(this.sobrenome);
	},

	bindings: {
		local: {
			'show-message': ['click_showMessage'],
			'salvar-treinamento':['click_salvarTreinamento']
		}
	},


	salvarTreinamento:function(){

		var nome = $("#nome_"+this.instanceId).val();
		var sobrenome = $("#sobrenome_"+this.instanceId).val();

		var pref = {
				'nome':nome,
				'sobrenome':sobrenome
		};

		this.saveData(pref);
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

	showMessage: function () {
		
		var myModal = FLUIGC.modal({
		    title: 'title',
		    size:'large',
		    content: {
		        widgetCode: 'wcm_docs_favoritos', 
		        ftl: 'view.ftl',
		        data: {
		            customInstance: WCMAPI.generateId()
		        }
		    },
		    id: 'fluig-modal',
		    actions: [{
		        'label': 'Save',
		        'bind': 'data-open-modal',
		    },{
		        'label': 'Cancel',
		        'bind': 'data-open-modal',
		        'close': true
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