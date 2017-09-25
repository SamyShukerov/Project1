var arrayFirmi = [];
// Constructor Firma

function Firma(name, logo, adres, telefon, sait) {
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

var vsichkiObqvi = [];
// Constructor Obqva
function Obqva(name, grad, data, info, stars) {
    this.name = name;
    this.info = info;
    this.firma = null;
    this.place = grad;
    this.date = data;
    this.stars = stars;
    this.category = categories[Math.floor(Math.random() * categories.length)];
    this.type = types[Math.floor(Math.random() * types.length)];
    vsichkiObqvi.push(this);
}

var imperia = new Firma('Imperia Online', 'assets/images/imperia_logo.png', ' Бул. “България” 69, ет. 16, Infinity Tower, София, България', '+ 359 [2] 42 33 2 44', 'http://www.imperiaonline.bg');

imperia.addInfo(`Идеята за Империя Онлайн се ражда през 2005 година. Детайлното проучване и изработването на геймплей механиката и програмния код се осъществяват от основателите на играта – Доброслав Димитров, Дизайнер на геймплея, и Мони Дочев, програмист на свободна практика.
На 23.08.2005 официално стартира Ера 1 на Свят 1. От тази паметна дата досега компанията продължава да расте с динамични темпове, създавайки все по-комплексни и иновативни версии на Империя Онлайн, както и други заглавия, разширявайки екипа си всеки месец, повишавайки броя на своите играчи всеки ден, налагайки своето място на картата на онлайн игрите.
Империя Онлайн вече е преминала отвъд определението за независимо гейм студио и сега държи солидни позиции на глобалния гейм пазар, установявайки името си като запазена марка за качество на продукта.`);

var programist = new Obqva('Junior Developer', 'София', '18.09.2017', 'Търсим си junior, който да има високо IQ, желание за работа и развитие и да умее да прави вкусно и горещо кафе', 4);

imperia.addObqva(programist);


var upnetix = new Firma('UpnetiX', 'assets/images/upnetix_logo.png', ' Бул. “България” 69, ет. 16, Infinity Tower, София, България', '+359 896 665 999', 'http://upnetix.com');

upnetix.addInfo(`We are passionate app and web users, seeking perfection, surrounded by both startup & enterprise culture, constantly expanding our skill set and technology coverage. Our team includes seasoned developers, brilliant designers, high-demanding quality engineers as well as rising IT stars, working side by side with our accomplished project leaders. Together we create synergies of productivity and creativity which bring satisfaction to our clients and ourselves. We continually build upon this base of experience and technical expertise, so that we can transform complex business problems into elegant solutions`);

var sekretarka = new Obqva('Oficce manager', 'Варна', '20.09.2017', 'Tursim si opitna sekretarka, koqto da poddurja reda i disciplinata v ofisa', 3);

upnetix.addObqva(sekretarka);


var nemetschek = new Firma('Nemetschek', 'assets/images/nemetschek_logo.png', ' Ул. "Индустриална" 11, Василев бизнес център, София, България', '+359 2 4210900', 'https://www.nemetschek.bg');

nemetschek.addInfo(`Nemetschek Bulgaria is a creative lab for close to 200 professionals.
Here we create, we laugh, we collaborate. We invest our skills, knowledge and talent in developing software solutions and services that advance the present.
For 15 years we learned how to be proactive, how to be good at what we do and how to build trust in both – our people and our partners.
What we didn’t change is our family attitude.
We are geeks.
We are friends.
We are team.
We are those wizards who facilitate your life.
Looking forward to meet other people with creative minds, enthusiasm and vision to join us in employing ingenuity to develop what’s new, what’s next and what best serves our customers’ needs.`);

var programenDirektor = new Obqva('Programen direktor', 'София', '21.09.2017', 'Tursim losh direktor, koito shte vuzlaga na podchinenite si mnogo zadachi', 5);

nemetschek.addObqva(programenDirektor);

var trader = new Firma('Trader.bg', 'assets/images/Traderbg.png', 'София 1756, ул. „Лъчезар Станчев” № 3 Litex Tower, ет. 10', '(+359) 2 448 48 50', 'https://www.trader.bg/bg');

trader.addInfo(`Trader.bg е иновативна уеб платформа за търговия, която осигурява бърз и лесен достъп до световните финансови пазари на начинаещи и професионални трейдъри. Услугите ни се предоставят от регулирания в Европейския съюз брокер „Авус Капитал“. Нашата платформа се ползва от над 200 000 активни трейдъри в над 65 държави, които инвестират в 750 различни финансови инструмента: валути, стоки, акции и индекси.`);

var turgovec = new Obqva('Търговец', 'Пловдив', '15.09.2017', 'Търсим си търговец, който ще извършва сделки на територията на цялата страна', 5);

trader.addObqva(turgovec);

var softwareGroup = new Firma('Software Group', 'assets/images/softwareGroup.png', 'гр. София, бул. „Цариградско шосе“ 115', '02 923 1783', 'http://www.softwaregroup-bg.com/');

softwareGroup.addInfo(`Software Group is a global technology company that is specialized in delivery channel and integration solutions for institutions that provide financial services. We help financial service providers digitize their business and successfully go through the process of digital transformation, extend their outreach and improve operational efficiency. We take financial inclusion at heart and we have a social mission hardcoded in our DNA - we innovate for a global economy that includes everyone.`);

var hr = new Obqva('HR', 'Бургас', '16.09.2017', 'Търсим човек, който умее да прави добри психологически профили на кандидатите за работа', 3);

softwareGroup.addObqva(hr);

var hedgeHog = new Firma('Hedgehog', 'assets/images/hedgehog_ready.png', 'София, пл. "Папа Йоан Павел II", Бизнес център България 2000, ет.5', '087 8547269', 'https://www.hhog.com/');

hedgeHog.addInfo(`Since launching in 2007, Hedgehog has grown to 4 offices in North America and Europe and twice been named to the Inc. 5000 list of fastest-growing companies in America.  We design and engineer high performance, multi-channel digital marketing platforms that position clients for growth and success.`);

var projectManager = new Obqva('Project Manager', 'София', '22.09.2017', 'Търсим специалст в областта, който има много опит и е практикувал поне 2 години в чужбина', 5);

hedgeHog.addObqva(projectManager);