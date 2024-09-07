import React, { useState } from 'react';
import './styles/main.css';

// Компонент слайдера для главной страницы
const Slider = () => (
  <div className="slider">
    <div className="slider-container">
      <img src={require('./assets/images_1.jpg')} className="slider-img" alt="Slide 1" />
      <img src={require('./assets/images_2.jpg')} className="slider-img" alt="Slide 2" />
      <img src={require('./assets/images_3.jpg')} className="slider-img" alt="Slide 3" />
      <img src={require('./assets/images.jpg')} className="slider-img" alt="Slide 4" />
    </div>
  </div>
);
// Главная страница
const HomePage = () => (
  <div className="homepage">
    <h1 className="homepage-title">Приходи и отдохни от суеты!</h1>
    <p className="homepage-description">
      Конный клуб – не только самый крупный, но и один из самых популярных в Московской области.
    </p>
    <p className="homepage-description">
      Сегодня в хозяйстве 40 лошадей русской рысистой, тяжеловозной и вятской пород. Также имеются козы, овцы, кролики, индюки, курицы, собаки.
    </p>
    <p className="homepage-description">
      Для особо искушенных туристов есть русская баня, родниковая купель и веревочный троллей.
    </p>
    <p className="homepage-description">
      Верховая езда – это настоящая панацея для современного общества, в жизни которого преобладает сидячий образ жизни, повышенные умственные нагрузки, работа с гаджетами. А еще – это профилактика и лечение многих болезней, снятие стресса, чувства тревоги, психологическая разгрузка.
    </p>

    <div className="section announcements">
      <h2>Мероприятия</h2>
      <ul className="announcement-list">
        <li className="announcement-item">
          <img src={require('./assets/12130.jpg')} alt="Всероссийские соревнования по конкуру" className="announcement-img" />
          <p>
            01 сентября 2024 Всероссийские физкультурные соревнования по конкуру для всадников на лошадях буденовской и донской породы.
          </p>
        </li>
        <li className="announcement-item">
          <img src={require('./assets/7JJfjalFV0qltFPwyRV72qoifRPRqlHGOBI0-L4EVWNg2clbyI_XzcnslematqK4K6YZ4vREyQYSrlZ-EFVouhlV.jpg')} alt="Кубок Республики Татарстан" className="announcement-img" />
          <p>06 сентября 2024 Кубок Республики Татарстан по выездке</p>
        </li>
        <li className="announcement-item">
          <img src={require('./assets/D60_3662.jpg')} alt="Осенний Кубок КСК Дивный" className="announcement-img" />
          <p>21 сентября 2024 Осенний Кубок КСК «Дивный» по конкуру</p>
        </li>
        <li className="announcement-item">
          <img src={require('./assets/1000032518.jpg')} alt="Региональные соревнования по выездке" className="announcement-img" />
          <p>30 сентября 2024 Региональные соревнования по выездке</p>
        </li>
      </ul>
    </div>

    <div className="section announcements">
      <h2>Анонсы событий</h2>
      <ul className="announcement-list">
        <li className="announcement-item">
          <img src={require('./assets/a-girl-with-a-horse-in-nature-an-autumn-walk-with-an-animal_215924-1238.jpg')} alt="Выставка лошадей" className="announcement-img" />
          <p>VIII Всероссийская выставка лошадей вятской породы "Золотая Вятка - 2024"</p>
        </li>
        <li className="announcement-item">
          <img src={require('./assets/1000032518.jpg')} alt="Эко-продукты" className="announcement-img" />
          <p>Теперь Вы можете приобрести натуральные продукты, изготовленные местными жителями.</p>
        </li>
        <li className="announcement-item">
          <img src={require('./assets/orig.jpg')} alt="Светлая Масленица" className="announcement-img" />
          <p>Светлая Масленица — прощание с зимой и встреча весны.</p>
        </li>
        <li className="announcement-item">
          <img src={require('./assets/33ff5023-0de1-4da0-b52a-1b957448c2ba.jpg')} alt="Праздник Ивана Купала" className="announcement-img" />
          <p>6-7 июля 2024 — праздник Ивана Купала.</p>
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
    { id: 4, name: 'Экскурсии на конюшню', price: '800 руб.', img: require('./assets/mZRv9J6revTH0CNhXk9N6VG643ktyQMSnb5OCjNId8Eo2Q5YqQ7DZtTpTSzRM5HS9sjuxwTUqZvpngZh-DQOkGBW.jpg')},
    { id: 5, name: 'Подарочные сертификаты', price: '2000 руб.', img: require('./assets/thumb_1280__1296462536.jpg')}
  ];

  const filteredServices = services.filter(service => service.name.includes(filter));

  return (
    <div className="services-container">
      <h2 className="services-title">Наши услуги</h2>
      <div className="services-grid">
        {filteredServices.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.img} alt={service.name} className="service-image" />
            <h3 className="service-name">{service.name}</h3>
            <p className="service-price">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Страница "О клубе"
const AboutPage = () => (
  <div className="about-page">
    <div className="about-intro">
      <h2>О клубе</h2>
      <p className="about-text">Приходи и отдохни от суеты!</p>
      <h3 className="about-highlight">Конный клуб – не только самый крупный, но и один из самых популярных в Московской области.</h3>
    </div>

    <div className="team">
      <div className="team-info">
        <h3>О клубе</h3>
        <p>Сегодня в хозяйстве 40 лошадей русской рысистой, тяжеловозной и вятской пород. Также имеются козы, овцы, кролики, индюки, курицы, собаки. Для особо искушенных туристов есть русская баня, родниковая купель и веревочный троллей.</p>
        <p>Верховая езда – это настоящая панацея для современного общества, в жизни которого преобладает сидячий образ жизни, повышенные умственные нагрузки, работа с гаджетами.</p>
      </div>

      <h3>Наша команда</h3>
      <div className="team-grid">
        <div className="team-member">
          <img src={require('./assets/a-girl-with-a-horse-in-nature-an-autumn-walk-with-an-animal_215924-1238.jpg')} className="team-img" alt="Белова Светлана" />
          <h4>Белова Светлана</h4>
          <p>Опыт работы с лошадьми более 15 лет.</p>
          <p>Училась в Московской конно-спортивной школе.</p>
        </div>

        <div className="team-member">
          <img src={require('./assets/woman-walking-with-a-horse-in-the-countryside_23-2148200933.jpg')} className="team-img" alt="Вольхина Александра" />
          <h4>Вольхина Александра</h4>
          <p>Работает с лошадьми более 12 лет.</p>
          <p>Тренер-наездник лошадей, инструктор верховой езды.</p>
        </div>

        <div className="team-member">
          <img src={require('./assets/close-up-on-farmer-with-beautiful-horse_23-2149140364.jpg')} className="team-img" alt="Лекомцев Роман" />
          <h4>Лекомцев Роман</h4>
          <p>Опыт работы с лошадьми более 15 лет.</p>
        </div>
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
    <div className="booking-form-container">
      <h2 className="booking-title">Запись на занятия</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ваше имя:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Выберите дату:</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email для подтверждения:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="booking-button">Записаться</button>
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
    <div className="events-container">
      <h2 className="events-title">Предстоящие мероприятия</h2>
      <div className="events-list">
        <div className="event-item">
          <img src={require('./assets/12130.jpg')} className="event-image" alt="Event 1" />
          <p className="event-description">
            01 сентября 2024
            Всероссийские физкультурные соревнования по конкуру для всадников на лошадях буденовской и донской породы "Золотой пьедестал".
          </p>
          <button onClick={() => handleRegisterClick('Всероссийские соревнования по конкуру')} className="event-button">
            Записаться
          </button>
        </div>

        <div className="event-item">
          <img src={require('./assets/7JJfjalFV0qltFPwyRV72qoifRPRqlHGOBI0-L4EVWNg2clbyI_XzcnslematqK4K6YZ4vREyQYSrlZ-EFVouhlV.jpg')} className="event-image" alt="Event 2" />
          <p className="event-description">06 сентября 2024 Кубок Республики Татарстан по выездке</p>
          <button onClick={() => handleRegisterClick('Кубок Республики Татарстан по выездке')} className="event-button">
            Записаться
          </button>
        </div>

        <div className="event-item">
          <img src={require('./assets/D60_3662.jpg')} className="event-image" alt="Event 3" />
          <p className="event-description">21 сентября 2024 Осенний Кубок КСК «Дивный» по конкуру</p>
          <button onClick={() => handleRegisterClick('Осенний Кубок КСК «Дивный» по конкуру')} className="event-button">
            Записаться
          </button>
        </div>

        <div className="event-item">
          <img src={require('./assets/1000032518.jpg')} className="event-image" alt="Event 4" />
          <p className="event-description">30 сентября 2024 Региональные соревнования по выездке</p>
          <button onClick={() => handleRegisterClick('Региональные соревнования по выездке')} className="event-button">
            Записаться
          </button>
        </div>
      </div>

      {selectedEvent && (
        <div className="registration-form">
          <h3 className="form-title">Запись на мероприятие: {selectedEvent}</h3>
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
            <button type="submit" className="form-submit-button">Подтвердить запись</button>
          </form>
        </div>
      )}
    </div>
  );
};

// Страница с контактами
const ContactPage = () => (
  <div className="contact-container">
    <h2 className="contact-title">Контакты</h2>
    <div className="contact-info">
      <p>село Зеленое</p>
      <p>Московская область</p>
      <p>ул. Первомайская, 77</p>
      <p>Телефон: +7 922 525 07 07</p>
      <img src={require('./assets/98645.png')} alt="Карта местоположения" className="contact-map" />
    </div>

    <div className="feedback-section">
      <h3 className="feedback-title">Форма обратной связи</h3>
      <form className="feedback-form">
        <div className="form-group">
          <label htmlFor="message">Ваше сообщение:</label>
          <textarea id="message" required></textarea>
        </div>
        <button type="submit" className="feedback-button">Отправить</button>
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
    <div className="profile-container">
      <h2 className="profile-title">Личный Кабинет</h2>

      <div className="profile-section">
        <h3>Данные пользователя</h3>
        <form className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <button type="submit" className="profile-button">Сохранить изменения</button>
        </form>
      </div>

      <div className="bookings-section">
        <h3>История записей</h3>
        {bookings.length > 0 ? (
          <ul className="bookings-list">
            {bookings.map((booking, index) => (
              <li key={index} className="booking-item">
                <strong>Запись на:</strong> {booking.event} <br />
                <strong>Имя:</strong> {booking.name} <br />
                <strong>Email:</strong> {booking.email}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-bookings">Записей нет</p>
        )}
      </div>
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
