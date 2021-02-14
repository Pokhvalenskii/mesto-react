function ImagePopup (props) {

  if(props.cardInfo == true) {
    return (
      <section className="popup popup-img popup_active">
      <div className="popup__overlay"></div>
      <div className="popup-img__wrapper">
        <button className="popup__btn-close" onClick={props.onClose}></button>
        <img className="popup-img__image" src={props.cardData.link} alt="картинка"/>
        <p className="popup-img__subtitle">{props.cardData.name}</p>
      </div>
    </section>
    )
  } else if (props.cardInfo == false) {
    return (
      <section className="popup popup-img">
      <div className="popup__overlay"></div>
      <div className="popup-img__wrapper">
        <button className="popup__btn-close"></button>
        <img className="popup-img__image" src="/" alt="картинка"/>
        <p className="popup-img__subtitle"></p>
      </div>
    </section>
    )
  }
  return (
    <></>
  )
}

export default ImagePopup;