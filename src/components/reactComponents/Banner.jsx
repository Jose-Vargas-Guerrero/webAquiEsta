import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import banner5 from '../../assets/banner5.jpg'



function Banner() {
  return (
    <div className="sliderContainer">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
            <div className="bodySlide">
                <img src={banner1.src} alt="imagen de nuestra Misión"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bodySlide">
                <img src={banner2.src} alt="imagen de nuestra Visión"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bodySlide">
                <img src={banner3.src} alt="imagen de nuestra Visión"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bodySlide">
                <img src={banner4.src} alt="imagen de nuestra Visión"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bodySlide">
                <img src={banner5.src} alt="imagen de nuestra Visión"/>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner