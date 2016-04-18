<#attempt><#t>
    <#assign params = '{widgetStyle: ""}'?html>

<div id="favorites_${instanceId}" class="wcm-widget-class super-widget fluig-style-guide"
     data-params="Favorites.instance(${params})">
    <div class="page-header">
        <h1>${i18n.getTranslation('application.title')}</h1>
    </div>

    <table id="ecm_favorites_grid_${instanceId}"></table>
    <div id="ecm_favorites_page_${instanceId}"></div>
    <div id="ecm_favorites_buttons_${instanceId}"></div>

    <div id="executorFrame"></div>
</div>

    <#recover><#t>
    ${i18n.getTranslation('favorites.internal.error')}<#t>
</#attempt><#t>
