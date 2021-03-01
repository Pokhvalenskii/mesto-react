import Header from '../components/Header.js';
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'
import PopupWithForm from '../components/PopupWithForm.js'
import ImagePopup from '../components/ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from './AddPlacePopup.js';
import { useState, useEffect } from 'react';

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cardInfo, setCardInfo] = useState({});
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    initUser();
  }, []);

  function initUser() {
    api.getInitialUser()
    .then(res => {
      setCurrentUser(res);
    }).catch(error => console.log(`${error}`));
  }

  const handleUpdateUser = (data) => {
    api.editProfile(data.name, data.about)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups();
      }).catch(error => console.log(`${error}`))
  }

  const handleUpdateAvatar = (url) => {
    api.editAvatar(url)
      .then(() => {
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

  //////////////////// CARDS //////////////////////

  function handleCardDelete (card) {
    api.deleteCard(card._id)
        .then(() => {
          setCards(cards.filter(item => item._id !== card._id))
        }).catch(error => console.log(`${error}`))
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if(!isLiked) {
      api.like(card._id)
      .then((newCard) => {
        const newCards = cards.map((item) => item._id === card._id ? newCard : item);
        setCards(newCards);
      }).catch(error => console.log(`${error}`))
    } else {
      api.removeLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((item) => item._id === card._id ? newCard : item);
          setCards(newCards)
        }).catch(error => console.log(`${error}`))
    }
  }

  const [cards, setCards] = useState([]);

  function initCards() {
    api.getInitialCards()
      .then(res => {
        setCards(res);
      }).catch(error => console.log(`${error}`))
  }

  useEffect(() => {
    initCards();
  },[]);

  function handleAddCard(card) {
    api.addCard(card.name, card.link)
      .then(() => {
        initCards();
        closeAllPopups();
      }).catch(error => console.log(`${error}`))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        <Header />
        <Main
        cards={cards}
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}

        handleCardClick={handleCardClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} updateAvatar={handleUpdateAvatar}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} handleAddCard={handleAddCard}/>
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
