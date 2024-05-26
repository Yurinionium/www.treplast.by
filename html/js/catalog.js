const itemsCatalog = [
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20200612_02_32_45_img.jpg',
        ],
        title: 'ДПО 55 «MIKRA TRACK»',
        description: 'Корпус светильника изготовлен из экструдированного алюминиевого профиля. В начале и в конце светильника установлены торцевые крышки (поставляются комплектно), которые  крепятся к корпусу светильника с помощью шурупов.',
        price: 'от 40 Вт',
        type: 'ofisy'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20190805_04_39_23_img.jpg',
        ],
        title: 'ДПО 12 «KORONA SLIM»',
        description: 'Корпус светильника изготовлен из стального листа и окрашен в белый цвет с применением технологии порошковой окраски. Под заказ возможна покраска в любой цвет по таблице RAL. ',
        price: 'от 23 ВТ',
        type: 'ofisy'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20190218_09_23_35_img.jpg',
        ],
        title: 'ДПО 12 «SUPER SLIM»',
        description: 'Корпус и отражатель светильника изготовлены из стального листа и окрашены в белый цвет с применением технологии порошковой окраски. Под заказ возможна покраска в любой цвет по таблице RAL. Торцевые крышки изготовлены из пластика АВS.',
        price: 'от 63 Вт',
        type: 'ofisy'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/DPO55_WIN/WIN.jpg',
        ],
        title: 'ДПО 55 «WIN»',
        description: 'Корпус изготовлен из листовой стали и окрашен в белый цвет с применением технологии порошковой окраски. Под заказ возможна покраска в любой цвет по таблице RAL.',
        price: 'от 44 Вт',
        type: 'ofisy'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20160614_01_51_20_img.jpg',
        ],
        title: 'ДПО 12 «KORONA RETAIL»',
        description: 'Корпус светильника изготовлен из стального листа и окрашен в белый цвет с применением технологии порошковой окраски. Под заказ возможна покраска в любой цвет по таблице RAL. Для создания световых систем (линий, продольно-поперечных комплексов и т.д.) светильники комплектуются транзитными проводами.',
        price: 'от 33 Вт',
        type: 'ofisy'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20180403_05_04_43_img.jpg',
        ],
        title: 'ДПО 81 «KORONA PIC»',
        description: 'Корпус светильника изготовлен из специального алюминиевого сплава и окрашен порошковой краской белого, серого или черного цвета. Зеркальный отражатель изготовлен из анодированного алюминия. Светильник комплектуется защитным стеклом.',
        price: 'от 28 Вт',
        type: 'ofisy'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/Torgovoe/DPO12_KORONA_BACKLIGHT/KORONA_BACKLIGHT.jpg',,
            'https://spectra-zavod.ru/upload/resize_cache/iblock/821/400_0_0/o84pkd9xgvfezwiczwfsic67q8w7ease.jpg'
        ],
        title: 'ДПО 12 «KORONA BACKLIGHT»',
        description: 'Корпус изготовлен из листовой стали и окрашен в белый цвет с применением технологии порошковой окраски. Под заказ возможна покраска в любой цвет по таблице RAL. Светильник снабжен модулем аварийного питания. Время работы светильника в аварийном режиме не менее 1 час.',
        price: 'от 3 Вт',
        type: 'torgovye-centry'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20201127_04_53_43_img.jpg',
        ],
        title: 'ДПО 55 «OPTIMAL TRACK A»',
        description: 'Детали корпуса светильника выполнены из  листовой стали. Корпус окрашен порошковой краской белого, серого или чёрного цвета. Вторичная оптика светильника изготовлена из ПММА и сохраняет свои световые характеристики в течение всего срока службы. ',
        price: 'от 48 Вт',
        type: 'torgovye-centry'
    },
    {
        images: [
            'https://www.belintegra.by/assets/images/models/dvo-12-pixel/PIXEL.jpg',
        ],
        title: 'ДВО 12 «PIXEL»',
        description: 'Корпус изготовлен из листовой стали и окрашен в белый цвет с применением технологии порошковой окраски. Светильник состоит из 6 или 12 последовательно соединенных световых ячеек. Ячейки светильника можно расставлять в произвольном порядке, на расстоянии не более 300мм. Под заказ, светильник может комплектоваться колличеством ячеек до 18 шт.',
        price: 'от 46 Вт',
        type: 'torgovye-centry'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20180321_01_51_17_img.jpg',
        ],
        title: 'ДВО 11 «LIRA GRILIATO»',
        description: 'Корпус изготовлен из листовой стали и окрашен в белый цвет с применением технологии порошковой окраски. Под заказ возможна покраска в любой цвет по таблице RAL.',
        price: 'от 43 Вт',
        type: 'torgovye-centry'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20151123_09_28_47_img.jpg',
        ],
        title: 'ДПО 55 «KVADRA 53 WIN»',
        description: 'Корпус светильника изготовлен из экструдированного алюминиевого профиля. Ресурс модуля более 60 000 часов.',
        price: 'от 43 Вт',
        type: 'torgovye-centry'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20180326_12_58_41_img.jpg',
        ],
        title: 'ДСО 81 «TRACKPIC A»',
        description: 'Корпус светильника изготовлен из специального алюминиевого сплава и окрашен порошковой краской белого, серого или черного цвета.',
        price: 'от 27 Вт',
        type: 'torgovye-centry'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20140912_01_05_00_img.jpg',
        ],
        title: 'ДПО 12 «SM»',
        description: 'Корпус изготовлен из листовой стали и окрашен в белый цвет с применением технологии порошковой окраски .',
        price: 'от 43 Вт',
        type: 'medicinskie-centry'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/SPECNAZNACHENIA/OB/RBPV_N/RBPV_N.jpg',
        ],
        title: 'РБПВ / РБПН РЕЦИРКУЛЯТОР УФ',
        description: 'Предназначен для обеззараживания воздуха и предотвращения распространения инфекций передающихся воздушно-капельным путём в медицинских, спортивных, детских, учебных, производственных, офисных, бытовых и других помещениях в ПРИСУТСТВИИ людей. Конструкция рециркулятора исключает попадание прямых ультрафиолетовых лучей из камеры прибора в помещение, что делает его безопасным для находящихся в помещении людей.',
        price: 'от 35 Вт',
        type: 'medicinskie-centry'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/SPECNAZNACHENIA/OB/OBN-150/OBN-150.jpg',
        ],
        title: 'ОБН-150 УФ ОБЛУЧАТЕЛЬ БАКТЕРИЦИДНЫЙ, НАКЛАДНОЙ',
        description: 'Источником излучения облучателей являются бактерицидные ртутные лампы низкого давления, излучающие ультрафиолетовые лучи с длиной волны 253,7 нм, губительные для различных бактерий, вирусов и микроорганизмов, находящихся в воздухе и на поверхностях помещений. Обеззараживание помещения происходит за счет прямого облучения и конвекции слоев воздуха.',
        price: 'от 65 Вт',
        type: 'medicinskie-centry'
    },
    {
        images: [
            'https://www.belintegra.by/uploaded/lamp/SPECNAZNACHENIA/LBO%2012%20Bolnica/SPB.jpg',
        ],
        title: 'СИСТЕМА БОЛЬНИЧНАЯ ПРИКРОВАТНАЯ (СБП)',
        description: 'Корпус цельнометаллический изготовлен из листовой стали, окрашен в белый цвет с применением технологии порошковой окраски с высоким коэффициентом отражения. Конструкция светильника имеет функциональный дизайн, благодаря которому освещение помещения обеспечивается отраженным светом, направленным вверх, а местная подсветка осуществляется направленным вниз светом для освещения больничного места.',
        price: 'от 18 Вт',
        type: 'medicinskie-centry'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/SPECNAZNACHENIA/OB/OBP54/OBP54.jpg',
        ],
        title: 'ОБП (54) УФ ОБЛУЧАТЕЛЬ БАКТЕРИЦИДНЫЙ, НАКЛАДНОЙ СО СТЕПЕНЬЮ ЗАЩИТЫ IP54',
        description: 'Наиболее мощное средство для защиты от Коронавируса COVID-19 — бактерицидные облучатели. Они созданы для обеззараживания воздуха в общественных помещениях с большим скоплением людей, а также в квартирах и частных домах для предотвращения распространения заболеваний, передающихся воздушно-капельным путем. Эффективность работы приборов достигает до 99,9%.',
        price: 'от 35 Вт',
        type: 'medicinskie-centry'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20180420_01_53_56_img.jpg',
        ],
        title: 'ДПП 66 «TITAN LIGHT INOX»',
        description: 'Корпус изготовлен из нержавеющей стали. Между корпусом и рассеивателем нанесен уплотнитель из вспененого полиуретана. Уплотнение имеет хорошую термическую стойкость и хорошую стойкость к химическим и дезинфицирующим составам, а также к ультрафиолетовому излучению. Подключение светильника может осуществляться через герметичный (IP68) разъем (заказывается отдельно). ',
        price: 'от 23 Вт',
        type: 'promyshlennost'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/Specnaznachenia/DPP66_TITAN_SPORT/SPORT.jpg',
        ],
        title: 'ДПП 66 «TITAN SPORT»',
        description: 'Корпус изготовлен из листовой стали и окрашен в белый цвет с применением технологии порошковой окраски. Возможно изготовление корпуса из нержавеющей стали (INOX). В светильнике используются светодиоды мощностью 0,5Вт.',
        price: 'от 62 Вт',
        type: 'promyshlennost'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/Promashlennoe/STANDARD_C/Standard_C.jpg',
        ],
        title: 'ДПП 22 «STANDARD C»',
        description: 'Корпус изготовлен из ударопрочного поликарбоната методом экструзии устойчивого к ультрафиолетовому излучению. Возможна комплектация светильника блоком аварийного питания (БАП), который находится в выносном боксе.',
        price: 'от 8 Вт',
        type: 'promyshlennost'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/Promashlennoe/DPP_73_INDUSTRY-C/73Idustry.jpg',
        ],
        title: 'ДПП 73 «INDUSTRY-C»',
        description: 'Корпус светильника выполнен из экструдированного алюминиевого профиля, боковые стороны закрыты торцевыми крышками с уплотнением. Подвод сетевого кабеля может осуществляться к выносному герметичному (IP68) разъему (заказывается отдельно).',
        price: 'от 28 Вт',
        type: 'promyshlennost'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20130109_12_06_34_img.jpg',
        ],
        title: 'ДВУ 72 «ROOF»',
        description: 'Корпус светильника выполнен из экструдированного алюминиевого профиля, боковые стороны закрыты торцевыми крышками с уплотнением. Рамка изготовлена из листовой стали и окрашена в белый цвет с применением технологии порошковой окраски',
        price: 'от 38 Вт',
        type: 'promyshlennost'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20161115_04_24_17_img.jpg',
        ],
        title: 'ДПО 22 «ALS»',
        description: 'Корпус светильника изготовлен из УФ стабилизированного, ударопрочного поликарбоната (РС) или полиэстера усиленного стекловолокном. Монтажная база светильника, на которой крепится электрическая часть, изготовлена из листовой стали и окрашена в белый цвет с применением технологии порошковой окраски, что обеспечивает необходимую долговечность. Между корпусом и рассеивателем для обеспечения степени защиты нанесено уплотнение из вспененного полиуретана (PUR).',
        price: 'от 23 Вт',
        type: 'promyshlennost'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20160622_02_57_54_img.jpg',
        ],
        title: 'ДПП 22 «STANDARD»',
        description: 'Корпус изготовлен методом формовки ударопрочного полистирола серого цвета и оснащен защелками для крепления рассеивателя. Защелки изготовлены из высокопрочного пластика  ABS . Рефлектор изготовлен из металла с полимерным покрытием и оснащен двумя пластиковыми подвесами, предохраняющими от падения во время установки и ремонта. Корпус и рассеиватель светильника являются стойкими к обработке любыми дезинфицирующими составами. В светильнике используются светодиоды мощностью  0,2÷0,3 Вт. Ресурс модуля более 60 000 часов.',
        price: 'от 91 Вт',
        type: 'sklady'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20130103_02_40_53_img.jpg',
        ],
        title: 'ДДП 72 «INDUSTRY-М»',
        description: 'Светильники комплектуются различными видами вторичной оптики, обеспечивающими светораспределение в углах от 30° до 120°, в том числе асимметричного распределения.',
        price: 'от 35 Вт',
        type: 'sklady'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/Ulichnoe/DKU73StreetC/73STREET.jpg',
        ],
        title: 'ДКУ 73 «STREET-C»',
        description: 'Корпус светильника выполнен из экструдированного алюминиевого профиля, боковые стороны закрыты торцевыми крышками с уплотнением. Светильники могут комплектоваться специальными видами вторичной оптики, формирующие различные кривые силы света.',
        price: 'от 28 Вт',
        type: 'naruzhnoe'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/Ulichnoe/DDU73StreetC/STREET-C_b.jpg',
        ],
        title: 'ДДУ 73 «STREET-C»',
        description: 'Корпус светильника выполнен из экструдированного алюминиевого профиля, боковые стороны закрыты торцевыми крышками с уплотнением.',
        price: 'от 52 Вт',
        type: 'naruzhnoe'
    },
    {
        images: [
            '',
        ],
        title: 'ДКУ 73 «STREET-А»',
        description: 'Корпус светильника выполнен из литого алюминия.   Подвод сетевого кабеля может осуществляться к выносному герметичному (IP68) разъему (заказывается отдельно).',
        price: 'от 35 Вт',
        type: 'naruzhnoe'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/SlBytovoe/DBO22_ORA/ora.jpg',
        ],
        title: 'ДБО 22 "ORA"',
        description: 'Корпус светильника изготовлен из пластика черного цвета.',
        price: 'от 8 Вт',
        type: 'naruzhnoe'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20150422_10_28_08_img.jpg',
        ],
        title: 'ДБО 12 «WEDGE»',
        description: 'Корпус изготовлен из листовой стали и окрашен по шкале RAL с применением технологии порошковой окраски.',
        price: 'от 10 Вт',
        type: 'naruzhnoe'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/SlBytovoe/DPP22Standard_C/STANDARD_CB.jpg',
        ],
        title: 'ДПП 22 «STANDARD CB»',
        description: 'Корпус изготовлен из ударопрочного поликарбоната методом экструзии устойчивого к ультрафиолетовому излучению. Возможна комплектация светильника блоком аварийного питания (БАП), который находится в выносном боксе:',
        price: 'от 8 Вт',
        type: 'sluzhebno-bytovoe'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20180412_03_08_51_img.jpg'
        ],
        title: 'ДБО 12 «ANTIVANDAL»',
        description: 'Корпус светильника изготовлен из стального листа и окрашены в белый цвет с применением технологии порошковой окраски. Под заказ возможна покраска в любой цвет по таблице RAL. Антивандальное исполнение предусматривает специальные винты для крепления рассеивателя, демонтаж которых осуществляется только с помощью специнструмента, что предотвращает незаконное проникновение вовнутрь светильника.',
        price: 'от 7 Вт',
        type: 'sluzhebno-bytovoe'
    },
    {
        images: [
            'https://www.belintegra.by/pics/catalog/product/20161115_04_24_17_img.jpg'
        ],
        title: 'ДПО 22 «ALS»',
        description: 'BIOLOID Premium kit – набор для создания различных шагающих роботов на основе моторов Dynamixel и контроллера СМ-530, для образования, игр и соревнований.',
        price: 'от 23 Вт',
        type: 'sluzhebno-bytovoe'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/Specnaznachenia/dpo55_MIKRA_FITO/MIKRA_FITO.jpg'
        ],
        title: 'ДПО 55 «MIKRA FITO»',
        description: 'Линейные светильники на базе алюминиевого профиля ДПО 55 «MIKRA» IP54  предназначены для верхней досветки. Для максимальной эффективности располагаются вдоль рядов выращиваемых культур. Обеспечивают равномерную засветку благодаря применению оптики с широкой КСС (1100). Возможна последовательная установка "в линию".',
        price: 'от 220 Вт',
        type: 'spec-naznachenie'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/Specnaznachenia/dso81_TRACKPIC_A_FITO/TRACKPIC_A_FITO.jpg'
        ],
        title: 'ДCО 81 «TRACKPIC A FITO»',
        description: 'Светильники для акцентной подсветки на базе серии ДСО 81 «TRACKPIC A». Зеркальный отражатель изготовлен из анодированного алюминия. Может комплектоваться отражетелем с различными углами КСС 240, 400 и 600. Светильник комплектуется защитным стеклом. Применение трековой системы и поворотного кронштейна позволяет направить световой поток под любым углом полусферы.',
        price: 'от 42 Вт',
        type: 'spec-naznachenie'
    },
    {
        images: [
            'https://www.belintegra.by/assets/files/uploaded/lamp/LED/Specnaznachenia/DPO22_Hyperon_B/Hyperon_B.png'
        ],
        title: 'ДБО 22 «HYPERON B»',
        description: 'Светильник комплектуется следующими типами пиктограмм: "Выход",  "Выход влево", "Выход вправо" и т.д. Возможно изготовление других типов пиктограмм (под заказ). Светильник может быть снабжен модулем аварийного питания. Время работы светильни-ка в аварийном режиме 1 час. ',
        price: 'от 42 Вт',
        type: 'spec-naznachenie'
    },
];

const cardList = document.querySelector('.card-list__items');
const popupElement = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const popupPrevButton = document.querySelector('.popup__prev');
const popupNextButton = document.querySelector('.popup__next');
const defaultCardButton = document.querySelector('.filter__button_type_grid');
const horizontalCardButton = document.querySelector('.filter__button_type_column');
const filterButtons = document.querySelectorAll('.slider__button');

let currentImageIndex = 0;
let currentImages = [];

class Card {
    constructor(templateSelector) {
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardElement;
    }

    _handleOpenPopup(images, description) {
        currentImages = images;
        currentImageIndex = 0;
        popupImage.src = currentImages[currentImageIndex];
        popupCaption.textContent = description;
        popupElement.classList.add('popup_is-opened');

        popupPrevButton.addEventListener('click', this._showPreviousImage.bind(this));
        popupNextButton.addEventListener('click', this._showNextImage.bind(this));
    }

    _showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        popupImage.src = currentImages[currentImageIndex];
    }

    _showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        popupImage.src = currentImages[currentImageIndex];
    }

    _handleClosePopup() {
        popupImage.src = '';
        popupCaption.textContent = '';
        popupElement.classList.remove('popup_is-opened');
    }

    _setEventListeners(images, description) {
        this._element.querySelector('.card__button').addEventListener('click', (event) => {
            event.stopPropagation();  // Остановить всплытие события
            this._handleOpenPopup(images, description);
        });

        popupCloseButton.addEventListener('click', () => {
            this._handleClosePopup();
        });

        popupElement.addEventListener('click', (event) => {
            if (event.target === popupElement) {
                this._handleClosePopup();
            }
        });
    }
}

class DefaultCard extends Card {
    constructor(data, templateSelector) {
        super(templateSelector);
        this._title = data.title;
        this._description = data.description;
        this._images = data.images;
    }

    generateCard() {
        this._element = super._getTemplate();
        this._setEventListeners(this._images, this._description);

        this._element.querySelector('.card__image').style.backgroundImage = `url(${this._images[0]})`;
        this._element.querySelector('.card__title').textContent = this._title;

        return this._element;
    }
}

class HorizontalCard extends Card {
    constructor(data, templateSelector) {
        super(templateSelector);
        this._title = data.title;
        this._description = data.description;
        this._price = data.price;
        this._images = data.images;
    }

    generateCard() {
        this._element = super._getTemplate();
        this._setEventListeners(this._images, this._description);

        this._element.querySelector('.card__image').style.backgroundImage = `url(${this._images[0]})`;
        this._element.querySelector('.card__title').textContent = this._title;
        this._element.querySelector('.card__info').textContent = this._description;
        this._element.querySelector('.card__price-property').textContent = this._price;

        return this._element;
    }
}

const renderElements = (isGrid = true) => {
    cardList.innerHTML = '';
    itemsCatalog.forEach((item) => {
        const card = isGrid
            ? new DefaultCard(item, '.default-card')
            : new HorizontalCard(item, '.horizontal-card');

        const cardElement = card.generateCard();
        cardList.append(cardElement);
    });
};

defaultCardButton.addEventListener('click', () => {
    renderElements(true);
});

horizontalCardButton.addEventListener('click', () => {
    renderElements(false);
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const type = button.dataset.elementsType;
        const filteredItems = itemsCatalog.filter(item => item.type === type);
        renderFilteredItems(filteredItems);
    });
});

function renderFilteredItems(filteredItems) {
    cardList.innerHTML = '';
    filteredItems.forEach(item => {
        const card = new DefaultCard(item, '.default-card');
        const cardElement = card.generateCard();
        cardList.append(cardElement);
    });
}

renderElements();  // Initial render in grid layout

