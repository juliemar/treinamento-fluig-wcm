<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
	data-params="HelloWorld.instance({nome: '${nome!}',sobrenome:'${sobrenome!}'})">

	<div class="panel panel-default">
		<div class="panel-heading">${i18n.getTranslation('hello.example.helloedit')}</div>
		<div class="panel-body">

			<form role="form">

				<div class="form-group">
					<label for="exampleInputEmail1">Nome</label>
					<input type="text" class="form-control" id="nome_${instanceId}"
						placeholder="Seu nome">
				</div>

				<div class="form-group">
					<label for="exampleInputPassword1">Sobrenome</label>
					<input type="text" class="form-control" id="sobrenome_${instanceId}"
						placeholder="Seu sobrenome">
				</div>
				
				<div class="pull-right">
					<button type="button" class="btn btn-primary"  data-salvar-treinamento >Salvar</button>
				</div>
				
			</form>

		</div>
	</div>



</div>
