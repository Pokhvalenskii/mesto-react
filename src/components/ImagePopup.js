function ImagePopup () {
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

export default ImagePopup;