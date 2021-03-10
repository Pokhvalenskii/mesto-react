import Header from '../components/Header.js';
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'
import ImagePopup from '../components/ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from './AddPlacePopup.js';
import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.js';

import Login from './Login.js';
import Register from './Register.js';




function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cardInfo, setCardInfo] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInitialUser(), api.getInitialCards()])
    .then(value => {
      setCurrentUser(value[0])
      setCards(value[1])
    }).catch(error => console.log(`${error}`));
  }, []);

  const handleUpdateUser = (data) => {
    api.editProfile(data.name, data.about)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups();
      }).catch(error => console.log(`${error}`))
  }

  const handleUpdateAvatar = (url) => {
    api.editAvatar(url)
      .then((res) => {
        closeAllPopups();
        // console.log('RES', res)
        setCurrentUser(res);
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

  function handleAddCard(card) {
    api.addCard(card.name, card.link)
      .then((res) => {
        setCards([res, ...cards])
        closeAllPopups();
      }).catch(error => console.log(`${error}`))
  }
  const loggedIn = false;

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute exact path='/' loggedIn={loggedIn}>
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
              <ImagePopup onClose={closeAllPopups} isOpen={selectedCard} cardData={cardInfo}/>
              <Footer />
            </div>
          </ProtectedRoute>
          <Route path='/sign-in'><Register /></Route>
          <Route path='/sign-up'><Login /></Route>
        </Switch>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
