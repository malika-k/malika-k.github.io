$(document).ready(function () {
    $('#about').addClass('active');

    $('#sidenav-collapse').on('click', function () {
        $('#sidenav').toggleClass('active');
        $('#content').toggleClass('active');
        console.log("button pressed");
    });

    $('.sidenav-sect.menu .menu-btn').on('click', function () {
        console('menu item pressed');
    });
});
