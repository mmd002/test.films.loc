<?php

function newTheme_preprocess_field(&$variables, $hook) {
	$element = $variables['element'];
	if (isset($element['#field_name']) && $element['#field_name'] == 'field_source_code') {
		$variables['classes_array'][] = 'newTheme-modalka';
		$variables['items'][1]['#markup'] = '<button type="button" class="myModal btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Trailer</button>';
	}
}
