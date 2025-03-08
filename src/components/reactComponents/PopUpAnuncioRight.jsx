import { useEffect, useState } from "react";
import "./PopUp.css";
import image from '../../assets/anuncio2.avif'

const PopupAnuncioRight = () => {
  const [hidePopUp, setHidePopUp] = useState(true)
  const handlePopUp = () => {
    setHidePopUp(false)
  }
  return (
    hidePopUp && (
      <div className="popup-overlayRight">
      <button className="exit" onClick={handlePopUp}>X</button>
      <img src={image.src} alt="popup"/>
    </div>
    )
  )
};

export default PopupAnuncioRight;
