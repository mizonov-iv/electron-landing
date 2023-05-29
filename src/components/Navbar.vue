<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img style="width: 150px" src="/img/logotype.png" alt="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Главная</router-link>
          </li>
          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Услуги
            </div>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="btn dropdown-item" data-bs-toggle="modal" href="#modal1" role="button">Электромонтажные работы</a>
              </li>
              <li>
                <a class="btn dropdown-item" data-bs-toggle="modal" href="#modal2" role="button">Слаботочные сети</a>
              </li>
              <li>
                <a class="btn dropdown-item" data-bs-toggle="modal" href="#modal3" role="button">Система умный дом</a>
              </li>
              <li>
                <a class="btn dropdown-item" data-bs-toggle="modal" href="#modal4" role="button">Декоративное освещение</a>
              </li>
              <li>
                <a class="btn dropdown-item" data-bs-toggle="modal" href="#modal5" role="button">Сборка электрощита</a>
              </li>
              <li>
                <a class="btn dropdown-item" data-bs-toggle="modal" href="#modal6" role="button">Заземление</a>
              </li>
              <li>
                <a class="btn dropdown-item" data-bs-toggle="modal" href="#modal7" role="button">Молниезащита</a>
              </li>
              <li>
                <a class="btn dropdown-item" data-bs-toggle="modal" href="#modal8" role="button">Проектирование</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/works">Наши работы</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">О нас</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacts">Контакты</router-link>
          </li>
        </ul>
        <button class="btn text-light" style="background: #f57c00" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Заказать звонок</button>
      </div>
    </div>
  </nav>
  <!-- CONTACT MODAL -->
  <div class="modal fade" id="exampleModalToggle2" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Оставьте заявакзаявку, мы свяжемся с вами</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="text-center">Введите свое имя и контактный телефон. Наш менеджер свяжется с Вами в кротчайшие сроки.</p>
          <ContactForm/>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 1 -->
  <div class="modal fade" id="modal1" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal1">Электромонтажные работы</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            Выполнение электромонтажных работ - это задача, требующая профессиональной подготовки с целью обеспечить надёжное подключение и соединение при соблюдении необходимых мер безопасности.
          </p>
          <br>
          <p>
            Мы предлагаем услуги по проведению профессиональных электромонтажных работ, обеспечивая вас быстрым и грамотным обслуживанием по доступным ценам.
          </p>
          <br>
          <p>Оказываемые услуги:</p>
          <ul class="list-group">
            <li>- Электромонтаж Екатеринбург, демонтаж, подключение разных типов кабелей</li>
            <li>- Проводка Екатеринбург, проводка квартира Екатеринбург</li>
            <li>- Установка розеток и выключателей</li>
            <li>- Монтаж осветительных приборов</li>
            <li>- Подключение электротехники</li>
            <li>- Ремонт люстр и осветительных приборов</li>
            <li>- Установка электромонтажного оборудования</li>
            <li>- Установка кабельных муфт и кабельных разделок</li>
            <li>- Монтаж, демонтаж, сборка и подключение электрических щитов и щитовых комплексов</li>
            <li>- Оформление документации для допуска электроустановок, пуско-наладочные работы</li>
            <li>- Сдача объекта с нуля и под ключ</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button class="btn text-light" style="background: #f57c00" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Рассчитать стоимость</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 2 -->
  <div class="modal fade" id="modal2" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal2">Слаботочные сети</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            Перед установкой слаботочных сетей наши специалисты составят и согласуют с заказчиком проект будущей сети, определяют рациональное размещение щита, реле, розеток и прочих устройств, входящих в систему.
          </p>
          <br>
          <p>
            Все работы осуществляются в полном соответствии с соблюдением мер безопасности и требований государственных стандартов.
          </p>
          <br>
          <p>
            Мы не рекомендуем монтировать слаботочные сети самостоятельно, а доверить эту работу специалистам, чтобы исключить опасные нежелательные пересечения и обеспечить бесперебойную эксплуатацию сети.
          </p>
          <br>
          <p>Наша компания оказывает услуги по проектированию, монтажу, настройке, ремонту, сдаче в эксплуатацию и сервисному обслуживанию слаботочных сетей: пожарная и охранная сигнализация, видеонаблюдение, домофоны, диспетчеризация, компьютерные сети, телефонная связь, интернет, телевидение, радиосвязь и прочие.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn text-light" style="background: #f57c00" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Рассчитать стоимость</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 3 -->
  <div class="modal fade" id="modal3" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal3">Система умный дом</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            Умный дом - это интеллектуальная система управления всеми приборами в помещении для вашего комфорта, предназначенная для установки в частном доме, квартире, в офисе или на предприятии.
          </p>
          <br>
          <p>
            Умный дом способен без участия человека принимать важные решения и выполнять поставленные задачи. Для простоты управления системой используются удобный интерфейс мобильного приложения и высокая скорость работы.
          </p>
          <br>
          <p><strong>Преимущества и выгоды умного дома:</strong></p>
          <br>
          <p><em>- Комплексные решения «под ключ»</em></p>
          <br>
          <p>
            Берем все заботы на себя: от получения заявки и разработки проекта до пуско-наладочных работ со строгим соблюдением сроков выполнения работ. Все проекты разработаны в соответствии с современными требованиями и нормативами.
            Предлагаем гибкую поэтапную систему оплаты, а также бонусы в виде бесплатных первичных расчетов сметы, технической консультации и выезда на объект.
          </p>
          <br>
          <p><em>- Безопасность и защита имущества</em></p>
          <br>
          <p>
            Сообщит об утечке газа, протечке воды или пожаре Вам и соответствующим службам, перекроет газ/воду при необходимости. Система охраны защитит от воров, а также имитирует ваше присутствие во время отъезда - включает и выключает свет, раздвигает и задвигает шторы. При вашем уходе из дома поставит его на сигнализацию, выключит свет и обесточит все розетки, кроме нужных. Наружная защита дома состоит из системы молниезащиты и антиобледенения крыши.
          </p>
          <br>
          <p><em>- Комфорт и забота о здоровье</em></p>
          <br>
          <p>
            Благодаря автоматическому контролю работы систем отопления, кондиционирования и вентиляции создается комфортный микроклимат в помещении. А умное освещение самостоятельно выключит свет при Вашем отсутствии, закроет шторы с наступлением сумерек.
          </p>
          <br>
          <p><em>- Энергосбережение и экономия</em></p>
          <br>
          <p>
            Свет только там, где есть люди. Теплосберегающая система вентиляции. Оптимальная работа всех инженерных систем дома в целях экономии энергии. Поддерживает минимальную температуру ночью или в Ваше отсутствие и повышает температуру перед пробуждением или приходом домой.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn text-light" style="background: #f57c00" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Рассчитать стоимость</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 4 -->
  <div class="modal fade" id="modal4" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal4">Декоративное освещение</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Декоративное освещение несет в себе сразу несколько функций:</p>
          <br>
          <ul class="list-group">
            <li>- улучшается внешний вид здания или помещения, задается нужная атмосфера;</li>
            <li>-  позволяет добиться уникального дизайна, визуально выделить особый интерьерный уголок;</li>
            <li>- помогает зрительно расширить комнату, разделить на функциональные зоны или скрыть недостатки;</li>
          </ul>
          <br>
          <p><strong>Рекомендуем обратить внимание на следующие источники света для декоративного освещения:</strong></p>
          <br>
          <p><strong>Оптико-волоконные системы</strong></p>
          <p><em>Отлично подходят для подсветки как в обычных комнатах, так и в помещениях со сложными условиями эксплуатации: бани, сауны, бассейны.</em></p>
          <br>
          <p><strong>Неоновые лампы</strong></p>
          <p><em>Широко используются для дизайна жилых помещений (особенно стиле минимализм, лофт, поп-арт), для декора торговых и бизнес объектов, рекламы.</em></p>
          <br>
          <p><strong>Светодиодные ленты, дюралайт</strong></p>
          <p><em>Максимально безопасны и экономичны. Ими часто выделяют контуры мебели, стен, потолков, разделяют пространство на функциональные зоны и используют для ночного подсвечивания коридоров и комнат. Также дюралайт можно использовать для фасадного освещения и праздничного украшения стен.</em></p>
          <br>
          <p><strong>Ретро лампы Эдисона</strong></p>
          <p><em>За счет теплого свечения создают домашнюю атмосферу и подходят для любого пространства. Особенно популярны у любителей винтажа и стиля лофт.</em></p>
          <br>
          <p><strong>Гирлянды</strong></p>
          <p><em>Гирлянды подходят для наружного украшения дома, придомовой территории и для декора внутри помещения. Чаще всего их применяют для драпировки контуров мебели, дверных и оконных проемов, зеркал.</em></p>
          <br>
          <p><strong>Ландшафтное освещение</strong></p>
          <p><em>Функциoнaльнoe и дeкopaтивнoe ocвeщeниe зeлёныx нacaждeний, элeмeнтoв мaлoй apxитeктуpы и блaгoуcтpoйcтвa, а также зeмeльныx учacткoв. Лaндшaфтнoe ocвeщeниe включaeт в ceбя диaпaзoн paбoт пo ocвeщeнию пapкoв, плoщaдeй, пpилeгaющиx тeppитopий, caдoв и т.д.</em></p>
        </div>
        <div class="modal-footer">
          <button class="btn text-light" style="background: #f57c00" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Рассчитать стоимость</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 5 -->
  <div class="modal fade" id="modal5" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal5">Сборка электрощита</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p><strong>Почему сборку электрощита обязательно делегировать специалисту?</strong></p>
          <br>
          <p>- Безопасность жизни и здоровья</p>
          <p><em>В сборке электрощита есть множество нюансов, о которых может не знать человек без специального образования, но их обязательно соблюдать: маркировка проводов, изоляция, заземление, безопасное расположение и многие другие. Доверяя сборку профессионалам вам не придется переживать за перегрузки сети, короткие замыкания, пожарную безопасность или опасность для ваших детей, которые из любопытства решат всунуть какой-то предмет в розетку.</em></p>
          <br>
          <p>- Бесперебойная работа сети</p>
          <p><em>Составляя план проводки важно предусмотреть тот факт, что с каждым годом количество потребителей и новых приборов растет, а значит нужны дополнительные мощности. Планировать схему электрощита нужно на перспективу и позаботиться о том, чтобы в случае аварийного отключения обесточенной оказалась лишь та комната, в которой случилась поломка, а не весь дом.</em></p>
          <br>
          <p>- Экономия</p>
          <p><em>Наши специалисты рационально распределяют электроэнергию на объекте, чтобы сэкономить ваши затраты в будущем.</em></p>
          <br>
          <p>Хотите правильно и качественно спроектировать и собрать электрощит? Мы с радостью вам в этом поможем!</p>
        </div>
        <div class="modal-footer">
          <button class="btn text-light" style="background: #f57c00" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Рассчитать стоимость</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 6 -->
  <div class="modal fade" id="modal6" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal6">Заземление</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            Монтаж заземления -  важный этап при устройстве системы электроснабжения частного дома, коттеджа, офиса или квартиры. Грамотно спроектированное заземление гарантирует электробезопасность не только жилища или электроприборов, но и вашей жизни. Именно благодаря ему статический заряд не будет накапливаться на корпусе электроприбора до значений, опасных для человека.
          </p>
          <br>
          <p>
            Эффективность работы заземления зависит от корректности первоначальных расчетов, выбора правильной схемы и проведения монтажа. Наши специалисты всегда подбирают самый практичный и удобный метод заземления, подходящий вашему конкретному объекту.
          </p>
          <br>
          <p>
            Категорически не рекомендуем делать заземление своими силами. Множество несчастных случаев происходят из-за контактов с поврежденными бытовыми приборами и некорректно смонтированной системой заземления.
          </p>
          <br>
          <p>
            Если вам важно, чтобы работа была проведена максимально безопасно, качественно и в четко установленные сроки - обращайтесь к нам. Так вы получите гарантии качества, уверенность в собственной безопасности и в эффективности контура заземления вашего дома.
          </p>
          <br>
        </div>
        <div class="modal-footer">
          <button class="btn text-light" style="background: #f57c00" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Рассчитать стоимость</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 7 -->
  <div class="modal fade" id="modal7" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal7">Молниезащита</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            Когда сталкиваетесь с необходимостью установить молниезащиту на своем объекте впервые, часто возникает много вопросов: чем обеспечить молниезащиту, как это организовать, с чего начинать?
          </p>
          <br>
          <p>
            <strong>Алгоритм действий всегда одинаковый:</strong>
          </p>
          <ul class="list-group">
            <li>1. Проектирование системы молниезащиты.</li>
            <li>2. Подбор подходящих элементов для организации, исходя из индивидуального проекта.</li>
            <li>3. Монтаж самой системы молниезащиты.</li>
          </ul>
          <br>
          <p><strong>Важно учесть, что для качественного функционирования молниезащита обязательно должна выполнять следующие функций:</strong></p>
          <ul class="list-group">
            <li>- предохранение строений от различных повреждений при прямом попадании молнии;</li>
            <li>- исключение возгораний и искрения;</li>
            <li>- защита от поражения электричеством объектов и людей внутри и снаружи сооружения;</li>
            <li>- обеспечение безаварийной работы бытового и технического оборудования, электроустановок при появлении электромагнитных наводок от молнии;</li>
            <li>- исключение возникновения индуцированного тока.</li>
          </ul>
          <br>
          <p><strong>Меры молниезащиты:</strong></p>
          <ul class="list-group">
            <li>- защита от контактного и шагового перенапряжений – присоединение оборудование к главной заземляющей шине;</li>
            <li>- защита от прямого удара молнии – молниеотвод;</li>
            <li>- защита от заноса высокого потенциала – применение УЗИП;</li>
            <li>- защита от электромагнитных наводок – экранирование.</li>
          </ul>
          <br>
          <p>Специалисты Tamers Electron готовы реализовать монтаж молниезащиты на вашем объекте с нуля и «под ключ».</p>
        </div>
        <div class="modal-footer">
          <button class="btn text-light" style="background: #f57c00" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Рассчитать стоимость</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 8 -->
  <div class="modal fade" id="modal8" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal8">Проектирование</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            При электрификации любого объекта недвижимости нужно иметь проектную документацию. Мы составляем проекты электроснабжения любой сложности: квартиры, частные дома, производственные и административные здания, торговые точки, развлекательные комплексы и прочие.
          </p>
          <br>
          <p>
            В процессе проектирования наши специалисты подготавливают необходимые документы с учетом всех требований действующих норм и правил. В результате вы получаете готовый одобренный проект, согласованный в соответствующих инстанциях.
          </p>
          <br>
          <p>
            При составлении электропроекта мы обязательно учитываем все указанные в техническом задании условия, а также ваши устные пожелания.
          </p>
          <br>
          <p>
            Осуществляя проектирование электроснабжения с нашей компанией вы одновременно увеличиваете уровень безопасности объекта и экономите деньги на покупке материалов и оборудования. Все работы проводятся в сжатые сроки, в том числе согласование готового проекта в государственных органах, проведение электромонтажных и пуско-наладочных работ.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn text-light" style="background: #f57c00" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Рассчитать стоимость</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ContactForm from "./ContactForm.vue";
</script>