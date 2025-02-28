import { useEffect, useState } from "react";
import './PopUp.css'

const PopupAnuncio = () => {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrar(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const cerrarPopup = () => {
    setMostrar(false);
  };

  return (
    mostrar && (
      <div className="popup-overlay active">
        <div className="popup-content">
          <button className="popup-close" onClick={cerrarPopup}>×</button>
          <img src="https://cdn-icons-png.flaticon.com/128/1998/1998087.png" alt="Anuncio" />
          <p>¡Oferta especial por tiempo limitado!</p>
        </div>
      </div>
    )
  );
};

export default PopupAnuncio;
