import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-full flex flex-col">
      {/* Floating Navbar */}
      <div className="absolute top-[-20px] left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1">
        {/* Hero Section - Full height from top */}
        <section className="relative z-0 h-screen">
          <img
            src="assets/landing.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-[3cm] w-full">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Innovate Your <br />
                  <span className="text-blue-400">Business</span> With Ceylon <br />
                  Innovation
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  We Provide Cutting-Edge Technology Solutions Tailored To Your Business Needs. 
                  From ERP System To Mobile Apps, We've Got You Covered
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    See More
                  </button>
                  <button className=" text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                    Explore Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Statistics Panel */}
          <div className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2">

            <div className="bg-black/70 backdrop-blur-sm rounded-2xl px-8 py-6 w-[90vw] max-w-3xl">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">1000+</div>
                  <div className="text-sm text-white/80">Software<br />Installation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">45+</div>
                  <div className="text-sm text-white/80">Software<br />Developers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-sm text-white/80">Global<br />Web Development</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-sm text-white/80">Years of<br />Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content wrapper with 3cm side padding */}
        <div className="px-[3cm]">
          {/* Features Section */}
          <section className="bg-gray-50 max-w-7xl mx-auto py-12 md:py-16 mt-20">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
              Innovative Features Our Company <br className="hidden md:block" />
              Delivers To You
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Responsibility Card */}
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Responsibility</h3>
                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  The Responsibility Service Delivers Secure, Ethical, And Reliable IT Solutions With Accountability And Full Ownership.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm md:text-base">
                  Read More
                </a>
              </motion.div>

              {/* Bespoke Card */}
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 0 014 0zM7 10a2 2 0 11-4 0 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Bespoke</h3>
                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  Ceylon Innovation Bespoke Service Delivers Customized IT Solutions Creating Unique Systems Aligned With Client Needs And Goals.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm md:text-base">
                  Read More
                </a>
              </motion.div>

              {/* Innovation Card */}
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Innovation Service</h3>
                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  We Innovation Delivers Modern, Efficient, Future-Ready IT Solutions Through Creativity, Latest Technologies, And Industry Best Practices.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm md:text-base">
                  Read More
                </a>
              </motion.div>
            </div>
          </section>

          {/* Slider Section */}
          <section className="bg-gray-50 max-w-7xl mx-auto py-12 md:py-16">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 md:mb-12">
              Organizations Achieving Growth Using Our Product Solutions
            </h2>
            <div className="mx-auto max-w-6xl">
              <Slider {...settings}>
                <div className="flex justify-center">
                  <img src="assets/avenra.png" alt="Slider Image 1" className="max-h-24 object-contain" />
                </div>
                <div className="flex justify-center">
                  <img src="assets/marians.png" alt="Slider Image 2" className="max-h-24 object-contain" />
                </div>
                <div className="flex justify-center">
                  <img src="assets/mobitel.png" alt="Slider Image 3" className="max-h-24 object-contain" />
                </div>
                <div className="flex justify-center">
                  <img src="assets/school.jpg" alt="Slider Image 4" className="max-h-24 object-contain" />
                </div>
              </Slider>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}