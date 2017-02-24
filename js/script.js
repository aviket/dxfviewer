var canvas = document.getElementsByTagName('canvas')[0];
var lastDownTarget;
var canstrg;
var dxf = null;
var gkhead = new Image;
var ctx = canvas.getContext('2d');
var laylookup = '';
var w = canvas.getAttribute("width");
var h = canvas.getAttribute("height");

function downloadCanvasJpg(link, canvasId, filename) {
    link.href = jQuery('canvas').getCanvasImage('jpg');
    link.download = filename;
}

document.getElementById('downloadjpg').addEventListener('click', function () {
    downloadCanvasJpg(this, 'canvas', 'dxf.jpg');
}, false);

function downloadCanvasPng(link, canvasId, filename) {
    link.href = jQuery('canvas').getCanvasImage('png');
    link.download = filename;
}

document.getElementById('downloadpng').addEventListener('click', function () {
    downloadCanvasPng(this, 'canvas', 'dxf.png');
}, false);

function rtod(rd) {
    return (rd * 180 / 3.1415);
}

function layercolors(layobj) {
    var retstrg = "";
    for (key in layobj) {
        retstrg += key;
        retstrg += ",";
        retstrg += colobj[layobj[key].color];
        retstrg += "|";

    }
    return retstrg;
}
window.onload = function () {
    strg = "var strtx = 50.5087890625;var strty = 83.2204589844;var endx = 78.0087890625;var endy = 166.970458984;jQuery(canvas).drawLine({strokeStyle: '#FF0000',strokeWidth: 1,x1: strtx, y1: strty,x2: endx, y2: endy});var strtx = 125.508789062;var strty = 81.9704589844;var endx = 168.008789062;var endy = 156.970458984;jQuery(canvas).drawLine({strokeStyle: '#00FF00',strokeWidth: 1,x1: strtx, y1: strty,x2: endx, y2: endy});strtx = endx; strty = endy; var endx = 195.508789062;var endy = 99.4704589844;jQuery(canvas).drawLine({strokeStyle: '#00FF00',strokeWidth: 1,x1: strtx, y1: strty,x2: endx, y2: endy});strtx = endx; strty = endy; var endx = 223.008789062;var endy = 154.470458984;jQuery(canvas).drawLine({strokeStyle: '#00FF00',strokeWidth: 1,x1: strtx, y1: strty,x2: endx, y2: endy});strtx = endx; strty = endy; var endx = 249.258789062;var endy = 95.7204589844;jQuery(canvas).drawLine({strokeStyle: '#00FF00',strokeWidth: 1,x1: strtx, y1: strty,x2: endx, y2: endy});strtx = endx; strty = endy; var endx = 270.508789062;var endy = 139.470458984;jQuery(canvas).drawLine({strokeStyle: '#00FF00',strokeWidth: 1,x1: strtx, y1: strty,x2: endx, y2: endy});strtx = endx; strty = endy; var cenx = 496.067299701;var ceny = 120.647320687;var rad = 36.1855656168;jQuery(canvas).drawEllipse({strokeStyle: '#FF00FF',strokeWidth: 1,x: cenx, y: ceny,width: rad, height: rad});var strtx = 460.961914062;var strty = 63.8610839844;var txtval = 'Circle';var txtHeight = 15;var scl = 1;ctx.save();ctx.scale(1,-1);ctx.translate(0,-1 * (2 * strty ));jQuery(canvas).drawText({strokeStyle: '#FF00FF',fillStyle: '#FF00FF',strokeWidth: 0.01,x: strtx, y: strty,fontFamily: 'Verdana, sans-serif',fontSize: txtHeight,fromCenter: false,text: txtval});ctx.restore();var strtx = 362.915039062;var strty = 59.1735839844;var txtval = 'Arc';var txtHeight = 15;var scl = 1;ctx.save();ctx.scale(1,-1);ctx.translate(0,-1 * (2 * strty ));jQuery(canvas).drawText({strokeStyle: '#FF0000',fillStyle: '#FF0000',strokeWidth: 0.01,x: strtx, y: strty,fontFamily: 'Verdana, sans-serif',fontSize: txtHeight,fromCenter: false,text: txtval});ctx.restore();var strtx = 175.805664062;var strty = 78.3142089844;var txtval = 'PolyLine';var txtHeight = 15;var scl = 1;ctx.save();ctx.scale(1,-1);ctx.translate(0,-1 * (2 * strty ));jQuery(canvas).drawText({strokeStyle: '#00FF00',fillStyle: '#00FF00',strokeWidth: 0.01,x: strtx, y: strty,fontFamily: 'Verdana, sans-serif',fontSize: txtHeight,fromCenter: false,text: txtval});ctx.restore();var strtx = 29.5639038086;var strty = 63.8961791992;var txtval = 'Line';var txtHeight = 15;var scl = 1;ctx.save();ctx.scale(1,-1);ctx.translate(0,-1 * (2 * strty ));jQuery(canvas).drawText({strokeStyle: '#FF0000',fillStyle: '#FF0000',strokeWidth: 0.01,x: strtx, y: strty,fontFamily: 'Verdana, sans-serif',fontSize: txtHeight,fromCenter: false,text: txtval});ctx.restore();var strtx = 91.0250854492;var strty = 115.345458984;var txtval = 'ketkaravinash@yahoo.com';var txtHeight = 25;var scl = 1;ctx.save();ctx.scale(1,-1);ctx.translate(0,-1 * (2 * strty ));jQuery(canvas).drawText({strokeStyle: '#FFFFFF',fillStyle: '#FFFFFF',strokeWidth: 0.01,x: strtx, y: strty,fontFamily: 'Verdana, sans-serif',fontSize: txtHeight,fromCenter: false,text: txtval});ctx.restore();var strtx = 353.813171387;var strty = 94.4137573242;var radius = 57.2284057185;var startAngle = 0.03446910099947351 +  Math.PI ;var endAngle = 1.595791120414434 - Math.PI +  Math.PI;jQuery(canvas).drawArc({strokeStyle: '#FF0000',strokeWidth: 1,x: strtx, y: strty,radius: radius,start: startAngle,end: endAngle,ccw: true,inDegrees: false});";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.translate(0, canvas.height);
    ctx.scale(1, -1);
    eval(strg);
    trackTransforms(ctx);

    document.getElementById('file-field').onchange = function () {
        if (this.files.length == 1)
        {
            var reader = new FileReader();
            reader.readAsText(this.files[0]);
            reader.onload = function (e) {
                var fileText = e.target.result;
                var parser = new DxfParser();

                try {
                    dxf = parser.parseSync(fileText);
                } catch (err) {
                    return console.error(err.stack);
                }

                jQuery(canvas).clearCanvas();


                var laystrg = layercolors(dxf.tables.layer.layers);
                strg = objectifyme(dxf.entities, canvas, laystrg);
                if (typeof strg != "undefined")
                {
                    eval(strg);
                }

            };
        }
    };



    function draw() {
        if (typeof strg != "undefined")
        {
            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.restore();
            jQuery('canvas').clearCanvas()
            //strg = objectifyme(dxf.entities, ctx , laylookup);

            eval(strg);
        }
    }
    ;


    var lastX = canvas.width / 2,
            lastY = canvas.height / 2;

    var dragStart, dragged;

    canvas.addEventListener('mousedown', function (evt) {
        document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
        lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
        lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
        dragStart = ctx.transformedPoint(lastX, lastY);
        dragged = false;
    }, false);

    canvas.addEventListener('mousemove', function (evt) {
        lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
        lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
        dragged = true;
        if (dragStart) {
            var pt = ctx.transformedPoint(lastX, lastY);

            ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
            draw();
        }
    }, false);

    canvas.addEventListener('mouseup', function (evt) {

        if (!dragged) {
            zoom(evt.shiftKey ? -1 : 1)
        } else {
            lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
            lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
            var pt = ctx.transformedPoint(lastX, lastY);
            ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
            draw();
            dragStart = null;
        }
        ;
    }, false);

    var scaleFactor = 1.1;

    var zoom = function (clicks) {
        var pt = ctx.transformedPoint(lastX, lastY);
        ctx.translate(pt.x, pt.y);
        var factor = Math.pow(scaleFactor, clicks);
        ctx.scale(factor, factor);
        ctx.translate(-pt.x, -pt.y);
        draw();
    }

    var handleScroll = function (evt) {
        var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
        if (delta)
            zoom(delta);
        return evt.preventDefault() && false;
    };

    canvas.addEventListener('DOMMouseScroll', handleScroll, false);
    canvas.addEventListener('mousewheel', handleScroll, false);
};





function trackTransforms(ctx) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    var xform = svg.createSVGMatrix();
    ctx.getTransform = function () {
        return xform;
    };

    var savedTransforms = [];
    var save = ctx.save;
    ctx.save = function () {
        savedTransforms.push(xform.translate(0, 0));
        return save.call(ctx);
    };

    var restore = ctx.restore;
    ctx.restore = function () {
        xform = savedTransforms.pop();
        return restore.call(ctx);
    };

    var scale = ctx.scale;
    ctx.scale = function (sx, sy) {
        xform = xform.scaleNonUniform(sx, sy);
        return scale.call(ctx, sx, sy);
    };

    var rotate = ctx.rotate;
    ctx.rotate = function (radians) {
        xform = xform.rotate(radians * 180 / Math.PI);
        return rotate.call(ctx, radians);
    };

    var translate = ctx.translate;
    ctx.translate = function (dx, dy) {
        xform = xform.translate(dx, dy);
        return translate.call(ctx, dx, dy);
    };

    var transform = ctx.transform;
    ctx.transform = function (a, b, c, d, e, f) {
        var m2 = svg.createSVGMatrix();
        m2.a = a;
        m2.b = b;
        m2.c = c;
        m2.d = d;
        m2.e = e;
        m2.f = f;
        xform = xform.multiply(m2);
        return transform.call(ctx, a, b, c, d, e, f);
    };

    var setTransform = ctx.setTransform;
    ctx.setTransform = function (a, b, c, d, e, f) {
        xform.a = a;
        xform.b = b;
        xform.c = c;
        xform.d = d;
        xform.e = e;
        xform.f = f;
        return setTransform.call(ctx, a, b, c, d, e, f);
    };

    var pt = svg.createSVGPoint();
    ctx.transformedPoint = function (x, y) {
        pt.x = x;
        pt.y = y;
        return pt.matrixTransform(xform.inverse());
    }
}

function getlayercolor(layername, layerdictionary) {
    layerarr1 = layerdictionary.split("|");
    var arrayLength = layerarr1.length;
    for (var i = 0; i < arrayLength; i++) {
        layerarr2 = layerarr1[i].split(",");

        if (layerarr2[0] == layername) {
            return layerarr2[1];
        }

    }

}