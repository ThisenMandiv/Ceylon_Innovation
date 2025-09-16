import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import skyLogo from '../assets/sky-logo.png';

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

export default function About() {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white bg-cover bg-center min-h-[400px] mt-4"
          style={{ backgroundImage: `url(${skyLogo})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <motion.h1 
                  className="text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  About Us
                </motion.h1>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Text Content - 2/3 width */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollAnimation delay={0.1}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ceylon Innovation Services (PVT) Ltd is a software and 
                  business solutions provider, originally founded in 2009 
                  as Ceylon Innovation. With more than a decade under our 
                  belt, we are IT solutions, helping businesses of all sizes 
                  automate the most generation of innovation leveraging 
                  cutting-edge technologies and industry best practices.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.2}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  From startups to global corporations, we bridge the 
                  gap between vision and execution through seamless 
                  collaboration, innovative thinking, and sustainable 
                  solutions, along them that act a innovation we aim to be your 
                  trusted partner for growth.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.3}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Today, our 25+ global team members work around the 
                  clock, creating unique products, techniques, and 
                  solutions that set us apart from other software 
                  companies.
                </p>
              </ScrollAnimation>
            </div>
            
            {/* CEO Profile - 1/3 width */}
            <ScrollAnimation delay={0.4}>
              <div className="lg:col-span-1">
                <div className="w-90 h-100 bg-gray-200 rounded-lg mx-auto mb-6 overflow-hidden">
                  <motion.img 
                    src="assets/ceo_image.png" 
                    alt="Shalitha De Soysa - Founder & CEO" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Shalitha De Soysa
                  </h3>
                  <p className="text-gray-600 mb-1">
                    B.Sc(Hons) in Computer Science & Info. Sys.
                  </p>
                  <p className="text-gray-600 mb-1">
                    M.B.A in Business Administration
                  </p>
                  <p className="font-medium">
                    (Founder & CEO)
                  </p>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Gallery</h2>
            </ScrollAnimation>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Row 1 */}
              <ScrollAnimation delay={0.1}>
                <div className="sm:col-span-2 lg:col-span-2 rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery1.png" 
                    alt="Gallery image 1" 
                    className="w-full h-full object-cover transition-transform duration-300"
                    whileHover={{ scale: 1.03 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.15}>
                <motion.img 
                  src="assets/gallery2.png" 
                  alt="Gallery image 2" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.2}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery3.png" 
                    alt="Gallery image 3" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              {/* Row 2 */}
              <ScrollAnimation delay={0.25}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery4.png" 
                    alt="Gallery image 4" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.3}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery5.png" 
                    alt="Gallery image 5" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.35}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery6.png" 
                    alt="Gallery image 6" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.4}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery7.png" 
                    alt="Gallery image 7" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.45}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery8.png" 
                    alt="Gallery image 8" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              {/* Row 3 */}
              <ScrollAnimation delay={0.5}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery9.png" 
                    alt="Gallery image 9" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.55}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery10.png" 
                    alt="Gallery image 10" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.6}>
                <div className="sm:col-span-2 lg:col-span-2 rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery16.png" 
                    alt="Gallery image 16" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              {/* Row 4 */}
              <ScrollAnimation delay={0.65}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery12.png" 
                    alt="Gallery image 12" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.7}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery13.png" 
                    alt="Gallery image 13" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.75}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery14.png" 
                    alt="Gallery image 14" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.8}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery15.png" 
                    alt="Gallery image 15" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              {/* Row 5 */}
              <ScrollAnimation delay={0.85}>
                <div className="sm:col-span-2 lg:col-span-2 rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery11.png" 
                    alt="Gallery image 11" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.9}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery17.png" 
                    alt="Gallery image 17" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.95}>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <motion.img 
                    src="assets/gallery18.png" 
                    alt="Gallery image 18" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}