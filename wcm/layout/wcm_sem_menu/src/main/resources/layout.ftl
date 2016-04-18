<!-- Header -->
<div id="wcm_header" class="wcm-header-background wcm-header">

    <!-- Grouper left -->
    <div class="header-grouper-left">
        <a href="home" class="wcm_logo" title="${i18n.getTranslation('layout.label.pagetitle')}">
        <#if '${imageLogo}'=='true'>
            <img src="${serverContextPath}/resources/images/${pageRender.user.tenantId}/logo_image.png"/>
        <#else>
            <img src="${serverContextPath}/resources/images/logo.png"/>
        </#if>
        </a>
    </div>

    <!-- Grouper right -->
    <div class="header-grouper-right">

        <div id="SlotInstantSearch" slot="true" class="slotint slot-header-actions">
        <#list (pageRender.getInstancesIds("SlotInstantSearch"))! as id>
			    ${pageRender.renderInstanceNoDecorator(id)}
			</#list>
        </div>

        <!-- Container alerta global-->
        <div id="SlotGlobalAlert" slot="true" class="slotint slot-header-actions">
        <#list (pageRender.getInstancesIds("SlotGlobalAlert"))! as id>
			    ${pageRender.renderInstanceNoDecorator(id)}
			</#list>
        </div>

        <!-- Container login -->
        <div id="SlotLogin" slot="true" class="slot-header-actions">
        <#list (pageRender.getInstancesIds("SlotLogin"))! as id>
				${pageRender.renderInstanceNoDecorator(id)}
			</#list>
        </div>
    </div>

</div>


<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">

    <!-- Wrapper -->
    <div >
        <div id="wcm-content" class="clearfix wcm-background">

            <!-- Onde deverá estar a barra de formatação -->
        <#if pageRender.isEditMode()=true>
            <div name="formatBar" id="formatBar"></div>
            <!-- Div geral -->
            <!-- Há CSS distinto para Edição/Visualização -->
        <div id="edicaoPagina" class="clearfix">
        <#else>
        <div id="visualizacaoPagina" class="clearfix">
        </#if>

            <!-- Titulo da página -->
            <div class="slotfull layout-1-1">
                <span class="titleArea">${i18n.getTranslation('wcm.layoutsimples.title')}</span>
                <h2 class="pageTitle">${pageTitle}</h2>
            </div>

            <!-- Slot 1 -->
            <div class="editable-slot slotfull layout-1-1" id="slotFull1">
                <div id="SlotC" slot="true" class="sortable" decorator="false" editableSlot="true">
                <#list (pageRender.getInstancesIds("SlotC"))! as id>
						    ${pageRender.renderInstanceNoDecorator(id)}
						</#list>
                </div>
            </div>

            <!-- Slot 2 -->
            <div class="editable-slot slotfull layout-1-1" id="slotFull2">
                <div id="SlotA" slot="true" class="sortable" decorator="false" editableSlot="true">
                <#list (pageRender.getInstancesIds("SlotA"))! as id>
						    ${pageRender.renderInstanceNoDecorator(id)}
						</#list>
                </div>
            </div>

        </div>
            <!-- FIM DAS WIDGETS DO LAYOUT -->
            <!-- Footer -->
			<div id="wcm_footer" class="wcm_footer">
				<div id="wcm_footer_interna_logo">
				<#if pageRender.isUserLogged() >
					<#if "${wcmVersionInfo.getStatus()}" == "1">
						<div class="wcm_alert_img" onmousemove="$(this).children('.wcm_alert_popup').show();" onmouseout="$(this).children('.wcm_alert_popup').hide();">
							<img src="${contextPath}/resources/images/icon_toast_alert.png">
							<div class="wcm_alert_popup system-float-box bottom-left" style="display:none">
								<div class="wcm_alert_popup_title">${i18n.getTranslation('warninVersion.user.title')}</div>
								<div class="wcm_alert_popup_line"></div>
								<div class="wcm_alert_popup_msg">${i18n.getTranslation('warninVersion.user1')}</div>
							</div>
						</div>
					<#elseif "${wcmVersionInfo.getStatus()}" == "2">
						<div class="wcm_alert_img" onmousemove="$(this).children('.wcm_alert_popup').show();" onmouseout="$(this).children('.wcm_alert_popup').hide();">
							<img src="${contextPath}/resources/images/icon_toast_alert.png">
							<div class="wcm_alert_popup system-float-box bottom-left" style="display:none">
								<div class="wcm_alert_popup_title">${i18n.getTranslation('warninVersion.user.title')}</div>
								<div class="wcm_alert_popup_line"></div>
								<div class="wcm_alert_popup_msg">${i18n.getTranslationP1('warninVersion.user2', wcmVersionInfo.getStatusInfo())}</div>
							</div>
						</div>
					<#elseif "${wcmVersionInfo.getStatus()}" == "3">
						<div class="wcm_alert_img" onmousemove="$(this).children('.wcm_alert_popup').show();" onmouseout="$(this).children('.wcm_alert_popup').hide();">
							<img src="${contextPath}/resources/images/icon_toast_erro.png">
							<div class="wcm_alert_popup system-float-box bottom-left" style="display:none">
								<div class="wcm_alert_popup_title">${i18n.getTranslation('warninVersion.user.title')}</div>
								<div class="wcm_alert_popup_line"></div>
								<div class="wcm_alert_popup_msg">${i18n.getTranslation('warninVersion.user3')}</div>
							</div>
						</div>
					</#if>
			
					<span id="ecm-version">
						<span class="ecm-data-version">${wcmVersionInfo.getVersionName()}</span> <span class="ecm-data-revision">${wcmVersionInfo.getVersionBuild()}</span>
						- ${i18n.getTranslation('wcm.layoutsimples.user')}: ${user.fullName}
					</span>
					
					<!-- Container use policy -->
					<div id="SlotUsePolicy" slot="true" class="slotint">
						<#list (pageRender.getInstancesIds("SlotUsePolicy"))! as id>
							${pageRender.renderInstanceNoDecorator(id)}
						</#list>
					</div>
				</#if>
				</div>
			</div>
        </div>
	</div>
</div>