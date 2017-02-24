<?php

class DXFViewSettings {

    protected $option_name = 'DXFView-Settings';
    
    protected $data = array(
        'backcolor' => '#000000',
        'border' => '1px solid #000000'
    );

    public function __construct() {

        add_action('init', array($this, 'init'));



        add_action('admin_init', array($this, 'admin_init'));
        add_action('admin_menu', array($this, 'add_page'));

        register_activation_hook(DXFView_FILE, array($this, 'activate'));

        register_deactivation_hook(DXFView_FILE, array($this, 'deactivate'));
    }

    public function activate() {
        update_option($this->option_name, $this->data);
    }

    public function deactivate() {
        delete_option($this->option_name);
    }
    
    public function init() {

        $result = get_option('DXFView-Settings');
        
            
    
            

    }

    public function admin_init() {
        register_setting('DXFView_options', $this->option_name, array($this, 'validate'));
    }

    public function add_page() {
        add_options_page('DXFView  Options', 'DXFView Options', 'manage_options', 'DXFView_options', array($this, 'options_dxf_page'));
    }
    

    public function options_dxf_page() {
        $options = get_option($this->option_name);
        ?>
        <script>
        function updrng ()
    {
        document.getElementById("brdrtxt").value = document.getElementById("bsize").value + "px";
    }
    
    function updborder()
    {
        document.getElementById("brdr").value = document.getElementById("bsize").value + "px " + document.getElementById("bstyle").value + " " + document.getElementById("bcolor").value;
    }
        </script>
        <div class="wrap">
            <h2>DXFView Options</h2>
            <form method="post" action="options.php">
                <?php settings_fields('DXFView_options'); ?>
                 <table border="1" width="75%" class="form-table">
                   <TR>
                    
                        <td width=25%><b>BackGround Color</b><input type="color"  name="<?php echo $this->option_name?>[backcolor]" value="<?php echo $options['backcolor']; ?>" /></td>
                        <td width=25%><b>Border Width</b><input label="Border Width" type="range" name="bsize" id="bsize" min="1" max="5" value="<?php echo(substr(get_option('DXFView-Settings')['border'],0,1)); ?>" onchange="updborder()"></font></td>
                        <td width=25%><b>Border Color</b><input type="color" id="bcolor" value= <?php  echo( '\'' . explode(' ' , get_option('DXFView-Settings')['border'])[2] . '\'')  ?> onchange="updborder()" /></td>
                        <td width=25%><b>Border Style</b>
                        <select id="bstyle" onchange="updborder()"  >
                               <option  value="solid" <?php if( explode(' ' , get_option('DXFView-Settings')['border'])[1] ==  'solid'): ?> selected="selected"<?php endif; ?>>Solid
                               <option value="double" <?php if( explode(' ' , get_option('DXFView-Settings')['border'])[1] ==  'double'): ?> selected="selected"<?php endif; ?>>Double
                               <option value="none" <?php if( explode(' ' , get_option('DXFView-Settings')['border'])[1] ==  'none'): ?> selected="selected"<?php endif; ?>>None
                               <option value="dotted" <?php if( explode(' ' , get_option('DXFView-Settings')['border'])[1] ==  'dotted'): ?> selected="selected"<?php endif; ?>>Dotted
                               <option value="dashed" <?php if( explode(' ' , get_option('DXFView-Settings')['border'])[1] ==  'dashed'): ?> selected="selected"<?php endif; ?>>Dashed
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Border:<input type="text" id="brdr" onkeydown="return false;" name="<?php echo $this->option_name?>[border]" value="<?php echo $options['border']; ?>" /></td>
                    </tr>
                </table>
                <p class="submit">
                    <input type="submit" class="button-primary" value="<?php _e('Save Changes') ?>" />
                </p>
            </form>
        </div>
        <?php
    }

    public function validate($input) {
        var_dump($input);
        $valid = array();
        $valid['backcolor'] = $input['backcolor'];
        $valid['border'] = $input['border'];

            
            
        
        return $valid;
    }
    
}
