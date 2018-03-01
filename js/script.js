jQuery(document).ready(function () {
    var $ = jQuery;
    $(window).on('load', function () {
        $(".delorean-p").delorean({
            type: 'paragraphs'
            , amount: 2
            , character: ''
            , tag: 'p'
        });
        $(".delorean-h1").delorean({
            type: 'words'
            , amount: 4
            , character: ''
            , tag: 'h1'
        });
        $(".delorean-h2").delorean({
            type: 'words'
            , amount: 5
            , character: ''
            , tag: 'h2'
        });
        $(".delorean-h3").delorean({
            type: 'words'
            , amount: 5
            , character: ''
            , tag: 'h3'
        });
        $(".delorean-h4").delorean({
            type: 'words'
            , amount: 5
            , character: ''
            , tag: 'h4'
        });
        $(".delorean-blockquote").delorean({
            type: 'paragraphs'
            , amount: 1
            , character: ''
            , tag: 'blockquote'
        });
    });
});