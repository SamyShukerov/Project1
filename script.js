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

    // Constructor Firma
    function Firma(name, logo, grad, telefon, sait) {
        this.name = name;
        this.info = '';
        this.logo = logo;
        this.obqvi = [];
        this.contacts = {
            place: grad,
            phone: telefon,
            website: sait
        }

    }
    Firma.prototype.addObqva = function(obqva) {
        if (obqva instanceof Obqva) {
            this.obqvi.push(obqva)
            obqva.firma = this;
        }
    };
    Firma.prototype.addInfo = function(text) {
            this.info = text;
        }
        // Категории и видове обяви
    var categories = ['Банки и кредитиране', 'Инженери', 'ИТ', 'Контакт центрове', 'Сигурност и охрана'];
    var types = ['Пълно работно време', 'Непълно работно време', 'Стаж'];

    // Constructor Obqva
    function Obqva(name, grad, data, info) {
        this.name = name;
        this.info = info;
        this.firma = null;
        this.place = grad;
        this.date = data;
        this.category = categories[Math.floor(Math.random() * categories.length)];
        this.type = types[Math.floor(Math.random() * types.length)];
    }
});


var _FIRMI = [];