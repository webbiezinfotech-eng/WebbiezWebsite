import React, { useState } from 'react'
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaInstagram, FaSearch, FaDesktop, FaCircle, FaCode, FaChartLine, FaBullseye, FaShoppingCart, FaUsers, FaPalette, FaMobile, FaChevronLeft, FaChevronRight, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import uiuxImage from './assets/images/WhatsApp Image 2025-12-15 at 3.12.41 PM.jpeg'
import financialImage from './assets/images/Screenshot 2025-12-15 at 16.07.58.png'
import jobImage from './assets/images/Screenshot 2025-12-15 at 16.09.44.png'
import wholesaleImage from './assets/images/Screenshot 2025-12-15 at 16.10.47.png'
import faqImage from './assets/images/Untitled design (42) 1.png'
import heroImage from './assets/images/Group 1321316220.png'
import webDevImage from './assets/images/Rectangle 34625783.png'
import uiuxServiceImage from './assets/images/Rectangle 34625783-1.png'
import seoImage from './assets/images/Rectangle 34625783-2.png'
import brandingImage from './assets/images/Rectangle 34625783-3.png'
import ecommerceImage from './assets/images/Rectangle 34625783-4.png'
import prImage from './assets/images/Rectangle 34625783-5.png'

const App = () => {
  return (
    <div className="min-h-screen bg-white text-white">
      {/* Hero Section */}
      <section className="h-screen w-full bg-white overflow-hidden flex">
        <div className="h-full w-full flex">
          {/* Left Vertical Bar - Black background with social icons */}
          <div className="w-16 lg:w-20 flex-shrink-0 bg-[#07191B] flex flex-col items-center justify-center space-y-5 p-4">
            <FaLinkedin className="text-2xl lg:text-3xl text-white transition cursor-pointer hover:opacity-80" />
            <FaWhatsapp className="text-2xl lg:text-3xl text-white transition cursor-pointer hover:opacity-80" />
            <FaEnvelope className="text-2xl lg:text-3xl text-white transition cursor-pointer hover:opacity-80" />
            <FaInstagram className="text-2xl lg:text-3xl text-white transition cursor-pointer hover:opacity-80" />
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mt-2">
              <span className="text-[#07191B] text-lg lg:text-xl font-bold">W</span>
              </div>
            </div>

          {/* Left Green Vertical Element */}
          <div className="w-4 lg:w-6 flex-shrink-0 bg-[#208975]"></div>

          {/* Main Image - Direct image display */}
          <div className="flex-1 relative overflow-hidden flex items-center justify-center">
            <img 
              src={heroImage} 
              alt="Webbiez Infotech Hero" 
              className="w-[80%] h-[80%] object-contain"
            />

            {/* Top Right - Search Bar - On image */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 flex gap-3">
              <div className="bg-white border-2 border-[#07191B] rounded-full px-4 sm:px-5 py-2 flex items-center gap-2">
                <FaSearch className="text-[#07191B] text-sm" />
                <span className="text-[#07191B] text-sm font-medium">Search</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-[#07191B] rounded-full flex items-center justify-center">
                <span className="text-[#07191B] font-bold text-sm sm:text-base">W</span>
              </div>
            </div>

            {/* Bottom Right - Innovation Box - On image */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-40">
              <div className="bg-[#07191B] rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 max-w-xs sm:max-w-sm border border-white">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white underline mb-2 sm:mb-3 font-serif">
                  Innovating the Innovation
                </h3>
                <p className="text-white text-xs sm:text-sm leading-relaxed font-serif">
                  At Webbiez Infotech, we don't just create technology—we create experiences. From powerful websites to stunning apps, our mission is to turn bold ideas into digital reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-10 sm:py-20 px-4 sm:px-8 bg-[#07191B]">
        {/* Top Line - 60% width from left to right */}
        <div className="w-[60%] h-2 sm:h-3 lg:h-4 bg-white rounded-full mb-8 sm:mb-16"></div>
        
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
        
        {/* Bottom Line - 60% width from right to left */}
        <div className="w-[60%] h-2 sm:h-3 lg:h-4 bg-white rounded-full mt-8 sm:mt-16 ml-auto"></div>
      </section>

      {/* Services Section */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-32 xl:pb-40 px-4 sm:px-8 bg-[#208975] min-h-screen flex items-start">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-left mb-8 sm:mb-12 lg:mb-16">Services We Offer</h2>
          
          {/* Services Cards Container */}
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-14 xl:gap-18 2xl:gap-24 items-center lg:items-end justify-center">
            {/* Web Development */}
            <ServiceCard 
              title="Web Development"
              description="Scalable, fast, and modern websites built with cutting-edge technologies."
              icon={<FaCode />}
              isExpanded={false}
              backgroundImage="bg-[#07191B]"
              backgroundImageSrc={webDevImage}
            />
            
            {/* UI/UX Designing */}
            <ServiceCard 
              title="UI/UX Designing"
              description="Beautiful, intuitive user interfaces and experiences that users love."
              icon={<FaPalette />}
              isExpanded={false}
              backgroundImage="bg-[#07191B]"
              backgroundImageSrc={uiuxServiceImage}
            />
            
            {/* SEO & Digital Marketing */}
            <ServiceCard 
              title="SEO & Digital Marketing"
              description="Boost your online presence with strategic SEO and digital marketing solutions."
              icon={<FaChartLine />}
              isExpanded={false}
              backgroundImage="bg-purple-900"
              backgroundImageSrc={seoImage}
            />
            
            {/* Branding & Creativity */}
            <ServiceCard 
              title="Branding & Creativity"
              description="Create memorable brand identities that stand out in the market."
              icon={<FaBullseye />}
              isExpanded={false}
              backgroundImage="bg-gray-400"
              backgroundImageSrc={brandingImage}
            />
            
            {/* E-Commerce & Business Portals */}
            <ServiceCard 
              title="E-Commerce & Business Portals"
              description="Powerful online stores and business portals that drive sales and growth."
              icon={<FaShoppingCart />}
              isExpanded={false}
              backgroundImage="bg-[#07191B]"
              backgroundImageSrc={ecommerceImage}
            />
            
            {/* PR (Public Relations) */}
            <ServiceCard 
              title="PR (Public Relations)"
              description="Strategic communication and public relations to build your brand reputation."
              icon={<FaUsers />}
              isExpanded={false}
              backgroundImage="bg-purple-900"
              backgroundImageSrc={prImage}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="-mt-16 sm:-mt-20 lg:-mt-24 xl:-mt-28 2xl:-mt-32 pt-12 sm:pt-16 lg:pt-20 xl:pt-24 pb-10 sm:pb-20 px-4 sm:px-8 bg-white rounded-t-[5rem] sm:rounded-t-[6rem] md:rounded-t-[7rem] lg:rounded-t-[8rem] xl:rounded-t-[10rem] 2xl:rounded-t-[12rem] rounded-b-[5rem] sm:rounded-b-[6rem] md:rounded-b-[7rem] lg:rounded-b-[8rem] xl:rounded-b-[10rem] 2xl:rounded-b-[12rem] relative z-10 mb-0">
        <div className="max-w-[98%] sm:max-w-[95%] lg:max-w-[92%] xl:max-w-[90%] 2xl:max-w-[88%] mx-auto w-full">
          {/* Section Title and Description */}
          <div className="text-center mb-10 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#07191B] mb-4 sm:mb-6">
              Projects We've <span className="text-[#208975]">Worked on</span>
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
function ServiceCard({ title, description, icon, isExpanded, backgroundImage, backgroundImageSrc }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine text color based on background
  const isLightBackground = backgroundImage.includes('gray-300') || backgroundImage.includes('gray-400');
  const textColor = isLightBackground ? 'text-[#07191B]' : 'text-white';
  
  return (
    <div 
      className={`relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden rounded-[60px] sm:rounded-[70px] lg:rounded-[80px] xl:rounded-[90px] ${
        isExpanded || isHovered 
          ? 'w-full sm:w-[28rem] lg:w-[36rem] xl:w-[40rem] h-96 sm:h-[28rem] lg:h-[32rem]' 
          : 'w-28 sm:w-32 lg:w-36 h-80 sm:h-[450px] lg:h-[500px]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${backgroundImage} rounded-[60px] sm:rounded-[70px] lg:rounded-[80px] xl:rounded-[90px] h-full border-2 border-white relative overflow-hidden`}>
        {/* Background Image */}
        {backgroundImageSrc && (
          <div className="absolute inset-0 z-0">
            <img 
              src={backgroundImageSrc} 
              alt={title}
              className="w-full h-full object-cover"
            />
        </div>
        )}
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          {isExpanded || isHovered ? (
            // Expanded State
            <div className={`${textColor} flex flex-col justify-center space-y-6 sm:space-y-8`}>
              <div className="text-4xl sm:text-5xl lg:text-6xl">{icon}</div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h3>
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">{description}</p>
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
      title: "Wholesale Partner Platform",
      description: "A comprehensive e-commerce platform for wholesale stationery supplies. This full-featured website includes a complete admin panel for inventory management, order processing, and customer management. Built with modern web technologies to provide seamless shopping experience with bulk ordering capabilities.",
      type: "wholesale",
      url: "https://shreeram.webbiezinfotech.in/"
    },
    {
      id: 1,
      title: "UI/UX Designer Portfolio",
      description: "A professional portfolio website showcasing extensive work in web development and UI/UX design. The site beautifully presents all completed projects with detailed explanations of each project's scope, challenges, and solutions. Includes comprehensive backend integration for dynamic content management and project showcase.",
      type: "portfolio",
      url: ""
    },
    {
      id: 2,
      title: "Financial Freedom Platform",
      description: "A comprehensive mutual fund platform designed to provide complete financial information and investment solutions. The website features extensive use of animations, smooth transitions, and engaging graphics to make complex financial data accessible and visually appealing. Built to deliver an exceptional user experience with interactive elements.",
      type: "financial",
      url: "https://swarajfinpro.com/"
    },
    {
      id: 3,
      title: "Job Portal Platform", 
      description: "A large-scale job portal platform connecting job seekers with employers. This comprehensive platform includes a feature-rich web application and a mobile app built with Flutter for seamless access across devices. Designed to handle high traffic and provide efficient job matching capabilities.",
      type: "job",
      url: "https://beige-jaguar-560051.hostingersite.com/"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Project Display */}
      <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Details Card */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-lg max-h-[500px] sm:max-h-[600px] overflow-y-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#208975] mb-5">
              {projects[selectedProject].title}
            </h3>
            <p className="text-[#07191B] mb-6 leading-relaxed text-lg sm:text-xl">
              {projects[selectedProject].description}
            </p>
            <div className="mb-7">
              <h4 className="text-lg sm:text-xl font-bold text-[#208975] mb-3">Technologies Used:-</h4>
              <p className="text-[#07191B] text-lg sm:text-xl">
                {projects[selectedProject].type === 'wholesale' && "React.js, PHP, Admin Panel & Backend Integration"}
                {projects[selectedProject].type === 'portfolio' && "Next.js, PHP, Backend & Full Stack Development"}
                {projects[selectedProject].type === 'financial' && "React.js, PHP, Animations & Graphics"}
                {projects[selectedProject].type === 'job' && "React.js, PHP, Flutter Mobile App & Full Platform"}
              </p>
            </div>
            <button 
              onClick={() => {
                if (projects[selectedProject].url) {
                  window.open(projects[selectedProject].url, '_blank');
                }
              }}
              className="border-2 border-[#208975] text-[#208975] py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#208975] hover:text-white transition duration-300"
            >
              Visit Site
            </button>
          </div>

          {/* Project Preview - Image */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-[2rem] border-2 border-gray-200 shadow-lg overflow-hidden max-h-[500px] sm:max-h-[600px]">
              {projects[selectedProject].type === 'portfolio' ? (
                <img 
                  src={uiuxImage} 
                  alt={projects[selectedProject].title}
                  className="w-full h-full max-h-[500px] sm:max-h-[600px] object-cover rounded-2xl sm:rounded-3xl lg:rounded-[2rem]"
                />
              ) : projects[selectedProject].type === 'financial' ? (
                <img 
                  src={financialImage} 
                  alt={projects[selectedProject].title}
                  className="w-full h-full max-h-[500px] sm:max-h-[600px] object-cover rounded-2xl sm:rounded-3xl lg:rounded-[2rem]"
                />
              ) : projects[selectedProject].type === 'job' ? (
                <img 
                  src={jobImage} 
                  alt={projects[selectedProject].title}
                  className="w-full h-full max-h-[500px] sm:max-h-[600px] object-cover rounded-2xl sm:rounded-3xl lg:rounded-[2rem]"
                />
              ) : projects[selectedProject].type === 'wholesale' ? (
                <img 
                  src={wholesaleImage} 
                  alt={projects[selectedProject].title}
                  className="w-full h-full max-h-[500px] sm:max-h-[600px] object-cover rounded-2xl sm:rounded-3xl lg:rounded-[2rem]"
                />
              ) : (
                <div className="h-64 sm:h-96 bg-gradient-to-br from-[#07191B] via-teal-900 to-[#07191B] relative rounded-2xl sm:rounded-3xl lg:rounded-[2rem] flex items-center justify-center">
                  <p className="text-white text-lg sm:text-xl">Image coming soon</p>
                    </div>
              )}
                  </div>
          </div>
        </div>

      {/* Project Thumbnails Slider - Below main display */}
      <div className="mt-8">
        <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 xl:gap-12 justify-center items-center w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`cursor-pointer transition-all duration-300 rounded-2xl sm:rounded-3xl overflow-hidden relative group ${
                selectedProject === index 
                  ? 'transform scale-110 border-4 border-[#208975] shadow-xl shadow-[#208975]/50' 
                  : 'border-2 border-gray-300 hover:border-[#208975] hover:scale-105 hover:shadow-lg hover:shadow-[#208975]/30'
              }`}
              onClick={() => setSelectedProject(index)}
            >
              <div className="w-40 sm:w-48 h-24 sm:h-32 bg-white rounded-2xl sm:rounded-3xl shadow-md overflow-hidden relative">
                {/* Hover Overlay */}
                {selectedProject !== index && (
                  <div className="absolute inset-0 bg-[#208975]/0 group-hover:bg-[#208975]/10 transition-all duration-300 rounded-2xl sm:rounded-3xl z-10"></div>
                )}
                {project.type === 'wholesale' ? (
                  <img 
                    src={wholesaleImage} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                  />
                ) : project.type === 'portfolio' ? (
                  <img 
                    src={uiuxImage} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                  />
                ) : project.type === 'financial' ? (
                  <img 
                    src={financialImage} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                  />
                ) : project.type === 'job' ? (
                  <img 
                    src={jobImage} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                  />
                ) : null}
                    </div>
              {/* Active Indicator */}
              {selectedProject === index && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#208975] rounded-full border-2 border-white flex items-center justify-center z-20">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
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
    <section className="pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-20 px-4 sm:px-8 bg-[#208975] rounded-t-[5rem] sm:rounded-t-[6rem] md:rounded-t-[7rem] lg:rounded-t-[8rem] xl:rounded-t-[10rem] 2xl:rounded-t-[12rem]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Title and Main Quote */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white font-serif mb-6 sm:mb-8">
              What Our Clients <br />
              <span className="text-teal-200">Says</span>
            </h2>
            <div className="text-lg sm:text-xl lg:text-2xl text-white font-serif italic leading-relaxed">
              <span className="text-4xl sm:text-5xl lg:text-7xl inline-block mr-2">"</span>
              Our clients love the creativity, timely delivery, and professionalism of Webbiez Infotech. They appreciate how we turn ideas into impactful digital solutions that boost growth, visibility, and business success.
              <span className="text-4xl sm:text-5xl lg:text-7xl inline-block ml-2">"</span>
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Navigation Arrows - Hidden on mobile */}
              <button
                onClick={prevTestimonial}
                className="hidden lg:flex absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-transparent border-2 border-white rounded-full items-center justify-center text-white hover:text-[#208975] hover:bg-white transition duration-300 z-10"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="hidden lg:flex absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-transparent border-2 border-white rounded-full items-center justify-center text-white hover:text-[#208975] hover:bg-white transition duration-300 z-10"
              >
                <FaChevronRight className="text-lg" />
              </button>

              {/* Testimonial Card */}
              <div className="bg-white rounded-3xl sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-xl max-w-md">
                <div className="text-5xl sm:text-6xl lg:text-7xl text-[#208975] mb-4 font-serif">"</div>
                <p className="text-[#07191B] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="border-t border-gray-200 pt-5 sm:pt-6">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].author}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <h4 className="font-bold text-[#07191B] text-base sm:text-lg mb-1">
                        {testimonials[currentTestimonial].author}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
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
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#208975] text-center mb-8 sm:mb-16 font-serif">
          FAQs
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start">
          {/* Left Side - FAQ Accordion */}
          <div className="space-y-4 w-full lg:w-1/2 lg:flex-shrink-0">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="bg-teal-50 rounded-lg border border-teal-100 w-full transition-all duration-300">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-teal-100 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                    <span className="text-[#208975] font-bold text-sm sm:text-lg flex-shrink-0">
                      Que{index + 1}.
                    </span>
                    <span className="text-[#07191B] font-medium text-sm sm:text-lg break-words">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`text-[#208975] text-xl sm:text-2xl font-bold flex-shrink-0 ml-2 transition-transform duration-300 ${expandedFAQ === faq.id ? 'rotate-180' : ''}`}>
                    {expandedFAQ === faq.id ? '−' : '+'}
                  </div>
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 w-full">
                    <div className="bg-teal-50 rounded-lg p-3 sm:p-4 border border-teal-100 w-full">
                      <p className="text-[#07191B] leading-relaxed text-sm sm:text-base break-words">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - FAQ Illustration */}
          <div className="flex justify-center items-center w-full lg:w-1/2 lg:flex-shrink-0">
            <div className="relative w-full flex justify-center">
              <img 
                src={faqImage} 
                alt="FAQ Illustration"
                className="w-64 h-64 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] object-contain rounded-2xl sm:rounded-3xl"
              />
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const validatePhone = (phone) => {
    const phoneNumber = phone.replace(/\D/g, ''); // Remove non-digits
    if (phoneNumber.length === 0) {
      return { isValid: false, error: 'Phone number is required' };
    } else if (phoneNumber.length !== 10) {
      return { isValid: false, error: 'Phone number must be exactly 10 digits' };
    }
    return { isValid: true, error: '' };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Only allow digits and limit to 10 digits
      const phoneNumber = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: phoneNumber
      }));
      // Validate on change
      const validation = validatePhone(phoneNumber);
      setPhoneError(validation.error);
    } else {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate phone number before submission
    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) {
      setPhoneError(phoneValidation.error);
      return;
    }

    setIsSubmitting(true);

    try {
      // Using EmailJS (Secure - doesn't expose email in Network tab)
      // Install: npm install @emailjs/browser
      // Setup: https://www.emailjs.com/docs/
      // Replace these with your EmailJS credentials:
      const serviceID = 'YOUR_SERVICE_ID';
      const templateID = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const emailjs = await import('@emailjs/browser').catch(() => null);
      
      if (emailjs && serviceID !== 'YOUR_SERVICE_ID' && templateID !== 'YOUR_TEMPLATE_ID' && publicKey !== 'YOUR_PUBLIC_KEY') {
        // EmailJS method - Secure (email not exposed in Network tab)
        const templateParams = {
          to_email: 'webbiezinfotech@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          reply_to: formData.email
        };

        await emailjs.default.send(serviceID, templateID, templateParams, publicKey);
      } else {
        // Using FormSubmit - Works immediately without setup
        const targetEmail = 'webbiezinfotech@gmail.com';
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            _subject: `New Contact Form Submission from ${formData.name}`,
            _captcha: false,
            _template: 'box'
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error('Failed to send message. Please try again.');
        }

        const result = await response.json();
        if (!result.success && result.success !== 'true') {
          throw new Error(result.message || 'Failed to send message');
        }
      }

      // Show success popup
      setShowSuccessPopup(true);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setPhoneError('');

      // Hide popup after 4 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 4000);

    } catch (error) {
      // Don't log sensitive data to console
      alert('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 sm:py-20 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#208975] text-center mb-8 sm:mb-16 font-serif">
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
                  required
                  style={{ backgroundColor: '#208975' }}
                  className="flex-1 !bg-[#208975] text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-[#208975] text-sm sm:text-base"
                />
                <div className="flex-1">
                <input
                  type="tel"
                  name="phone"
                    placeholder="Phone (10 digits)"
                  value={formData.phone}
                  onChange={handleInputChange}
                    required
                    maxLength="10"
                    style={{ backgroundColor: phoneError ? '#dc2626' : '#208975' }}
                    className={`w-full text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 ${phoneError ? '!bg-red-600 border-red-500' : '!bg-[#208975] border-none'} focus:outline-none focus:ring-2 ${phoneError ? 'focus:ring-red-500' : 'focus:ring-[#208975]'} text-sm sm:text-base font-serif tracking-wide transition-colors`}
                  />
                  {phoneError && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 px-2 font-medium">
                      {phoneError}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{ backgroundColor: '#208975' }}
                className="w-full !bg-[#208975] text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-[#208975] text-sm sm:text-base"
              />

              {/* Message Field */}
              <textarea
                name="message"
                placeholder="Message.."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                required
                style={{ backgroundColor: '#208975' }}
                className="w-full !bg-[#208975] text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-[#208975] resize-none text-sm sm:text-base"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white border-2 border-[#208975] text-[#208975] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-[#208975] hover:text-white transition duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>

            {/* Success Popup */}
            {showSuccessPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-md w-full text-center shadow-2xl transform transition-all duration-300 scale-100">
                  <div className="mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#208975] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#208975] mb-2">Success!</h3>
                    <p className="text-lg sm:text-xl text-gray-700">
                      Your message has been sent successfully!
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSuccessPopup(false)}
                    className="mt-4 bg-[#208975] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-opacity-90 transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
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
              <div className="bg-[#208975] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
                <FaPhone className="text-lg sm:text-xl" />
                <span className="text-base sm:text-lg font-serif tracking-wide">+91 9144716600 , +91 7378852436</span>
              </div>

              {/* Email Address */}
              <div className="bg-[#208975] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
                <FaEnvelope className="text-lg sm:text-xl" />
                <span className="text-base sm:text-lg">webbiezinfotech@gmail.com</span>
              </div>

              {/* Location */}
              <div className="bg-[#208975] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
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
    <footer className="bg-[#208975] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info Column - Wider */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Logo */}
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-white/10 rounded-lg flex items-center justify-center relative">
                  <span className="text-white font-bold text-xl sm:text-2xl lg:text-3xl font-serif">W</span>
                  {/* Hexagonal shapes around logo */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white opacity-60 transform rotate-45"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white opacity-80 transform rotate-45"></div>
                  <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white opacity-40 transform rotate-45"></div>
                  <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white opacity-70 transform rotate-45"></div>
                </div>
              </div>
              <div>
                {/* <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-serif">wwWebbiez iiinfotech</h3> */}
                <p className="text-white/90 text-sm sm:text-base lg:text-lg font-serif mt-1">Innovating the Innovation</p>
              </div>
            </div>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed font-serif">
              Webbiez Infotech – Crafting digital experiences with creativity and technology. Let's build the future, one innovation at a time.
            </p>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg font-serif">
              WebbiezInfotech @2025, all rights reserved
            </p>
          </div>

          {/* Pages Column */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-serif">Pages</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">Home</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">About us</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">Services</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">Projects</a></li>
            </ul>
          </div>

          {/* Queries Column */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-serif">Queries</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">Testimonials</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">FAQs</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-serif">Social Media</h4>
            <div className="flex gap-4 sm:gap-5">
              <a href="#" className="text-white hover:text-white/80 transition duration-300">
                <FaWhatsapp className="text-3xl sm:text-4xl lg:text-5xl" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition duration-300">
                <FaInstagram className="text-3xl sm:text-4xl lg:text-5xl" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition duration-300">
                <FaLinkedin className="text-3xl sm:text-4xl lg:text-5xl" />
              </a>
            </div>
            <div className="pt-4">
              <a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">
              Privacy Policy
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App
