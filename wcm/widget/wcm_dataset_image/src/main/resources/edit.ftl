<div id="DatasetImageEdit_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
	data-params="DatasetImageEdit.instance({folderId:'${folderId!}'})">


	<div class="panel panel-default">
		<div class="panel-heading">
			<h3 class="panel-title">${i18n.getTranslation('image.example.edit')}</h3>
		</div>
		<div class="panel-body">
			<form role="form">
				<div class="form-group">
					<label for="exampleInputEmail1">${i18n.getTranslation('image.example.folderid.label')}
					</label>
					<input type="text" class="form-control" id="folderid_${instanceId}"
						placeholder="${i18n.getTranslation('image.example.folderid')}">
				</div>
			</form>

			<div class="pull-right">
				<button type="button" class="btn btn-primary"
					data-save-folder>${i18n.getTranslation('image.example.save')}
				</button>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
