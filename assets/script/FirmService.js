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

var programist = new Obqva('Junior Developer', 'София', '18.09.2017', `We offer you the chance to:

• Pursue a promising career with a stable German IT company;
• Use state-of-the-art technologies and develop complex business software;
• Learn about the exciting world of supply chains and systems that drive the flow of assets around the world;
• Solve challenging problems, involving business processes and IT solutions;
• Gain international work experience, receive training and development opportunities;
• Be part of a growing team of fun, high-quality technical consultants who seek excellence through innovation and expertise in what they do;
• With more than 400 colleagues worldwide and 30 in Buglaria, you will make an immediate impact on Westernacher and the projects you will be involved!`, 4);

var seniorPHP = new Obqva('Senior PHP Developer', 'Пловдив', '24.09.2017', `If you want to feel happy about what you do and the impact that you are making, new and exciting challenges motivate you, and you share our passion for quality and customer satisfaction, then we have a place for you to unfold your talent.

Due to the rapid growth and expansion of company operations, currently we are looking for more people to join our team.


Responsibilities & Expectations

Integrate 3rd party APIs
Carry out various development tasks as required by the company
Create and maintain internal and support documentation
System optimization for optimum user experience
Troubleshoot technical issues that may arise
Work on multiple projects in a timely manner
Requirements
3+ years experience with Linux, PHP, Apache, MYSQL, jQuery, javascript and AJAX without reliance on CMS
Good knowledge of RESTful API design and implementation
Experience with software versioning systems and agile methodologies
Driven, passionate individual who is able to work both in a team and individually
Strong knowledge of PHP web frameworks: CodeIgniter
Understanding of MVC design patterns
Knowledge of object oriented PHP programming
Understanding accessibility and security compliance
Understanding fundamental design principles behind a scalable application
Familiarity with limitations of PHP as a platform and its workarounds
Creating database schemas that represent and support business processes
Experience from a Multinational company would be considered as advantage`, 5);

var obslujvaneNaKlienti = new Obqva('Специалист обслужване на клиенти', 'София', '30.09.2017', `Ако Вие имате:
Висше икономическо образование
Опит в работа с клиенти и/или плащания в банковата сфера (предимство)
Умения за работа с компютър (MS Office)
Добри комуникативни умения
Добро владеене на английски език (предимство)
И искате да:
Продавате продуктите, които банката предлага за физически и юридически лица
Приемате, проверявате и обработвате клиентски документи и нареждания във връзка с откриване на сметки и транзакции
Поддържате досиетата на клиентите
Работите на каса с национална и чуждестранни валути`, 4);

imperia.addObqva(programist);
imperia.addObqva(seniorPHP);
imperia.addObqva(obslujvaneNaKlienti);

var upnetix = new Firma('UpnetiX', 'assets/images/upnetix_logo.png', ' Бул. “България” 69, ет. 16, Infinity Tower, София, България', '+359 896 665 999', 'http://upnetix.com');

upnetix.addInfo(`We are passionate app and web users, seeking perfection, surrounded by both startup & enterprise culture, constantly expanding our skill set and technology coverage. Our team includes seasoned developers, brilliant designers, high-demanding quality engineers as well as rising IT stars, working side by side with our accomplished project leaders. Together we create synergies of productivity and creativity which bring satisfaction to our clients and ourselves. We continually build upon this base of experience and technical expertise, so that we can transform complex business problems into elegant solutions`);

var technik = new Obqva('Специалист техническа поддръжка', 'Варна', '20.09.2017', `Предлагаме ти интересна и предизвикателна работа в най-голямата хостинг компания в България. Ако технологиите са твоята страст, умееш да комуникираш с клиенти и си винаги готов да решиш всеки казус до края - може би ти си точният човек!

При нас ще имаш възможност за професионално развитие, като всеки ден ще научаваш нещо ново.
Очакват те фирмено обучение и атрактивно заплащане.

От теб очакваме:
- Да имаш завършено средно образование.
- Да притежаваш компютърна грамотност.
- Да познаваш основните имейл и FTP клиенти и уеб браузъри.
- Да умееш да комуникираш с клиенти.
- Да познаваш отлично предлаганите от компанията услуги.
- Да си зареден с желание за професионално развитие и работа в екип.
- Готовност за работа на смени.`, 3);

var seniorJAVA = new Obqva('Senior JAVA Developer', 'Пловдив', '27.09.2017', `Senior JAVA Developer
Talent Hunter has been a trusted recruitment partner to the IT and Telecom industry since 2008. We ensure that our candidates meet our clients at the right time and spot of their career development. We will be happy to accompany you on this professional quest!

"To raise new questions, new possibilities, to regard old problems from a new angle, requires creative imagination and marks real advance in science." — Albert Einstein

Our client is multinational software development company, leader in its industry field, bringing new R&D Software Engineering Team in Sofia. On behalf of them, we are currently looking for experienced Java Developers to become part of their newly formed R&D Team. The focus of the development is creation of new web based systems and back-end engines, deployed in Cloud (VMWare and AWS), using NoSQL Data Basis.`, 5);

var koordinator = new Obqva('Координатор по сигурността и опасни товари', 'Бургас', '10.09.2017', `Основни отговорности:

• Да координира и контролира изпълнението на процесите, свързани със сигурността и да гарантира, че обектите са подсигурени 24 часа в денонощието, 7 дни в седмицата според фирмените изисквания;
• Да извършва обучения по сигурност, както на служителите и подизпълнителите на ТNT, така и на персонала на външни фирми, подсигуряващи сигурността;
• Да препоръчва и съгласува с мениджъра по сигурността подобрения относно гарантирането на сигурността и въвеждането им в практиката;
• Да гарантира техническата изправност и правилната експлоатация на оборудването за проверка на сигурността - Рентген (X-Ray) и Устройство за откриване на експлозиви (ETD);
• Да подсигурява записи на телефонните обаждания (където е приложимо), както и да актуализира информацията в системата за управление на инциденти, свързани със сигурността и да отразява предприетите действия при всеки инцидент;
• Да подсигури бързо и прецизно разследване и акуратна обратна връзка в случаи на загуби, повреди и инциденти по сигурността и транспорта на опасни товари;
• Да координира и контролира познаването и прилагането на процедурите за спешни действия при бедствия, аварии и др.;
• Да контролира правилното функциониране / поддръжка на специалните системи за наблюдение и изпълнение на специализираните фирмени програми за сигурност;
• Да съдейства в разследвания и да сътрудничи на мениджъра по сигурността в комуникацията с правоприлагащите органи;
• Да ескалира до съответните мениджъри наличие или предпоставки за наличие на евентуални рискове за сигурността като например проблеми с контрола, стачки и др. с цел подпомагане предприемането на превантивни действия за избягване на загуби, повреди, кражби и др.;
• Да подсигури акуратни и навремено изготвени детайлни отчети по сигурността и транспорта на опасни товари;
• Да изготвя и поддържа актуална Програма за сигурност, свързана с лицензите на фирмата, както и да следи за нейното спазване;
• Да следи за провеждането на обучения и да ръководи корпоративния процес по одобрение на нови клиенти за транспортиране на Опасни товари.`, 3);

upnetix.addObqva(technik);
upnetix.addObqva(seniorJAVA);
upnetix.addObqva(koordinator);

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

var systemAdministrator = new Obqva('System Administrator', 'София', '21.09.2017', `The person on this position will be responsible for the internal IT infrastructure. He/she will have to analyze the current software and hardware configurations in the AXS offices, then make a plan on how to improve them and after that proceed with implementing the solution. This person is expected to work proactively with teammates from all AXS Marine offices, providing them system administration support and guidance as well as resolving their software/hardware issues.

RESPONSIBILITIES
Investigate and resolve internal user problems with Office 365 and other software
Set up computers, software and peripheral equipment for new employees
Set up users on network and provide user name and password access to specified systems
Create and improve configurations of Office 365 and Windows
Organize and update the GPO policies for different departments
Train users on good security practices, different software usage, etc.
Travel to other offices when needed to provide support and training to employees on site
Maintain office equipment and resolve hardware issues
Diligent to ensure all tickets are up to date and to help others in the team
Follow up the status of problems on behalf of the user and communicate progress in a timely manner`, 5);

var SeniorGraphicDesigner = new Obqva('Senior Graphic Designer', 'Бургас', '30.09.2017', `2+ years’ experience as a graphic designer
Pixel-perfect eagle eye for details
High-level spoken and written English
Very good knowledge of web standards
Extensive experience in creating print materials
Excellent Adobe Photoshop & Adobe Illustrator skills
Working with Photoshop layers, layer comps, smart objects, layer masks and vector masks
A strong online portfolio - a MUST!!!`, 3);

var operatorCallCenter = new Obqva('Оператор КОЛ Център', 'Варна', '29.09.2017', `Ако вие притежавате:

- Свободно владеене на Английски, Руски, Турски, Испански или Италиански език;
- Ясна дикция и приятен глас;
- Отлични комуникативни и презентационни умения; 
- Желание за развитие;
- Умения за убеждаване и ефективна комуникация с различни типове клиенти;
- Опит с търгуване на финансови инструменти или в кол център;

То ние ще Ви предложим:

- Приятна обстановка и сплотен екип, на който да разчитате;
- Възможности за развитие;
- Професионално обучение;
- Твърда заплата + бонусна система;
- Трудов договор;`, 5);

var opticsEngineer = new Obqva('Optics Engineer', 'Варна', '30.09.2017', `Your responsibilities:
As part of our Engineering team you will be responsible for supporting the project teams through the entire product lifecycle by providing expertise in three main areas: 
•	Illumination
•	optical measurements
•	display technologies.
Tasks will include: 
•	Support the Optical Experts for:
-	the choice of the best lighting architectures 
-	designing and justifying the lighting solutions for the different products lines (instrument clusters, displays, clocks, HUD …) 
-	modelling and simulating the optical components and solutions (simulation tool is Light Tools);
•	Perform optical measurements and maintain the optical laboratory; 
•	Support the Display Experts for - characterization and test of the displays `, 5);

nemetschek.addObqva(systemAdministrator);
nemetschek.addObqva(SeniorGraphicDesigner);
nemetschek.addObqva(operatorCallCenter);
nemetschek.addObqva(opticsEngineer);

var trader = new Firma('Trader.bg', 'assets/images/Traderbg.png', 'София 1756, ул. „Лъчезар Станчев” № 3 Litex Tower, ет. 10', '(+359) 2 448 48 50', 'https://www.trader.bg/bg');

trader.addInfo(`Trader.bg е иновативна уеб платформа за търговия, която осигурява бърз и лесен достъп до световните финансови пазари на начинаещи и професионални трейдъри. Услугите ни се предоставят от регулирания в Европейския съюз брокер „Авус Капитал“. Нашата платформа се ползва от над 200 000 активни трейдъри в над 65 държави, които инвестират в 750 различни финансови инструмента: валути, стоки, акции и индекси.`);

var cDeveloper = new Obqva('C /C++ Developer', 'Пловдив', '15.09.2017', `Your Responsibilities
Develop software solutions using C/C++ in an embedded environment
Improve the architecture and optimize the performance of real-time embedded systems
Cooperate with top experts of the field
Work with safety-critical automotive systems
Design and deploy high quality, scalable code
Design and develop integrations between our applications and other systems as may be required by customers
Troubleshoot and resolve problems
20% traveling in EU Countries.

Required skills/experience

The ideal candidate for this position will have:
2+ years using C and C++
Microcontroller experience
Interest in signal processing, image processing, computer vision and deep learning
Experience with embedded software development
Experience developing in an Agile software development environment
Object oriented design skills and experience using design patterns
Understanding of the Agile Software Development (SCRUM)`, 5);

var supportSpecialist = new Obqva('BI Support Specialist', 'Бургас', '03.10.2017', `We are looking for someone who has: 
College or University degree in Information Technology, Economics or Engineering;
Experience with BI projects /consulting and implementation/;
Experience in working with Excel and formulas /Pivot tables and Vlookup - required/;
Strong problem solving skills and analytical thinking;
Fluency in English (at least C1);
Good understanding of one or many of BI platforms (Qlik, Tableau, Power BI); Knowledge in ETL processing; MS stack: SQL Server, Power BI, SSAS, SSIS, SSRS - would be considered as a strong advantage;
`, 3);

var representative = new Obqva('Customer Service Representative', 'София', '23.09.2017', `ESSENTIAL JOB DUTIES AND RESPONSIBILITIES:
Respond to and resolve customers' inquiries by investigating all issues and gathering all necessary information within multiple billing and customer management systems.
Effectively communicate Hostway’s policies and procedures relating to products and services.
Research complex customer issues and process billing adjustments by entering credits or other adjustments into the records for that customer account.
Make outgoing collection calls when necessary or required.
Рeport issues affecting multiple customers to management.
Maintain departmental standards regarding courtesy and productivity.
Eliminate customer confusion or frustration using empathy and consideration to reach amicable solutions.
Take ownership of customer concerns and issues and ensure timely resolution.`, 3);

trader.addObqva(cDeveloper);
trader.addObqva(supportSpecialist);
trader.addObqva(representative);

var softwareGroup = new Firma('Software Group', 'assets/images/softwareGroup.png', 'гр. София, бул. „Цариградско шосе“ 115', '02 923 1783', 'http://www.softwaregroup-bg.com/');

softwareGroup.addInfo(`Software Group is a global technology company that is specialized in delivery channel and integration solutions for institutions that provide financial services. We help financial service providers digitize their business and successfully go through the process of digital transformation, extend their outreach and improve operational efficiency. We take financial inclusion at heart and we have a social mission hardcoded in our DNA - we innovate for a global economy that includes everyone.`);

var QAEngineer = new Obqva('QA Engineer', 'Пловдив', '16.09.2017', `Technical knowledge and skills


Keen eye for detail;
Good observational skills;
Super organisational skills;
Practical, level headed and ability to prioritise;
100% focus on Client satisfaction and willingness to go the extra mile;
Flexible with the ability to work independently and as part of a team;
Strong interpersonal, written and verbal communication skills;
A positive, ‘can-do’ attitude, hardworking and dedicated 
Computer literacy (Mac desirable but not essential);
The ability to react and respond quickly and effectively;`, 3);

var developmentManager = new Obqva('Total War Development Manager', 'Варна', '05.10.2017', `The successful candidate will assist with the day-to-day and week to week process of managing a cross discipline game team. The  Development Manager/ Producer will be able to provide support to keep the project moving forward, and the team positive, informed and focused whilst keeping momentum. The role will also require working with the project leads to generate the project schedule, identify dependencies, solve problems and prioritise work.

Key Responsibilities
Drive project planning for the team. Facilitate the planning and estimation process across the team to generate fully scoped plans for upcoming phases of the project.
Drive, maintain and update the development schedule.
Manage and motivate the development team, ensuring that milestones are adhered to, tech and decision pipelines remain unblocked and if changes to dates are incurred, all relevant parties are notified and the schedule adapted accordingly.
Communicate progress on current and upcoming milestones, providing detailed analysis on team performance, risks and areas for improvement.`, 5);

var GlobalProjectEngineer = new Obqva('Global Project Engineer', 'Пловдив', '28.09.2017', `Key Deliverables

Coverage of Vehicles In Operation / Sensors In Operation (VIO / SIO)
Requirements:

Strong understanding of fundamental project coordination/management, process understanding and mechanical engineering flexibly in unfamiliar situations;
At least 3 years of project management and/ or mechanical design engineering experience;
BS/MS/PhD in Mechanical Engineering,
Project Management or similar;
Excellent English language skills - verbal and written;
Ability to communicate complex concepts clearly;`, 5);

softwareGroup.addObqva(QAEngineer);
softwareGroup.addObqva(developmentManager);
softwareGroup.addObqva(GlobalProjectEngineer);

var hedgeHog = new Firma('Hedgehog', 'assets/images/hedgehog_ready.png', 'София, пл. "Папа Йоан Павел II", Бизнес център България 2000, ет.5', '087 8547269', 'https://www.hhog.com/');

hedgeHog.addInfo(`Since launching in 2007, Hedgehog has grown to 4 offices in North America and Europe and twice been named to the Inc. 5000 list of fastest-growing companies in America.  We design and engineer high performance, multi-channel digital marketing platforms that position clients for growth and success.`);

var angularJSEngineer = new Obqva('Angular Java Script Development Engineer', 'София', '22.09.2017', `Your daily job will include:
- Working in an Agile environment, where team work is always recognized and appreciated. 
- Design, develop and unit test solutions of any size or complexity
- Produce clean code 
- Participate in front end/UI development which follows best industry standards in terms of user experience. 
- Become part of a fast-moving team where quality always comes first
- Understand all of Fourth’s products in detail, how they are integrated with each other, and their business value
- Diagnose defects, and provide effective solutions.
- Provide development estimates, be a part of planning sessions
- Provide feedback to help with continuous process improvement.
- Understand and support the release management process
- Continuous learning and implementation of new technologies is a must.`, 5);

var regPredstavitel = new Obqva('Регионален представител', 'Пловдив', '06.10.2017', `Подходящият кандидат за позицията притежава:
− Опит в областта на активното търсене и привличане на клиенти - 2 години минимум; 
− Висше образование;
− Oпит във воденето на преговори и презентации;
− Високо ниво на вътрешна мотивация, готовност и желание за активни продажби;
− Свидетелство за управление на МПС.`, 5);

var stroitelenInjener = new Obqva('Строителен инженер и проектант', 'Бургас', '26.09.2017', `
СТРОИТЕЛЕН ИНЖЕНЕР - ПРОЕКТАНТ
Фирма КАСТЕЛО ПРИКАСТ ООД, специализирана в проектиране, производство и монтаж на конструкции от сглобяеми стоманобетонови елементи, търси да назначи 

СТРОИТЕЛЕН ИНЖЕНЕР - ПРОЕКТАНТ

ОСНОВНИТЕ ВИ ЗАДЪЛЖЕНИЯ ще са свързани с:
- Интензивно изготвяне на идейни оферти
- Изготвяне на технически и екзекутивни проекти по част конструктивна, изготвяне на количествени сметки
- Подготовка и окомплектоване на техническата документация 
- Позицията предполага и авторски надзор по време на производството на сглобяемите стоманобетонови елементи, както и авторски надзор чрез присъствие по време на монтаж
- Ежедневна комуникация с останалите инженерни звена – производство и монтаж и решаване на оперативни проблеми
- Комуникация с подизпълнители, проектанти, ТК, надзор


НАШИТЕ ИЗИСКВАНИЯ:
- Висше строително-инженерно образование /ССС/
- Пълна проектантска правоспособност с минимум 5 (пет) години активен проектантски опит
- Отлични практически умения за работа с AUTOCAD, SAP2000, TOWER или друг изчислителен софтуер, както и умения за работа с MS Office
- Отлично познаване на нормите за проектиране и конструктивни еврофондове, стандартите и изискванията за изготвяне на технически проекти
- Технически умения за използване на стандарти, каталози, техническа и технологична документация и специализирана литература
- Самообладание и професионализъм в стресови ситуации
- Владеене на английски език
- Владеенето на италиански език би било предимство`, 3);

var serviceDeskEngineer = new Obqva('Service Desk Engineer', 'Пловдив', '19.09.2017', `Experience Required:

MS Office – Intermediate
Awareness of ITSM tools (Siebel, Remedy, ServiceNow, Clarify, HEAT)
12+ months experience in Customer Service/Contact Centre/Help Desk/Service Desk role
12+ months in a process driven organisation
Experience working in a multi-cultural/international environment
General ICT industry understanding
High School Degree in IT related discipline
BSc/BA Degree in ICT/Telecommunications/Business Administration or similar discipline (either complete or in-progress)
CCENT knowledge, Network+ or equivalent (complete or in-progress)`, 3);

hedgeHog.addObqva(angularJSEngineer);
hedgeHog.addObqva(regPredstavitel);
hedgeHog.addObqva(stroitelenInjener);
hedgeHog.addObqva(serviceDeskEngineer);
