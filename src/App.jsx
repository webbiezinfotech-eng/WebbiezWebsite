import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaInstagram, FaDesktop, FaCircle, FaCode, FaChartLine, FaBullseye, FaShoppingCart, FaUsers, FaPalette, FaMobile, FaChevronLeft, FaChevronRight, FaPhone, FaMapMarkerAlt, FaSearch } from 'react-icons/fa'
import uiuxImage from './assets/images/WhatsApp Image 2025-12-15 at 3.12.41 PM.jpeg'
import financialImage from './assets/images/Screenshot 2025-12-15 at 16.07.58.png'
import jobImage from './assets/images/Screenshot 2025-12-15 at 16.09.44.png'
import wholesaleImage from './assets/images/Screenshot 2025-12-15 at 16.10.47.png'
import faqImage from './assets/images/Untitled design (42) 1.png'
import heroImage from './assets/images/logo.png'
import webDevImage from './assets/images/Rectangle 34625783.png'
import uiuxServiceImage from './assets/images/Rectangle 34625783-1.png'
import seoImage from './assets/images/Rectangle 34625783-2.png'
import brandingImage from './assets/images/Rectangle 34625783-3.png'
import ecommerceImage from './assets/images/Rectangle 34625783.png'
import prImage from './assets/images/Rectangle 34625783-5.png'
import wilogo from './assets/wilogo.jpg'
import footerlogo from './assets/logo.png'
import './App.css'
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
      delay: 0,
      disable: false,
      startEvent: 'DOMContentLoaded',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99
    });
  }, []);

const handleSearch = () => {
  if (!searchQuery.trim()) return;

  const query = searchQuery.toLowerCase();

  if (query.includes("about")) {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  } 
  else if (query.includes("service")) {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  } 
  else if (query.includes("project")) {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  } 
  else if (query.includes("contact")) {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  } 
  else if (query.includes("faq")) {
    document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" });
  } 
  else {
    alert("No matching section found");
  }
};

  return (
    <div className="bg-[#1E8975] overflow-x-hidden ">
      {/* Hero Section */}
      <div className="min-h-screen bg-white lg:flex justify-center relative items-center px-2 sm:px-5 lg:px-5" id='home'>
      {/* Social Media Sidebar - Fixed Left */}
      <div className=" flex lg:flex-col justify-between m-2 gap-3 lg:gap-10 px-2 lg:py-10 h-fit bg-[#07191B] rounded-full items-center " data-aos="fade-right">
        <a 
          href="https://www.linkedin.com/company/webbiez-infotech/about/?viewAsMember=true" 
          target="_blank" 
          rel="noopener noreferrer"
          className=" w-16 h-16 lg:w-20 lg:h-20  rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-[#0077B5] hover:shadow-lg hover:shadow-[#0077B5]/50"
        >
          <FaLinkedin className="w-12 h-12 sm:w-12 sm:h-12 lg:w-12 lg:h-12" />
        </a>
        <a 
          href="https://wa.me/918225807724" 
          target="_blank" 
          rel="noopener noreferrer"
          className=" w-16 h-16 lg:w-20 lg:h-20  rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/50"
        >
          <FaWhatsapp className="w-12 h-12 sm:w-12 sm:h-12 lg:w-12 lg:h-12" />
        </a>
        <a 
          href="mailto:webbiezinfotech@gmail.com" 
          className=" w-16 h-16 lg:w-20 lg:h-20  rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-[#EA4335] hover:shadow-lg hover:shadow-[#EA4335]/50"
        >
          <FaEnvelope className="w-12 h-12 sm:w-12 sm:h-12 lg:w-12 lg:h-12" />
        </a>
        <a 
          href="https://www.instagram.com/webbiez_infotech?igsh=MXRldGZmNmxqdWQyZQ==" 
          target="_blank" 
          rel="noopener noreferrer"
          className=" w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] hover:shadow-lg hover:shadow-[#833AB4]/50"
        >
          <FaInstagram className="w-12 h-12 sm:w-12 sm:h-12 lg:w-12 lg:h-12" />
        </a>
        <div className=" bg-[#1E8975] h-12 w-12 lg:w-16 lg:h-16  rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl cursor-pointer transition-all duration-300 hover:scale-125 hover:bg-[#1E8975] hover:shadow-lg hover:shadow-[#1E8975]/50">
          W
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl w-full md:relative">
        {/* Top Right - Search and Logo */}
        <div className="lg:absolute lg:-top-5 lg:right-20 z-20 lg:bg-white rounded-3xl lg:p-2 text-end" data-aos="fade-left" data-aos-delay="200">
  <div className="lg:bg-[#07191B] rounded-full p-2 lg:shadow-lg inline-flex items-center gap-2">
    
    <button onClick={handleSearch}
      className="bg-[#1E8975] rounded-full px-6 py-3 flex items-center gap-2 text-white">
    <FaSearch className="w-5 h-5" />
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      className="lg:py-2 rounded-full bg-[#1e8975] outline-none text-sm w-full lg:w-20 placeholder-white/80"
    />
    </button>

    <div className=" lg:w-14 lg:h-14 bg-[#1E8975] rounded-full flex items-center justify-center text-white font-bold text-2xl">
      <span className="hidden lg:block">W</span>
    </div>

  </div>
        </div>


        {/* Main Hero Card */}
        <div className="bg-[#1E8975] flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start rounded-[3rem] overflow-hidden relative h-[700px] lg:h-[630px]">
          {/* Title Section */}
          <div className=" " data-aos="fade-up" data-aos-delay="300">
            <h1 className="lg:ms-5 text-center lg:text-start text-white font-bold leading-tight text-[44px] sm:text-[80px] lg:text-[100px] xl:text-[120px] mt-10 ">
              WEBBIEZ <br /><span className="lg:ms-20">INFOTECH</span>
            </h1>
          </div>

          {/* Bottom Right Info Card */}
          <div className="lg:absolute lg:-bottom-6 lg:-right-5 lg:w-2/5 lg:p-5 lg:bg-white rounded-3xl" data-aos="fade-up-left" data-aos-delay="400">
            <div className="lg:bg-slate-900 text-white rounded-3xl p-8 text-center">
              <h2 className=" text-3xl sm:text-4xl lg:text-2xl font-bold mb-4 leading-tight underline">
                Innovating the Innovation
              </h2>
              <p className=" leading-relaxed text-lg sm:text-3xl lg:text-base">
                At Webbiez Infotech, we don't just create technology—we create experiences. From powerful websites to stunning apps, our mission is to turn bold ideas into digital reality.
              </p>
            </div>
          </div>

          {/* Bottom Left Decorative Oval */}
          {/* <div className="absolute bottom-0 left-0 w-64 h-40 bg-teal-700 rounded-full transform translate-y-12 -translate-x-8"></div> */}
        </div>
      </div>
    </div>

    
      {/* About Us Section */}
      <section className="py-10 sm:py-20 bg-[#07191B]" id='about'>
        {/* Top Line - 60% width from left to right */}
        <div className="w-[60%] h-2 sm:h-3 bg-white rounded-full mb-8 sm:mb-16" data-aos="fade-right"></div>
        
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-center mb-8 sm:mb-16" data-aos="fade-up">Who We Are</h2>
          
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Left Side - Logo Card */}
            <img src={wilogo} alt="" className="w-80 h-80 rounded-2xl" data-aos="fade-right" data-aos-delay="200" />
            
            {/* Right Side - Description */}
            <div className="flex md:w-[55%] text-center lg:text-left" data-aos="fade-left" data-aos-delay="300">
              <p className="text-white text-base sm:text-lg leading-relaxed font-serif">
              Webbiez Infotech is a modern IT solutions company specializing in ReactJS websites, UI/UX design, graphic design, mobile application development, and social media management. We help businesses build a strong digital presence through creative design, smart technology, and strategic execution.
              <br /> <br /> In today’s AI-driven world, we focus on delivering secure, scalable, and performance-driven solutions that not only look great but also help brands grow, engage users, and stand out in the digital space.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Line - 60% width from right to left */}
        <div className="w-[60%] h-2 sm:h-3 bg-white rounded-full mt-8 sm:mt-16 ml-auto" data-aos="fade-left"></div>
      </section>

      {/* Services Section */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-32 xl:pb-40 px-4 sm:px-8 bg-[#1E8975] min-h-screen flex items-start" id='services'>
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-left mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up">Services We Offer</h2>
          
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
              backgroundImage="bg-[#07191B]"
              backgroundImageSrc={seoImage}
            />
            
            {/* Branding & Creativity */}
            <ServiceCard 
              title="Branding & Creativity"
              description="Create memorable brand identities that stand out in the market."
              icon={<FaBullseye />}
              isExpanded={false}
              backgroundImage="bg-[#07191B]"
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
              backgroundImage="bg-[#07191B]"
              backgroundImageSrc={prImage}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className=" py-10 px-4 sm:py-16 md:py-20 bg-white rounded-[3rem] sm:rounded-[4rem] md:rounded-[5rem] lg:rounded-[6rem] xl:rounded-[7rem] 2xl:rounded-[8rem] relative z-10 mb-0" id='projects'>
        <div className="max-w-[90%]  mx-auto w-full">
          {/* Section Title and Description */}
          <div className="text-center mb-10 sm:mb-16 lg:mb-20" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#07191B] mb-4 sm:mb-6">
              Projects We've <span className="text-[#1E8975]">Worked on</span>
            </h2>
            <p className="text-base sm:text-lg text-[#07191B] max-w-5xl mx-auto leading-relaxed">
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
      <FAQsSection  />

      {/* Contact Section */}
      <ContactSection id='contact' />

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
      data-aos="fade-up"
      data-aos-delay="100"
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
            <div className={`${textColor}  flex flex-col justify-center space-y-6 sm:space-y-8`}>
              <div className="text-4xl sm:text-5xl lg:text-6xl">{icon}</div>
              <h3 className="text-3xl font-bold">{title}</h3>
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
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
          {/* Project Details Card */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-lg max-h-[500px] sm:max-h-[600px] overflow-y-auto" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E8975] mb-5">
              {projects[selectedProject].title}
            </h3>
            <p className="text-[#07191B] mb-6 leading-relaxed text-lg ">
              {projects[selectedProject].description}
            </p>
            <div className="mb-7">
              <h4 className="text-lg sm:text-xl font-bold text-[#1E8975] mb-3">Technologies Used:-</h4>
              <p className="text-[#07191B] text-lg">
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
              className="border-2 border-[#1E8975] text-[#1E8975] py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#1E8975] hover:text-white transition duration-300"
            >
              Visit Site
            </button>
          </div>

          {/* Project Preview - Image */}
          <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="300">
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
                  ? 'transform scale-110 border-4 border-[#1E8975] shadow-xl shadow-[#1E8975]/50' 
                  : 'border-2 border-gray-300 hover:border-[#1E8975] hover:scale-105 hover:shadow-lg hover:shadow-[#1E8975]/30'
              }`}
              onClick={() => setSelectedProject(index)}
              data-aos="zoom-in"
              data-aos-delay={100 * index}
            >
              <div className="w-40 sm:w-48 h-24 sm:h-32 bg-white rounded-2xl sm:rounded-3xl shadow-md overflow-hidden relative">
                {/* Hover Overlay */}
                {selectedProject !== index && (
                  <div className="absolute inset-0 bg-[#1E8975]/0 group-hover:bg-[#1E8975]/10 transition-all duration-300 rounded-2xl sm:rounded-3xl z-10"></div>
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
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1E8975] rounded-full border-2 border-white flex items-center justify-center z-20">
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
      quote: "We worked with Webbiez Infotech for our e-commerce website and social media management. From design to development, everything was handled professionally. The final product looked premium and worked flawlessly across devices. I highly recommend them for any web development or social media management needs.",
      author: "Niraj Bhojwani",
      role: "E-commerce Business",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 1,
      quote: "Great experience working with Webbiez Infotech. Their mobile app development and creative approach really helped our brand stand out online. Timely delivery, clear communication, and quality work — exactly what we needed.",
      author: "Rahul Singh",
      role: "CEO, Mobile App Business",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      quote: "Webbiez Infotech truly understood our business needs and delivered a clean, modern website with excellent performance. The UI/UX was smooth, and their team was very responsive throughout the project. Highly recommended for startups looking for reliable tech partners.",
      author: "Rajesh Patel",
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
    <section className="pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-20 px-4 sm:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Title and Main Quote */}
          <div className="text-center lg:text-left" data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white font-serif mb-6 sm:mb-8">
              What Our Clients Says
            </h2>
            <div className="text-lg sm:text-xl lg:text-2xl text-white font-serif italic leading-relaxed">
              <span className="text-4xl sm:text-5xl lg:text-7xl inline-block mr-2">"</span>
              Our clients love the creativity, timely delivery, and professionalism of Webbiez Infotech. They appreciate how we turn ideas into impactful digital solutions that boost growth, visibility, and business success.
              <span className="text-4xl sm:text-5xl lg:text-7xl inline-block ml-2">"</span>
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="flex flex-col justify-center items-center w-full" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full flex flex-col items-center">
              {/* Navigation Arrows - Desktop: Side, Mobile: Below */}
              <button
                onClick={prevTestimonial}
                className="hidden lg:flex absolute -left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-transparent border-2 border-white rounded-full items-center justify-center text-white hover:text-[#1E8975] hover:bg-white transition duration-300 z-10"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="hidden lg:flex absolute -right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-transparent border-2 border-white rounded-full items-center justify-center text-white hover:text-[#1E8975] hover:bg-white transition duration-300 z-10"
              >
                <FaChevronRight className="text-lg" />
              </button>

              {/* Testimonial Card */}
              <div className="bg-white rounded-3xl sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-xl max-w-md w-full">
                <div className="text-5xl sm:text-6xl lg:text-7xl text-[#1E8975] mb-4 font-serif">"</div>
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

              {/* Mobile Navigation Buttons - Below Card */}
              <div className="flex lg:hidden gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-[#1E8975] border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1E8975] transition duration-300 shadow-lg"
                >
                  <FaChevronLeft className="text-lg" />
                </button>
                
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-[#1E8975] border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1E8975] transition duration-300 shadow-lg"
                >
                  <FaChevronRight className="text-lg" />
                </button>
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
    <section className="py-10 sm:py-20 px-4 sm:px-8 bg-white" id='faqs'>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1E8975] text-center mb-8 sm:mb-16 font-serif" data-aos="fade-up">
          FAQs
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start">
          {/* Left Side - FAQ Accordion */}
          <div className="space-y-4 w-full lg:w-1/2 lg:flex-shrink-0">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="bg-teal-50 rounded-lg border border-teal-100 w-full transition-all duration-300" data-aos="fade-right" data-aos-delay={100 * index}>
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-teal-100 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                    <span className="text-[#1E8975] font-bold text-sm sm:text-lg flex-shrink-0">
                      Que{index + 1}.
                    </span>
                    <span className="text-[#07191B] font-medium text-sm sm:text-lg break-words">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`text-[#1E8975] text-xl sm:text-2xl font-bold flex-shrink-0 ml-2 transition-transform duration-300 ${expandedFAQ === faq.id ? 'rotate-180' : ''}`}>
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
          <div className="flex justify-center items-center w-full lg:w-1/2 lg:flex-shrink-0" data-aos="fade-left" data-aos-delay="300">
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
    <section className="py-10 sm:py-20 px-4 sm:px-8 bg-white" id='contact'>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1E8975] text-center mb-8 sm:mb-16 font-serif" data-aos="fade-up">
          Contact Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Side - Contact Form */}
          <div className="flex-1 w-full" data-aos="fade-right" data-aos-delay="200">
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
                  className="flex-1 !bg-[#1E8975] text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-[#1E8975] text-sm sm:text-base"
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
                    className={`w-full text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 ${phoneError ? '!bg-red-600 border-red-500' : '!bg-[#1E8975] border-none'} focus:outline-none focus:ring-2 ${phoneError ? 'focus:ring-red-500' : 'focus:ring-[#1E8975]'} text-sm sm:text-base font-serif tracking-wide transition-colors`}
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
                className="w-full !bg-[#1E8975] text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-[#1E8975] text-sm sm:text-base"
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
                className="w-full !bg-[#1E8975] text-white placeholder-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-[#1E8975] resize-none text-sm sm:text-base"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white border-2 border-[#1E8975] text-[#1E8975] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-[#1E8975] hover:text-white transition duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>

            {/* Success Popup */}
            {showSuccessPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-md w-full text-center shadow-2xl transform transition-all duration-300 scale-100">
                  <div className="mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1E8975] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1E8975] mb-2">Success!</h3>
                    <p className="text-lg sm:text-xl text-gray-700">
                      Your message has been sent successfully!
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSuccessPopup(false)}
                    className="mt-4 bg-[#1E8975] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-opacity-90 transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Contact Information */}
          <div className="flex-1 w-full" data-aos="fade-left" data-aos-delay="300">
            <div className="space-y-4 sm:space-y-6">
              {/* Introductory Text */}
              <div className="mb-6 sm:mb-8">
                <p className="text-[#07191B] text-base sm:text-lg leading-relaxed">
                  Have a project in mind? Let's create something amazing together
                </p>
              </div>

              {/* Phone Number */}
              <div className="bg-[#1E8975] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
                <FaPhone className="text-lg sm:text-xl" />
                <span className="text-base sm:text-lg font-serif tracking-wide">+91 9144716600 , +91 7378852436</span>
              </div>

              {/* Email Address */}
              <div className="bg-[#1E8975] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
                <FaEnvelope className="text-lg sm:text-xl" />
                <span className="text-base sm:text-lg">webbiezinfotech@gmail.com</span>
              </div>

              {/* Location */}
              <div className="bg-[#1E8975] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
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
      <div className="max-w-[90%] mx-auto px-4 sm:px-8 py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row  gap-10 justify-between items-start  ">
          {/* Company Info Column */}
            <div className="flex flex-col items-start  md:max-w-[50%] gap-3 sm:gap-4" data-aos="fade-right">
              {/* Logo */}
              <div className="relative flex-shrink-0">
                <img src={footerlogo} alt="Webbiez Infotech Logo" className="w-auto h-auto" />
              </div>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed font-serif">
              Webbiez Infotech – Crafting digital experiences with creativity and technology. Let's build the future, one innovation at a time.
            </p>
            </div>

         <div className="flex flex-wrap justify-between items-start gap-4 md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-24">
           {/* Pages Column */}
           <div className="  space-y-4 sm:space-y-5 " data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-serif">Pages</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">Home</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">About us</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">Services</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">Projects</a></li>
            </ul>
          </div>

          {/* Queries Column */}
          <div className="flex-1 min-w-[150px] space-y-4 sm:space-y-5" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-serif">Queries</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">Testimonials</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">FAQs</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition duration-300 text-base sm:text-lg lg:text-xl font-serif">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="flex-1 min-w-[150px] space-y-4 sm:space-y-5" data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-serif">Social Media</h4>
            <div className="flex gap-4 sm:gap-5">
              <a href="https://wa.me/918225807724" className="text-white hover:text-white/80 transition duration-300">
                <FaWhatsapp className="text-3xl sm:text-4xl lg:text-5xl" />
              </a>
              <a href="https://www.instagram.com/webbiez_infotech?igsh=MXRldGZmNmxqdWQyZQ==" className="text-white hover:text-white/80 transition duration-300">
                <FaInstagram className="text-3xl sm:text-4xl lg:text-5xl" />
              </a>
              <a href="https://www.linkedin.com/company/webbiez-infotech/about/?viewAsMember=true" className="text-white hover:text-white/80 transition duration-300">
                <FaLinkedin className="text-3xl sm:text-4xl lg:text-5xl" />
              </a>
            </div>
           
          </div>
         </div>
        </div>
        
        {/* Copyright Line */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-white/20" data-aos="fade-up" data-aos-delay="500">
          <p className="text-white/80 text-sm sm:text-base lg:text-lg font-serif text-center">
            WebbiezInfotech @2025, all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App
