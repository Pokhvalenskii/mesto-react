import Header from '../components/Header.js';
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'
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

  // console.log('card info: ' ,cardInfo);
  // const test = (param) => {
  //   // console.log('param', param)
  // }

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
      // test={test}
      handleCardClick={handleCardClick}
      card={selectedCard}
      cardData={cardInfo}
      // showImage={showImage}
      onAddPlace={handleAddPlaceClick}
      onEditProfile={handleEditProfileClick}
      onEditAvatar={handleEditAvatarClick}
      isOpenImage={selectedCard}
      isOpenAdd={isAddPlacePopupOpen}
      isOpenProfileEdit={isEditProfilePopupOpen}
      isOpenAvatarEdit={isEditAvatarPopupOpen}
      onClose={closeAllPopups}/>
      <Footer />
    </div>
  );
}

export default App;
