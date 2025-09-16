import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

// Section data
const sections = [
  {
    title: 'Pharma IFS',
    description: `Business systems are often disparate applications 
                  bolted together, which can drastically limit your access 
                  to data for key business decisions, prevent staff moving 
                  efficiently between tasks and slow down your reactions 
                  to change. IFS may be a way to avoid it.`,
    imgSrc: '/assets/pharma-ifs.png',
    reverse: false,
  },
  {
    title: 'Abesekara Dental',
    description: `Comprehensive Dental Care Management handles 
                  patient records, appointment scheduling, treatment 
                  planning, imaging integration, inventory 
                  management and intelligent reports`,
    imgSrc: '/assets/abesekara-dental.png',
    reverse: true,
  },
  {
    title: 'Suwana Hospital',
    description: `Suwana Hospital Ceylon provides comprehensive 
                  healthcare services with advanced patient care, 
                  modern medical equipment, clinical diagnostics, emergency 
                  support, and intelligent reporting`,
    imgSrc: '/assets/suwana-hospital.png',
    reverse: false,
  },
  {
    title: 'Emerald Pharmacy',
    description: `Emerald Pharmacy Ceylon specializes in comprehensive pharmaceutical services with accurate prescription handling, advanced stock and inventory management, seamless supplier coordination, patient-focused support, modern diagnostic equipment, and intelligent reporting for better decision-making.`,
    imgSrc: '/assets/emerald-pharmacy.png',
    reverse: true,
  },
  {
    title: 'Life Care Hospital',
    description: `Life Care Hospital provides comprehensive healthcare 
                  services with advanced patient management, 
                  specialized medical treatments, modern diagnostic 
                  equipment, clinical laboratory services, emergency 
                  and critical care support, and intelligent 
                  reporting for improved healthcare delivery.`,
    imgSrc: '/assets/lifecare-hospital.png',
    reverse: false,
  },
];

// Animation variants
const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const slideInFromRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Decorative Dots Component
const DecorativeDots = () => (
  <motion.div 
    className="grid grid-cols-4 gap-2"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    {Array.from({ length: 13 }).map((_, i) => (
      <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
    ))}
    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  </motion.div>
);

export default function Pastry() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Navbar */}
      <div className="absolute top-[-10px] md:top-[-20px] sm:top-[-15px] left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="pt-20 sm:pt-24 md:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
          {/* Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Pastry
            </h1>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The SKYNET Software For Patient Management, Billing & Finance, Pharmacy 
              Management, Laboratory Management, Inventory & Supply Chain, Customer 
              Relationships Management, Data Analytics & Reporting
            </motion.p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={section.reverse ? slideInFromRightVariants : slideInVariants}
                className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 sm:gap-10 lg:gap-12`}
              >
                {/* Text */}
                <motion.div 
                  className="lg:w-1/2 text-center lg:text-left"
                  variants={staggerVariants}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4 lg:px-0">
                    {section.description}
                  </p>
                </motion.div>

                {/* Image with decorative dots always on left */}
                <motion.div 
                  className="lg:w-1/2 flex justify-center"
                  variants={fadeInVariants}
                >
                  <div className="relative">
                    <div className="absolute -top-8 -left-8 z-10">
                      <DecorativeDots />
                    </div>

                    <motion.div
                      className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto overflow-hidden shadow-lg relative z-20"
                      style={{ borderRadius: '70% 30% 50% 50% / 40% 60% 30% 70%' }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <img
                        src={section.imgSrc}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}