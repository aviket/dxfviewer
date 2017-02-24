<?php

class clsDXFView_avinash {

    function enqscr() {
        wp_enqueue_script('jcanvassc', DXFVIEW_JAVASCRIPT_PATH . DIRECTORY_SEPARATOR . '/jcanvas.js');
        wp_enqueue_script('objectifymepls', DXFVIEW_JAVASCRIPT_PATH . DIRECTORY_SEPARATOR . '/Objectify.js');
        wp_enqueue_script('dxfscript', DXFVIEW_JAVASCRIPT_PATH . DIRECTORY_SEPARATOR . '/dxf-parser.js');
        wp_enqueue_script('classes', DXFVIEW_JAVASCRIPT_PATH . DIRECTORY_SEPARATOR . '/script.js');
    }

    function get_dxf($atts) {
        do_action('enqeue1');
        echo ('<input id="file-field" type="file" accept=".dxf"><br />');
        echo ("<b>Select DXF File</b><br />");
        echo ('<canvas id="canvas" width="600" height="300"    viewBox="0 0 3000 1500" ></canvas>');
        echo ('<br /><a id="downloadjpg">Download as jpg image</a>&nbsp;&nbsp;');
        echo ('<a id="downloadpng">Download as png image</a>');
        echo ('<script>');
        echo ("document.getElementById('canvas').style.background = '" . get_option('DXFView-Settings') ['backcolor'] . "';");
        echo ("document.getElementById('canvas').style.border = '" . get_option('DXFView-Settings') ['border'] . "';");
        echo ('</script>');
    }

    public
            function __construct() {
        add_action('enqeue1', array(
            $this,
            'enqscr'
        ));
        add_shortcode('dxf', array(
            $this,
            'get_dxf'
        ));
    }

}

?>