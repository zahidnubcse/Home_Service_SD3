import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import myVideo1 from "../assets/rev_1.mp4";
import myVideo2 from '../assets/rev_2.mp4'
import Thumbnail1 from "../assets/thum_1.jpg"; 
import Thumbnail2 from '../assets/thum_2.jpg'
 

const reviews = [
  {
    name: "Zabeen Yusuf Nur",
    profession: "IT Consultant, Australia",
    text: "Such service platforms are available in other countries. I’ve personally used those when I was abroad. I’m very pleased that such a portal is available here in Bangladesh as well.",
    videoUrl: myVideo1,
    thumbnail: Thumbnail1,
  },
  {
    name: "John Doe",
    profession: "Software Engineer, USA",
    text: "The service was excellent! The team was professional and very efficient.",
    videoUrl: myVideo2,
    thumbnail: Thumbnail2,
  },
];

export default function CustomerReviews() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Real Happy Customers, <span className="text-primary">Real Stories</span>
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="flex flex-col md:flex-row items-center gap-6">
            {/* Left: Testimonial Text */}
            <div className="flex-1 pl-12">
              <p className="text-lg italic text-primary">
                <span className="text-4xl font-serif font-bold text-gray-800">“</span>
                {review.text}
                <span className="text-4xl font-serif font-bold text-gray-800">”</span>
              </p>
              <p className="mt-4 font-bold text-gray-800">- {review.name}</p>
              <p className="text-gray-500">{review.profession}</p>
            </div>

            {/* Right: Video Thumbnail */}
            <div className="relative flex-1 pr-12">
              {selectedVideo === index ? (
                <video
                  className="w-full h-60 rounded-lg"
                  src={review.videoUrl}
                  controls
                  autoPlay
                />
              ) : (
                <div
                  className="relative cursor-pointer"
                  onClick={() => setSelectedVideo(index)}
                >
                  <img
                    src={review.thumbnail}
                    alt="Customer Video"
                    className="rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full opacity-90">
                      ▶
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
