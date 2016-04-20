var TreinamentoSoap = SuperWidget.extend({
	message: null,

	init: function () {
		//code
	},

	bindings: {
		local: {
			'show-message': ['click_showMessage'],
			'resposta':['click_respostaFormulario'],
			'selecao-usuario':['click_selecaoUsuario']
		}
	},

	selecaoUsuario:function(){
		
		var options = {multiselect: true, required: true};
		WCMBC.selectUser(options, function(data){
			FLUIGC.toast({
				title: 'Usuários selecionados: ' + data.length,
				message: data[0].login,
				type: 'success'
			});
			console.log(data);
		}, function() {
			FLUIGC.toast({
				title: 'Cancelar',
				message: 'Usuário cancelou a seleção',
				type: 'success'
			});
		});
		
	},

	respostaFormulario:function(){
		SOCIALBC.openAnswerForm('220');
	},

	salvaRegistro:function(nome,ramal,formulario){
		//URL do Serviço
		var wsUrl = WCMAPI.serverURL + "/webdesk/ECMCardService?wsdl";

		//Modelo da Requisição
		var soapRequest =  '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/"><soapenv:Header/><soapenv:Body><ws:create><companyId></companyId><username></username><password></password><card><item><cardData><field>campo_nome</field><value name="campo_nome"></value></cardData><cardData><field>campo_ramal</field><value name="campo_ramal"></value></cardData><parentDocumentId></parentDocumentId></item></card></ws:create></soapenv:Body></soapenv:Envelope>';

		//Convertendo para XML, para facilitar a manipulação
		var parser=new DOMParser();
		var xmlRequest=parser.parseFromString(soapRequest,"text/xml");

		//Código da empresa
		xmlRequest.getElementsByTagName("companyId")[0].innerHTML = WCMAPI.organizationId;

		//Código do template de formulário, já publicado
		xmlRequest.getElementsByTagName("parentDocumentId")[0].innerHTML = formulario;

		//Valores para os campos
		xmlRequest.getElementsByName("campo_nome")[0].innerHTML = nome;
		xmlRequest.getElementsByName("campo_ramal")[0].innerHTML = ramal;

		//Enviando a requisição
		WCMAPI.Create({
			url: wsUrl,
			contentType: "text/xml",
			dataType: "xml",
			data: xmlRequest,
			success: function(data){
				var xmlResp=parser.parseFromString(data.firstChild.innerHTML,"text/xml");
				alert("Documento Publicado: " + xmlResp.getElementsByTagName("documentId")[0].innerHTML);
			}
		});
	},


	showMessage: function () {
		this.salvaRegistro("Juliemar","7236",'220');
	}
});