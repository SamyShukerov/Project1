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

const generatorId = () => {
    let id = 0;

    return () => id++;
};

const obyavaIdGenerator = generatorId();

function Obqva(name, grad, data, info, stars) {
    this.name = name;
    this.info = info;
    this.firma = null;
    this.place = grad;
    this.id = obyavaIdGenerator();
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

var upnetix = new Firma('UpnetiX', 'assets/images/upnetix_logo.png', ' Бул. “България” 69, ет. 16, Infinity Tower, София, България', '+359 896 665 999', 'http://upnetix.com');

upnetix.addInfo(`We are passionate app and web users, seeking perfection, surrounded by both startup & enterprise culture, constantly expanding our skill set and technology coverage. Our team includes seasoned developers, brilliant designers, high-demanding quality engineers as well as rising IT stars, working side by side with our accomplished project leaders. Together we create synergies of productivity and creativity which bring satisfaction to our clients and ourselves. We continually build upon this base of experience and technical expertise, so that we can transform complex business problems into elegant solutions`);

var regPredstavitel = new Obqva('Регионален представител', 'Пловдив', '06.10.2017', `<strong>Подходящият кандидат за позицията притежава:</strong><br><br>
− Опит в областта на активното търсене и привличане на клиенти - 2 години минимум; <br>
− Висше образование;<br>
− Oпит във воденето на преговори и презентации;<br>
− Високо ниво на вътрешна мотивация, готовност и желание за активни продажби;<br>
− Свидетелство за управление на МПС.`, 5);

var seniorJAVA = new Obqva('Senior JAVA Developer', 'Пловдив', '27.09.2017', `Senior JAVA Developer
Talent Hunter has been a trusted recruitment partner to the IT and Telecom industry since 2008. We ensure that our candidates meet our clients at the right time and spot of their career development. We will be happy to accompany you on this professional quest!<br><br>

<em>"To raise new questions, new possibilities, to regard old problems from a new angle, requires creative imagination and marks real advance in science."</em> — Albert Einstein<br><br>

Our client is multinational software development company, leader in its industry field, bringing new R&D Software Engineering Team in Sofia. On behalf of them, we are currently looking for experienced Java Developers to become part of their newly formed R&D Team. The focus of the development is creation of new web based systems and back-end engines, deployed in Cloud (VMWare and AWS), using NoSQL Data Basis.`, 5);

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

var opticsEngineer = new Obqva('Optics Engineer', 'Варна', '30.09.2017', `Your responsibilities:
As part of our Engineering team you will be responsible for supporting the project teams through the entire product lifecycle by providing expertise in three main areas: <br><br>
•	Illumination<br>
•	optical measurements<br>
•	display technologies.<br><br>
<strong>Tasks will include:</strong><br><br>
•	Support the Optical Experts for:<br>
-	the choice of the best lighting architectures <br>
-	designing and justifying the lighting solutions for the different products lines (instrument clusters, displays, clocks, HUD …) <br>
-	modelling and simulating the optical components and solutions (simulation tool is Light Tools);<br>
•	Perform optical measurements and maintain the optical laboratory; <br>
•	Support the Display Experts for - characterization and test of the displays `, 5);

var trader = new Firma('Trader.bg', 'assets/images/Traderbg.png', 'София 1756, ул. „Лъчезар Станчев” № 3 Litex Tower, ет. 10', '(+359) 2 448 48 50', 'https://www.trader.bg/bg');

trader.addInfo(`Trader.bg е иновативна уеб платформа за търговия, която осигурява бърз и лесен достъп до световните финансови пазари на начинаещи и професионални трейдъри. Услугите ни се предоставят от регулирания в Европейския съюз брокер „Авус Капитал“. Нашата платформа се ползва от над 200 000 активни трейдъри в над 65 държави, които инвестират в 750 различни финансови инструмента: валути, стоки, акции и индекси.`);

var representative = new Obqva('Customer Service Representative', 'София', '23.09.2017', `<strong>ESSENTIAL JOB DUTIES AND RESPONSIBILITIES:</strong><br><br>
Respond to and resolve customers' inquiries by investigating all issues and gathering all necessary information within multiple billing and customer management systems.<br>
Effectively communicate Hostway’s policies and procedures relating to products and services.<br>
Research complex customer issues and process billing adjustments by entering credits or other adjustments into the records for that customer account.<br>
Make outgoing collection calls when necessary or required.<br>
Рeport issues affecting multiple customers to management.<br>
Maintain departmental standards regarding courtesy and productivity.<br>
Eliminate customer confusion or frustration using empathy and consideration to reach amicable solutions.<br>
Take ownership of customer concerns and issues and ensure timely resolution.`, 3);

var softwareGroup = new Firma('Software Group', 'assets/images/softwareGroup.png', 'гр. София, бул. „Цариградско шосе“ 115', '02 923 1783', 'http://www.softwaregroup-bg.com/');

softwareGroup.addInfo(`Software Group is a global technology company that is specialized in delivery channel and integration solutions for institutions that provide financial services. We help financial service providers digitize their business and successfully go through the process of digital transformation, extend their outreach and improve operational efficiency. We take financial inclusion at heart and we have a social mission hardcoded in our DNA - we innovate for a global economy that includes everyone.`);

var developmentManager = new Obqva('Total War Development Manager', 'Варна', '05.10.2017', `The successful candidate will assist with the day-to-day and week to week process of managing a cross discipline game team. The  Development Manager/ Producer will be able to provide support to keep the project moving forward, and the team positive, informed and focused whilst keeping momentum. The role will also require working with the project leads to generate the project schedule, identify dependencies, solve problems and prioritise work.<br>

Key Responsibilities<br>
Drive project planning for the team. Facilitate the planning and estimation process across the team to generate fully scoped plans for upcoming phases of the project.<br>
Drive, maintain and update the development schedule.<br>
Manage and motivate the development team, ensuring that milestones are adhered to, tech and decision pipelines remain unblocked and if changes to dates are incurred, all relevant parties are notified and the schedule adapted accordingly.<br>
Communicate progress on current and upcoming milestones, providing detailed analysis on team performance, risks and areas for improvement.`, 5);

var hedgeHog = new Firma('Hedgehog', 'assets/images/hedgehog_ready.png', 'София, пл. "Папа Йоан Павел II", Бизнес център България 2000, ет.5', '087 8547269', 'https://www.hhog.com/');

hedgeHog.addInfo(`Since launching in 2007, Hedgehog has grown to 4 offices in North America and Europe and twice been named to the Inc. 5000 list of fastest-growing companies in America.  We design and engineer high performance, multi-channel digital marketing platforms that position clients for growth and success.`);

var angularJSEngineer = new Obqva('Angular Java Script Development Engineer', 'София', '22.09.2017', `<strong>Your daily job will include:</strong><br><br>
- Working in an Agile environment, where team work is always recognized and appreciated. <br>
- Design, develop and unit test solutions of any size or complexity<br>
- Produce clean code <br>
- Participate in front end/UI development which follows best industry standards in terms of user experience. <br>
- Become part of a fast-moving team where quality always comes first<br>
- Understand all of Fourth’s products in detail, how they are integrated with each other, and their business value<br>
- Diagnose defects, and provide effective solutions.<br>
- Provide development estimates, be a part of planning sessions<br>
- Provide feedback to help with continuous process improvement.<br>
- Understand and support the release management process<br>
- Continuous learning and implementation of new technologies is a must.`, 5);

var seniorPHP = new Obqva('Senior PHP Developer', 'Пловдив', '24.09.2017', `If you want to feel happy about what you do and the impact that you are making, new and exciting challenges motivate you, and you share our passion for quality and customer satisfaction, then we have a place for you to unfold your talent.

Due to the rapid growth and expansion of company operations, currently we are looking for more people to join our team.<br><br>


<strong>Responsibilities & Expectations</strong><br><br>

Integrate 3rd party APIs<br>
Carry out various development tasks as required by the company<br>
Create and maintain internal and support documentation<br>
System optimization for optimum user experience<br>
Troubleshoot technical issues that may arise<br>
Work on multiple projects in a timely manner<br>
Requirements<br>
3+ years experience with Linux, PHP, Apache, MYSQL, jQuery, javascript and AJAX without reliance on CMS<br>
Good knowledge of RESTful API design and implementation<br>
Experience with software versioning systems and agile methodologies<br>
Driven, passionate individual who is able to work both in a team and individually<br>
Strong knowledge of PHP web frameworks: CodeIgniter<br>
Understanding of MVC design patterns<br>
Knowledge of object oriented PHP programming<br>
Understanding accessibility and security compliance<br>
Understanding fundamental design principles behind a scalable application<br>
Familiarity with limitations of PHP as a platform and its workarounds<br>
Creating database schemas that represent and support business processes<br>
Experience from a Multinational company would be considered as advantage`, 5);

var stroitelenInjener = new Obqva('Строителен инженер и проектант', 'Бургас', '26.09.2017', `
СТРОИТЕЛЕН ИНЖЕНЕР - ПРОЕКТАНТ
Фирма КАСТЕЛО ПРИКАСТ ООД, специализирана в проектиране, производство и монтаж на конструкции от сглобяеми стоманобетонови елементи, търси да назначи:<br><br>

<em>СТРОИТЕЛЕН ИНЖЕНЕР - ПРОЕКТАНТ</em><br><br>

<strong>ОСНОВНИТЕ ВИ ЗАДЪЛЖЕНИЯ ще са свързани с:</strong><br><br>
- Интензивно изготвяне на идейни оферти<br>
- Изготвяне на технически и екзекутивни проекти по част конструктивна, изготвяне на количествени сметки<br>
- Подготовка и окомплектоване на техническата документация <br>
- Позицията предполага и авторски надзор по време на производството на сглобяемите стоманобетонови елементи, както и авторски надзор чрез присъствие по време на монтаж<br>
- Ежедневна комуникация с останалите инженерни звена – производство и монтаж и решаване на оперативни проблеми<br>
- Комуникация с подизпълнители, проектанти, ТК, надзор<br><br>

<strong>НАШИТЕ ИЗИСКВАНИЯ:</strong><br><br>
- Висше строително-инженерно образование /ССС/<br>
- Пълна проектантска правоспособност с минимум 5 (пет) години активен проектантски опит<br>
- Отлични практически умения за работа с AUTOCAD, SAP2000, TOWER или друг изчислителен софтуер, както и умения за работа с MS Office<br>
- Отлично познаване на нормите за проектиране и конструктивни еврофондове, стандартите и изискванията за изготвяне на технически проекти<br>
- Технически умения за използване на стандарти, каталози, техническа и технологична документация и специализирана литература<br>
- Самообладание и професионализъм в стресови ситуации<br>
- Владеене на английски език<br>
- Владеенето на италиански език би било предимство`, 3);

var QAEngineer = new Obqva('QA Engineer', 'Пловдив', '16.09.2017', `<strong>Technical knowledge and skills</strong><br><br>

• Keen eye for detail;<br>
• Good observational skills;<br>
• Super organisational skills;<br>
• Practical, level headed and ability to prioritise;<br>
• 100% focus on Client satisfaction and willingness to go the extra mile;<br>
• Flexible with the ability to work independently and as part of a team;<br>
• Strong interpersonal, written and verbal communication skills;<br>
• A positive, ‘can-do’ attitude, hardworking and dedicated <br>
• Computer literacy (Mac desirable but not essential);<br>
• The ability to react and respond quickly and effectively;`, 3);

var systemAdministrator = new Obqva('System Administrator', 'София', '21.09.2017', `The person on this position will be responsible for the internal IT infrastructure. He/she will have to analyze the current software and hardware configurations in the AXS offices, then make a plan on how to improve them and after that proceed with implementing the solution. This person is expected to work proactively with teammates from all AXS Marine offices, providing them system administration support and guidance as well as resolving their software/hardware issues.<br><br>

<strong>RESPONSIBILITIES</strong><br><br>
•Investigate and resolve internal user problems with Office 365 and other software<br>
•Set up computers, software and peripheral equipment for new employees<br>
•Set up users on network and provide user name and password access to specified systems<br>
•Create and improve configurations of Office 365 and Windows<br>
•Organize and update the GPO policies for different departments<br>
•Train users on good security practices, different software usage, etc.<br>
•Travel to other offices when needed to provide support and training to employees on site<br>
•Maintain office equipment and resolve hardware issues<br>
•Diligent to ensure all tickets are up to date and to help others in the team<br>
•Follow up the status of problems on behalf of the user and communicate progress in a timely manner`, 5);

var technik = new Obqva('Специалист техническа поддръжка', 'Варна', '20.09.2017', `Предлагаме ти интересна и предизвикателна работа в най-голямата хостинг компания в България. Ако технологиите са твоята страст, умееш да комуникираш с клиенти и си винаги готов да решиш всеки казус до края - може би ти си точният човек!<br><br>

При нас ще имаш възможност за професионално развитие, като всеки ден ще научаваш нещо ново.<br>
Очакват те фирмено обучение и атрактивно заплащане.<br><br>

<strong>От теб очакваме:</strong><br><br>
- Да имаш завършено средно образование.<br>
- Да притежаваш компютърна грамотност.<br>
- Да познаваш основните имейл и FTP клиенти и уеб браузъри.<br>
- Да умееш да комуникираш с клиенти.<br>
- Да познаваш отлично предлаганите от компанията услуги.<br>
- Да си зареден с желание за професионално развитие и работа в екип.<br>
- Готовност за работа на смени.`, 3);

var serviceDeskEngineer = new Obqva('Service Desk Engineer', 'Пловдив', '19.09.2017', `<strong>Experience Required:</strong><br><br>

MS Office – Intermediate<br>
Awareness of ITSM tools (Siebel, Remedy, ServiceNow, Clarify, HEAT)<br>
12+ months experience in Customer Service/Contact Centre/Help Desk/Service Desk role<br>
12+ months in a process driven organisation<br>
Experience working in a multi-cultural/international environment<br>
General ICT industry understanding<br>
High School Degree in IT related discipline<br>
BSc/BA Degree in ICT/Telecommunications/Business Administration or similar discipline (either complete or in-progress)<br>
CCENT knowledge, Network+ or equivalent (complete or in-progress)`, 3);

var obslujvaneNaKlienti = new Obqva('Специалист обслужване на клиенти', 'София', '30.09.2017', `Ако Вие имате:
Висше икономическо образование
Опит в работа с клиенти и/или плащания в банковата сфера (предимство)
Умения за работа с компютър (MS Office)
Добри комуникативни умения
Добро владеене на английски език (предимство)
И искате да:<br><br>
• Продавате продуктите, които банката предлага за физически и юридически лица<br>
• Приемате, проверявате и обработвате клиентски документи и нареждания във връзка с откриване на сметки и транзакции<br>
• Поддържате досиетата на клиентите<br>
• Работите на каса с национална и чуждестранни валути`, 4);

var koordinator = new Obqva('Координатор по сигурността и опасни товари', 'Бургас', '10.09.2017', `<strong>Основни отговорности:</strong><br><br>

• Да координира и контролира изпълнението на процесите, свързани със сигурността и да гарантира, че обектите са подсигурени 24 часа в денонощието, 7 дни в седмицата според фирмените изисквания;<br>
• Да извършва обучения по сигурност, както на служителите и подизпълнителите на ТNT, така и на персонала на външни фирми, подсигуряващи сигурността;<br>
• Да препоръчва и съгласува с мениджъра по сигурността подобрения относно гарантирането на сигурността и въвеждането им в практиката;<br>
• Да гарантира техническата изправност и правилната експлоатация на оборудването за проверка на сигурността - Рентген (X-Ray) и Устройство за откриване на експлозиви (ETD);<br>
• Да подсигурява записи на телефонните обаждания (където е приложимо), както и да актуализира информацията в системата за управление на инциденти, свързани със сигурността и да отразява предприетите действия при всеки инцидент;<br>
• Да подсигури бързо и прецизно разследване и акуратна обратна връзка в случаи на загуби, повреди и инциденти по сигурността и транспорта на опасни товари;<br>
• Да координира и контролира познаването и прилагането на процедурите за спешни действия при бедствия, аварии и др.;<br>
• Да контролира правилното функциониране / поддръжка на специалните системи за наблюдение и изпълнение на специализираните фирмени програми за сигурност;<br>
• Да съдейства в разследвания и да сътрудничи на мениджъра по сигурността в комуникацията с правоприлагащите органи;<br>
• Да ескалира до съответните мениджъри наличие или предпоставки за наличие на евентуални рискове за сигурността като например проблеми с контрола, стачки и др. с цел подпомагане предприемането на превантивни действия за избягване на загуби, повреди, кражби и др.;<br>
• Да подсигури акуратни и навремено изготвени детайлни отчети по сигурността и транспорта на опасни товари;<br>
• Да изготвя и поддържа актуална Програма за сигурност, свързана с лицензите на фирмата, както и да следи за нейното спазване;<br>
• Да следи за провеждането на обучения и да ръководи корпоративния процес по одобрение на нови клиенти за транспортиране на Опасни товари.`, 3);

var GlobalProjectEngineer = new Obqva('Global Project Engineer', 'Пловдив', '28.09.2017', `Key Deliverables

<em>Coverage of Vehicles In Operation / Sensors In Operation (VIO / SIO)</em><br><br>
<strong>Requirements:</strong><br><br>

Strong understanding of fundamental project coordination/management, process understanding and mechanical engineering flexibly in unfamiliar situations;<br>
At least 3 years of project management and/ or mechanical design engineering experience;<br>
BS/MS/PhD in Mechanical Engineering,<br>
Project Management or similar;<br>
Excellent English language skills - verbal and written;<br>
Ability to communicate complex concepts clearly;`, 5);

var programist = new Obqva('Junior Developer', 'София', '18.09.2017', `<strong>We offer you the chance to:</strong><br><br>

• Pursue a promising career with a stable German IT company;<br>
• Use state-of-the-art technologies and develop complex business software;<br>
• Learn about the exciting world of supply chains and systems that drive the flow of assets around the world;<br>
• Solve challenging problems, involving business processes and IT solutions;<br>
• Gain international work experience, receive training and development opportunities;<br>
• Be part of a growing team of fun, high-quality technical consultants who seek excellence through innovation and expertise in what they do;<br>
• With more than 400 colleagues worldwide and 30 in Buglaria, you will make an immediate impact on Westernacher and the projects you will be involved!`, 4);

var operatorCallCenter = new Obqva('Оператор КОЛ Център', 'Варна', '29.09.2017', `<strong>Ако вие притежавате:</strong><br><br>

- Свободно владеене на Английски, Руски, Турски, Испански или Италиански език;<br>
- Ясна дикция и приятен глас;<br>
- Отлични комуникативни и презентационни умения; <br>
- Желание за развитие;<br>
- Умения за убеждаване и ефективна комуникация с различни типове клиенти;<br>
- Опит с търгуване на финансови инструменти или в кол център;<br><br>

<strong>То ние ще Ви предложим:</strong><br><br>

- Приятна обстановка и сплотен екип, на който да разчитате;<br>
- Възможности за развитие;<br>
- Професионално обучение;<br>
- Твърда заплата + бонусна система;<br>
- Трудов договор;`, 5);

var supportSpecialist = new Obqva('BI Support Specialist', 'Бургас', '03.10.2017', `<strong>We are looking for someone who has:</strong><br><br>
• College or University degree in Information Technology, Economics or Engineering;<br>
• Experience with BI projects /consulting and implementation/;<br>
• Experience in working with Excel and formulas /Pivot tables and Vlookup - required/;<br>
• Strong problem solving skills and analytical thinking;<br>
• Fluency in English (at least C1);<br>
• Good understanding of one or many of BI platforms (Qlik, Tableau, Power BI);<br>
• Knowledge in ETL processing; MS stack: SQL Server, Power BI, SSAS, SSIS, SSRS - would be considered as a strong advantage;
`, 3);

var SeniorGraphicDesigner = new Obqva('Senior Graphic Designer', 'Бургас', '30.09.2017', `2+ years’ experience as a graphic designer<br>
Pixel-perfect eagle eye for details<br>
High-level spoken and written English<br>
Very good knowledge of web standards<br>
Extensive experience in creating print materials<br>
Excellent Adobe Photoshop & Adobe Illustrator skills<br>
Working with Photoshop layers, layer comps, smart objects, layer masks and vector masks<br>
<u>A strong online portfolio - a MUST!!!</u>`, 3);

var cDeveloper = new Obqva('C /C++ Developer', 'Пловдив', '15.09.2017', `<strong>Your Responsibilities</strong><br><br>
Develop software solutions using C/C++ in an embedded environment<br>
Improve the architecture and optimize the performance of real-time embedded systems<br>
Cooperate with top experts of the field<br>
Work with safety-critical automotive systems<br>
Design and deploy high quality, scalable code<br>
Design and develop integrations between our applications and other systems as may be required by customers<br>
Troubleshoot and resolve problems<br>
20% traveling in EU Countries.<br><br>

<strong>Required skills/experience</strong><br><br>

<u>The ideal candidate for this position will have:</u><br><br>
2+ years using C and C++<br>
Microcontroller experience<br>
Interest in signal processing, image processing, computer vision and deep learning<br>
Experience with embedded software development<br>
Experience developing in an Agile software development environment<br>
Object oriented design skills and experience using design patterns<br>
Understanding of the Agile Software Development (SCRUM)`, 5);

hedgeHog.addObqva(angularJSEngineer);
upnetix.addObqva(koordinator);
hedgeHog.addObqva(serviceDeskEngineer);
nemetschek.addObqva(SeniorGraphicDesigner);
imperia.addObqva(programist);
trader.addObqva(supportSpecialist);

softwareGroup.addObqva(QAEngineer);
imperia.addObqva(seniorPHP);
nemetschek.addObqva(operatorCallCenter);
softwareGroup.addObqva(developmentManager);

trader.addObqva(cDeveloper);

hedgeHog.addObqva(stroitelenInjener);

nemetschek.addObqva(systemAdministrator);
trader.addObqva(representative);
softwareGroup.addObqva(GlobalProjectEngineer);
nemetschek.addObqva(opticsEngineer);

upnetix.addObqva(technik);
hedgeHog.addObqva(regPredstavitel);
upnetix.addObqva(seniorJAVA);
imperia.addObqva(obslujvaneNaKlienti);
