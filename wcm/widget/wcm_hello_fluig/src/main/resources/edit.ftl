<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
	data-params="HelloWorld.instance({nome: '${nome!}',sobrenome:'${sobrenome!}'})">

	<div class="panel panel-default">
		<div class="panel-heading">${i18n.getTranslation('hello.example.helloedit')}</div>
		<div class="panel-body">

			<form role="form">

				<div class="form-group">
					<label for="exampleInputEmail1">${i18n.getTranslation('hello.nome')}</label>
					<input type="text" class="form-control" id="nome_${instanceId}"
						placeholder="${i18n.getTranslation('hello.seu.nome')}">
				</div>

				<div class="form-group">
					<label for="exampleInputPassword1">${i18n.getTranslation('hello.sobrenome')}</label>
					<input type="text" class="form-control" id="sobrenome_${instanceId}"
						placeholder="${i18n.getTranslation('hello.seu.sobrenome')}">
				</div>
				
				<div class="pull-right">
					<button type="button" class="btn btn-primary"  data-salvar-treinamento >${i18n.getTranslation('hello.save')}</button>
				</div>
				
			</form>

		</div>
	</div>



</div>
