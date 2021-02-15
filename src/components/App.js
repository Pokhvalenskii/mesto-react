import Header from '../components/Header.js';
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'
import { useState } from 'react';

function App() {


  const [popupAdd, setPopupAdd] = useState(false);
  const [popupEdit, setPopupEdit] = useState(false);
  const [avatarEdit, setAvatarEdit] = useState(false);
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

  const showPopupAdd = () => {
    setPopupAdd(true);
  }

  const showPopupEdit = () => {
    setPopupEdit(true);
  }

  const showAvatarEdit = () => {
    setAvatarEdit(true);
  }

  const closeAllPopups = () => {
    setPopupAdd(false)
    setPopupEdit(false)
    setAvatarEdit(false)
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
      showPopupAdd={showPopupAdd}
      showPopupEdit={showPopupEdit}
      showAvatarEdit={showAvatarEdit}
      isOpenImage={selectedCard}
      isOpenAdd={popupAdd}
      isOpenProfileEdit={popupEdit}
      isOpenAvatarEdit={avatarEdit}
      onClose={closeAllPopups}/>
      <Footer />
    </div>
  );
}

export default App;
