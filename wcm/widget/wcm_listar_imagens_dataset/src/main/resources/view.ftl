<div id="TreinamentoImagens_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
	data-params="TreinamentoImagens.instance({folderId: '${folderId!}'})">


	<div class="container-fluid">
		<div class="row no-gutter" data-view-images-${instanceId}>

		</div>
	</div>


	<script type="template" class="listar-imagens">
		{{#images}}
		<div class="col-lg-4 col-sm-6">
			<a href="#" class="portfolio-box">
				<img src="{{src}}" class="img-responsive" alt="">
					<div class="portfolio-box-caption">
						<div class="portfolio-box-caption-content">
							<div class="project-category text-faded">
								{{title}}
							</div>
							<div class="project-name">
								Project Name
							</div>
						</div>
					</div>
			</a>
		</div>
		{{/images}}
	</script>

</div>

<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>