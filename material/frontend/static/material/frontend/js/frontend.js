// $(document).pjax('a:not(.no-pjax)', 'main');

(function( $ ) {
    function f() {
        $(document).activeNavigation("#nav-mobile");
    }
    
    $(document).on('ready page:load pjax:complete', f);
})(jQuery);




$('.collapsible').collapsible({
    accordion : false
});

$(".button-collapse").sideNav();
$(".dropdown-button").dropdown();
