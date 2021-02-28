import PopupWithForm from '../components/PopupWithForm.js'
import { useState, useContext, useEffect, useRef} from "react";


function AddPlacePopup(props) {
  const urlRef = useRef();
  const imageNameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log('submit ADD, URL: ', urlRef.current.value, ' NAME: ', imageNameRef.current.value);
    props.handleAddCard({
      name: imageNameRef.current.value,
      link: urlRef.current.value
    })
  }

  return (
    <PopupWithForm
    name='popup-add-card'
    title='Новое место'
    isOpen={props.isOpen}
    onClose={props.onClose}>
      <form className="popup__form" name="popupform" noValidate onSubmit={handleSubmit}>
        <input id="add-name" className="popup__input popup__input_place_up" type="text" minLength="2" maxLength="30" name="cardName" placeholder="Название" required ref={imageNameRef}/>
        <span id="add-name-error" className="error"></span>
        <input id="add-url" className="popup__input popup__input_place_down" type="url" name="cardLink" placeholder="Ссылка на картинку" required ref={urlRef}/>
        <span id="add-url-error" className="error"></span>
        <button className="popup__btn-save  popup__btn-save_state_invalid" type="submit">Создать</button>
      </form>
    </PopupWithForm>
  );
}

export default AddPlacePopup;