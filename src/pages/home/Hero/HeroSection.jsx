import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import turabi from "./../../../assets/44pro/heroImage/custom-is-better-bg.jpg"
import turabi2 from "./../../../assets/44pro/heroImage/background_alt.jpg"
import turabi3 from "./../../../assets/44pro/heroImage/bg.jpg"
import turabi4 from "./../../../assets/44pro/heroImage/bg1.jpg"
// import './Hero.css';

import { Navigation } from 'swiper/modules';

const HeroSection = () => {


    const heroDataObject = [
        { _id : 1,  img: turabi2 },
        { _id : 2,  img: turabi3 },
        { _id : 3,  img: turabi4 },
        { _id : 4,  img: turabi },
    ]


    return (
        <div>

            <Swiper navigation={true} modules={[Navigation] } className="h-[60vh]">

                {
                    heroDataObject.map(item => (
                        <SwiperSlide key={item._id} className='' >
                            <img className='w-full object-cover' src={item.img} alt="" />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    );
};

export default HeroSection;