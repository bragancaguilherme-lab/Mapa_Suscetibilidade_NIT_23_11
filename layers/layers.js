var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Niteroi_recortado_1 = new ol.format.GeoJSON();
var features_Niteroi_recortado_1 = format_Niteroi_recortado_1.readFeatures(json_Niteroi_recortado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niteroi_recortado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niteroi_recortado_1.addFeatures(features_Niteroi_recortado_1);
var lyr_Niteroi_recortado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niteroi_recortado_1, 
                style: style_Niteroi_recortado_1,
                popuplayertitle: 'Niteroi_recortado',
                interactive: true,
                title: '<img src="styles/legend/Niteroi_recortado_1.png" /> Niteroi_recortado'
            });
var format_Mov_Massa_Dissolvido_2 = new ol.format.GeoJSON();
var features_Mov_Massa_Dissolvido_2 = format_Mov_Massa_Dissolvido_2.readFeatures(json_Mov_Massa_Dissolvido_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mov_Massa_Dissolvido_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mov_Massa_Dissolvido_2.addFeatures(features_Mov_Massa_Dissolvido_2);
var lyr_Mov_Massa_Dissolvido_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mov_Massa_Dissolvido_2, 
                style: style_Mov_Massa_Dissolvido_2,
                popuplayertitle: 'Mov_Massa_Dissolvido',
                interactive: false,
    title: 'Mov_Massa_Dissolvido<br />\
    <img src="styles/legend/Mov_Massa_Dissolvido_2_0.png" /> Alta<br />\
    <img src="styles/legend/Mov_Massa_Dissolvido_2_1.png" /> Média<br />' });
var format_Inundacao_Dissolvido_3 = new ol.format.GeoJSON();
var features_Inundacao_Dissolvido_3 = format_Inundacao_Dissolvido_3.readFeatures(json_Inundacao_Dissolvido_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inundacao_Dissolvido_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inundacao_Dissolvido_3.addFeatures(features_Inundacao_Dissolvido_3);
var lyr_Inundacao_Dissolvido_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inundacao_Dissolvido_3, 
                style: style_Inundacao_Dissolvido_3,
                popuplayertitle: 'Inundacao_Dissolvido',
                interactive: false,
    title: 'Inundacao_Dissolvido<br />\
    <img src="styles/legend/Inundacao_Dissolvido_3_0.png" /> Alta<br />\
    <img src="styles/legend/Inundacao_Dissolvido_3_1.png" /> Média<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_Niteroi_recortado_1.setVisible(true);lyr_Mov_Massa_Dissolvido_2.setVisible(false);lyr_Inundacao_Dissolvido_3.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_Niteroi_recortado_1,lyr_Mov_Massa_Dissolvido_2,lyr_Inundacao_Dissolvido_3];
lyr_Niteroi_recortado_1.set('fieldAliases', {'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'Inund_Alta': 'Inund_Alta', 'Inund_Med': 'Inund_Med', 'Mov_Alta': 'Mov_Alta', 'Mov_Med': 'Mov_Med', });
lyr_Mov_Massa_Dissolvido_2.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'CLASSE': 'CLASSE', 'Area_Km2': 'Area_Km2', });
lyr_Inundacao_Dissolvido_3.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'CLASSE': 'CLASSE', 'Area_km2': 'Area_km2', });
lyr_Niteroi_recortado_1.set('fieldImages', {'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Inund_Alta': 'TextEdit', 'Inund_Med': 'TextEdit', 'Mov_Alta': 'TextEdit', 'Mov_Med': 'TextEdit', });
lyr_Mov_Massa_Dissolvido_2.set('fieldImages', {'PROCESSO': 'TextEdit', 'CLASSE': 'TextEdit', 'Area_Km2': 'TextEdit', });
lyr_Inundacao_Dissolvido_3.set('fieldImages', {'PROCESSO': 'TextEdit', 'CLASSE': 'TextEdit', 'Area_km2': 'TextEdit', });
lyr_Niteroi_recortado_1.set('fieldLabels', {'NM_MUN': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', 'Inund_Alta': 'inline label - always visible', 'Inund_Med': 'inline label - always visible', 'Mov_Alta': 'inline label - always visible', 'Mov_Med': 'inline label - always visible', });
lyr_Mov_Massa_Dissolvido_2.set('fieldLabels', {'PROCESSO': 'no label', 'CLASSE': 'no label', 'Area_Km2': 'no label', });
lyr_Inundacao_Dissolvido_3.set('fieldLabels', {'PROCESSO': 'no label', 'CLASSE': 'no label', 'Area_km2': 'no label', });
lyr_Inundacao_Dissolvido_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});