import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Menu.css";

function Menu() {
  const [hide, setHide] = useState(true);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <>
      {hide ? (
        <FaBars className="icon-menu" onClick={handleHide} />
      ) : (
        <SideMenu show={hide} handleHide={handleHide} />
      )}
    </>
  );
}

// eslint-disable-next-line react/prop-types
function SideMenu({ handleHide, show}) {
  return (
    <div className={show.toString()}>
      <div className="box"> 
      <div className="header">
        <h2 className="companyName">Firma Bienes Raices</h2>
        <IoCloseSharp onClick={handleHide} />
      </div>
      <ul className="links-container">
        <a className="link" href="/" onClick={handleHide}>
          Inicio
        </a>
        <a className="link" href="/venta" onClick={handleHide}>
          Venta
        </a>
        <a className="link" href="/renta" onClick={handleHide}>
          Renta
        </a>
        <a className="link" href="/preventa" onClick={handleHide}>
          Preventa
        </a>
        <a className="link" href="/" onClick={handleHide}>
          Contacto
        </a>
      </ul>
      <div className="icons-container">
        <a href="https://www.facebook.com/Firmabienesraices" target="_blank">
          <FaFacebook className="iconN" />
        </a>
        <a href="https://www.instagram.com/bienesraicesfirmahn/" target="_blank">
          <FaInstagram className="iconN" />
        </a>
      </div>
      </div>
    </div>
  );
}

export default Menu;