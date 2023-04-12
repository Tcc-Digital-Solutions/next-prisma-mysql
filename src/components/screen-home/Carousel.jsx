import {Swiper, SwiperSlide } from "swiper/react";
import '../../assets/css/css-home/Carousel.css'
import { Autoplay, Pagination, Navigation,Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import teste2 from '../../assets/img/BANNER 03_ INTERCAMBIALIDADE_18v.png'
import teste3 from '../../assets/img/BANNER 02_ MEDIÇÃO.png'

import { Cardproduto } from "./Cardproduto";

export const Carousel = (props) => {

    return (
        <div className='Carousel_react-div' >
            <span className='Carousel_react-02'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    direction="horizontal"
                    loop={true}
                    loopFillGroupWithBlank={true}
                    // autoplay={{
                    //     delay: 4000,
                    //     disableOnInteraction: false,
                    // }}
                    navigation={true}
                    modules={[Autoplay,Pagination, Navigation]}
                    className="swiper-home"
                >
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>

                </Swiper>                 
            </span>

        </div>
    )
}