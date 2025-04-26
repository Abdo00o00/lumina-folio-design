
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-luxury-black overflow-hidden"
      style={{ 
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, rgba(0, 0, 0, 0) 70%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-32 h-32 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 w-40 h-40 bg-luxury-emerald/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-1/3 top-1/3 w-24 h-24 bg-luxury-silver/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(212, 175, 55, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.05) 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }}>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h6 className={`text-luxury-gold font-medium tracking-widest ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'} transition-all duration-700 delay-200`}>
            DESIGN • DEVELOPMENT • INNOVATION
          </h6>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'} transition-all duration-700 delay-500`}>
            Creating <span className="text-luxury-gold">Futuristic</span> Digital Experiences
          </h1>
          
          <p className={`text-lg md:text-xl text-white/80 max-w-xl mx-auto ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'} transition-all duration-700 delay-800`}>
            Transforming visions into elegant, cutting-edge solutions that blend luxury aesthetics with innovative functionality.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'} transition-all duration-700 delay-1000`}>
            <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-black font-medium px-8 py-6 rounded-none">
              View Projects
            </Button>
            <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10 font-medium px-8 py-6 rounded-none">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-700 delay-1500`}>
        <div className="w-0.5 h-16 bg-gradient-to-b from-luxury-gold/0 to-luxury-gold/50 mx-auto"></div>
        <p className="text-xs mt-2 text-luxury-gold/80 tracking-wider">SCROLL DOWN</p>
      </div>
    </section>
  );
};

export default Hero;
