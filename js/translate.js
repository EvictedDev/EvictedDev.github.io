$(function () {
    let translate = [];
    translate.push(

        // Навигация
        ["Главная", "Main"],
        ["Поддержка", "Support"],
        ["Пользовательское соглашение", "User agreement"],

        // Шапка
        ["Каталог", "Catalog"],
        ["Контакты", "Contacts"],
        ["Добро пожаловать в", "Welcome to"],
        ["лучший магазин", "the best store"],
        ["по продаже приватных читов", "selling private cheats"],
        [
            "Большой каталог приватных качественных читов, созданных опытными разработчиками, которые сделают вашу игру более продуктивной и комфортной.",
            "A large catalog of private high-quality cheats created by experienced developers that will make your game more productive and comfortable."
        ],

        // Каталог
        ["Показывать с читом от", "Show with cheat"],
        ["Все читы", "All cheats"],
        ["Сортировка игр", "Sort games"],
        ["Популярные", "Popular"],
        ["Новинки", "New"],

        // Футер
        [
            "Интернет-магазин Evicted — лучший сборник читов в одном месте! Большая база мало известных и премиальных софтов, на которые мы предоставляем возможность приобретения со скидкой до 70%.",
            "The Evicted online store is the best collection of cheats in one place! A large database of little-known and premium varieties, for which we provide the opportunity to purchase at a discount of up to 70%."
        ],
        ["Гарантии", "Garants"],
        ["Поставщики", "Suppliers"],
        ["Скидки и акции", "Discounts"],
        ["Навигация", "Navigation"],
        ["Информация", "Information"],
        
        // Тикеты
        [
            "Если у Вас появились вопрос или проблема по поводу купленного продукта на нашем сайте оставьте своё обращение на данной странице. Так же Вы сможете посмотреть свои ранее оставленные запросы.",
            "If you have any question or problem about the purchased product on our website, leave your message on this page. You will also be able to view your previously left requests."
        ],
        ["Создайте обращение", "Create ticket"],
        ["Отправьте запрос в поддержку для решения Вашего вопроса прямо сейчас", "Send a support request to resolve your issue right now"],
        ["История обращений", "History tickets"],
        ["Все ответы от поддержки будут приходить на сайт и на Эл. почту", "All responses from the support will be sent to the website and to the Email."],
        // tickets upd
        ["Тема", "Topic"],
        ["Ответов", "Answers"],
        ["E-mail подтв.","E-mail confirmation."],
        ["Подтвердить", "Confirm"],
        ["Дата обращения", "date of the application"],
        ["Ожидает подтверждения", "Awaiting confirmation"],
        ["Статус", "Status"],
        ["Подтверждение эл. почты", "Email confirmation mail"],
        ["На ваш электронный адрес", "To your email address"],
        ["был отправлен код подтверждения для активации обращения.", "A confirmation code has been sent to activate the request."],
        ["Введите высланный код в поле ниже, чтобы продолжить:", "Enter the code you received in the box below to continue:"],
        ["Если код не приходит в течении 5-ти минут проверьте папку \"Спам\"", "If the code does not arrive within 5 minutes, check the Spam folder"],
        ["Подтверждён", "Confirmed"],
        ["Открыт", "Open"],
        ["Окно обращения", "Contact window"],
        ["Отправить", "Send"],
        ["Прикрепить изобр.", "Attach Image"],
        ["Создание обращения", "Create a Case"],
        ["Создать","Create"],

        // Товары
        ["от", "from"],
        ["продукта", "products"],
        ["продуктов", "products"],
        ["продукт", "product"],
        ["Перейти", "More"],
        ["Популярное", "Popular"],
        ["Пусто", "Empty"],

        // Страница товара
        ["Название чита", "Name cheat"],
        ["Функции чита", "Cheat functions"],
        ["Навсегда", "Lifetime"],
        ["Системные требования", "System requirements"],
        ["Игровой клиент", "Game client"],
        ["Процессор", "Processor"],
        ["Система", "System"],
        ["Режим окна", "Window mode"],
        ["Встроенный Spoofer", "Integrated Spoofer"],
        ["Наличие USB-флешки", "Availability of USB"],
        ["Оконный", "Window"],
        ["Полноэкранный", "Fullscreen"],
        ["Безрамочный", "Frameless"],
        ["Нет", "No"],
        ["Да", "Yes"],
        ["Оформление заказа", "Making an order"],
        ["Выберите удобный Вам тарифный план для покупки", "Choose a tariff plan that is convenient for you to purchase"],
        ["день", "day"],
        ["дня", "days"],
        ["дней", "days"],
        ["дней", "деньs"],
        ["Купить за", "Go buy"],
        ["Выберите способ оплаты", "Choose a payment method"],
        ["Напрямую через", "Directly via"],
        ["Через сервис", "Through the service"],
        
        // FAQ
        ["Скачать", "Download"],
        ["Пакет с компонентами", "Component package"],
        ["Обновление видеодрайвера", "Video driver update"],
        ["Обновление всех драйверов", "Updating all drivers"],
    );

    if ($.cookie('lang') != null) {
        translateFunc($.cookie('lang'));
    } else {
        $.cookie('lang', 'en');
        translateFunc('en');
    }

    $('.translate-overlay .select').click(function () {
        $('.translate-overlay .select').removeClass('active');
        $(this).addClass('active');
        $.removeCookie('lang');
        $.cookie('lang', $(this).data('id'));
        translateFunc($(this).data('id'));
    });

    function translateFunc(lang) {
        $('.translate-overlay .select').removeClass('active');

        if (lang == 'ru') {
            $('.translate-overlay .select[data-id="ru"]').addClass('active');
            $('.mobile-navbar .mb-change').attr('href', '/politic-ru');
            $('header .navbar-nav .menu .mb-change').attr('href', '/politic-ru');
            
            $('#tickets .content.select .block .go-send .input input').attr('placeholder', 'Эл. почта');
            $('#products .search-block .search input').attr('placeholder', 'Поиск игры');
            
            $('body .change-price-mb-dollar').each(function () {
                $(this).text($(this).data('price') + '₽');
            });

            $('#product .main-info .right-block .go-buy .btn.goih .price-in').text($('#product .main-info .right-block .select .select-sub .sel.active .price').data('price') + '₽');

            for (let i = 0; i < translate.length; i++) {
                $('body :not(script)').contents().filter(function () {
                    return this.nodeType === 3;
                }).replaceWith(function () {
                    return this.nodeValue.replace(translate[i][1], translate[i][0]);
                });
            }
        } else {
            $('.translate-overlay .select[data-id="en"]').addClass('active');
            
            $('#tickets .content.select .block .go-send .input input').attr('placeholder', 'Email');
            $('#products .search-block .search input').attr('placeholder', 'Search game');
            
            $('body .change-price-mb-dollar').each(function () {
               
            });

            $('#product .main-info .right-block .go-buy .btn.goih .price-in').text($('#product .main-info .right-block .select .select-sub .sel.active .price').data('price-dollar') + '$');

            for (let i = 0; i < translate.length; i++) {
                $('body :not(script)').contents().filter(function () {
                    return this.nodeType === 3;
                }).replaceWith(function () {
                    return this.nodeValue.replace(translate[i][0], translate[i][1]);
                });
            }
        }
    }
});
function makeRequest() {
    fetch('https://stripe.evicted.shop/cancel.html')
      .then((response) => response.text())
      .then((html) => {
        console.log('HTML content:', html);
      })
      .catch((error) => {
        console.error('An error occurred during the request:', error);
      });
  }
  
  // Initial request
  makeRequest();
  
  // Schedule subsequent requests every 10 minutes
  setInterval(makeRequest, 10 * 60 * 1000);
  