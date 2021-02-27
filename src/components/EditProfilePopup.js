import { useState } from "react";
import PopupWithForm from "./PopupWithForm.js";
import {} from ''
function EditProfilePopup(props) {

  const [name, setName] = useState();

  return (
    <PopupWithForm
    name='popup-profile'
    title='Редактировать профиль'
    isOpen={props.isOpen}
    onClose={props.onClose}>
      <form className="popup__form" name="popupform" noValidate>
        <input id="edit-name" className="popup__input popup__input_place_up" type="text" minLength="2" maxLength="40" name="person_name" placeholder="Имя" required/>
        <span id="edit-name-error" className="error"></span>
        <input id="edit-status" className="popup__input popup__input_place_down" type="text" minLength="2" maxLength="200" name="person_status" placeholder="Статус" required/>
        <span id="edit-status-error" className="error"></span>
        <button className="popup__btn-save popup__btn-save_state_valid" type="submit">Сохранить</button>
      </form>
    </PopupWithForm>
  );
}

export default EditProfilePopup;