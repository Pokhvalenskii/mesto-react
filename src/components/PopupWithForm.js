function PopupWithForm (props) {
  // console.log('hello world', props.isOpen)

  if(props.isOpen == true) {
    return (
      <section className={`popup ${props.name} popup_active`}>
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
  } else if (props.isOpen == false) {
    <section className={`popup ${props.name}`}>
      <div className="popup__overlay"></div>
      <div className={`${props.name}__wrapper`}>
        <button type="button" className="popup__btn-close"></button>
        <div className={`${props.name}__content`}>
          <p className={`${props.name}__title`}>{props.title}</p>
          {props.children}
        </div>
      </div>
    </section>
  }
  return (
    <></>
  )
}

export default PopupWithForm;