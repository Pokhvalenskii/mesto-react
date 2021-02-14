import avatar from '../images/avatar.jpg'
import PopupWithForm from '../components/PopupWithForm.js'
import ImagePopup from '../components/ImagePopup.js';
// const addBnt = document.querySelector('.profile__btn-add');

function Main () {

  const showPopupAdd = () => {
    document.querySelector('.popup-add-card').classList.add('popup_active');
    console.log('showAddPopup')
  }

  const showPopupEdit = () => {
    document.querySelector('.popup-profile').classList.add('popup_active');
    console.log('showEditPopup')
  }

  const showAvatarEdit = () => {
    document.querySelector('.popup-profile-edit').classList.add('popup_active');
    console.log('showEditPopup')
  }

  return(
    <main>
      <section className="profile">
        <img className="profile__avatar-image" src={avatar} onClick={showAvatarEdit} alt="Аватар"/>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__person-name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__btn-edit" onClick={showPopupEdit}></button>
          </div>
          <p className="profile__person-status">Исследователь океана</p>
        </div>
        <button className="profile__btn-add"  type="button" onClick={showPopupAdd}></button>
      </section>
      <section className="cards"></section>

      <PopupWithForm name='popup-profile' title='Редактировать профиль'>
        <form className="popup__form" name="popupform" noValidate>
          <input id="edit-name" className="popup__input popup__input_place_up" type="text" minLength="2" maxLength="40" name="person_name" placeholder="Имя" required/>
          <span id="edit-name-error" className="error"></span>
          <input id="edit-status" className="popup__input popup__input_place_down" type="text" minLength="2" maxLength="200" name="person_status" placeholder="Статус" required/>
          <span id="edit-status-error" className="error"></span>
          <button className="popup__btn-save popup__btn-save_state_valid" type="submit">Сохранить</button>
        </form>
      </PopupWithForm>

      <PopupWithForm name='popup-add-card' title='Новое место'>
        <form className="popup__form" name="popupform" noValidate>
          <input id="add-name" className="popup__input popup__input_place_up" type="text" minLength="2" maxLength="30" name="cardName" placeholder="Название" required/>
          <span id="add-name-error" className="error"></span>
          <input id="add-url" className="popup__input popup__input_place_down" type="url" name="cardLink" placeholder="Ссылка на картинку" required/>
          <span id="add-url-error" className="error"></span>
          <button className="popup__btn-save  popup__btn-save_state_invalid" type="submit">Создать</button>
        </form>
      </PopupWithForm>

      <PopupWithForm name='popup-delete-card' title='Вы уверены?'>
        <form className="popup__form">
          <button className="popup__btn-save popup__btn-save_state_valid" type="submit">Да</button>
        </form>
      </PopupWithForm>

      <PopupWithForm name='popup-profile-edit' title='Обновить аватар'>
        <form className="popup__form">
          <input id="add-urle" className="popup__input popup__input_place_up" type="url" name="ImageLink" placeholder="Ссылка на картинку" required/>
          <span id="add-urle-error" className="error"></span>
          <button className="popup__btn-save popup__btn-save_state_valid" type="submit">Да</button>
        </form>
      </PopupWithForm>
      <ImagePopup />
    </main>
  )
}

export default Main;