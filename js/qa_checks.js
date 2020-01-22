function calculate_completeness(jsonObj){ 
	
	var number_of_filled_fields = 0;
	var site_attributes = jsonObj['attributes'];
	var list_of_missing_fields = '<ul>';
	
	site_attributes['general']['siteName'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Site Name</li>';
	site_attributes['general']['abstract'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Description</li>';
	site_attributes['general']['purpose'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Purpose</li>';
	site_attributes['general']['status'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Site Status</li>';
	site_attributes['general']['yearEstablished'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Year Established</li>';
	site_attributes['general']['siteType'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Site Type</li>';
	site_attributes['contact']['siteManager'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Site Manager</li>';
	site_attributes['contact']['metadataProvider'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Metadata provider</li>';
	site_attributes['affiliation']['networks'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Networks</li>';
	site_attributes['geographic']['coordinates'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Coordinates</li>';
	site_attributes['geographic']['country'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Country</li>';
	site_attributes['geographic']['elevation']['min'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Elevation (min)</li>';
	site_attributes['geographic']['elevation']['max'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Elevation (max)</li>';
	site_attributes['geographic']['size']['value'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Size</li>';
	site_attributes['environmentalCharacteristics']['airTemperature']['avg'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Air Temperature (avg)</li>';
	site_attributes['environmentalCharacteristics']['biome'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Biome</li>';
	site_attributes['environmentalCharacteristics']['ecosystemAndLanduse'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Ecosystem and Land Use</li>';
	site_attributes['environmentalCharacteristics']['precipitation']['annual'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Annual Precipitation</li>';
	site_attributes['focusDesignScale']['parameters'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Parameters</li>';
	site_attributes['focusDesignScale']['researchTopics'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Research Topics</li>';
	site_attributes['focusDesignScale']['experiments']['design'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Design of Experiments</li>';
	site_attributes['focusDesignScale']['experiments']['scale'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Scale of Experiments</li>';
	site_attributes['focusDesignScale']['observations']['design'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Design of Observations</li>';
	site_attributes['focusDesignScale']['observations']['scale'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Scale of Observation</li>';
	site_attributes['infrastructure']['accessibleAllYear'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Accessible all year</li>';
	site_attributes['infrastructure']['permanentPowerSupply'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Permanent Power Supply</li>';
	site_attributes['infrastructure']['operation']['permanent'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Permanent Operation</li>';
	site_attributes['infrastructure']['data']['policy']['rights'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Data policy</li>';
	site_attributes['infrastructure']['data']['location'] ? number_of_filled_fields++ : list_of_missing_fields += '<li>Data storage location</li>';
	
	list_of_missing_fields += '</ul>'
	var percentage = (number_of_filled_fields/29*100).toFixed(2) + '%';
	
	if (percentage == '100.00%') {
		document.getElementById('completeness_check_result').innerHTML = '<div class="text-success">' + percentage + '</div>';
		$('#completeness_check_row').removeClass().addClass('table-success');
	}
	else {
		document.getElementById('completeness_check_result').innerHTML = '<div class="text-danger">Record not complete (' + percentage + ')</div>' + '<p>Following field(s) are missing: </p>' + list_of_missing_fields;
		$('#completeness_check_row').removeClass().addClass('table-danger');
	}

}