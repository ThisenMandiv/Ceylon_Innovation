import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    pauseOnHover: false,
    arrows: false,
    centerMode: true,
    centerPadding: '80px',
    focusOnSelect: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <div className="min-h-full flex flex-col bg-white">
      {/* Floating Navbar - Responsive positioning */}
      <div className="absolute top-[-20px] md:top-[-20px] sm:top-[-15px] xs:top-[-10px] left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1">
        {/* Hero Section - Responsive height */}
        <section className="relative z-0 h-screen min-h-[600px] sm:min-h-[700px] md:min-h-screen">
          <img
            src="assets/landing.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Hero Content - Responsive padding */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-[3cm] w-full">
              <div className="max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Innovate Your <br />
                  <span className="text-blue-400">Business</span> With Ceylon <br className="hidden sm:block" />
                  Innovation
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                  We Provide Cutting-Edge Technology Solutions Tailored To Your Business Needs. 
                  From ERP System To Mobile Apps, We've Got You Covered
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                    See More
                  </button>
                  <button className="text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                    Explore Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Statistics Panel - Responsive positioning and sizing */}
          <div className="absolute bottom-[-3rem] sm:bottom-[-4rem] left-1/2 transform -translate-x-1/2 w-full px-4 sm:px-0">
            <div className="bg-black/70 backdrop-blur-sm rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 w-full sm:w-[90vw] max-w-3xl mx-auto">
              <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 text-center">
                <div className="flex-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">1000+</div>
                  <div className="text-xs sm:text-sm text-white/80">Software<br />Installation</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">45+</div>
                  <div className="text-xs sm:text-sm text-white/80">Software<br />Developers</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-xs sm:text-sm text-white/80">Global<br />Web Development</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-xs sm:text-sm text-white/80">Years of<br />Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content wrapper with responsive padding */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-[3cm]">
          {/* Features Section - Responsive spacing */}
          <section className="bg-white max-w-7xl mx-auto py-12 md:py-16 mt-16 sm:mt-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 leading-tight">
              Innovative Features Our Company <br className="hidden sm:block" />
              Delivers To You
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Responsibility Card */}
              <motion.div
                className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Responsibility</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  The Responsibility Service Delivers Secure, Ethical, And Reliable IT Solutions With Accountability And Full Ownership.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm md:text-base">
                  Read More
                </a>
              </motion.div>

              {/* Bespoke Card */}
              <motion.div
                className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 0 014 0zM7 10a2 2 0 11-4 0 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Bespoke</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  Ceylon Innovation Bespoke Service Delivers Customized IT Solutions Creating Unique Systems Aligned With Client Needs And Goals.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm md:text-base">
                  Read More
                </a>
              </motion.div>

              {/* Innovation Card */}
              <motion.div
                className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Innovation Service</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  We Innovation Delivers Modern, Efficient, Future-Ready IT Solutions Through Creativity, Latest Technologies, And Industry Best Practices.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm md:text-base">
                  Read More
                </a>
              </motion.div>
            </div>
          </section>

          {/* Enhanced Superb Slider Section - Responsive improvements */}
          <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 max-w-7xl mx-auto py-12 sm:py-16 md:py-20 relative overflow-hidden">
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8 sm:mb-12 md:mb-16 px-4"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Organizations Achieving Growth Using Our Product Solutions
                </h2>
              </motion.div>

              <div className="mx-auto max-w-7xl relative">
                <style jsx>{`
                  .superb-carousel {
                    position: relative;
                    padding: 20px 0;
                  }
                  
                  @media (min-width: 768px) {
                    .superb-carousel {
                      padding: 40px 0;
                    }
                  }
                  
                  .slick-slide {
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    transform: scale(0.75) translateY(20px);
                    opacity: 0.4;
                    filter: blur(2px) grayscale(0.8);
                  }
                  
                  .slick-slide.slick-active {
                    opacity: 0.7;
                    transform: scale(0.85) translateY(10px);
                    filter: blur(1px) grayscale(0.4);
                  }
                  
                  .slick-center {
                    transform: scale(1.1) translateY(-3px) !important;
                    opacity: 1 !important;
                    filter: blur(0px) grayscale(0) !important;
                    z-index: 10;
                    position: relative;
                  }
                  
                  @media (max-width: 640px) {
                    .slick-slide {
                      transform: scale(0.85) translateY(10px);
                    }
                    
                    .slick-slide.slick-active {
                      transform: scale(0.9) translateY(5px);
                    }
                    
                    .slick-center {
                      transform: scale(1.05) translateY(-2px) !important;
                    }
                  }
                  
                  .slick-slide .logo-container {
                    background: linear-gradient(145deg, #ffffff, #f8fafc);
                    border: none;
                    border-radius: 16px;
                    padding: 20px;
                    margin: 8px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                  }
                  
                  @media (min-width: 768px) {
                    .slick-slide .logo-container {
                      border-radius: 20px;
                      padding: 30px;
                      margin: 15px;
                    }
                  }
                  
                  .slick-slide .logo-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, 
                      rgba(59, 130, 246, 0.1) 0%, 
                      rgba(147, 51, 234, 0.1) 50%, 
                      rgba(59, 130, 246, 0.1) 100%);
                    opacity: 0;
                    transition: opacity 0.6s ease;
                    z-index: 0;
                  }
                  
                  .slick-center .logo-container {
                    background: linear-gradient(145deg, #ffffff, #f1f5f9);
                    border: none;
                    box-shadow: 
                      0 20px 40px rgba(59, 130, 246, 0.15),
                      0 0 0 1px rgba(255, 255, 255, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2);
                    transform: translateZ(0);
                  }
                  
                  .slick-center .logo-container::before {
                    opacity: 1;
                  }
                  
                  .slick-slide .logo-container::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                      45deg,
                      transparent,
                      rgba(255, 255, 255, 0.3),
                      transparent
                    );
                    transform: rotate(45deg) translateX(-100%);
                    transition: transform 1.5s ease;
                    z-index: 1;
                  }
                  
                  .slick-center .logo-container::after {
                    transform: rotate(45deg) translateX(100%);
                  }
                  
                  .slick-slide img {
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    z-index: 2;
                    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
                  }
                  
                  .slick-center img {
                    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
                  }
                  
                  /* Mobile-specific logo container adjustments */
                  @media (max-width: 640px) {
                    .slick-slide .logo-container {
                      height: 100px;
                      padding: 15px;
                      margin: 5px;
                    }
                    
                    .slick-slide img {
                      max-height: 40px;
                    }
                  }
                  
                  @media (min-width: 641px) and (max-width: 1024px) {
                    .slick-slide .logo-container {
                      height: 120px;
                      padding: 20px;
                      margin: 10px;
                    }
                    
                    .slick-slide img {
                      max-height: 48px;
                    }
                  }
                  
                  @media (min-width: 1025px) {
                    .slick-slide .logo-container {
                      height: 128px;
                    }
                    
                    .slick-slide img {
                      max-height: 64px;
                    }
                  }
                  
                  /* Enhanced Dots Styling - Mobile responsive */
                  .slick-dots {
                    bottom: -40px;
                    display: flex !important;
                    justify-content: center;
                    gap: 6px;
                  }
                  
                  @media (min-width: 768px) {
                    .slick-dots {
                      bottom: -60px;
                      gap: 8px;
                    }
                  }
                  
                  .slick-dots li {
                    margin: 0;
                  }
                  
                  .slick-dots li button {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: linear-gradient(145deg, #e2e8f0, #cbd5e1);
                    border: 2px solid rgba(59, 130, 246, 0.3);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                  }
                  
                  @media (min-width: 768px) {
                    .slick-dots li button {
                      width: 12px;
                      height: 12px;
                    }
                  }
                  
                  .slick-dots li button:before {
                    display: none;
                  }
                  
                  .slick-dots li.slick-active button {
                    background: #3b82f6;
                    border-color: rgba(59, 130, 246, 0.6);
                    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
                    transform: scale(1.3);
                  }
                  
                  .slick-dots li:hover button {
                    transform: scale(1.2);
                    border-color: rgba(59, 130, 246, 0.5);
                  }
                  
                  /* Floating animation for center slide */
                  .slick-center .logo-container {
                    animation: float 6s ease-in-out infinite;
                  }
                  
                  @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-5px) rotate(0.5deg); }
                    50% { transform: translateY(-8px) rotate(0deg); }
                    75% { transform: translateY(-3px) rotate(-0.5deg); }
                  }
                  
                  @media (max-width: 640px) {
                    @keyframes float {
                      0%, 100% { transform: translateY(0px); }
                      25% { transform: translateY(-3px); }
                      50% { transform: translateY(-5px); }
                      75% { transform: translateY(-2px); }
                    }
                  }
                `}</style>
                
                <div className="superb-carousel">
                  <Slider {...settings}>
                    <div className="px-2">
                      <div className="logo-container flex justify-center items-center">
                        <img 
                          src="assets/avenra.png" 
                          alt="Avenra" 
                          className="object-contain transition-all duration-500" 
                        />
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="logo-container flex justify-center items-center">
                        <img 
                          src="assets/marians.png" 
                          alt="Marians" 
                          className="object-contain transition-all duration-500" 
                        />
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="logo-container flex justify-center items-center">
                        <img 
                          src="assets/mobitel.png" 
                          alt="Mobitel" 
                          className="object-contain transition-all duration-500" 
                        />
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="logo-container flex justify-center items-center">
                        <img 
                          src="assets/school.jpg" 
                          alt="School" 
                          className="object-contain transition-all duration-500" 
                        />
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="logo-container flex justify-center items-center">
                        <img 
                          src="assets/smc.jpg" 
                          alt="SMC" 
                          className="object-contain transition-all duration-500" 
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}