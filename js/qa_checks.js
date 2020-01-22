function calculate_completeness(jsonObj){ 
	
	var counter = 0;
	var site_attributes = jsonObj['attributes'];
	var missing_fields = '<ul>';
	
	if (site_attributes['general']['siteName']) counter++;
	else missing_fields += '<li>Site Name</li>';
	
	if (site_attributes['general']['abstract']) counter++;
	else missing_fields += '<li>Description</li>';
	
	if (site_attributes['general']['purpose']) counter++;
	else missing_fields += '<li>Purpose</li>';
	
	if (site_attributes['general']['status']) counter++;
	else missing_fields += '<li>Site Status</li>';
	
	if (site_attributes['general']['yearEstablished']) counter++;
	else missing_fields += '<li>Year Established</li>';
	
	if (site_attributes['general']['siteType']) counter++;
	else missing_fields += '<li>Site Type</li>';
	
	if (site_attributes['contact']['siteManager']) counter++;
	else missing_fields += '<li>Site Manager</li>';
	
	if (site_attributes['contact']['metadataProvider']) counter++;
	else missing_fields += '<li>Metadata provider</li>';
	
	if (site_attributes['affiliation']['networks']) counter++;
	else missing_fields += '<li>Networks</li>';
	
	if (site_attributes['geographic']['coordinates']) counter++;
	else missing_fields += '<li>Coordinates</li>';
	
	if (site_attributes['geographic']['country']) counter++;
	else missing_fields += '<li>Country</li>';
	
	if (site_attributes['geographic']['elevation']['min']) counter++;
	else missing_fields += '<li>Elevation (min)</li>';
	
	if (site_attributes['geographic']['elevation']['max']) counter++;
	else missing_fields += '<li>Elevation (max)</li>';
	
	if (site_attributes['geographic']['size']['value']) counter++;
	else missing_fields += '<li>Size</li>';
	
	if (site_attributes['environmentalCharacteristics']['airTemperature']['avg']) counter++;
	else missing_fields += '<li>Air Temperature (avg)</li>';
	
	if (site_attributes['environmentalCharacteristics']['biome']) counter++;
	else missing_fields += '<li>Biome</li>';
	
	if (site_attributes['environmentalCharacteristics']['ecosystemAndLanduse']) counter++;
	else missing_fields += '<li>Ecosystem and Land Use</li>';
	
	if (site_attributes['environmentalCharacteristics']['precipitation']['annual']) counter++;
	else missing_fields += '<li>Annual Precipitation</li>';
	
	if (site_attributes['focusDesignScale']['parameters']) counter++;
	else missing_fields += '<li>Parameters</li>';
	
	if (site_attributes['focusDesignScale']['researchTopics']) counter++;
	else missing_fields += '<li>Research Topics</li>';
	
	if (site_attributes['focusDesignScale']['experiments']['design']) counter++;
	else missing_fields += '<li>Design of Experiments</li>';
	
	if (site_attributes['focusDesignScale']['experiments']['scale']) counter++;
	else missing_fields += '<li>Scale of Experiments</li>';
	
	if (site_attributes['focusDesignScale']['observations']['design']) counter++;
	else missing_fields += '<li>Design of Observations</li>';
	
	if (site_attributes['focusDesignScale']['observations']['scale']) counter++;
	else missing_fields += '<li>Scale of Observation</li>';
	
	if (site_attributes['infrastructure']['accessibleAllYear']) counter++;
	else missing_fields += '<li>Accessible all year</li>';
	
	if (site_attributes['infrastructure']['permanentPowerSupply']) counter++;
	else missing_fields += '<li>Permanent Power Supply</li>';
	
	if (site_attributes['infrastructure']['operation']['permanent']) counter++;
	else missing_fields += '<li>Permanent Operation</li>';
	
	if (site_attributes['infrastructure']['data']['policy']['rights']) counter++;
	else missing_fields += '<li>Data policy</li>';
	
	if (site_attributes['infrastructure']['data']['location']) counter++;
	else missing_fields += '<li>Data storage location</li>';
	
	missing_fields += '</ul>'
	var percentage = (counter/29*100).toFixed(2) + '%';
	
	if (percentage == '100.00%') {
		document.getElementById('completeness_check_result').innerHTML = '<div class="text-success">' + percentage + '</div>';
		$('#completeness_check_row').removeClass().addClass('table-success');
	}
	else {
		document.getElementById('completeness_check_result').innerHTML = '<div class="text-danger">Record not complete (' + percentage + ')</div>' + '<p>Following fields are missing: </p>' + missing_fields;
		$('#completeness_check_row').removeClass().addClass('table-danger');
	}

}