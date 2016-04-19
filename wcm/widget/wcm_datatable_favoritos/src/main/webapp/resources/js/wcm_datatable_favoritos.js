var FavoritosDatatable = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	
    	var myTable = FLUIGC.datatable('#favoritos_'+this.instanceId, {
    	    dataRequest: {
    	        url: '/api/public/2.0/favorites/findFavoritesDocuments/juliemar.berri',
    	        options: {
    	            contentType:'application/json',
    	            dataType: 'json',
    	            crossDomain: true,
    	            cache: false
    	        },
    	        root: 'content',
    	        formatData: function(data) {
    	            // Process
    	            return data;
    	        }
    	    },
    	    renderContent: '.template_datatable',
    	    header: [
    	        {
    	            'title': 'Código',
    	            'size': 'col-md-2'
    	        },
    	        {
    	            'title': 'Nome',
    	            'size': 'col-md-7',
    	        }
    	    ],
    	    multiSelect: false,
    	    search: {
    	        enabled: false
    	    },
    	    scroll: {
    	        enabled: false,
    	    },
    	    actions: {
    	        enabled: true,
    	        template: '.my_template_area_actions',
    	        actionAreaStyle: 'col-md-9'
    	    },
    	    navButtons: {
    	        enabled: false
    	    },
    	    emptyMessage: '<div class="text-center">No data to display.</div>',
    	    draggable: {
    	        enabled: false
    	    }
    	}, function(err, data) {
    	    console.log(err);
    	    console.log(data);
    	});
    	
    },
  
    //BIND de eventos
    bindings: {
        local: {
            
        },
        global: {}
    },
});

