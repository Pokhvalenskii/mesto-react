// import logo from './logo.svg';
// import './App.css';
import avatar from './images/avatar.jpg'
import logo from './images/logo.svg'

function App() {
  return (
    <div className='root'>
      <header class="header">
        <img class="header__logo-image" src={logo} alt="Mesto Логотип"></img>
      </header>
      <main>
        <section class="profile">
          <img class="profile__avatar-image" src={avatar} alt="Аватар"/>
          <div class="profile__info">
            <div class="profile__wrapper">
              <h1 class="profile__person-name">Жак-Ив Кусто</h1>
              <button type="button" class="profile__btn-edit"></button>
            </div>
            <p class="profile__person-status">Исследователь океана</p>
          </div>
          <button class="profile__btn-add" type="button"></button>
        </section>
        <section class="cards"></section>
        <section class="popup popup-profile">
          <div class="popup__overlay"></div>
          <div class="popup-profile__wrapper">
            <button type="button" class="popup__btn-close"></button>
            <div class="popup-profile__content">
              <h2 class="popup-profile__title">Редактировать профиль</h2>
              <form class="popup__form" name="popupform" novalidate>
                <input id="edit-name" class="popup__input popup__input_place_up" type="text" minlength="2" maxlength="40" name="person_name" placeholder="Имя" required/>
                <span id="edit-name-error" class="error"></span>
                <input id="edit-status" class="popup__input popup__input_place_down" type="text" minlength="2" maxlength="200" name="person_status" placeholder="Статус" required/>
                <span id="edit-status-error" class="error"></span>
                <button class="popup__btn-save popup__btn-save_state_valid" type="submit">Сохранить</button>
              </form>
            </div>
          </div>
        </section>
        <section class="popup popup-add-card">
          <div class="popup__overlay"></div>
          <div class="popup-add-card__wrapper">
            <button type="button" class="popup__btn-close"></button>
            <div class="popup-add-card__content">
              <h2 class="popup-add-card__title">Новое место</h2>
              <form class="popup__form" name="popupform" novalidate>
                <input id="add-name" class="popup__input popup__input_place_up" type="text" minlength="2" maxlength="30" name="cardName" placeholder="Название" required/>
                <span id="add-name-error" class="error"></span>
                <input id="add-url" class="popup__input popup__input_place_down" type="url" name="cardLink" placeholder="Ссылка на картинку" required/>
                <span id="add-url-error" class="error"></span>
                <button class="popup__btn-save  popup__btn-save_state_invalid" type="submit">Создать</button>
              </form>
            </div>
          </div>
        </section>
        <section class="popup popup-delete-card">
          <div class="popup__overlay"></div>
          <div class="popup-delete-card__wrapper">
            <button class="popup__btn-close"></button>
            <div class="popup-delete-card__content">
              <p class="popup-delete-card__title">Вы уверены?</p>
              <form class="popup__form">
                <button class="popup__btn-save popup__btn-save_state_valid" type="submit">Да</button>
              </form>
            </div>
          </div>
        </section>
        <section class="popup popup-profile-edit">
          <div class="popup__overlay"></div>
          <div class="popup-profile-edit__wrapper">
            <button class="popup__btn-close"></button>
            <div class="popup-profile-edit__content">
              <p class="popup-profile-edit__title">Обновить аватар</p>
              <form class="popup__form">
                <input id="add-urle" class="popup__input popup__input_place_up" type="url" name="ImageLink" placeholder="Ссылка на картинку" required/>
                <span id="add-urle-error" class="error"></span>
                <button class="popup__btn-save popup__btn-save_state_valid" type="submit">Да</button>
              </form>
            </div>
          </div>
        </section>
        <section class="popup popup-img">
          <div class="popup__overlay"></div>
          <div class="popup-img__wrapper">
            <button class="popup__btn-close"></button>
            <img class="popup-img__image" src="/" alt="картинка"/>
            <p class="popup-img__subtitle"></p>
          </div>
        </section>
      </main>
      <footer class="footer">
        <p class="footer__copyrigth">&copy; 2020 Mesto Russia</p>
      </footer>
      <template id="tempCard">
        <article class="card">
          <div class="card__image-wrapper">
            <img class="card__image" src="/" alt=" "/>
          </div>
          <div class="card__text-wrapper">
            <h2 class="card__text"></h2>
            <div class="card__wrapper-for-likes">
              <button class="card__btn-like" type="button" aria-label="like"></button>
              <p class="card__counter-likes">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
