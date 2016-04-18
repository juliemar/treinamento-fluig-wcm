<link type="text/css" rel="stylesheet"
	href="/wcm_layout_criativo/resources/css/wcm_layout_criativo.css">
	<treinamento id="page-top">

		<nav id="mainNav" class="navbar navbar-default navbar-fixed-top affix-top">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed"
						data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand page-scroll" href="#page-top">${i18n.getTranslation('layout.label.pagetitle')}</a>
				</div>

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">
						<li>
							<a class="page-scroll" href="#about">About</a>
						</li>
						<li>
							<a class="page-scroll" href="#services">Services</a>
						</li>
						<li>
							<a class="page-scroll" href="#portfolio">Portfolio</a>
						</li>
						<li>
							<a class="page-scroll" href="#contact">Contact</a>
						</li>
						<li>
							<div style="padding-top:10px;">
								<#list (pageRender.getInstancesIds("SlotLogin"))!
								as id>
								${pageRender.renderInstanceNoDecorator(id)}
								</#list>
							</div>
						</li>
					</ul>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>

		<header>
			<div class="header-content">
				<div class="header-content-inner">
					<h1 style="font-size: 65px;">Your Favorite Source of Free Bootstrap Themes</h1>
					<hr>
						<p>Start Bootstrap can help you build better websites using the
							Bootstrap CSS framework! Just download your template and start
							going, no strings attached!
						</p>
						<a href="#about" class="btn btn-primary btn-xl page-scroll">Find Out More</a>
				</div>
			</div>
		</header>

		<section class="bg-primary" id="about">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-lg-offset-2 text-center">
						<h2 class="section-heading">We've got what you need!</h2>
						<hr class="light">
							<p class="text-faded">Start Bootstrap has everything you need to get your
								new website up and running in no time! All of the templates and
								themes on Start Bootstrap are open source, free to download, and
								easy to use. No strings attached!
							</p>
							<a href="#services" class="page-scroll btn btn-default btn-xl">Get Started!</a>
					</div>
				</div>
			</div>
		</section>

		<section id="services">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-center">
						<h2 class="section-heading">At Your Service</h2>
						<hr class="primary">
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-6 text-center">
						<div class="service-box">
							<i class="fa fa-4x fa-diamond wow bounceIn text-primary" style="visibility: hidden; animation-name: none;"></i>
							<h3>Sturdy Templates</h3>
							<p class="text-muted">Our templates are updated regularly so they don't
								break.
							</p>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 text-center">
						<div class="service-box">
							<i class="fa fa-4x fa-paper-plane wow bounceIn text-primary"
								data-wow-delay=".1s"
								style="visibility: hidden; animation-delay: 0.1s; animation-name: none;"></i>
							<h3>Ready to Ship</h3>
							<p class="text-muted">You can use this theme as is, or you can make changes!
							</p>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 text-center">
						<div class="service-box">
							<i class="fa fa-4x fa-newspaper-o wow bounceIn text-primary"
								data-wow-delay=".2s"
								style="visibility: hidden; animation-delay: 0.2s; animation-name: none;"></i>
							<h3>Up to Date</h3>
							<p class="text-muted">We update dependencies to keep things fresh.</p>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 text-center">
						<div class="service-box">
							<i class="fa fa-4x fa-heart wow bounceIn text-primary"
								data-wow-delay=".3s"
								style="visibility: hidden; animation-delay: 0.3s; animation-name: none;"></i>
							<h3>Made with Love</h3>
							<p class="text-muted">You have to make your websites with love these days!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="no-padding" id="portfolio">
			<!-- Slot 1 -->
			<div class="editable-slot slotfull layout-1-1" id="slotFull1">
				<div id="SlotC" slot="true" class="sortable" decorator="false"
					editableSlot="true">
					<#list (pageRender.getInstancesIds("SlotC"))! as id>
					${pageRender.renderInstanceNoDecorator(id)}
					</#list>
				</div>
			</div>
		</section>

		<aside class="bg-dark">
			<div class="container text-center">
				<div class="call-to-action">
					<h2>Free Download at Start Bootstrap!</h2>
					<a href="#" class="btn btn-default btn-xl wow tada" style="visibility: hidden; animation-name: none;">Download
						Now!
					</a>
				</div>
			</div>
		</aside>

		<section id="contact">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-lg-offset-2 text-center">
						<h2 class="section-heading">Let's Get In Touch!</h2>
						<hr class="primary">
							<p>Ready to start your next project with us? That's great! Give
								us a call or send us an email and we will get back to you as
								soon as possible!
							</p>
					</div>
					<div class="col-lg-4 col-lg-offset-2 text-center">
						<i class="fa fa-phone fa-3x wow bounceIn" style="visibility: hidden; animation-name: none;"></i>
						<p>123-456-6789</p>
					</div>
					<div class="col-lg-4 text-center">
						<i class="fa fa-envelope-o fa-3x wow bounceIn" data-wow-delay=".1s"
							style="visibility: hidden; animation-delay: 0.1s; animation-name: none;"></i>
						<p>
							<a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	</treinamento>