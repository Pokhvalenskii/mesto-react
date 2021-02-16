import Header from '../components/Header.js';
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'
import PopupWithForm from '../components/PopupWithForm.js'
import ImagePopup from '../components/ImagePopup.js';

import { useState } from 'react';

function App() {


  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cardInfo, setCardInfo] = useState({});

  const handleCardClick = (link, name) => {
    setSelectedCard(true);
    setCardInfo({
      link: link,
      name: name})
  }
  
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(false)
  }

  return (
    <div className='root'>
      <Header />
      <Main
      handleCardClick={handleCardClick}
      onAddPlace={handleAddPlaceClick}
      onEditProfile={handleEditProfileClick}
      onEditAvatar={handleEditAvatarClick}
      />
      <PopupWithForm
      name='popup-add-card'
      title='Новое место'
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}>
        <form className="popup__form" name="popupform" noValidate>
          <input id="add-name" className="popup__input popup__input_place_up" type="text" minLength="2" maxLength="30" name="cardName" placeholder="Название" required/>
          <span id="add-name-error" className="error"></span>
          <input id="add-url" className="popup__input popup__input_place_down" type="url" name="cardLink" placeholder="Ссылка на картинку" required/>
          <span id="add-url-error" className="error"></span>
          <button className="popup__btn-save  popup__btn-save_state_invalid" type="submit">Создать</button>
        </form>
      </PopupWithForm>
      <PopupWithForm
      name='popup-profile'
      title='Редактировать профиль'
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}>
        <form className="popup__form" name="popupform" noValidate>
          <input id="edit-name" className="popup__input popup__input_place_up" type="text" minLength="2" maxLength="40" name="person_name" placeholder="Имя" required/>
          <span id="edit-name-error" className="error"></span>
          <input id="edit-status" className="popup__input popup__input_place_down" type="text" minLength="2" maxLength="200" name="person_status" placeholder="Статус" required/>
          <span id="edit-status-error" className="error"></span>
          <button className="popup__btn-save popup__btn-save_state_valid" type="submit">Сохранить</button>
        </form>
      </PopupWithForm>
      <PopupWithForm
      name='popup-profile-edit'
      title='Обновить аватар'
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}>
        <form className="popup__form">
          <input id="add-urle" className="popup__input popup__input_place_up" type="url" name="ImageLink" placeholder="Ссылка на картинку" required/>
          <span id="add-urle-error" className="error"></span>
          <button className="popup__btn-save popup__btn-save_state_valid" type="submit">Да</button>
        </form>
      </PopupWithForm>
      <PopupWithForm name='popup-delete-card' title='Вы уверены?'>
        <form className="popup__form">
          <button className="popup__btn-save popup__btn-save_state_valid" type="submit">Да</button>
        </form>
      </PopupWithForm>
      <ImagePopup onClose={closeAllPopups} isOpen={selectedCard} cardData={cardInfo}/>
      <Footer />
    </div>
  );
}

export default App;
