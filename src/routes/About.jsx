import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import skyLogo from '../assets/sky-logo.png'; // adjust path if needed

export default function About() {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section
  className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white bg-cover bg-center min-h-[400px] mt-4"
  style={{ backgroundImage: `url(${skyLogo})` }}
>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
      </div>
    </div>
  </div>
</section>


        {/* About Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Text Content - 2/3 width */}
            <div className="lg:col-span-2">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Ceylon Innovation Services (PVT) Ltd is a software and 
                business solutions provider, originally founded in 2009 
                as Ceylon Innovation. With more than a decade under our 
                belt, we are IT solutions, helping businesses of all sizes 
                automate the most generation of innovation leveraging 
                cutting-edge technologies and industry best practices.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                From startups to global corporations, we bridge the 
                gap between vision and execution through seamless 
                collaboration, innovative thinking, and sustainable 
                solutions, along them that act a innovation we aim to be your 
                trusted partner for growth.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, our 25+ global team members work around the 
                clock, creating unique products, techniques, and 
                solutions that set us apart from other software 
                companies.
              </p>
            </div>
            
            {/* CEO Profile - 1/3 width */}
            <div className="lg:col-span-1">
            
                <div className="w-90 h-100 bg-gray-200 rounded-lg mx-auto mb-6">
                  <img src="assets/ceo_image.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />
                </div>
                <div className="text-center">
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
                </div>
              
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className=" py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Gallery</h2>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            
              <div className="sm:col-span-2 lg:col-span-2">
                <div className="aspect-video  rounded-lg overflow-hidden">
                <img src="assets/gallery1.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />
                </div>
              </div>
              
              <img src="assets/gallery2.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery3.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />
              </div>
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery4.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />
              </div>
              
              {/* Row 2 - Four equal sized images */}
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery5.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />
              </div>
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery6.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Team event placeholder */}
              </div>
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery7.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />
              </div>
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery8.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Team building placeholder */}
              </div>
              
              {/* Row 3 - Mixed layout */}
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery9.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Office interior placeholder */}
              </div>
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery10.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Presentation placeholder */}
              </div>
              <div className="sm:col-span-2 lg:col-span-2">
                <div className="aspect-video 0 rounded-lg overflow-hidden">
                <img src="assets/gallery16.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Team outdoor event placeholder */}
                </div>
              </div>
              
              {/* Row 4 - Four equal sized images */}
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery12.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Meeting room placeholder */}
              </div>
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery13.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Team collaboration placeholder */}
              </div>
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery14.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Office celebration placeholder */}
              </div>
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery15.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Team photo placeholder */}
              </div>
              
              {/* Row 5 - Mixed layout */}
              <div className="sm:col-span-2 lg:col-span-2">
                <div className="aspect-video  rounded-lg overflow-hidden">
                <img src="assets/gallery11.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Group celebration placeholder */}
                </div>
              </div>
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery17.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Award presentation placeholder */}
              </div>
              <div className="aspect-square  rounded-lg overflow-hidden">
              <img src="assets/gallery18.png" alt="SKYNET Pro" className="w-full h-full object-contain p-3" />{/* Team workspace placeholder */}
              </div>
              
            
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}