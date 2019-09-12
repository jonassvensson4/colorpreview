$('form').submit(function() {
    $('#username').css('color', `#${$('#colorHex').val()}`);
    $("#colorPicker").jqxColorPicker('setColor', `#${$('#colorHex').val()}`);
    return false;
});

$("#colorPicker").jqxColorPicker({
    width: 250,
    height: 250,
    showTransparent: false,
    colorMode: 'hue',
});

$("#colorPicker").jqxColorPicker('setColor', '#ffffff');

$("#colorPicker").on('colorchange', function (event) {
    $('#username').css('color', `#${event.args.color.hex}`);
    $('#colorHex').val(event.args.color.hex);
});

function resizable (el, factor) {
    let int = Number(factor) || 7.7;
    function resize() { el.style.width = ((el.value.length+1) * int) + 'px' }
    let e = 'keyup,keypress,focus,blur,change'.split(',');
    for (let i in e) el.addEventListener(e[i],resize,false);
    resize();
}

resizable(document.getElementById('username'), 9);

$('.d-colors li').each(function() {
    $(this).css('background', `#${$(this).attr('color')}`);
});

$('.d-colors li').click(function() {
    $("#colorPicker").jqxColorPicker('setColor', `#${$(this).attr('color')}`);
});