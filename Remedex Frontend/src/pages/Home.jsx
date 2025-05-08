import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner_image1 from "../assets/banner_image1.jpg";
import blog_img3 from "../assets/blog_img3.jpg";
import banner_image4 from "../assets/banner_image4.jpg";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Swiper Image Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="my-swiper"
      >
        <SwiperSlide>
          <img src={banner_image1} alt="Slide 1" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={blog_img3} alt="Slide 2" className="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_image4} alt="Slide 3" className="slide-image" />
        </SwiperSlide>
      </Swiper>

      <section className="features-section py-16 bg-gradient-to-br from-white via-[#f0f4ff] to-white ">
        <div className="max-w-9xl mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-12">Our Key Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="feature-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">
              <div className="icon-wrapper w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:rotate-12">
                <i className="fa-solid fa-robot fa-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered</h3>
              <p className="text-gray-600 text-base">
                Smart algorithms analyze your symptoms to provide accurate remedies.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="feature-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">
              <div className="icon-wrapper w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:rotate-12">
                <i className="fa-solid fa-user-md fa-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Doctor Network</h3>
              <p className="text-gray-600 text-base">
                Easily find and connect with certified doctors for personalized care.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="feature-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">
              <div className="icon-wrapper w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:rotate-12">
                <i className="fa-solid fa-prescription-bottle-medical fa-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Remedies</h3>
              <p className="text-gray-600 text-base">
                Access a curated list of proven home and clinical remedies.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="why-choose-us-section py-16 bg-gradient-to-br from-[#f4f4f4] via-[#fafafa] to-[#f4f4f4]"  >
        <div className="max-w-9xl mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-12">Why Choose Remedex?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="choose-card group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="icon-container bg-indigo-100 text-indigo-600 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto text-xl">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">24/7 Accessibility</h4>
              <p className="text-gray-600 text-base">
                Get remedy suggestions and doctor consultations anytime, anywhere.
              </p>
            </div>

            {/* Card 2 */}
            <div className="choose-card group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="icon-container bg-green-100 text-green-600 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto text-xl">
                <i className="fa-solid fa-user-shield"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Expert-Verified</h4>
              <p className="text-gray-600 text-base">
                All remedies are reviewed by experienced medical professionals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="choose-card group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="icon-container bg-pink-100 text-pink-600 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto text-xl">
                <i className="fa-solid fa-lock"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Secure & Private</h4>
              <p className="text-gray-600 text-base">
                Your health data is encrypted and kept strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section py-16 bg-gradient-to-br from-white via-[#f0f4ff] to-white">
      <div className="max-w-9xl mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-12">What Our Users Say</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="testimonial-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">
            <p className="text-gray-700 text-base mb-4 italic">
              "Remedex helped me find the right remedy and connect with a doctor within minutes. Truly life-changing!"
            </p>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-12 h-12 rounded-full" />
              <div>
                <h5 className="text-gray-800 font-semibold">Aman Singh</h5>
                <p className="text-gray-500 text-sm">Mumbai, India</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="testimonial-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">
            <p className="text-gray-700 text-base mb-4 italic">
              "I was amazed by the AI diagnosis and fast response. The whole process was so smooth!"
            </p>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-12 h-12 rounded-full" />
              <div>
                <h5 className="text-gray-800 font-semibold">Ritika Mehra</h5>
                <p className="text-gray-500 text-sm">Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="testimonial-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">
            <p className="text-gray-700 text-base mb-4 italic">
              "Super helpful platform! I love how simple and private everything is. Highly recommended."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-12 h-12 rounded-full" />
              <div>
                <h5 className="text-gray-800 font-semibold">Ravi Patel</h5>
                <p className="text-gray-500 text-sm">Ahmedabad, India</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>



      <Footer />
    </>
  );
};

export default Home;
