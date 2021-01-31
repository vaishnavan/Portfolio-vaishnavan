import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import './inspriation.css';

SwiperCore.use([Navigation, Pagination]);

class Inspriation extends Component {
    constructor() {
        super();
        this.state = {
            slides: [
                { quote: "https://i.pinimg.com/originals/f6/41/2d/f6412dd17f08e0507dbb271ee94d4642.jpg" },
                { quote: "https://i.pinimg.com/originals/61/e4/4f/61e44fb9ba842c0808d40fdbea23b452.jpg" },
                { quote: "https://i.pinimg.com/736x/d7/d7/b5/d7d7b504769bd23e9c338919e7f3bafd.jpg" },
                { quote: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStc3D6pWYptUL7XwSKth6Wm4EI0cgNRiDhQQ&usqp=CAU" },
                { quote: "https://www.yourfates.com/wp-content/uploads/2020/05/sundar-pichai-Quotes-9-731x613.jpg" },
            ],
        };
    }

    render() {
        const { slides } = this.state;
        const slideItems = slides.map((data)=> <SwiperSlide>
            <img src={data.quote} alt="no" />
        </SwiperSlide>)
        return (
            <div className="inspriation_main">
                <h2>Inspirational Quotes</h2>
                <br/>
                <Swiper
                pagination
                navigation
                spaceBetween={1}
                slidesPerView={1}
                >
                    {slideItems}
                </Swiper>
            </div>
        )
    }
}

export default Inspriation;
