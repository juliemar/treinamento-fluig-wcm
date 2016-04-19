<div id="TreinamentoImagens_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
	data-params="TreinamentoImagens.instance({message: 'Hello world'})">

	<!-- efetua a tradução do texto do objeto i18n -->
	<h1>${i18n.getTranslation('hello.example.helloedit')}</h1>

	<form role="form">
		<div class="form-group">
			<label for="exampleInputEmail1">Identificador da pasta</label>
			<input type="text" class="form-control" id="folderId_${instanceId}"
				placeholder="Identifique a pasta ex:55">
		</div>
		<div class="pull-right">
			<button type="button" class="btn btn-primary" data-salvar>Salvar
			</button>
		</div>
	</form>

</div>
