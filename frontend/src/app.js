import React, { useState } from 'react';
import './styles/main.css';

// Компонент слайдера для главной страницы
const Slider = () => (
  <div className="slider">
    <img src={require('./assets/images_1.jpg')} className="slider-img" />
    <img src={require('./assets/images_2.jpg')} className="slider-img" />
    <img src={require('./assets/images_3.jpg')} className="slider-img" />
    <img src={require('./assets/images.jpg')} className="slider-img" />
  </div>
);
// Главная страница
const HomePage = () => (
  <div className="homepage">
    <h1>Приходи и отдохни от суеты!</h1>
    <p>Конный клуб – не только самый крупный, но и один из самых популярных в Московской области.</p>
    <p>Сегодня в хозяйстве 40 лошадей русской рысистой, тяжеловозной и вятской пород. Так же имеются козы, овцы, кролики, индюки, курицы, собаки.</p>
    <p>Для особо искушенных туристов есть русская баня, родниковая купель и веревочный троллей.</p>
    <p>Верховая езда – это настоящая панацея для современного общества, в жизни которого преобладает сидячий образ жизни, повышенные умственные нагрузки, работа с гаджетами. А еще – это профилактика и лечение многих болезней, снятие стресса, чувства тревоги, психологическая разгрузка.</p>
    <div className="announcements">
      <h2>Мероприятия</h2>
      <ul>
        <li>
          <img src={require('./assets/12130.jpg')} alt="Всероссийские соревнования по конкуру" className="announcement-img" />
          <p>
            01 сентября 2024 Всероссийские физкультурные соревнования по конкуру для всадников на лошадях буденовской и донской породы "Золотой пьедистал": мужчины/женщины (LL); мужчины/женщины на лошади до 6 лет; юноши/девушки 14-18 лет (LL).
          </p>
        </li>
        <li>
          <img src={require('./assets/7JJfjalFV0qltFPwyRV72qoifRPRqlHGOBI0-L4EVWNg2clbyI_XzcnslematqK4K6YZ4vREyQYSrlZ-EFVouhlV.jpg')} alt="Кубок Республики Татарстан" className="announcement-img" />
          <p>06 сентября 2024 Кубок Республики Татарстан по выездке</p>
        </li>
        <li>
          <img src={require('./assets/D60_3662.jpg')} alt="Осенний Кубок КСК Дивный" className="announcement-img" />
          <p>21 сентября 2024 Осенний Кубок КСК «Дивный» по конкуру</p>
        </li>
        <li>
          <img src={require('./assets/1000032518.jpg')} alt="Региональные соревнования по выездке" className="announcement-img" />
          <p>30 сентября 2024 Региональные соревнования по выездке</p>
        </li>
      </ul>
    </div>
    <div className="announcements">
      <h2>Анонсы событий</h2>
      <ul>
        <li>
          <img src={require('./assets/a-girl-with-a-horse-in-nature-an-autumn-walk-with-an-animal_215924-1238.jpg')} alt="Региональные соревнования по выездке" className="announcement-img" />
            <p>1. VIII Всероссийская выставка лошадей вятской породы "Золотая Вятка - 2024"
              // Главное породное событие в мире ВЯТОК.</p>
        </li>
        <li>
          <img src={require('./assets/1000032518.jpg')} alt="Региональные соревнования по выездке" className="announcement-img" />
            <p>2. Эко-продукты
            // Теперь Вы можете у нас не только отдохнуть, но и приобрести натуральные продукты, изготовленные жителями.</p>
        </li>
        <li>
          <img src={require('./assets/orig.jpg')} alt="Региональные соревнования по выездке" className="announcement-img" />
            <p>3. Светлая Масленица
            // Масленица - это прощание с зимой и встреча весны, несущей оживление в природе и солнечное тепло. Раньше верили, если в масляную неделю запрячь лошадь в сани, украсить цветными лентами и проехать по всей деревне, весна наступит быстрее.</p>
        </li>
        <li>
          <img src={require('./assets/33ff5023-0de1-4da0-b52a-1b957448c2ba.jpg')} alt="Региональные соревнования по выездке" className="announcement-img" />
            <p>4. Праздник Ивана Купала
            // 6-7 июля нас с вами ждет один из самых мистических и красивых праздников Ивана Купала. Начало в 19:00.</p>
        </li>
      </ul>
    </div>
  <Slider />
  </div>
);
// Страница с услугами
const ServicesPage = () => {
  const [filter, setFilter] = useState('');

  const services = [
    { id: 1, name: 'Конные прогулки по живописному лесу', price: '1200 руб.', img: require('./assets/00001_8145c731916529ce61c1a1a441f71ab5.jpg')},
    { id: 2, name: 'Обучение верховой езде для взрослых и детей от 2-х лет', price: '1500 руб.', img: require('./assets/6a5d61a0c77705837a1897a504238b02.jpg')},
    { id: 3, name: 'Фотосессии с лошадьми', price: '1000 руб.', img: require('./assets/e0aFQis78m8.jpg')},
    { id: 3, name: 'Экскурсии на конюшню', price: '800 руб.', img: require('./assets/mZRv9J6revTH0CNhXk9N6VG643ktyQMSnb5OCjNId8Eo2Q5YqQ7DZtTpTSzRM5HS9sjuxwTUqZvpngZh-DQOkGBW.jpg')},
    { id: 3, name: 'Подарочные сертификаты', price: '2000 руб.', img: require('./assets/thumb_1280__1296462536.jpg')}
  ];
  const filteredServices = services.filter(service => service.name.includes(filter));

  return (
    <div className="services-page">
      <h2>Наши услуги</h2>
      <div className="services-list">
        {filteredServices.map(service => (
          <div key={service.id} className="service-item">
          <img src={service.img} alt={service.name} className="service-img" />
            <h3>{service.name}</h3>
            <p>{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Страница "О клубе"
const AboutPage = () => (
  <div className="about-page"><h2>О клубе</h2>
    <p>Приходи и отдохни от суеты!</p>
    <h3>Конный клуб – не только самый крупный, но и один из самых популярных в Московской области.</h3>
    <div className="team">
      <div className="team-member">
        <p>Сегодня в хозяйстве 40 лошадей русской рысистой, тяжеловозной и вятской пород. Так же имеются козы, овцы, кролики, индюки, курицы, собаки.</p>
      </div>
      <div className="team-member">
        <p>Для особо искушенных туристов есть русская баня, родниковая купель и веревочный троллей.</p>
      </div>
      <div className="team-member">
        <p>Верховая езда – это настоящая панацея для современного общества, в жизни которого преобладает сидячий образ жизни, повышенные умственные нагрузки, работа с гаджетами. А еще – это профилактика и лечение многих болезней, снятие стресса, чувства тревоги, психологическая разгрузка.</p>
      </div>
      <div className="team-member">
        <h3>Белова Светлана</h3>
        <p>Опыт работы с лошадьми более 15 лет.</p>
        <p>Училась в Московской конно-спортивной школе.</p>
      <img src={require('./assets/a-girl-with-a-horse-in-nature-an-autumn-walk-with-an-animal_215924-1238.jpg')} className="service-img" />
      </div>
      <div className="team-member">
        <h3>Вольхина Александра</h3>
        <p>Работает с лошадьми более 12 лет. Училась в Московской школе наездников. Тренер-наездник лошадей, инструктор верховой езды. Квалификации: наездник 3 категории.</p>
        <img src={require('./assets/woman-walking-with-a-horse-in-the-countryside_23-2148200933.jpg')} className="service-img" />
      </div>
      <div className="team-member">
        <h3>Лекомцев Роман</h3>
        <p>Опыт работы с лошадьми более 15 лет.</p>
        <img src={require('./assets/close-up-on-farmer-with-beautiful-horse_23-2149140364.jpg')} className="service-img" />
      </div>
        </div>
  </div>
);
// Страница с формой онлайн-записи
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Запись подтверждена для ${formData.name} на ${formData.date}`);
    // Добавить отправку формы и подтверждение по email
  };

  return (
    <div className="booking-form">
      <h2>Запись на занятия</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ваше имя:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Выберите дату:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email для подтверждения:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit">Записаться</button>
      </form>
    </div>
  );
};

// Страница с мероприятиями
const EventsPage = ({ onAddBooking }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBooking({ event: selectedEvent, name: formData.name, email: formData.email });
    alert(`Запись подтверждена на мероприятие: ${selectedEvent} для ${formData.name}`);
    setSelectedEvent(null); // Сброс выбранного мероприятия после записи
  };

  return (
    <div className="events-page">
      <h2>Предстоящие мероприятия</h2>
      <div className="calendar">
        <div>
          <img src={require('./assets/12130.jpg')} className="service-img" alt="Event 1" />
          <p>
            01 сентября 2024
            Всероссийские физкультурные соревнования по конкуру для всадников на лошадях буденовской и донской породы "Золотой пьедестал": мужчины/женщины (LL); мужчины/женщины на лошади до 6 лет; юноши/девушки 14-18 лет (LL).
          </p>
          <button onClick={() => handleRegisterClick('Всероссийские соревнования по конкуру')} className="register-button">
            Записаться
          </button>
        </div>

        <div>
          <img src={require('./assets/7JJfjalFV0qltFPwyRV72qoifRPRqlHGOBI0-L4EVWNg2clbyI_XzcnslematqK4K6YZ4vREyQYSrlZ-EFVouhlV.jpg')} className="service-img" alt="Event 2" />
          <p>06 сентября 2024 Кубок Республики Татарстан по выездке</p>
          <button onClick={() => handleRegisterClick('Кубок Республики Татарстан по выездке')} className="register-button">
            Записаться
          </button>
        </div>

        <div>
          <img src={require('./assets/D60_3662.jpg')} className="service-img" alt="Event 3" />
          <p>21 сентября 2024 Осенний Кубок КСК «Дивный» по конкуру</p>
          <button onClick={() => handleRegisterClick('Осенний Кубок КСК «Дивный» по конкуру')} className="register-button">
            Записаться
          </button>
        </div>

        <div>
          <img src={require('./assets/1000032518.jpg')} className="service-img" alt="Event 4" />
          <p>30 сентября 2024 Региональные соревнования по выездке</p>
          <button onClick={() => handleRegisterClick('Региональные соревнования по выездке')} className="register-button">
            Записаться
          </button>
        </div>
      </div>

      {selectedEvent && (
        <div className="registration-form">
          <h3>Запись на мероприятие: {selectedEvent}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Ваше имя:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email для подтверждения:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Подтвердить запись</button>
          </form>
        </div>
      )}
    </div>
  );
};

// Страница с контактами
const ContactPage = () => (
  <div className="contact-page">
    <h2>Контакты</h2>
    <p>село Зеленое</p>
    <p>Московская область</p>
    <p>ул. Первомайская, 77</p>
    <p>Телефон: +7 922 525 07 07</p>
    <img src={require('./assets/98645.png')} />
    <div className="feedback-form">
      <h3>Форма обратной связи</h3>
      <form>
        <label>Ваше сообщение:</label>
        <textarea required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
);

// Личный кабинет пользователя
const UserProfile = ({ bookings }) => {
  const [user, setUser] = useState({
    name: 'Имя пользователя',
    email: 'email@example.com'
  });

  return (
    <div className="user-profile">
      <h2>Личный Кабинет</h2>
      <form>
        <div className="form-group">
          <label>Имя:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button type="submit">Сохранить изменения</button>
      </form>

      <h3>История записей</h3>
      <ul>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <li key={index}>
              Запись на {booking.event} для {booking.name} (Email: {booking.email})
            </li>
          ))
        ) : (
          <li>Записей нет</li>
        )}
      </ul>
    </div>
  );
};

// Основной компонент приложения
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [bookings, setBookings] = useState([]); // Состояние для хранения записей

  // Функция для добавления новой записи в историю
  const handleAddBooking = (newBooking) => {
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };

  // Рендер страницы в зависимости от текущего состояния
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'booking':
        return <BookingForm />;
      case 'events':
        return <EventsPage onAddBooking={handleAddBooking} />; // Передаём функцию для записи
      case 'contact':
        return <ContactPage />;
      case 'profile':
        return <UserProfile bookings={bookings} />; // Передаём записи в личный кабинет
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <nav>
        <ul>
          <li onClick={() => setCurrentPage('home')}>Главная</li>
          <li onClick={() => setCurrentPage('services')}>Услуги</li>
          <li onClick={() => setCurrentPage('about')}>О клубе</li>
          <li onClick={() => setCurrentPage('booking')}>Запись</li>
          <li onClick={() => setCurrentPage('events')}>Мероприятия</li>
          <li onClick={() => setCurrentPage('contact')}>Контакты</li>
          <li onClick={() => setCurrentPage('profile')}>Личный кабинет</li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;
