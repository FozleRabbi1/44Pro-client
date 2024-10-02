import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import turabi from "./../../../assets/44pro/heroImage/custom-is-better-bg.jpg"
import turabi2 from "./../../../assets/44pro/heroImage/background_alt.jpg"
import turabi3 from "./../../../assets/44pro/heroImage/bg.jpg"
import turabi4 from "./../../../assets/44pro/heroImage/bg1.jpg"

import colorImg1 from "./../../../assets/44pro/heroImage/paintspatter.png"
import colorImg2 from "./../../../assets/44pro/heroImage/heading-bg 1.png"
import colorImg3 from "./../../../assets/44pro/heroImage/heading-bg.png"
import colorImg4 from "./../../../assets/44pro/heroImage/custom-is-better-heading-bg-2.png"

import secondImg1 from "./../../../assets/44pro/heroImage/polaroid.png"
import secondImg2 from "./../../../assets/44pro/heroImage/gloves-2.png"
import secondImg3 from "./../../../assets/44pro/heroImage/custom-is-better-players-2.png"
import secondImg4 from "./../../../assets/44pro/heroImage/bats.png"

import { Autoplay, Navigation } from 'swiper/modules';

const HeroSection = () => {

    const heroDataObject = [
        { _id: 1, img: turabi2, img2: secondImg1, colorImg: colorImg1 },
        { _id: 2, img: turabi3, img2: secondImg2, colorImg: colorImg2 },
        { _id: 3, img: turabi4, img2: secondImg3, colorIm: colorImg3 },
        { _id: 4, img: turabi, img2: secondImg4, colorImg: colorImg4 },
    ]

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                navigation={false}
                speed={1000}
                loop={true}
                className="h-[65vh]"
            >
                {
                    heroDataObject.map(item => (
                        <SwiperSlide key={item._id} className='' >
                            <div className='relative'>
                                <img className='w-full object-cover' src={item.img} alt="" />
                                <div className='absolute w-[1536px] flex justify-between items-center top-0 left-1/2 -translate-x-1/2'>
                                    <img className=' object-cover' src={item.colorImg} alt="" />
                                    {/* <img className=' object-cover' src={item.img2} alt="" /> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default HeroSection;