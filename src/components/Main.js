import avatar from '../images/avatar.jpg'
// import PopupWithForm from '../components/PopupWithForm.js'
// import ImagePopup from '../components/ImagePopup.js';
import Card from '../components/Card.js'
import { useEffect, useState } from 'react';
import api from '../utils/api.js';

function Main (props) {

  const [userName, setUserName] = useState('');
  const [userDescription , setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

// ==== NEW === //

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getInitialUser()
      .then(res => {
        console.log('GET USER: ',res);
        setCurrentUser(res);
        // console.log(currentUser);
      }).catch(error => console.log(`${error}`));
  }, []);
//////////////////

  useEffect(() => {
    api.getInitialUser()
      .then(res => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      }).catch(error => console.log(`${error}`))
    api.getInitialCards()
      .then(res => {
        setCards(res);
      }).catch(error => console.log(`${error}`))
  },[]);

  return(
    <main>
      <section className="profile">
        <img className="profile__avatar-image" src={userAvatar} onClick={props.onEditAvatar} alt="Аватар"/>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__person-name">{userName}</h1>
            <button type="button" className="profile__btn-edit" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__person-status">{userDescription}</p>
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