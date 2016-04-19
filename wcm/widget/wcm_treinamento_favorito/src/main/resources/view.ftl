<div id="TreinamentoFavorito_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
	data-params="TreinamentoFavorito.instance({message: 'Hello world'})">

	<DIV id="favorito_${instanceId}"></DIV>


	<script type="template" class="linha-customizada">
		<tr>
			<td>{{documentId}}</td>
			<td>{{documentDescription}}</td>
			<td>
				<b>{{version}}</b>
			</td>
			<td>
				<a target="_blank"
					href="/portal/p/note/ecmnavigation?app_ecm_navigation_doc={{documentId}}">Visualizar</a>
			</td>
		</tr>
	</script>

	<script type="text/template" class="template_area_buttons">
		<button class="btn btn-primary" data-your-action-1>Action 1</button>
		<button class="btn btn-primary" data-your-action-2>Action 2</button>
	</script>

</div>
