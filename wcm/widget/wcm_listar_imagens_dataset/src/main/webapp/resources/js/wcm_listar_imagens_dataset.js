var TreinamentoImagens = SuperWidget.extend({
    message: null,

    init: function () {
        //code
    },

    bindings: {
        local: {
            'show-message': ['click_showMessage'],
            'salvar':['click_salvarPreferencias']
        }
    },

    salvarPreferencias:function(){
    	var folderId = $("#folderId_"+this.instanceId).val();
		
		if(folderId==""){
			
			FLUIGC.message.alert({
			    message: "Informe um Id",
			    title: "Atenção",
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
				'folderId':folderId
		};

		this.saveData(pref);
    },
    
    showMessage: function () {
        $div = $('#helloMessage_' + this.instanceId);
        $message = $('<div>').addClass('message').append(this.message);
        $div.append($message);
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
	}
});