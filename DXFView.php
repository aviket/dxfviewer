<?php

/*
  Plugin Name: DXFView
  Description: Plugin for showing DXF files in wordpress
  Version: 1.0
  Author: Avinashk
  Author URI:
  License: GPLv2
 */
define('DXFVIEW_FILE', __FILE__);

define('DXFVIEW_PATH', dirname(DXFVIEW_FILE));

define('DXFVIEW_LIB_PATH', DXFVIEW_PATH . DIRECTORY_SEPARATOR . 'lib');

define('DXFVIEW_JAVASCRIPT_PATH', trailingslashit(plugin_dir_url(__FILE__)) . '/js');




require(DXFVIEW_LIB_PATH . DIRECTORY_SEPARATOR . 'DXFViewSettings.php');

require(DXFVIEW_LIB_PATH . DIRECTORY_SEPARATOR . 'Class_DXFView.php');









new DXFViewSettings();
new clsDXFView_avinash();
?>