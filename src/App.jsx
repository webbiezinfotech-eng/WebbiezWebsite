import React, { useState } from 'react'
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaInstagram, FaSearch, FaDesktop, FaCircle, FaCode, FaChartLine, FaBullseye, FaShoppingCart, FaUsers, FaPalette, FaMobile, FaChevronLeft, FaChevronRight, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const App = () => {
  return (
    <div className="min-h-screen bg-white text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 sm:px-8 py-10 sm:py-20">
        {/* Main Content Block */}
        <div className="relative w-full max-w-7xl min-h-screen ">
          {/* Main Teal Block */}
          <div className="bg-[#1E8975] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-20 relative border-2 border-white">
            {/* Company Name */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-none">
                WEBBIEZ
              </h1>
              <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-white leading-none">
                INFOTECH
              </h2>
            </div>

            {/* Left Social Media Bar - Hidden on mobile */}
            <div className="hidden lg:block absolute -left-[70px] top-1/3 transform -translate-y-1/2 z-20 ">
              <div className="bg-[#07191B] rounded-full p-3 md:py-6 space-y-4 ">
                <FaLinkedin className="text-xl md:text-2xl lg:text-3xl text-white transition cursor-pointer  " />
                <FaWhatsapp className="text-xl md:text-2xl lg:text-3xl text-white transition cursor-pointer  " />
                <FaEnvelope className="text-xl md:text-2xl lg:text-3xl text-white transition cursor-pointer  " />
                <FaInstagram className="text-xl md:text-2xl lg:text-3xl text-white transition cursor-pointer  " />
                <div className="w-8 h-8 bg-[#1E8975] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg md:text-xl ">W</span>
                </div>
              </div>
            </div>

            {/* Top Right Elements - Responsive */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20 flex gap-2 sm:gap-3">
              {/* Search Bar - Hidden on small screens */}
              <div className="hidden sm:flex bg-[#07191B] rounded-full px-3 sm:px-4 py-2 items-center gap-2">
                <FaSearch className="text-white text-sm" />
                <span className="text-white text-sm">Search</span>
              </div>
              
              {/* Logo */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#07191B] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">W</span>
              </div>
            </div>

            {/* Bottom Right Description Box - Responsive */}
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 z-20">
              <div className="bg-[#07191B] rounded-xl sm:rounded-2xl p-3 sm:p-5 max-w-xs">
                <h3 className="text-sm sm:text-lg font-bold text-white underline mb-2">
                  Innovating the Innovation
                </h3>
                <p className="text-gray-200 text-xs leading-relaxed">
                  At Webbiez Infotech, we don't just create technology—we create experiences. From powerful websites to stunning apps, our mission is to turn bold ideas into digital reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-10 sm:py-20 px-4 sm:px-8 bg-[#07191B]">
        {/* Top and Bottom Lines */}
        <div className="w-full h-px bg-white mb-8 sm:mb-16"></div>
        
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-center mb-8 sm:mb-16">Who We Are</h2>
          
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Side - Logo Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-8 flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0">
              <div className="relative w-full h-64 sm:h-80">
                {/* Computer Monitor */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <FaDesktop className="text-6xl sm:text-8xl text-green-800" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-2xl sm:text-4xl font-bold text-white">W</span>
                  </div>
                </div>
                
                {/* Circuit Elements - Left */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 flex gap-2">
                  <FaCircle className="text-green-800 text-sm" />
                  <div className="w-2 h-0.5 bg-green-800"></div>
                  <FaCircle className="text-green-800 text-sm" />
                  <div className="w-2 h-0.5 bg-green-800"></div>
                  <FaCircle className="text-green-800 text-sm" />
                </div>
                
                {/* Hexagonal Network - Top Right */}
                <div className="absolute top-8 right-8">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="w-3 h-3 bg-green-800 opacity-60 transform rotate-45"></div>
                    <div className="w-3 h-3 bg-green-800 opacity-80 transform rotate-45"></div>
                    <div className="w-3 h-3 bg-green-800 opacity-40 transform rotate-45"></div>
                    <div className="w-3 h-3 bg-green-800 opacity-70 transform rotate-45"></div>
                    <div className="w-3 h-3 bg-green-800 opacity-90 transform rotate-45"></div>
                    <div className="w-3 h-3 bg-green-800 opacity-50 transform rotate-45"></div>
                  </div>
                </div>
                
                {/* Company Name */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <h3 className="text-lg sm:text-2xl font-bold text-green-800">Webbiez infotech</h3>
                  <p className="text-green-800 text-xs sm:text-sm mt-1">Innovating the Innovation</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Description */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-white text-base sm:text-lg leading-relaxed font-serif">
                Webbiez Infotech is a forward-thinking IT solutions company that builds modern, user-friendly, and creative digital platforms. We specialize in ReactJS websites, intuitive UI/UX designs, graphic design, mobile applications, and public relations strategies that help businesses stand out. With a blend of creativity and technology, we deliver solutions that not only look great but also perform flawlessly.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Line */}
        <div className="w-full h-px bg-white mt-8 sm:mt-16"></div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-20 px-4 sm:px-8 bg-[#1E8975]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-center mb-8 sm:mb-16">Services We Offer</h2>
          
          {/* Services Cards Container */}
          <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-end justify-center lg:gap-20">
            {/* Web Development */}
            <ServiceCard 
              title="Web Development"
              description="Scalable, fast, and modern websites built with cutting-edge technologies."
              icon={<FaCode />}
              isExpanded={false}
              backgroundImage="bg-gradient-to-br from-[#07191B] to-[#07191B]"
            />
            
            {/* UI/UX Designing */}
            <ServiceCard 
              title="UI/UX Designing"
              description="Beautiful, intuitive user interfaces and experiences that users love."
              icon={<FaPalette />}
              isExpanded={false}
              backgroundImage="bg-gradient-to-br from-[#07191B] to-[#07191B]"
            />
            
            {/* SEO & Digital Marketing */}
            <ServiceCard 
              title="SEO & Digital Marketing"
              description="Boost your online presence with strategic SEO and digital marketing solutions."
              icon={<FaChartLine />}
              isExpanded={false}
              backgroundImage="bg-gradient-to-br from-purple-800 to-purple-900"
            />
            
            {/* Branding & Creativity */}
            <ServiceCard 
              title="Branding & Creativity"
              description="Create memorable brand identities that stand out in the market."
              icon={<FaBullseye />}
              isExpanded={false}
              backgroundImage="bg-gradient-to-br from-gray-300 to-gray-400"
            />
            
            {/* E-Commerce & Business Portals */}
            <ServiceCard 
              title="E-Commerce & Business Portals"
              description="Powerful online stores and business portals that drive sales and growth."
              icon={<FaShoppingCart />}
              isExpanded={false}
              backgroundImage="bg-gradient-to-br from-[#07191B] to-[#07191B]"
            />
            
            {/* PR (Public Relations) */}
            <ServiceCard 
              title="PR (Public Relations)"
              description="Strategic communication and public relations to build your brand reputation."
              icon={<FaUsers />}
              isExpanded={false}
              backgroundImage="bg-gradient-to-br from-[#07191B] to-purple-900"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10 sm:py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title and Description */}
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#07191B] mb-4 sm:mb-6">
              Projects We've <span className="text-teal-500">Worked on</span>
            </h2>
            <p className="text-base sm:text-lg text-[#07191B] max-w-4xl mx-auto leading-relaxed">
              We've worked on diverse projects ranging from responsive websites to complex business portals. Our solutions integrate ReactJS, PHP, Node.js, Flutter, Figma, and modern UI tools to ensure scalability, design precision, and high performance.
            </p>
          </div>

          {/* Main Project Display and Slider */}
          <ProjectsSlider />
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQs Section */}
      <FAQsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  )
}

// Service Card Component
function ServiceCard({ title, description, icon, isExpanded, backgroundImage }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine text color based on background
  const isLightBackground = backgroundImage.includes('gray-300') || backgroundImage.includes('gray-400');
  const textColor = isLightBackground ? 'text-[#07191B]' : 'text-white';
  
  return (
    <div 
      className={`relative transition-all duration-500 ease-in-out cursor-pointer ${
        isExpanded || isHovered 
          ? 'w-full sm:w-80 lg:w-96 h-64' 
          : 'w-16 h-64 sm:h-80'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${backgroundImage} rounded-2xl h-full border-2 border-white relative overflow-hidden`}>
        {/* Background Pattern/Image Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6">
          {isExpanded || isHovered ? (
            // Expanded State
            <div className={textColor}>
              <div className="text-3xl sm:text-4xl mb-4">{icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3>
              <p className="text-base sm:text-lg leading-relaxed">{description}</p>
            </div>
          ) : (
            // Collapsed State
            <div className={`${textColor} h-full flex items-center justify-center`}>
              <div className="transform -rotate-90">
                <span className="text-sm sm:text-lg font-bold whitespace-nowrap">{title}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Projects Slider Component
function ProjectsSlider() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "UI/UX Designer Portfolio",
      description: "2+ Years of Excellence in Web Development, UI/UX Design",
      type: "portfolio"
    },
    {
      id: 1,
      title: "Financial Freedom Platform",
      description: "Unlock financial freedom with India's Best Mutual Fund Distributor",
      type: "financial"
    },
    {
      id: 2,
      title: "Job Portal Platform", 
      description: "The Easiest Way To Get Your New Job",
      type: "job"
    },
    {
      id: 3,
      title: "Wholesale Partner Platform",
      description: "Your Trusted Wholesale Partner",
      type: "wholesale"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Project Display */}
      <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Details Card */}
          <div className="w-full lg:w-80 bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-teal-500 mb-4">
              {projects[selectedProject].title}
            </h3>
            <p className="text-[#07191B] mb-6 leading-relaxed text-sm sm:text-base">
              {projects[selectedProject].description}
            </p>
            <div className="mb-6">
              <h4 className="text-base sm:text-lg font-bold text-teal-500 mb-2">Technologies Used:-</h4>
              <p className="text-[#07191B] text-sm sm:text-base">
                {projects[selectedProject].type === 'portfolio' && "React.js, Tailwind CSS & Node.js"}
                {projects[selectedProject].type === 'financial' && "React.js, Node.js & MongoDB"}
                {projects[selectedProject].type === 'job' && "PHP, MySQL & Bootstrap"}
                {projects[selectedProject].type === 'wholesale' && "Flutter, Firebase & Payment Gateway"}
              </p>
            </div>
            <button className="w-full border-2 border-teal-500 text-teal-500 py-3 px-6 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition duration-300 text-sm sm:text-base">
              Visit Site
            </button>
          </div>

          {/* Project Preview */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
              <div className="h-64 sm:h-96 bg-gradient-to-br from-[#07191B] via-teal-900 to-[#07191B] relative">
                {/* Project Preview Content */}
                <div className="p-4 sm:p-8 h-full flex flex-col justify-between">
                  {/* Navbar */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-lg sm:text-2xl font-bold text-white">Aarti Nathani</div>
                    <div className="hidden sm:flex gap-4 lg:gap-8 items-center">
                      <a href="#" className="text-teal-400 hover:text-teal-300 text-sm">Home</a>
                      <a href="#" className="text-gray-300 hover:text-white text-sm">About</a>
                      <a href="#" className="text-gray-300 hover:text-white text-sm">Services</a>
                      <a href="#" className="text-gray-300 hover:text-white text-sm">Projects</a>
                      <a href="#" className="text-gray-300 hover:text-white text-sm">Testimonials</a>
                      <a href="#" className="text-gray-300 hover:text-white text-sm">Contact</a>
                      <button className="bg-teal-500 hover:bg-teal-600 px-4 sm:px-6 py-2 rounded-full transition text-sm">
                        HIRE ME
                      </button>
                    </div>
                  </div>

                  {/* Hero Content */}
                  <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-4">
                      UI <span className="inline-block mx-4 sm:mx-8"></span> UX
                    </h1>
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 mb-4 sm:mb-8"
                        style={{ WebkitTextStroke: '2px #14b8a6' }}>
                      DESIGNER
                    </h2>
                  </div>

                  {/* Bottom Content */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <button className="bg-teal-500 hover:bg-teal-600 px-6 sm:px-8 py-3 rounded-full font-semibold transition text-sm">
                      Get A Free Call
                    </button>
                    <p className="text-gray-300 text-xs sm:text-sm text-center">
                      {projects[selectedProject].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Project Thumbnails Slider - Below main display */}
      <div className="mt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedProject === index 
                  ? 'transform scale-105 border-4 border-teal-500' 
                  : 'border-2 border-gray-300 hover:border-teal-400'
              }`}
              onClick={() => setSelectedProject(index)}
            >
              <div className="w-40 sm:w-48 h-24 sm:h-32 bg-white rounded-lg shadow-md">
                {project.type === 'portfolio' ? (
                  <div className="h-full bg-gradient-to-br from-[#07191B] via-teal-900 to-[#07191B] flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">UI UX</h3>
                      <p className="text-teal-400 text-xs sm:text-sm">DESIGNER</p>
                    </div>
                  </div>
                ) : project.type === 'financial' ? (
                  <div className="h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-sm sm:text-lg font-bold mb-2">Financial</h3>
                      <p className="text-xs">Mutual Fund Platform</p>
                    </div>
                  </div>
                ) : project.type === 'job' ? (
                  <div className="h-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-sm sm:text-lg font-bold mb-2">Job Portal</h3>
                      <p className="text-xs">Career Platform</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-sm sm:text-lg font-bold mb-2">Wholesale</h3>
                      <p className="text-xs">B2B Platform</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      quote: "Our clients love the creativity, timely delivery, and professionalism of Webbiez Infotech. They appreciate how we turn ideas into impactful digital solutions that boost growth, visibility, and business success.",
      author: "Aarti Nathani",
      role: "UI/UX Designer, Software Developer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 1,
      quote: "Webbiez Infotech delivered exceptional results for our e-commerce platform. Their attention to detail and user experience design helped us increase conversions by 40%.",
      author: "Sarah Johnson",
      role: "E-commerce Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      quote: "The team's expertise in React and modern web technologies is outstanding. They transformed our vision into a beautiful, functional website that our customers love.",
      author: "Michael Chen",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-10 sm:py-20 px-4 sm:px-8 bg-[#1E8975]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Title and Main Quote */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white font-serif mb-6 sm:mb-8">
              What Our Clients <br />
              <span className="text-teal-200">Says</span>
            </h2>
            <div className="text-lg sm:text-2xl lg:text-4xl text-white font-serif italic leading-relaxed">
              <span className="text-3xl sm:text-4xl lg:text-6xl">"</span>
              "Our clients love the creativity, timely delivery, and professionalism of Webbiez Infotech. They appreciate how we turn ideas into impactful digital solutions that boost growth, visibility, and business success."
              <span className="text-3xl sm:text-4xl lg:text-6xl">"</span>
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Navigation Arrows - Hidden on mobile */}
              <button
                onClick={prevTestimonial}
                className="hidden lg:flex absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-transparent border-2 border-white rounded-full items-center justify-center text-white hover:text-[#1E8975] hover:bg-white transition duration-300 z-10"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="hidden lg:flex absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-transparent border-2 border-white rounded-full items-center justify-center text-white hover:text-[#1E8975] hover:bg-white transition duration-300 z-10"
              >
                <FaChevronRight className="text-lg" />
              </button>

              {/* Testimonial Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl max-w-md">
                <div className="text-4xl sm:text-6xl text-[#1E8975] mb-4">"</div>
                <p className="text-[#07191B] text-base sm:text-lg leading-relaxed mb-6">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="border-t border-gray-200 pt-4 sm:pt-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].author}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[#07191B] text-base sm:text-lg">
                        {testimonials[currentTestimonial].author}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQs Section Component
function FAQsSection() {
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "What services do you provide?",
      answer: "We provide web development, mobile app development, UI/UX design, SEO, branding, e-commerce solutions, and PR services."
    },
    {
      id: 1,
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during consultation."
    },
    {
      id: 2,
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we provide comprehensive maintenance and support packages including updates, security patches, performance monitoring, and technical assistance."
    },
    {
      id: 3,
      question: "What technologies do you use for development?",
      answer: "We use modern technologies including React.js, Node.js, PHP, Flutter, MongoDB, MySQL, and various UI/UX tools like Figma and Adobe Creative Suite."
    },
    {
      id: 4,
      question: "Can you help with existing projects?",
      answer: "Absolutely! We can audit, improve, and maintain existing projects. We work with various frameworks and can integrate with your current systems."
    },
    {
      id: 5,
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on scope, complexity, and timeline. We offer competitive rates and provide detailed quotes after understanding your requirements."
    }
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="py-10 sm:py-20 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1E8975] text-center mb-8 sm:mb-16 font-serif">
          FAQs
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start">
          {/* Left Side - FAQ Accordion */}
          <div className="space-y-4 w-full lg:w-auto">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="bg-teal-50 rounded-lg border border-teal-100">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-teal-100 transition duration-300"
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="text-[#1E8975] font-bold text-sm sm:text-lg">
                      Que{index + 1}.
                    </span>
                    <span className="text-[#07191B] font-medium text-sm sm:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-[#1E8975] text-xl sm:text-2xl font-bold">
                    {expandedFAQ === faq.id ? '−' : '+'}
                  </div>
                </button>

                {/* Answer */}
                {expandedFAQ === faq.id && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="bg-teal-50 rounded-lg p-3 sm:p-4 border border-teal-100">
                      <p className="text-[#07191B] leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - 3D Illustration Placeholder */}
          <div className="flex justify-center items-center w-full lg:w-auto">
            <div className="relative">
              {/* 3D Character Illustration Placeholder */}
              <div className="w-64 h-64 sm:w-80 sm:h-96 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl sm:rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Character Silhouette */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  {/* Beanbag Chair */}
                  <div className="w-32 h-20 bg-teal-400 rounded-full relative">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-teal-500 rounded-full"></div>
                  </div>
                  
                  {/* Person */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    {/* Head */}
                    <div className="w-8 h-8 bg-orange-200 rounded-full mb-2"></div>
                    {/* Body */}
                    <div className="w-12 h-16 bg-gray-600 rounded-lg relative">
                      {/* Laptop */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-300 rounded"></div>
                    </div>
                    {/* Arms */}
                    <div className="absolute -left-2 top-4 w-3 h-8 bg-orange-200 rounded-full"></div>
                    <div className="absolute -right-2 top-4 w-3 h-8 bg-orange-200 rounded-full"></div>
                  </div>
                </div>

                {/* Question Mark */}
                <div className="absolute top-8 right-8">
                  <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">?</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-teal-300 rounded-full opacity-60"></div>
                <div className="absolute top-12 left-8 w-2 h-2 bg-teal-400 rounded-full opacity-40"></div>
                <div className="absolute bottom-8 right-12 w-3 h-3 bg-teal-300 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-10 sm:py-20 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1E8975] text-center mb-8 sm:mb-16 font-serif">
          Contact Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Side - Contact Form */}
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name and Phone Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="flex-1 bg-teal-600 text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm sm:text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 bg-teal-600 text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm sm:text-base"
                />
              </div>

              {/* Email Field */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-teal-600 text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm sm:text-base"
              />

              {/* Message Field */}
              <textarea
                name="message"
                placeholder="Message.."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-teal-600 text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none text-sm sm:text-base"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-white border-2 border-teal-600 text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-teal-600 hover:text-white transition duration-300 text-sm sm:text-base"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="flex-1 w-full">
            <div className="space-y-4 sm:space-y-6">
              {/* Introductory Text */}
              <div className="mb-6 sm:mb-8">
                <p className="text-[#07191B] text-base sm:text-lg leading-relaxed">
                  Have a project in mind? Let's create something amazing together
                </p>
              </div>

              {/* Phone Number */}
              <div className="bg-teal-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
                <FaPhone className="text-lg sm:text-xl" />
                <span className="text-base sm:text-lg">+91 9144716600</span>
              </div>

              {/* Email Address */}
              <div className="bg-teal-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
                <FaEnvelope className="text-lg sm:text-xl" />
                <span className="text-base sm:text-lg">wiinfo@gmail.com</span>
              </div>

              {/* Location */}
              <div className="bg-teal-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
                <FaMapMarkerAlt className="text-lg sm:text-xl" />
                <span className="text-base sm:text-lg">Jabalpur, Madhya Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Section Component
function FooterSection() {
  return (
    <footer className="bg-[#1E8975] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="relative">
                <FaDesktop className="text-3xl text-white" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                {/* Network Elements */}
                <div className="absolute -top-1 -right-1">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-2 h-2 bg-white opacity-60 transform rotate-45"></div>
                    <div className="w-2 h-2 bg-white opacity-80 transform rotate-45"></div>
                    <div className="w-2 h-2 bg-white opacity-40 transform rotate-45"></div>
                    <div className="w-2 h-2 bg-white opacity-70 transform rotate-45"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Webbiez infotech</h3>
                <p className="text-teal-200 text-xs sm:text-sm">Innovating the Innovation</p>
              </div>
            </div>
            <p className="text-white text-xs sm:text-sm leading-relaxed">
              Webbiez Infotech – Crafting digital experiences with creativity and technology. Let's build the future, one innovation at a time.
            </p>
          </div>

          {/* Pages Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white font-serif">Pages</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-teal-200 transition duration-300 text-sm sm:text-base">Home</a></li>
              <li><a href="#" className="text-white hover:text-teal-200 transition duration-300 text-sm sm:text-base">About us</a></li>
              <li><a href="#" className="text-white hover:text-teal-200 transition duration-300 text-sm sm:text-base">Services</a></li>
              <li><a href="#" className="text-white hover:text-teal-200 transition duration-300 text-sm sm:text-base">Projects</a></li>
            </ul>
          </div>

          {/* Queries Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white font-serif">Queries</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-teal-200 transition duration-300 text-sm sm:text-base">Testimonials</a></li>
              <li><a href="#" className="text-white hover:text-teal-200 transition duration-300 text-sm sm:text-base">FAQs</a></li>
              <li><a href="#" className="text-white hover:text-teal-200 transition duration-300 text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white font-serif">Social Media</h4>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="text-white hover:text-teal-200 transition duration-300">
                <FaWhatsapp className="text-xl sm:text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition duration-300">
                <FaInstagram className="text-xl sm:text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition duration-300">
                <FaLinkedin className="text-xl sm:text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Privacy Policy */}
      <div className="border-t border-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white text-xs sm:text-sm">
              WebbiezInfotech @2025, all rights reserved
            </p>
            <a href="#" className="text-white hover:text-teal-200 transition duration-300 text-xs sm:text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App
