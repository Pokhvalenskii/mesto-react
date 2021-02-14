import avatar from '../images/avatar.jpg'
import PopupWithForm from '../components/PopupWithForm.js'
import ImagePopup from '../components/ImagePopup.js';
import Card from '../components/Card.js'
import { useEffect, useState } from 'react';
import { api } from '../utils/Api.js';

function Main (props) {

  const [userName, setUserName] = useState('');
  const [userDescription , setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialUser()
      .then(res => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
  },[]);
  // console.log('UserName: ', userName)
  // console.log('UserAbout: ', userDescription)
  // console.log('UserAvatar: ', userAvatar)
  // console.log('CardsArray: ', cards)


  return(
    <main>
      <section className="profile">
        <img className="profile__avatar-image" src={userAvatar} onClick={props.showAvatarEdit} alt="Аватар"/>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__person-name">{userName}</h1>
            <button type="button" className="profile__btn-edit" onClick={props.showPopupEdit}></button>
          </div>
          <p className="profile__person-status">{userDescription}</p>
        </div>
        <button className="profile__btn-add"  type="button" onClick={props.showPopupAdd}></button>
      </section>
      <section className="cards">
        {cards.map(item => <Card key={item._id}
        isOpen={props.showImage}
        test={props.test}
        onCardClick={props.handleCardClick}
        {...item}>

        </Card>)}
      </section>

      <PopupWithForm
      name='popup-add-card'
      title='Новое место'
      isOpen={props.isOpenAdd}
      onClose={props.onClose}>
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
      isOpen={props.isOpenProfileEdit}
      onClose={props.onClose}>
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
      isOpen={props.isOpenAvatarEdit}
      onClose={props.onClose}>
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

      <ImagePopup onClose={props.onClose} cardInfo={props.card} cardData={props.cardData}/>


    </main>
  )
}

export default Main;