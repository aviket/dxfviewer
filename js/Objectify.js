function objectifyme(objarr, canv, laydictionary) {
    retstrg = "";
    jQuery(canvas).clearCanvas();
    var oneeighty = Math.PI;
    var ninety = oneeighty / 2;
    for (i = 0; i < objarr.length; i++) {

        var colorName = objarr[i].color;
        var layerName = objarr[i].layer;

        if ((colorName >= 255) || (colorName == 0) || !(colorName)) {
            htmlcolor = getlayercolor(layerName, laydictionary);
        } else {
            htmlcolor = colobj[colorName];
        }
        switch (objarr[i].type) {
            case "LINE":

                retstrg = retstrg + "var strtx = " + objarr[i].vertices[0].x + ";";
                retstrg = retstrg + "var strty = " + objarr[i].vertices[0].y + ";";
                retstrg = retstrg + "var endx = " + objarr[i].vertices[1].x + ";";
                retstrg = retstrg + "var endy = " + objarr[i].vertices[1].y + ";";
                retstrg = retstrg + "jQuery(canvas).drawLine({";
                retstrg = retstrg + "strokeStyle: '" + htmlcolor + "',";
                retstrg = retstrg + "strokeWidth: 1,";
                retstrg = retstrg + "x1: strtx, y1: strty,";
                retstrg = retstrg + "x2: endx, y2: endy";
                retstrg = retstrg + "});";



                break;



            case "LWPOLYLINE":
                var arrlen = objarr[i].vertices.length;
                retstrg = retstrg + "var strtx = " + objarr[i].vertices[0].x + ";";
                retstrg = retstrg + "var strty = " + objarr[i].vertices[0].y + ";";
                for (j = 1; j < arrlen; j++) {
                    retstrg = retstrg + "var endx = " + objarr[i].vertices[j].x + ";";
                    retstrg = retstrg + "var endy = " + objarr[i].vertices[j].y + ";";
                    retstrg = retstrg + "jQuery(canvas).drawLine({";
                    retstrg = retstrg + "strokeStyle: '" + htmlcolor + "',";
                    retstrg = retstrg + "strokeWidth: 1,";
                    retstrg = retstrg + "x1: strtx, y1: strty,";
                    retstrg = retstrg + "x2: endx, y2: endy";
                    retstrg = retstrg + "});";
                    retstrg = retstrg + "strtx = endx; ";
                    retstrg = retstrg + "strty = endy; ";
                }

                break;

            case "TEXT":

                retstrg = retstrg + "var strtx = " + objarr[i].startPoint.x + ";";
                retstrg = retstrg + "var strty = " + objarr[i].startPoint.y + ";";
                var newval = objarr[i].text.replace(/'/g, '');
                retstrg = retstrg + "var txtval = '" + newval + "';";

                retstrg = retstrg + "var txtHeight = " + objarr[i].textHeight + ";";
                retstrg = retstrg + "var scl = " + objarr[i].xScale + ";";
                retstrg = retstrg + "ctx.save();";
                retstrg = retstrg + "ctx.scale(1,-1);";
                retstrg = retstrg + "ctx.translate(0,-1 * (2 * strty ));";
                retstrg = retstrg + "jQuery(canvas).drawText({";
                retstrg = retstrg + "strokeStyle: '" + htmlcolor + "',";
                retstrg = retstrg + "fillStyle: '" + htmlcolor + "',";
                retstrg = retstrg + "strokeWidth: 0.01,";
                retstrg = retstrg + "x: strtx, y: strty,";
                retstrg = retstrg + "fontFamily: 'Verdana, sans-serif',";
                retstrg = retstrg + "fontSize: txtHeight,";
                retstrg = retstrg + "fromCenter: false,";
                retstrg = retstrg + "text: txtval";
                retstrg = retstrg + "});";
                retstrg = retstrg + "ctx.restore();";


                break;

            case "ARC":

                retstrg = retstrg + "var strtx = " + objarr[i].center.x + ";";
                retstrg = retstrg + "var strty = " + objarr[i].center.y + ";";


                retstrg = retstrg + "var radius = " + objarr[i].radius + ";";
                retstrg = retstrg + "var startAngle = " + objarr[i].startAngle + " +  Math.PI ;";
                retstrg = retstrg + "var endAngle = " + objarr[i].endAngle + " - Math.PI +  Math.PI;";


                retstrg = retstrg + "jQuery(canvas).drawArc({";
                retstrg = retstrg + "strokeStyle: '" + htmlcolor + "',";

                retstrg = retstrg + "strokeWidth: 1,";
                retstrg = retstrg + "x: strtx, y: strty,";
                retstrg = retstrg + "radius: radius,";
                retstrg = retstrg + "start: startAngle,";
                retstrg = retstrg + "end: endAngle,";
                retstrg = retstrg + "ccw: true,";
                retstrg = retstrg + "inDegrees: false";
                retstrg = retstrg + "});";



                break;

            case "CIRCLE":

                retstrg = retstrg + "var cenx = " + objarr[i].center.x + ";";
                retstrg = retstrg + "var ceny = " + objarr[i].center.y + ";";
                retstrg = retstrg + "var rad = " + objarr[i].radius + ";";
                retstrg = retstrg + "jQuery(canvas).drawEllipse({";
                retstrg = retstrg + "strokeStyle: '" + htmlcolor + "',";
                retstrg = retstrg + "strokeWidth: 1,";
                retstrg = retstrg + "x: cenx, y: ceny,";
                retstrg = retstrg + "width: rad, height: rad";
                retstrg = retstrg + "});";
                break;



        }
    }

    retstrg = retstrg.replace(/"/g, "");

    return retstrg;
}
var colobj = [
    '#000000',
    '#FF0000',
    '#FFFF00',
    '#00FF00',
    '#00FFFF',
    '#0000FF',
    '#FF00FF',
    '#FFFFFF',
    '#414141',
    '#808080',
    '#FF0000',
    '#FFAAAA',
    '#BD0000',
    '#BD7E7E',
    '#810000',
    '#815656',
    '#680000',
    '#684545',
    '#4F0000',
    '#4F3535',
    '#FF3F00',
    '#FFBFAA',
    '#BD2E00',
    '#BD8D7E',
    '#811F00',
    '#816056',
    '#681900',
    '#684E45',
    '#4F1300',
    '#4F3B35',
    '#FF7F00',
    '#FFD4AA',
    '#BD5E00',
    '#BD9D7E',
    '#814000',
    '#816B56',
    '#683400',
    '#685645',
    '#4F2700',
    '#4F4235',
    '#FFBF00',
    '#FFEAAA',
    '#BD8D00',
    '#BDAD7E',
    '#816000',
    '#817656',
    '#684E00',
    '#685F45',
    '#4F3B00',
    '#4F4935',
    '#FFFF00',
    '#FFFFAA',
    '#BDBD00',
    '#BDBD7E',
    '#818100',
    '#818156',
    '#686800',
    '#686845',
    '#4F4F00',
    '#4F4F35',
    '#BFFF00',
    '#EAFFAA',
    '#8DBD00',
    '#ADBD7E',
    '#608100',
    '#768156',
    '#4E6800',
    '#5F6845',
    '#3B4F00',
    '#494F35',
    '#7FFF00',
    '#D4FFAA',
    '#5EBD00',
    '#9DBD7E',
    '#408100',
    '#6B8156',
    '#346800',
    '#566845',
    '#274F00',
    '#424F35',
    '#3FFF00',
    '#BFFFAA',
    '#2EBD00',
    '#8DBD7E',
    '#1F8100',
    '#608156',
    '#196800',
    '#4E6845',
    '#134F00',
    '#3B4F35',
    '#00FF00',
    '#AAFFAA',
    '#00BD00',
    '#7EBD7E',
    '#008100',
    '#568156',
    '#006800',
    '#456845',
    '#004F00',
    '#354F35',
    '#00FF3F',
    '#AAFFBF',
    '#00BD2E',
    '#7EBD8D',
    '#00811F',
    '#568160',
    '#006819',
    '#45684E',
    '#004F13',
    '#354F3B',
    '#00FF7F',
    '#AAFFD4',
    '#00BD5E',
    '#7EBD9D',
    '#008140',
    '#56816B',
    '#006834',
    '#456856',
    '#004F27',
    '#354F42',
    '#00FFBF',
    '#AAFFEA',
    '#00BD8D',
    '#7EBDAD',
    '#008160',
    '#568176',
    '#00684E',
    '#45685F',
    '#004F3B',
    '#354F49',
    '#00FFFF',
    '#AAFFFF',
    '#00BDBD',
    '#7EBDBD',
    '#008181',
    '#568181',
    '#006868',
    '#456868',
    '#004F4F',
    '#354F4F',
    '#00BFFF',
    '#AAEAFF',
    '#008DBD',
    '#7EADBD',
    '#006081',
    '#567681',
    '#004E68',
    '#455F68',
    '#003B4F',
    '#35494F',
    '#007FFF',
    '#AAD4FF',
    '#005EBD',
    '#7E9DBD',
    '#004081',
    '#566B81',
    '#003468',
    '#455668',
    '#00274F',
    '#35424F',
    '#003FFF',
    '#AABFFF',
    '#002EBD',
    '#7E8DBD',
    '#001F81',
    '#566081',
    '#001968',
    '#454E68',
    '#00134F',
    '#353B4F',
    '#0000FF',
    '#AAAAFF',
    '#0000BD',
    '#7E7EBD',
    '#000081',
    '#565681',
    '#000068',
    '#454568',
    '#00004F',
    '#35354F',
    '#3F00FF',
    '#BFAAFF',
    '#2E00BD',
    '#8D7EBD',
    '#1F0081',
    '#605681',
    '#190068',
    '#4E4568',
    '#13004F',
    '#3B354F',
    '#7F00FF',
    '#D4AAFF',
    '#5E00BD',
    '#9D7EBD',
    '#400081',
    '#6B5681',
    '#340068',
    '#564568',
    '#27004F',
    '#42354F',
    '#BF00FF',
    '#EAAAFF',
    '#8D00BD',
    '#AD7EBD',
    '#600081',
    '#765681',
    '#4E0068',
    '#5F4568',
    '#3B004F',
    '#49354F',
    '#FF00FF',
    '#FFAAFF',
    '#BD00BD',
    '#BD7EBD',
    '#810081',
    '#815681',
    '#680068',
    '#684568',
    '#4F004F',
    '#4F354F',
    '#FF00BF',
    '#FFAAEA',
    '#BD008D',
    '#BD7EAD',
    '#810060',
    '#815676',
    '#68004E',
    '#68455F',
    '#4F003B',
    '#4F3549',
    '#FF007F',
    '#FFAAD4',
    '#BD005E',
    '#BD7E9D',
    '#810040',
    '#81566B',
    '#680034',
    '#684556',
    '#4F0027',
    '#4F3542',
    '#FF003F',
    '#FFAABF',
    '#BD002E',
    '#BD7E8D',
    '#81001F',
    '#815660',
    '#680019',
    '#68454E',
    '#4F0013',
    '#4F353B',
    '#333333',
    '#505050',
    '#696969',
    '#828282',
    '#BEBEBE',
    '#FFFFFF'
];

function layercolors(layarr) {
    laystrg = '';
    for (var key in layarr) {
        laystrg = laystrg + key + "-" + colobj[layarr[key].color] + '|';
    }
    return laystrg;
}