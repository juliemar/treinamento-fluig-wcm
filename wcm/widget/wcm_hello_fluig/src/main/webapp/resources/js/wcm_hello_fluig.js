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
		},
		global:{
			'save-modal':['click_salvarModal']
		}
	},

	salvarModal:function(){
		alert("Salvar Modal!!");
	},
	
	
	salvarTreinamento:function(){

		var nome = $("#nome_"+this.instanceId).val();
		var sobrenome = $("#sobrenome_"+this.instanceId).val();

		if(nome=="" || sobrenome==""){
			
			FLUIGC.message.alert({
			    message: "${i18n.getTranslation('hello.validacao')}",
			    title: "${i18n.getTranslation('hello.validacao.title')}",
			    label: 'OK'
			}, function(el, ev) {
			    //Callback action executed by the user...
			     
			    //el: Element (button) clicked...
			    //ev: Event triggered...
			     
				//Chama uma função da minha classe
			    //this.someFunc();
			});
			
			return;
		}
		
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
		    id: 'fluig-modal'+this.instanceId,
		    actions: [{
		        'label': 'Save',
		        'bind': 'data-save-modal',
		    },{
		        'label': 'Cancel',
		        'bind': 'data-cancel-modal',
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