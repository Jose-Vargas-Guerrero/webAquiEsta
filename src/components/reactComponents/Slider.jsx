import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import './Slider.css';
import slide1 from '../../assets/slide1.jpg'


function Slider() {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Mousewheel]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
      >
        <SwiperSlide>
          <div className="card restaurantes">
            <a href="#">Restaurantes</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card realState">
            <a href="#">Real state</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card empleos">
            <a href="#">Empleos</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card tiendas">
            <a href="#">Tiendas</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card compraVenta">
            <a href="#">Compra & Venta</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card abogados">
            <a href="#">Abogados</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
