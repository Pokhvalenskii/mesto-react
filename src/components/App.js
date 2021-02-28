import Header from '../components/Header.js';
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'
import PopupWithForm from '../components/PopupWithForm.js'
import ImagePopup from '../components/ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import { useState, useEffect } from 'react';

function App() {


  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cardInfo, setCardInfo] = useState({});
  const [currentUser, setCurrentUser] = useState('');

  console.log('USER CURRENT: ',currentUser);
  useEffect(() => {
    initUser();
  }, []);

  function initUser() {
    api.getInitialUser()
    .then(res => {
      console.log('GET USER: ',res);
      setCurrentUser(res);
    }).catch(error => console.log(`${error}`));
  }

  const handleUpdateUser = (data) => {
    api.editProfile(data.name, data.about)
      .then((res) => {
        console.log('RESULT' ,res)
        setCurrentUser(res)
        closeAllPopups();
      }).catch(error => console.log(`${error}`))
  }

  const handleUpdateAvatar = (url) => {
    api.editAvatar(url)
      .then(() => {
        console.log('Uploaded')
        closeAllPopups();
        initUser();
      }).catch(error => console.log(`${error}`))
  }

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
    <CurrentUserContext.Provider value={currentUser}>
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

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} updateAvatar={handleUpdateAvatar}/>


        <PopupWithForm name='popup-delete-card' title='Вы уверены?'>
          <form className="popup__form">
            <button className="popup__btn-save popup__btn-save_state_valid" type="submit">Да</button>
          </form>
        </PopupWithForm>
        <ImagePopup onClose={closeAllPopups} isOpen={selectedCard} cardData={cardInfo}/>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
