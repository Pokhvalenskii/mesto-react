import Header from '../components/Header.js';
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'
import { useState } from 'react';

function App() {


  const [popupAdd, setPopupAdd] = useState(false);
  const [popupEdit, setPopupEdit] = useState(false);
  const [avatarEdit, setAvatarEdit] = useState(false);


  const showPopupAdd = () => {
    setPopupAdd(true);
    console.log('popupAdd state - ', popupAdd)
  }

  const showPopupEdit = () => {
    // document.querySelector('.popup-profile').classList.add('popup_active');
    setPopupEdit(true);
    console.log('showEditPopup')
  }

  const showAvatarEdit = () => {
    // document.querySelector('.popup-profile-edit').classList.add('popup_active');
    setAvatarEdit(true);
    console.log('showEditPopup')
  }

  const closeAllPopups = () => {
    setPopupAdd(false)
    setPopupEdit(false)
    setAvatarEdit(false)
  }

  return (
    <div className='root'>
      <Header />
      <Main
      showPopupAdd={showPopupAdd}
      showPopupEdit={showPopupEdit}
      showAvatarEdit={showAvatarEdit}
      isOpenAdd={popupAdd}
      isOpenProfileEdit={popupEdit}
      isOpenAvatarEdit={avatarEdit}
      onClose={closeAllPopups}/>

      <Footer />
      <template id="tempCard">
        <article className="card">
          <div className="card__image-wrapper">
            <img className="card__image" src="/" alt=" "/>
          </div>
          <div className="card__text-wrapper">
            <h2 className="card__text"></h2>
            <div className="card__wrapper-for-likes">
              <button className="card__btn-like" type="button" aria-label="like"></button>
              <p className="card__counter-likes">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
