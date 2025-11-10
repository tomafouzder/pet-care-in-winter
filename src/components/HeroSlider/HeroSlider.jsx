import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from '../../assets/AdobeStock_539803811_Preview.jpeg'
import image2 from '../../assets/portrait-adorable-beagle-sleeping.jpg'
import image3 from '../../assets/young-woman-holding-her-puppy.jpg'
import image4 from '../../assets/professional-veterinarian-check-dog-breed-yorkshire-terrier-using-otoscope-pet-hospital.jpg'
import image5 from '../../assets/full-shot-women-petting-dog.jpg'
import image6 from '../../assets/m-burke-l1UsjV2WrNM-unsplash.jpg'

const slides = [
    {
        image: image1,
        title: "Welcome To Pet Care In Winter",
        subtitle: "Care and Love for Every Paw ",

    },
    {
        image: image2,
        title: "Your Pet, Our Priority",
        subtitle: "Best veterinary care at your fingertips ",
    },
    {
        image: image3,
        title: "Healthy Pets, Happy Owners",
        subtitle: "We keep tails wagging and whiskers smiling ",
    },
    {
        image: image4,
        title: "Trusted Pet Experts",
        subtitle: "Your friend deserves the best ",
    },
    {
        image: image5,
        title: "Adopt, Don’t Shop",
        subtitle: "Give a forever home to a lovely pet ",
    },
    {
        image: image6,
        title: "We Love Every Pet",
        subtitle: "Happiness starts with a wag or a purr ",
    },
]


const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div className="pt-4 ">
            <Swiper
                spaceBetween={5}
                centeredSlides={false}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className='mySwiper rounded-2xl lg:rounded-none shadow-2xl'


                breakpoints={{
                    320: { slidesPerView: 1 },
                    760: { slidesPerView: 2 },
                    1024: { slidesPerView: 1 },
                }}

            >

                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[500px] overflow-hidden rounded-2xl lg:rounded-none">
                            {/* Image full cover */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Text Overlay with Animation */}
                            <div className={`absolute right-3/5 inset-0 bg-black/40  flex flex-col justify-center items-center  text-white text-center p-5
                                
                                ${activeIndex === index ? 'animate__animated animate__fadeInLeft  animate__delay-2s' : ''}
                                `}>

                                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-xl font-semibold" >
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default HeroSlider;


