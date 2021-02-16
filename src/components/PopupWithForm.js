function PopupWithForm (props) {
  const state = props.isOpen ? 'popup_active' : ''
  return (
    <section className={`popup ${props.name} ${state}`}>
      <div className="popup__overlay"></div>
      <div className={`${props.name}__wrapper`}>
        <button type="button" className="popup__btn-close" onClick={props.onClose}></button>
        <div className={`${props.name}__content`}>
          <p className={`${props.name}__title`}>{props.title}</p>
          {props.children}
        </div>
      </div>
    </section>
  )
}

export default PopupWithForm;