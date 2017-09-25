$(function() {
    var form = document.getElementById('tursachka');

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

            name.innerHTML = '<span class="glyphicon glyphicon-user"></span>  <span style="cursor:pointer">' + user + '</span>';
            rr.parentNode.appendChild(name);
            rr.parentNode.removeChild(rr);
            login.parentNode.removeChild(login);
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

    var main = Array.from(document.getElementsByClassName('main'));
    var firmi = document.getElementById('firmi');
    var buttonFirmi = Array.from(document.getElementsByClassName('buttonFirmi'));
    var obyavi = document.getElementById('obyavi');
    var buttonObyavi = Array.from(document.getElementsByClassName('buttonObyavi'));
    var home = document.getElementById('home');
    var buttonHome = document.getElementsByClassName('buttonHome');
    var buttonFAQ = document.getElementById('vuprosi');
    var faq = document.getElementById('faq');

    buttonFAQ.addEventListener('click', function() {
        main.forEach(div => div.style.display = 'none');
        faq.style.display = 'block';
    });

    buttonFirmi.forEach(button => {
        button.addEventListener('click', function(event) {
            main.forEach(div => div.style.display = 'none');
            firmi.style.display = 'block';
        }, false);
    });

    buttonObyavi.forEach(button => {
        button.addEventListener('click', function(event) {
            main.forEach(div => div.style.display = 'none');
            obyavi.style.display = 'block';
        }, false);
    });

    Array.from(buttonHome).forEach(button => {
        button.addEventListener('click', function(event) {
            main.forEach(div => div.style.display = 'none');
            home.style.display = 'block';
        });
    });
    arrayFirmi.forEach(firma => {
        var div = document.createElement('div');

        div.classList.add('vsqkaFirma');
        div.style.padding = '30px';
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
        obyavi.innerHTML = '';
        arrObqvi.forEach(obyava => {
            var div = document.createElement('div');

            div.style.padding = '5px';

            var html = `<table id='table-obyavi'>
                
                        <td width='80px'>${obyava.date}<br>
                        <p><img src='assets/images/stars-${Math.round(obyava.stars)}.jpg' alt='golden stars' width='auto' height='15px' /></p>
                        </td>
                    
                        <td width='850px'><h3 id='obyava-name'>${obyava.name}</h3>
                        <img src='${obyava.firma.logo}' id='logo-obyava' alt='logo na Imperia' width='150px' height="auto" />
                        </td>
           
              
                     </table>`;

            div.innerHTML = html;

            // div.appendChild(p);
            container.appendChild(div);
        });
    }
    var buttonObqvi = document.getElementById('buttonObqvi');

    buttonObqvi.addEventListener('click', function() {
        pokajiObqvi(vsichkiObqvi, obyavi);
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

            main.forEach(div => div.style.display = 'none');

            obyavi.style.display = 'block';
            var info = document.createElement('h4');

            info.textContent = firma.info;
            info.style.clear = 'both';

            pokajiObqvi(firma.obqvi, obyavi);
            obyavi.firstElementChild.insertBefore(info, obyavi.firstElementChild.firstElementChild);
            obyavi.firstElementChild.insertBefore(logo, obyavi.firstElementChild.firstElementChild);
        });
    });
});
