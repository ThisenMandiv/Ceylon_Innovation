import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import SkynetPro from '../assets/skynet-pro.png';
import SkynetRetail from '../assets/skynet-retail.png';
import HealthcareIMS from '../assets/healthcare-ims.png';
import StarsIMS from '../assets/stars-ims.png';
import PopupImage from '../assets/popup-image.png';
import TransformImage from '../assets/business-transformation.png';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';

// Animation component for scroll-triggered animations
const ScrollAnimation = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Simplified scroll animation hook
const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};

// Updated slideUpVariants
const slideUpVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: { 
    opacity: 1,
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Updated to use the new scroll animation approach
  const featuresAnimation = useScrollAnimation(0.1);
  const productsAnimation = useScrollAnimation(0.1);
  const sliderAnimation = useScrollAnimation(0.1);
  const transformAnimation = useScrollAnimation(0.1);

  const [activeProductTab, setActiveProductTab] = useState('pro');
  const productTabs = [
    { id: 'pro', label: 'SKYNET Pro' },
    { id: 'retail', label: 'SKYNET Retail' },
    { id: 'health', label: 'HEALTHCARE IMS' },
    { id: 'stars', label: 'STARS IMS' },
  ];
  const activeProductIndex = productTabs.findIndex(t => t.id === activeProductTab);
  
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
    centerPadding: isMobile ? '20px' : '80px',
    focusOnSelect: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);
  
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-white"
    style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Floating Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative z-0 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-b-[3rem] md:rounded-b-[4rem] overflow-hidden">
          <video className="absolute inset-0 object-cover w-full h-full rounded-b-[3rem] md:rounded-b-[4rem]" autoPlay loop muted playsInline>
            <source src="/landing.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 w-full h-full bg-black/40 z-10 pointer-events-none"></div>

          <div className="absolute inset-0 overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem]">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-40 right-20 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300/10 rounded-full blur-lg"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 w-full px-4 sm:px-8 md:px-16 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                style={{ fontFamily: 'Roboto, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Innovate Your Business Future With<br />
                <span className="text-cyan-400">Ceylon Innovation</span>
              </motion.h1>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We Provide Cutting-Edge Technology Solutions Tailored To Your Business Needs. From ERP System To Mobile Apps, We've Got You Covered
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 hover:from-blue-600 hover:to-cyan-400 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full font-medium transition-colors text-sm sm:text-base"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  &lt; &gt; Start Your Project
                </motion.button>

                <motion.button
                  className="w-full sm:w-auto text-white hover:text-gray-300 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Explore Services &rarr;
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Statistics Panel */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-4xl px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6">
                <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
                  <ScrollAnimation delay={0.1}>
                    <div>
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-1 sm:mb-2">
                        <CountUp start={0} end={1000} duration={2.5} separator="," />+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        Software Installations
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={0.3}>
                    <div>
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-1 sm:mb-2">
                        <CountUp start={0} end={10} duration={6} />+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        Years Innovation
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={0.2}>
                    <div>
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-1 sm:mb-2">
                        <CountUp start={0} end={25} duration={4} />+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        Software Developers
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      
        {/* Content wrapper */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-12 sm:mt-16 md:mt-20">
          {/* Features Section */}
          <motion.section 
            ref={featuresAnimation.ref}
            animate={featuresAnimation.controls}
            variants={slideUpVariants} 
            initial="hidden"
            className="bg-white max-w-7xl mx-auto py-12 md:py-16"
          >
            <ScrollAnimation delay={0.1}>
              <div className="flex flex-col lg:flex-row items-start justify-between mb-8 md:mb-12 gap-6">
                <div className="lg:max-w-2xl">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight"
                   style={{ fontFamily: 'Roboto, sans-serif' }}>
                    <span className="text-cyan-500">Innovative Features</span> Our Company<br /> Delivers To You
                  </h1>
                </div>
                <div className="text-gray-500 text-base sm:text-md lg:max-w-md text-right">
                  We Always Take Care Of Our Clients. Comfort Of Our Clients With Technology And Innovation
                </div>
              </div>
            </ScrollAnimation>

            <div className="py-12 sm:py-2 px-4">
              <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
                  {/* Responsibility Card */}
                  <ScrollAnimation delay={0.1}>
                    <motion.div
                      className="bg-white rounded-2xl p-5 sm:p-9 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-full"
                      whileHover={{
                        y: -10,
                        scale: 1.04,
                        boxShadow: "0 15px 35px rgba(33,105,176,0.15)",
                        transition: { type: "spring", stiffness: 250, damping: 20 },
                      }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-5">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-[#2169B0]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Responsibility</h3>
                      <p className="text-gray-500 text-[14.5px] leading-7 mb-4 sm:mb-5 text-justify">
                        We take full responsibility in delivering secure, ethical, and reliable IT
                        solutions. Every project is handled with accountability, transparency,
                        and complete ownership, ensuring that our clients receive nothing less
                        than excellence.
                      </p>
                    </motion.div>
                  </ScrollAnimation>

                  {/* Bespoke Card */}
                  <ScrollAnimation delay={0.2}>
                    <motion.div
                      className="bg-white rounded-2xl p-5 sm:p-9 cursor-pointer h-full"
                      whileHover={{
                        y: -10,
                        scale: 1.04,
                        boxShadow: "0 15px 35px rgba(33,105,176,0.15)",
                        transition: { type: "spring", stiffness: 250, damping: 20 },
                      }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-5">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-[#2169B0]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Bespoke</h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-7 mb-4 sm:mb-5 text-justify">
                        Every business is unique, and so are our solutions. We design and
                        develop custom IT systems that align seamlessly with your goals,
                        workflows, and long-term vision. From tailored applications to
                        specialized integrations.
                      </p>
                    </motion.div>
                  </ScrollAnimation>

                  {/* Innovation Card */}
                  <ScrollAnimation delay={0.3}>
                    <motion.div
                      className="bg-white rounded-2xl p-5 sm:p-9 cursor-pointer h-full"
                      whileHover={{
                        y: -10,
                        scale: 1.04,
                        boxShadow: "0 15px 35px rgba(33,105,176,0.15)",
                        transition: { type: "spring", stiffness: 250, damping: 20 },
                      }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-5">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-[#2169B0]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation Service</h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-7 mb-4 sm:mb-5 text-justify">
                        We thrive on innovation by blending creativity with cutting-edge
                        technology. Our solutions are designed to be future-ready, leveraging
                        the latest tools, frameworks, and best practices in the industry. We
                        bring fresh ideas to every project.
                      </p>
                    </motion.div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Products Section */}
          <motion.section 
            ref={productsAnimation.ref}
            animate={productsAnimation.controls}
            variants={slideUpVariants} 
            initial="hidden"
            className="bg-white w-full py-12 md:py-1 relative z-10"
          >
            <div className="max-w-7xl mx-auto py-8 sm:py-10 rounded-3xl">
              <ScrollAnimation delay={0.1}>
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                    Our <span className="text-cyan-500">Products</span>
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
                    We have many products For You with Affordable Price
                  </p>
                </div>
              </ScrollAnimation>

              {/* Tabs */}
              <ScrollAnimation delay={0.2}>
                <div className="mt-8 sm:mt-10 mb-8 sm:mb-12">
                  <div className="relative border-b border-gray-200">
                    <div className="flex flex-wrap text-xs sm:text-sm text-gray-600">
                      {productTabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveProductTab(tab.id)}
                          className={`flex-1 min-w-[120px] px-3 sm:px-4 py-2 font-medium transition-colors ${
                            activeProductTab === tab.id
                              ? "text-blue-400"
                              : "hover:text-blue-400"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    <motion.div
                      className="absolute bottom-[-1.5px] h-[3.5px] bg-blue-400 rounded-full"
                      initial={false}
                      animate={{
                        left: `${
                          (activeProductIndex / productTabs.length) * 100
                        }%`,
                        width: `${100 / productTabs.length}%`,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      style={{ left: 0, width: `${100 / productTabs.length}%` }}
                    />
                  </div>
                </div>
              </ScrollAnimation>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
                {/* SKYNET Pro */}
                <ScrollAnimation delay={0.3}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveProductTab("pro")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setActiveProductTab("pro");
                    }}
                    className={`bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm transition-all will-change-transform h-full ${
                      activeProductTab === "pro"
                        ? "ring-2 ring-blue-500/60 shadow-lg"
                        : "hover:shadow-xl"
                    }`}
                  >
                    <div className="aspect-[4/3] flex items-center justify-center bg-blue-50">
                      <img
                        src={SkynetPro}
                        
                        
                        alt="SKYNET Pro"
                        className="w-5/4 h-auto object-contain p-2"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <p
                        className="text-[14.5px] leading-6 text-gray-500 text-justify mb-4"
                      >
                        SKYNET Pro uses the latest technology to manage entire
                        hospitality businesses. Supports large-scale operations
                        and handles unlimited transactions seamlessly and
                        efficiently.
                      </p>
                      <Link
                        to="/skynet-pro"
                        className="inline-block text-blue-400 font-medium text-sm sm:text-base hover:text-blue-600 transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </motion.div>
                </ScrollAnimation>

                {/* SKYNET Retail */}
                <ScrollAnimation delay={0.4}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveProductTab("retail")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setActiveProductTab("retail");
                    }}
                    className={`bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm transition-all will-change-transform h-full ${
                      activeProductTab === "retail"
                        ? "ring-2 ring-blue-500/60 shadow-lg"
                        : "hover:shadow-xl"
                    }`}
                  >
                    <div className="aspect-[4/3] flex items-center justify-center bg-blue-50">
                      <img
                        src={SkynetRetail}
                        alt="SKYNET Retail"
                        className="w-5/4 h-auto object-contain p-2"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <p className="text-[14.5px] leading-6 text-gray-500 text-justify mb-4">
                        SKYNET Retail software is designed for retailed business such as salons,
                        supermarkets, liquor stores, clothing stores. It enables
                        smooth transactions and improves customer service.
                      </p>
                      <Link
                        to="/skynet-retail"
                        className="inline-block text-blue-400 font-medium text-sm sm:text-base hover:text-blue-600 transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </motion.div>
                </ScrollAnimation>

                {/* HEALTHCARE IMS */}
                <ScrollAnimation delay={0.5}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveProductTab("health")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setActiveProductTab("health");
                    }}
                    className={`bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm transition-all will-change-transform h-full ${
                      activeProductTab === "health"
                        ? "ring-2 ring-blue-500/60 shadow-lg"
                        : "hover:shadow-xl"
                    }`}
                  >
                    <div className="aspect-[4/3] flex items-center justify-center bg-blue-50">
                      <img
                        src={HealthcareIMS}
                        alt="HEALTHCARE IMS"
                        className="w-5/4 h-auto object-contain p-2"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <p className="text-[14.5px]  leading-6 text-gray-500 text-justify mb-4">
                        HEALTHCARE IMS supports hospitals, clinics, labs and
                        pharmacies of any size. Fully customizable to fit specific
                        customer. All user data is securely stored.
                      </p>
                      <Link
                        to="/healthcare-ims"
                        className="inline-block text-blue-400 font-medium text-sm sm:text-base hover:text-blue-600 transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </motion.div>
                </ScrollAnimation>

                {/* STARS IMS */}
                <ScrollAnimation delay={0.6}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveProductTab("stars")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setActiveProductTab("stars");
                    }}
                    className={`bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm transition-all will-change-transform h-full ${
                      activeProductTab === "stars"
                        ? "ring-2 ring-blue-500/60 shadow-lg"
                        : "hover:shadow-xl"
                    }`}
                  >
                    <div className="aspect-[4/3] flex items-center justify-center bg-blue-50">
                      <img
                        src={StarsIMS}
                        alt="STARS IMS"
                        className="w-5/4 h-auto object-contain p-2"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <p className="text-[14.5px] leading-6 text-gray-500 text-justify mb-4">
                        STARS IMS is unique software designed for schools, tutors,
                        colleges and universities. Built with secure technology,
                        advanced features, and carefully tailored for education.
                      </p>
                      <Link
                        to="/stars-ims"
                        className="inline-block text-blue-400 font-medium text-sm sm:text-base hover:text-blue-600 transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </motion.div>
                </ScrollAnimation>
              </div>
            </div>
          </motion.section>

{/* Enhanced Superb Slider Section with Center-focused Carousel */}
<motion.section 
  ref={sliderAnimation.ref}
  animate={sliderAnimation.controls}
  variants={slideUpVariants} 
  initial="hidden"
  className="bg-white max-w-7xl mx-auto py-12 sm:py-16 md:py-20 relative overflow-hidden rounded-3xl mt-12 sm:mt-16"
>
  {/* Dotted World Map Background */}
  <div className="absolute inset-0 opacity-5">
    <svg width="100%" height="100%" viewBox="0 0 1200 600" className="w-full h-full">
      <defs>
        <pattern id="worldDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#94a3b8"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#worldDots)"/>
      <g fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" opacity="0.3">
        <path d="M200 150 Q300 120 400 150 T600 160 L700 180 Q800 160 900 170"/>
        <path d="M150 200 Q250 180 350 200 T550 210 L650 230"/>
        <path d="M100 300 Q200 280 300 300 T500 310 L600 330 Q700 310 800 320"/>
        <path d="M180 400 Q280 380 380 400 T580 410"/>
      </g>
    </svg>
  </div>
  
  <div className="relative z-10 px-4 sm:px-6">
    <ScrollAnimation delay={0.1}>
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight px-4">
          Organizations Achieving Growth Using Our Product Solutions
        </h2>
      </div>
    </ScrollAnimation>

    <div className="mx-auto max-w-6xl relative">
      <div className="center-mode-carousel px-2 py-8">
        <Slider 
          centerMode={true}
          centerPadding="60px"
          infinite={true}
          slidesToShow={3}
          speed={500}
          autoplay={true}
          autoplaySpeed={3000}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                centerPadding: "50px"
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                centerPadding: "40px"
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                centerMode: false
              }
            }
          ]}
          className="center-slider"
        >
          {[
            { src: "src/assets/avenra.png", alt: "Avenra" },
            { src: "src/assets/marians.png", alt: "Marians" },
            { src: "src/assets/mobitel.png", alt: "Mobitel" },
            { src: "src/assets/school.jpg", alt: "School" },
            { src: "src/assets/smc.jpg", alt: "SMC" }
          ].map((item, index) => (
            <div key={index} className="px-2">
              <div className="logo-container flex justify-center items-center h-32 sm:h-40 md:h-48 transition-all duration-300 transform hover:scale-105">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="object-contain h-16 sm:h-20 md:h-24 transition-all duration-500 slider-logo"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>

  {/* Custom styles for the center mode slider */}
  <style jsx>{`
    .center-slider :global(.slick-center) {
      transform: scale(1.2);
      transition: transform 0.5s ease;
      z-index: 1;
    }
    .center-slider :global(.slick-center .slider-logo) {
      height: 28px !important;
    }
    @media (min-width: 640px) {
      .center-slider :global(.slick-center .slider-logo) {
        height: 32px !important;
      }
    }
    @media (min-width: 768px) {
      .center-slider :global(.slick-center .slider-logo) {
        height: 36px !important;
      }
    }
    .center-slider :global(.slick-slide) {
      transition: transform 0.5s ease, opacity 0.5s ease;
      opacity: 0.7;
    }
    .center-slider :global(.slick-center) {
      opacity: 1;
    }
  `}</style>
</motion.section>

          {/* Ready to Transform Your Business Section */}
          <motion.section 
            ref={transformAnimation.ref}
            animate={transformAnimation.controls}
            variants={slideUpVariants} 
            initial="hidden"
            className="bg-blue-50 py-12 md:py-16 rounded-3xl relative overflow-hidden my-12 sm:my-16"
          >
            <div className="relative z-10 px-4 sm:px-6 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <ScrollAnimation delay={0.1}>
                  <div className="text-gray-800 ml-20">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                      Ready To Transform Your Business?
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                      Let's Discuss Your Project Requirements And Create A Custom Solution That Perfectly Fits Your Business Needs.
                    </p>
                    <motion.button 
                      className="bg-blue-500 h-15 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-2xl font-semibold transition-colors text-sm sm:text-base cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Let's Discuss
                    </motion.button>
                  </div>
                </ScrollAnimation>

                {/* Right Image */}
                <ScrollAnimation delay={0.2}>
                  <div className="relative mt-8 lg:mt-0">
                    <div className="relative rounded-2xl overflow-hidden">
                            <
img
                        src={TransformImage}
                        alt="Transform Your Business"
                        className="w-full h-auto object-cover"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      />  
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      
      {/* Popup */}
      {showPopup && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-2xl p-4 sm:p-6 max-w-sm w-full relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
                
            <img
              src={PopupImage}
              alt="Special Offer"
              className="w-full h-auto object-contain rounded-lg"
            />
            <p className="text-gray-700 mt-4 text-center text-sm sm:text-base">Check out our latest offer!</p>
            <div className="mt-4 flex justify-center">
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}