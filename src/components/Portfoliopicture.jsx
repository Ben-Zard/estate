import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "../styles/components/_imagesSlider.scss";

import ImageSlide from "./ImagesSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonial() {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
         spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        navigation
        loop
        className={styles.myswiper}
      >
        <SwiperSlide className={styles.swiperslide}>
        {/* Adding for space loading img  */}
        <ImageSlide src ={"https://images.unsplash.com/photo-1661123978240-456376a8cea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjY4NzE0OA&ixlib=rb-1.2.1&q=80&w=1080"}/>
        {/* ***************************** */}
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
        {/* Adding for space loading img  */}
        <ImageSlide  src ={"https://images.unsplash.com/photo-1661123978240-456376a8cea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjY4NzE0OA&ixlib=rb-1.2.1&q=80&w=1080"}/>
        {/* ***************************** */}
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
        {/* Adding for space loading img  */}
        <ImageSlide  src ={"https://images.unsplash.com/photo-1661123978240-456376a8cea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjY4NzE0OA&ixlib=rb-1.2.1&q=80&w=1080"}/>
        {/* ***************************** */}
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
        {/* Adding for space loading img  */}
        <ImageSlide src ={"https://images.unsplash.com/photo-1661123978240-456376a8cea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjY4NzE0OA&ixlib=rb-1.2.1&q=80&w=1080"}/>
        {/* ***************************** */}
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
        {/* Adding for space loading img  */}
        <ImageSlide src ={"https://images.unsplash.com/photo-1661123978240-456376a8cea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjY4NzE0OA&ixlib=rb-1.2.1&q=80&w=1080"}/>
        {/* ***************************** */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
