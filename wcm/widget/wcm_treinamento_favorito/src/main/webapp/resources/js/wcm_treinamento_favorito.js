var TreinamentoFavorito = SuperWidget.extend({
	message: null,

	init: function () {
		try{
			$.getJSON( "/api/public/2.0/favorites/findFavoritesDocuments/juliemar.berri", 
					function( data ) {
				$.each(data.content, function( index, value ) {
					console.log(value);
				});
			});	
		}catch(e){
			console.log(e);
		}
	},

	bindings: {
		local: {
			'show-message': ['click_showMessage']
		}
	},

	showMessage: function () {
		$div = $('#helloMessage_' + this.instanceId);
		$message = $('<div>').addClass('message').append(this.message);
		$div.append($message);
	}
});