
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-luxury-black" ref={sectionRef}>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image column */}
          <div className="lg:w-1/2 opacity-0 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Gold frame */}
              <div className="absolute -inset-2 border border-luxury-gold/30"></div>
              
              {/* Image */}
              <div className="relative z-10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Professional Portrait" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-luxury-black/80 to-transparent"></div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-luxury-gold/50"></div>
            </div>
          </div>
          
          {/* Text column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-2 opacity-0 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <p className="text-luxury-gold tracking-widest text-sm font-medium">ABOUT ME</p>
              <h2 className="text-3xl md:text-4xl font-bold">Crafting Digital Excellence</h2>
            </div>
            
            <div className="space-y-6 text-white/80 opacity-0 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              <p>
                I'm a passionate designer and developer with over 8 years of experience creating stunning digital experiences that blend innovative technology with elegant, minimalist design principles.
              </p>
              
              <p>
                My approach combines futuristic aesthetics with functional clarity, ensuring each project not only looks exceptional but delivers remarkable user experiences across all devices and platforms.
              </p>
              
              <p>
                With expertise in UI/UX design, frontend and backend development, I transform complex requirements into seamless, intuitive solutions that help brands elevate their digital presence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6 opacity-0 animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              <div>
                <h3 className="text-luxury-gold text-4xl font-bold">50+</h3>
                <p className="text-white/70 mt-2">Completed Projects</p>
              </div>
              
              <div>
                <h3 className="text-luxury-gold text-4xl font-bold">8+</h3>
                <p className="text-white/70 mt-2">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
