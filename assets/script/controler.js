$(function() {
    var form = document.getElementById('tursachka');
    var tursachka = document.getElementById('tursachka');
    var main = document.getElementsByClassName('main');
    var firmi = document.getElementById('firmi');
    var buttonFirmi = Array.from(document.getElementsByClassName('buttonFirmi'));
    var obyavi = document.getElementById('obyavi');
    var buttonObyavi = Array.from(document.getElementsByClassName('buttonObyavi'));
    var home = document.getElementById('home');
    var buttonHome = document.getElementsByClassName('buttonHome');
    var buttonFAQ = document.getElementById('vuprosi');
    var faq = document.getElementById('faq');
    var a = document.createElement('a');

    form.addEventListener('click', function(e) {
        if (e.target.type === 'radio') {
            let place = document.getElementById('placeP');
            let span = document.createElement('span');

            span.textContent = '  (' + e.target.value + ')';
            console.log(place.children.length);
            if (place.children.length === 1) {
                place.appendChild(span);
            } else { place.replaceChild(span, place.lastChild); }
        }
    });
    // registration

    $('#regBtn').click(function() {
        var user = document.getElementById('regUser').value;
        var pass = document.getElementById('regPass').value;
        var mail = document.getElementById('mail').value;

        console.log(user + '  ' + pass);
        if (userList.addUser(user, pass, mail)) {
            userList.addUser(user, pass, mail);
            document.getElementById('regBtn').classList.remove('btn-primary');
            document.getElementById('regBtn').classList.add('btn-success');
            document.getElementById('regP').textContent = 'Вие успешно се регистрирахте !';
            document.getElementById('regP').classList.remove('text-danger');
            document.getElementById('regP').classList.add('text-success');
        } else {
            document.getElementById('regP').textContent = 'Невалиден потребител и/или парола';
        }
    });

    // vhod
    $('#vhodBtn').click(function() {
        var user = document.getElementById('vhodUser').value;
        var pass = document.getElementById('vhodPass').value;
        var vhod = userList.login(user, pass);

        if (userList.login(user, pass)) {
            document.getElementById('vhodBtn').classList.remove('btn-primary');
            document.getElementById('vhodBtn').classList.add('btn-success');
            document.getElementById('vhodP').textContent = 'Вие успешно влезнахте в своя профил !';
            document.getElementById('vhodP').classList.remove('text-danger');
            document.getElementById('vhodP').classList.add('text-success');
            var login = document.getElementById('login').parentNode;
            var rr = document.getElementById('register');
            var name = document.createElement('a');
            name.classList.add('currentUser')

            name.innerHTML = '<span class="glyphicon glyphicon-user"></span>  <span style="cursor:pointer">' + user + '</span>';
            rr.parentNode.appendChild(name);
            rr.parentNode.removeChild(rr);
            login.parentNode.removeChild(login);
            name.addEventListener('click', function() {
                $('.obiavi').html('');
                pokajiObqvi(userList.currentUser.obyavi, 'currentObyavi');
                Array.from(main).forEach(div => div.style.display = 'none');
                document.getElementById('currentObyavi').style.display = 'block';

            })
        } else {
            document.getElementById('vhodP').textContent = 'Невалиден потребител и/или парола';
            document.getElementById('vhodP').classList.add('text-danger');
        }
    });

    // Login
    $('#login').click(function() {
        $('#signIn').modal();
    });
    // Register
    $('#register').click(function() {
        $('#signUp').modal();
    });


    a.id = 'buttonForSearch';
    a.textContent = 'Промени търсенето';

    buttonFAQ.addEventListener('click', function() {
        Array.from(main).forEach(div => div.style.display = 'none');
        faq.style.display = 'block';
    });

    buttonFirmi.forEach(button => {
        button.addEventListener('click', function(event) {
            Array.from(main).forEach(div => div.style.display = 'none');
            firmi.style.display = 'block';
        }, false);
    });

    buttonObyavi.forEach(button => {
        button.addEventListener('click', function(event) {
            Array.from(main).forEach(div => div.style.display = 'none');
            obyavi.style.display = 'block';
        }, false);
    });

    Array.from(buttonHome).forEach(button => {
        button.addEventListener('click', function(event) {
            Array.from(main).forEach(div => div.style.display = 'none');
            home.style.display = 'block';
            home.insertBefore(tursachka, home.firstChild);
            tursachka.style.height = 'auto';
        });
    });
    arrayFirmi.forEach(firma => {
        var div = document.createElement('div');

        div.classList.add('vsqkaFirma');
        div.style.padding = '30px';
        div.style.height = '150px';
        var img = document.createElement('img');

        img.src = firma.logo;
        img.width = 200;
        img.style.float = 'left';
        var h3 = document.createElement('h3');

        h3.textContent = firma.name;
        h3.style.float = 'left';
        h3.style.marginLeft = '30px';

        var buttonInfo = document.createElement('button');

        buttonInfo.setAttribute('class', 'buttonInfo');
        buttonInfo.setAttribute('content', 'button');
        buttonInfo.innerHTML = 'Още за фирмата';
        buttonInfo.style.float = 'right';
        buttonInfo.style.margin = '5px';

        var buttonObqvi = document.createElement('button');

        buttonObqvi.setAttribute('class', 'buttonObqvi');
        buttonObqvi.setAttribute('content', 'button');
        buttonObqvi.innerHTML = 'Виж всички обяви';
        buttonObqvi.style.float = 'right';
        buttonObqvi.style.margin = '5px';

        div.appendChild(img);
        div.appendChild(h3);
        firmi.appendChild(div);
        div.appendChild(buttonInfo);
        div.appendChild(buttonObqvi);

        buttonInfo.addEventListener('click', function(event) {
            document.location = firma.contacts.website;
        }, false);
    });

    // function za pokazvane na obqvi
    function pokajiObqvi(arrObqvi, container) {
        var container = $('#' + container);
        arrObqvi.forEach(obyava => {
            var div = document.createElement('div');
            div.style.padding = '5px';
            div.classList.add('pag');
            var html = `<table  class='col-md-12 table-obyavi' data-toggle="tooltip" data-placement="right" title="Вид : ${obyava.type}">
                        <tr>
                        <td class="data" width='300px' >${obyava.date}<br>
                        <img width="80" src="assets/images/stars-${obyava.stars}.png" style="margin-left:-4px" /> <br> Направление : ${obyava.category}
                        </td>
                        <td class="text-center" ><h3 id='obyava-name'><a role="button" class="obyavaName " data-toggle="collapse" href="#${obyava.id}" aria-expanded="false" aria-controls="${obyava.id}">${obyava.name}</a></h3>
                        <img src='${obyava.firma.logo}' class='logo-obyava' alt='logo na Imperia' width='150px' height="auto" />
                        </td>
                        </tr>
                        <tr>
                        <td colspan='2'>
                        <div class="collapse" id="${obyava.id}">
                        <div class="well text-center">
                        ${obyava.info}
                        <p class="kandidatstvai"><a id='kandidatstvai_${obyava.id}'  class="button kandidatstvai">Кандидатствай</a></p>
                        <p id="info_${obyava.id}"> </p>
                        </div>
                      </div>
                        </td>
                        </tr>
                     </table>`;

            div.innerHTML = html;

            // div.appendChild(p);
            container.append(div);
            var buttonKandidatstvai = document.getElementById('kandidatstvai_' + obyava.id);

            buttonKandidatstvai.addEventListener('click', function(event) {
                var p = document.getElementById(`info_${obyava.id}`);
                p.innerHTML = '';
                if (userList.currentUser !== null) {
                    if (userList.currentUser.obyavi === undefined) {
                        userList.currentUser.obyavi = [];
                    }
                    var vecheEDobavena = userList.currentUser.obyavi.some(ob => ob.id === obyava.id);
                    if (vecheEDobavena === false) {
                        userList.currentUser.obyavi.push(obyava);
                        p.setAttribute('class', 'text-success')
                        p.innerText = 'Вие успешно кандидатствахте !'
                        buttonKandidatstvai.parentNode.appendChild(p)
                    } else {
                        p.setAttribute('class', 'text-info')
                        p.innerText = 'Вече сте кандидатствали за тази обява!'
                        buttonKandidatstvai.parentNode.appendChild(p)
                    }
                    console.log(userList.currentUser);
                } else {
                    p.setAttribute('class', 'text-warning')
                    p.innerText = 'Моля, първо влезте в профила си !'
                    buttonKandidatstvai.parentNode.appendChild(p)
                }
            });

        });

        if ($('div.my-page-navigation').length > 0) {
            $('div.my-page-navigation').get(0).remove();
        }
        container.paginate({
            limit: 7, // 7 elements per page 
            initialPage: 0, // Start on second page 
            previous: true, // Show previous button 
            // previousText: 'Предишна страница', // Change previous button text 
            next: true, // Show previous button 
            // nextText: 'Следваща страница', // Change next button text 
            first: false,
            last: false,
            optional: true, // Always show the navigation menu 
            onCreate: function(obj) { console.log('Pagination done!'); }, // `onCreate` callback 
            onSelect: function(obj, i) { console.log('Page ' + (i + 1) + ' selected!'); }, // `onSelect` callback 
            childrenSelector: 'div.pag', // Paginate the rows with the `pag` class 
            navigationClass: 'my-page-navigation', // New css class added to the navigation menu 
            pageToText: function(i) { return (i + 1).toString(10); } // Page numbers will be shown on hexadecimal notation 
        });

        $('div.my-page-navigation').addClass('main text-center');

        $('div.my-page-navigation').attr('id', 'pagination');
        $('div#pagination').css('display', 'block');
    }
    var buttonObqvi = document.getElementById('buttonObqvi');

    buttonObqvi.addEventListener('click', function() {
        $('.obiavi').html('');
        pokajiObqvi(vsichkiObqvi, 'obyavi');
        obyavi.insertBefore(a, obyavi.firstChild);
        a.onclick = function() {
            obyavi.insertBefore(tursachka, obyavi.children[1]);
            for (let i = 2; i < obyavi.children.length; i++) {
                obyavi.children[i].classList.add('col-md-10');
            }
            obyavi.removeChild(a);
            tursachka.style.height = obyavi.getBoundingClientRect().height + 'px';
        };
    });

    var buttonObqvi = Array.from(document.getElementsByClassName('buttonObqvi'));

    buttonObqvi.forEach(button => {
        button.addEventListener('click', function() {
            var name = button.parentNode.querySelector('h3').textContent;
            var firma = arrayFirmi.find(f => f.name == name);
            var logo = document.createElement('img');
            var logoDiv = document.createElement('div');

            logo.src = firma.logo;

            logo.id = 'logoPriObqviNaFirmata';

            Array.from(main).forEach(div => div.style.display = 'none');
            obyavi.style.display = 'block';
            var info = document.createElement('h4');

            info.textContent = firma.info;
            info.style.clear = 'both';
            $('.obiavi').html('');
            pokajiObqvi(firma.obqvi, 'obyavi');
            obyavi.firstElementChild.insertBefore(info, obyavi.firstElementChild.firstElementChild);
            obyavi.firstElementChild.insertBefore(logo, obyavi.firstElementChild.firstElementChild);
        });
    });

    // Търсене на обяви
    document.getElementById('buttonTursi').addEventListener('click', function() {
        var place = document.getElementById('place').value;
        var category = Array.from(document.querySelectorAll('input[name="kategoriq"]'));
        var type = Array.from(document.querySelectorAll('input[name="type"]'));
        var dumi = document.getElementById('turnesiDumi').value;
        var searchObqvi = document.getElementById('searchObqvi');
        var obqvi = vsichkiObqvi.filter(function(obqva) {
            if (obqva.place == place) {
                if (category.some(function(c) {
                        if (c.checked && categories[c.value] == obqva.category) {
                            return true;
                        }
                    })) {
                    if (type.some(function(t) {
                            if (t.checked && types[t.value] == obqva.type) {
                                return true;
                            }
                        })) {
                        return obqva;
                    }
                }
            }
        });

        if (dumi) {
            obqvi = obqvi.filter(o => o.name.toLowerCase().indexOf(dumi.toLowerCase()) != -1);
        }

        Array.from(main).forEach(div => div.style.display = 'none');
        $('.obiavi').html('');
        pokajiObqvi(obqvi, 'searchObqvi');
        searchObqvi.style.display = 'block';
        $('#pagination').css('display', 'block');
        a.onclick = function() {
            searchObqvi.insertBefore(tursachka, searchObqvi.children[1]);
            for (let i = 2; i < searchObqvi.children.length; i++) {
                searchObqvi.children[i].classList.add('col-md-10');
            }
            searchObqvi.removeChild(a);
            tursachka.style.height = 'auto';
        };
        searchObqvi.insertBefore(a, searchObqvi.firstChild);
        buttonForSearch = document.getElementById('buttonForSearch');
    });

    $('#search').on('keypress', function(e) {

        if (e.which == 13) {

            var searchWord = this.value.trim().toLowerCase();
            var obqvi = vsichkiObqvi.filter(o => o.name.toLowerCase().indexOf(searchWord) != -1);
            console.log(obqvi);
            $('.obiavi').html('');
            pokajiObqvi(obqvi, 'searchObqvi');
            var searchObqvi = document.getElementById('searchObqvi');
            Array.from(main).forEach(div => div.style.display = 'none');
            searchObqvi.style.display = 'block';
            $('#pagination').css('display', 'block');
            a.onclick = function() {
                searchObqvi.insertBefore(tursachka, searchObqvi.children[1]);
                for (let i = 2; i < searchObqvi.children.length; i++) {
                    searchObqvi.children[i].classList.add('col-md-10');
                }
                searchObqvi.removeChild(a);
                tursachka.style.height = 'auto';
            };
            searchObqvi.insertBefore(a, searchObqvi.firstChild);
            this.value = '';
        }
    })

    if (localStorage.getItem('place') != null) { document.getElementById('place').value = JSON.parse(localStorage.getItem('place')); } else {
        localStorage.setItem('place', JSON.stringify(document.getElementById('place').value));
    }
    document.getElementById('place').onchange = function() {
        localStorage.setItem('place', JSON.stringify(document.getElementById('place').value));
    };

    $('.btn-staj').on('click', function() {
        var stajove = vsichkiObqvi.filter(obqva => obqva.type == 'Стаж');
        $('.obiavi').html('');
        pokajiObqvi(stajove, 'stajove');
        Array.from(main).forEach(div => div.style.display = 'none');
        $('#stajove').css('display', 'block')
    })
});