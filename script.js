$(function() {
    var staj = document.getElementById('staj');
    staj.addEventListener('mouseover', function(e) {
        e.target.click();
    }, false)


    var form = document.getElementById('tursachka');
    form.addEventListener('click', function(e) {
        if (e.target.type == 'radio') {
            let place = document.getElementById('placeP');
            let span = document.createElement('span');
            span.textContent = '  (' + e.target.value + ')'
            console.log(place.children.length)
            if (place.children.length == 1) {
                place.appendChild(span)
            } else
                place.replaceChild(span, place.lastChild)
        }
    })

});