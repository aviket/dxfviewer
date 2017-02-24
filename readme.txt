=== DXFViewer ===
Contributors: aviket
Tags: DXF
Tested up to: Wordpress 4.5.4
Requires at least:  Wordpress 4.5.4
Stable tag: trunk
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==
This plugin displays a DXF file on your Wordpress post or page.
DXF (Drawing eXchange Format) is industry standard format for CAD drawings.
For DXF specifications: refer- http://images.autodesk.com/adsk/files/autocad_2012_pdf_dxf-reference_enu.pdf
DXF is an Ascii file. You can create it by AutoCAD or a few other packages like LibreCAD or QCad.
Some free samples of DXF files can be found online.
This plugin uses javascript and fully works on client side and hence works at lightening speed.

How to Use:
This plugin requires the browser that supports HTML5 Canvas, most modern browsers do.
After installation and Activation, you have to use shortcode [DXF] (ie simply type "[DXF]" on the page or post).
The starting page is loaded with some default DXF contents.
Viewer of your post will see a black coloured rectangle and a button to select a DXF file on the client machine. 
Depending on the size of the DXF file, the file will be rendered in the black rectangle.
For zooming, use mouse wheels, for panning click, hold and drag with the left mouse button.
The links below the rendering area can be used to save the canvas as a JPG or PNG file.
Background color and border are not shown in the saved images downloaded images.
For setting the Background color and Border, use the settings page.
Settings can be configured at: Admin area->Settings->DXFView Options.
This plugin uses JCanvas and DXFParser: 
Link to JCanvas: http://projects.calebevans.me/jcanvas/
Link to DXF parser: https://github.com/gdsestimating/dxf-parser
Commonly supported Entities in both Jcanvas and DXF parser are : Line, polyline, circle, text and arc and only
these much are rendered. Polylines with arcs, buldges etc are rendered as line string joining vertices.
Different text fonts are ignored and all the texts are displayed in one common font.
Entities on hidden or freezed layers are also rendered.
[youtube http://www.youtube.com/watch?v=Gud7SGzsaD8]