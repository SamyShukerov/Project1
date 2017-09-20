$(function() {
    var form = document.getElementById('tursachka');

    form.addEventListener('click', function(e) {
        if (e.target.type == 'radio') {
            let place = document.getElementById('placeP');
            let span = document.createElement('span');

            span.textContent = '  (' + e.target.value + ')';
            console.log(place.children.length);
            if (place.children.length == 1) {
                place.appendChild(span);
            } else { place.replaceChild(span, place.lastChild); }
        }
    });
    var arrayFirmi = [];
    // Constructor Firma

    function Firma(name, logo, adres, telefon, sait, id) {
        this.name = name;
        this.info = '';
        this.logo = logo;
        this.obqvi = [];
        this.contacts = {
            place: adres,
            phone: telefon,
            website: sait
        };
        arrayFirmi.push(this);
    }
    Firma.prototype.addObqva = function(obqva) {
        if (obqva instanceof Obqva) {
            this.obqvi.push(obqva);
            obqva.firma = this;
        }
    };
    Firma.prototype.addInfo = function(text) {
        this.info = text;
    };
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

    var imperia = new Firma('Imperia Online', 'images/imperia_logo.png', ' Бул. “България” 69, ет. 16, Infinity Tower, София, България', '+ 359 [2] 42 33 2 44', 'http://www.imperiaonline.bg');

    imperia.addInfo(`Идеята за Империя Онлайн се ражда през 2005 година. Детайлното проучване и изработването на геймплей механиката и програмния код се осъществяват от основателите на играта – Доброслав Димитров, Дизайнер на геймплея, и Мони Дочев, програмист на свободна практика.
    На 23.08.2005 официално стартира Ера 1 на Свят 1. От тази паметна дата досега компанията продължава да расте с динамични темпове, създавайки все по-комплексни и иновативни версии на Империя Онлайн, както и други заглавия, разширявайки екипа си всеки месец, повишавайки броя на своите играчи всеки ден, налагайки своето място на картата на онлайн игрите.
    Империя Онлайн вече е преминала отвъд определението за независимо гейм студио и сега държи солидни позиции на глобалния гейм пазар, установявайки името си като запазена марка за качество на продукта.`);

    var programist = new Obqva('Junior Developer', 'Sofia', new Date(), 'Търсим си junior, който да има високо IQ, желание за работа и развитие и да умее да прави вкусно и горещо кафе');

    imperia.addObqva(programist);

    var upnetix = new Firma('UpnetiX', 'images/upnetix_logo.png', ' Бул. “България” 69, ет. 16, Infinity Tower, София, България', '+359 896 665 999', 'http://upnetix.com');

    upnetix.addInfo(`We are passionate app and web users, seeking perfection, surrounded by both startup & enterprise culture, constantly expanding our skill set and technology coverage. Our team includes seasoned developers, brilliant designers, high-demanding quality engineers as well as rising IT stars, working side by side with our accomplished project leaders. Together we create synergies of productivity and creativity which bring satisfaction to our clients and ourselves. We continually build upon this base of experience and technical expertise, so that we can transform complex business problems into elegant solutions`);

    var sekretarka = new Obqva('Oficce manager', 'Varna', new Date(), 'Tursim si opitna sekretarka, koqto da poddurja reda i disciplinata v ofisa');

    upnetix.addObqva(sekretarka);

    var nemetschek = new Firma('Nemetschek', 'images/nemetschek_logo.png', ' Ул. "Индустриална" 11, Василев бизнес център, София, България', '+359 2 4210900', 'https://www.nemetschek.bg');

    nemetschek.addInfo(`Nemetschek Bulgaria is a creative lab for close to 200 professionals.
    Here we create, we laugh, we collaborate. We invest our skills, knowledge and talent in developing software solutions and services that advance the present.
    For 15 years we learned how to be proactive, how to be good at what we do and how to build trust in both – our people and our partners.
    What we didn’t change is our family attitude.
    We are geeks.
    We are friends.
    We are team.
    We are those wizards who facilitate your life.
    Looking forward to meet other people with creative minds, enthusiasm and vision to join us in employing ingenuity to develop what’s new, what’s next and what best serves our customers’ needs.`);

    var programenDirektor = new Obqva('Programen direktor', 'Sofia', new Date(), 'Tursim losh direktor, koito shte vuzlaga na podchinenite si mnogo zadachi');

    nemetschek.addObqva(programenDirektor);

    // Constructor for User (Login)
    var potrebiteli = [];

    function User(name, password) {
        this.name = name;
        this.pass = password;
        potrebiteli.push(this);
    }
    var sami = new User('samy_', 123456);
    var rali = new User('rali', 123456);
    // registraciq

    $('#regBtn').click(function() {
        var user = document.getElementById('regUser').value;
        var pass = document.getElementById('regPass').value;

        console.log(user + '  ' + pass);
        if (user && pass && pass.length > 5) {
            new User(user, pass);
            document.getElementById('regP').textContent = 'Вие успешно се регистрирахте !';
        } else {
            document.getElementById('regP').textContent = 'Невалиден потребител и/или парола';
        }
    });

    // vhod
    $('#vhodBtn').click(function() {
        var user = document.getElementById('vhodUser').value;
        var pass = document.getElementById('vhodPass').value;
        var vhod = potrebiteli.find(potrebitel => {
            return potrebitel.name == user && potrebitel.pass == pass;
        });

        if (vhod) {
            document.getElementById('vhodP').textContent = 'Вие успешно влезнахте в своя профил !';
            var login = document.getElementById('login').parentNode;
            var rr = document.getElementById('register');
            var name = document.createElement('a');

            name.innerHTML = '<span class="glyphicon glyphicon-user"></span>  <span style="cursor:pointer">' + user + '</span>';
            rr.parentNode.appendChild(name);
            rr.parentNode.removeChild(rr);
            login.parentNode.removeChild(login);
        } else {
            document.getElementById('vhodP').textContent = 'Невалиден потребител и/или парола';
        }
    });
    // ______----------------------______________________-----------------------

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

        buttonInfo.setAttribute('id', 'buttonInfo');
        buttonInfo.setAttribute('content', 'button');
        buttonInfo.innerHTML = 'Още за фирмата';
        buttonInfo.style.float = 'right';
        buttonInfo.style.margin = '5px';

        var buttonObqvi = document.createElement('button');

        buttonObqvi.setAttribute('id', 'buttonObqvi');
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

    arrayFirmi.forEach(firma => {
        firma.obqvi.forEach(obyava => {
            var div = document.createElement('div');
            // var p = document.createElement('p');

            var html = `<table border='5'>
                <tr>
                    <td width='550px'>${obyava.date}</td>
                        <td width='550px'>${obyava.name}</td>
                        <td width='550px'><img src='${firma.logo}' alt='logo na Imperia' width='60px' height="auto" /></td>
                </tr>
                <tr>
                    <td colspan='3'>
                        <p>${obyava.info}</p>
                    </td>
                </tr>
            </table>`;

            div.innerHTML = html;

            // div.appendChild(p);
            obyavi.appendChild(div);
        });
    });
});
