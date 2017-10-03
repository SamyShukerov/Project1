$(function() {
    function f() {
        $.get('https://newsapi.org/v1/articles?source=business-insider-uk&sortBy=top&apiKey=2e60da2fd5e24055b19fd2266bfc134c')
            .then(function(data) {
                $.get('template.html').then(function(html) {
                    var news = Handlebars.compile(html);
                    $('#news').html(news(data));

                })

            })
    }
    $('.novini').on('click', function() {
        f();
        $('.main').css('display', 'none');
        $('#news').css('display', 'block');
        $('[data-toggle="tooltip"]').tooltip();

    })
})