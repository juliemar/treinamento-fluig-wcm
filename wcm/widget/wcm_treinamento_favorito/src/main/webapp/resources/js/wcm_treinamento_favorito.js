var TreinamentoFavorito = SuperWidget.extend({
	message: null,
	myTable:null,
	
	init: function () {
		var that= this;
		try{

			this.mostraDatatableSozinho();	

//			$.getJSON( "/api/public/2.0/favorites/findFavoritesDocuments/juliemar.berri", 
//					function( data ) {
//
//				that.mostraDatatable(data.content);
//			});	


//			$.getJSON( "/api/public/2.0/favorites/findFavoritesDocuments/juliemar.berri", 
//			function( data ) {
//			$.each(data.content, function( index, value ) {


//			$("#favorito_"+that.instanceId).append("<p>"+value.documentDescription+"</p>");

//			});
//			});	
		}catch(e){
			console.log(e);
		}
	},

	
	mostraDatatableSozinho:function(){

		this.myTable = FLUIGC.datatable("#favorito_"+this.instanceId, {
			dataRequest: {
		        url: '/api/public/2.0/favorites/findFavoritesDocuments/juliemar.berri',
		        options: {
		            contentType:'application/json',
		            dataType: 'json',
		            crossDomain: true,
		            cache: false
		        },
		        root: 'content'
		    },
			renderContent: ".linha-customizada",
			 search: {
				        enabled: false
				    },
				actions: {
			        enabled: true,
			        template: '.template_area_buttons',
			        actionAreaStyle: 'col-md-9'
			    },
				header: [
				         {'title': 'Código'},
				         {'title': 'Nome'},
				         {'title': 'Versão'},
				         {'title': 'Visualizar'}
				         ]
		}, function(err, data) {
			// DO SOMETHING (error or success)
		});
	},
	
	
	mostraDatatable:function(data){

		this.myTable = FLUIGC.datatable("#favorito_"+this.instanceId, {
			dataRequest: data,
			renderContent: ".linha-customizada",
			 search: {
				        enabled: false
				    },
				actions: {
			        enabled: true,
			        template: '.template_area_buttons',
			        actionAreaStyle: 'col-md-9'
			    },
				header: [
				         {'title': 'Código'},
				         {'title': 'Nome'},
				         {'title': 'Versão'},
				         {'title': 'Visualizar'}
				         ]
		}, function(err, data) {
			// DO SOMETHING (error or success)
		});
	},


	bindings: {
		local: {
			'show-message': ['click_showMessage'],
			'your-action-1':['click_addLinha']
		}
	},
	
	addLinha:function(){
		var data={
				documentId:'333',
				documentDescription:"Documento Fake",
				version:"3000"
		};
		this.myTable.addRow(0, data);
	},

	showMessage: function () {
		$div = $('#helloMessage_' + this.instanceId);
		$message = $('<div>').addClass('message').append(this.message);
		$div.append($message);
	}
});