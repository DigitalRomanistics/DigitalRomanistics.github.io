$(function() {
    $('.heading').click(function() {
        $(this).toggleClass('active').next().children('.content').toggleClass('show');
    });
});