import avatar from '../images/avatar.jpg'
// import PopupWithForm from '../components/PopupWithForm.js'
// import ImagePopup from '../components/ImagePopup.js';
import Card from '../components/Card.js'
import { useEffect, useState, useContext } from 'react';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function Main (props) {

  const currentUser = useContext(CurrentUserContext)
  // console.log("context: ", currentUser);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(res);
      }).catch(error => console.log(`${error}`))
  },[]);

  return(
    <main>
      <section className="profile">
        <img className="profile__avatar-image" src={currentUser.avatar} onClick={props.onEditAvatar} alt="Аватар"/>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__person-name">{currentUser.name}</h1>
            <button type="button" className="profile__btn-edit" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__person-status">{currentUser.about}</p>
        </div>
        <button className="profile__btn-add"  type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        {cards.map(item => (<Card key={item._id}
        isOpen={props.showImage}
        onCardClick={props.handleCardClick}
        {...item}/>)
        )}
      </section>
    </main>
  )
}

export default Main;