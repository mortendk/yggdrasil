<?php

// Form override fo theme settings
function yggdrasil_form_system_theme_settings_alter(&$form, $form_state) {

  $form['options_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Theme Specific Settings'),
    '#collapsible' => FALSE,
    '#collapsed' => FALSE
  );

  $form['options_settings']['foo'] = array(
    '#type' => 'checkbox',
    '#title' =>  t('checkbox') .'def: ' . theme_get_setting('foo'),
    '#description'   =>t('something somethinf'),
    '#default_value' => theme_get_setting('foo'),
  );

}
