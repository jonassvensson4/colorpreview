$('.helper').animate({
    left: 84
}, 2000, () => {
    setTimeout(() => {
        $('.helper').animate({
            left: '-100vh'
        }, 'slow');
    }, 4000);
});

$('#theme').click(() => {
    $('body').toggleClass('theme-dark theme-light');
});

$('#username').keydown(() => {
    setTimeout(() => {
        $('.username').text( $('#username').val() );
    }, 100);
});

$('#avatar, #avatar-input').click(() => {
    setTimeout(() => {
        $('#avatar-input').show();
        $('#avatar-input input').select();
    }, 1);
});

$('body').click(() => {
    $('#avatar-input').hide();
});

$('#avatar-input').submit(() => {
    $('#avatar-input').hide();
    $('.avatar').attr('src', $('#avatar-input input').val());

    return false;
});

$('#message-form').submit(() => {
    $('#messages').append(`<div class="message">
        <img src="${ $('#avatar-input input').val() }" alt="Avatar" class="avatar"/>
        <span class="username">Username</span>
        <span class="time">today at 3.15 PM</span>
        <p>${ $('#message-input').val() }</p>
    </div>`);

    $('#message-input').val('');

    // $('#username').css('color', `#${$('#colorHex').val()}`);
    // $("#colorPicker").jqxColorPicker('setColor', `#${$('#colorHex').val()}`);
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
    $('#messages .username').css('color', `#${event.args.color.hex}`);
    $('#hex').val(event.args.color.hex);
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