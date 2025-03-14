import { useEffect, useState } from "react";
import "./PopUp.css";
import image from '../../assets/anuncio1.avif'

const PopupAnuncio = () => {
  const [hidePopUp, setHidePopUp] = useState(true)
  const handlePopUp = () => {
    setHidePopUp(false)
  }
  return (
    hidePopUp && (
      <div className="popup-overlay">
      <button className="exit" onClick={handlePopUp}>X</button>
      <img src={image.src} alt="popup"/>
    </div>
    )
  )
};

export default PopupAnuncio;
