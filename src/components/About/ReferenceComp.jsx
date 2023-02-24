// Import Modules
import React, { useState } from "react";
// Import CSS
import "./ReferenceComp.css";
// Import Files
import { references } from "../../backend/db/dataExports.js";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

// Export ReferenceComp Function
export default function ReferenceComp() {
  // Return Div for ReferenceComp Container
  return (
    <section id="references">
      {/* <h2 className="feedbacks">Feedbacks</h2> */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {references.map(({ name, title, reference }, index) => {
          return (
            <SwiperSlide key={index} className="reference">
              <small className="client_review">{reference}</small>
              <h5 className="references-name">{`${name} - ${title}`}</h5>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
