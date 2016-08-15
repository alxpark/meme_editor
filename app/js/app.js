/**
 * Created by Alex Park on 2016. 8. 15..
 */
(function($, fabric) {

    var fabric = fabric || window.fabric;
    var canvas = new fabric.Canvas('c');
    canvas.setDimensions({
        width : 300,
        height : 400
    });

    $('#load-img').click(function() {
        var imgSrc = $('#imgUrl').val();
        if (!imgSrc) {
            imgSrc = 'img/Batman-Slapping-Robin.jpg';
        }
        fabric.Image.fromURL(imgSrc, function(img) {

            canvas.setDimensions({
                width : img.width,
                height : img.height
            });
            canvas.add(img);
        });
    });

    $('#add-text').click(function() {

        var text = $('#text').val();
        if (!text) {
            text = 'Hello World!';
        }

        var iText = new fabric.IText(text, {
            left: 50,
            top: 50,
            scaleX : 1,
            scaleY : 1,
            padding: 7,
            fontSize: 60,
            textAlign: 'left',
            fontFamily: 'Impact',
            caching: false,
            fill: 'black',
            stroke: 'white',
            strokeWidth: 4,
            borderDashArray: [5, 5],
            originX: 'left',
            originY: 'center',
            styles: {},
        });

        canvas.add(iText).setActiveObject(iText);
        canvas.renderAll();

    });

    $('#generator').click(function() {
        canvas.deactivateAll();

        var img = canvas.toDataURL("image/png");
       $('#preview').attr("src", img);

        // window.open(img);
    });

})(jQuery, fabric);