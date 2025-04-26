
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-luxury-black border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-2xl font-bold font-montserrat text-white tracking-wider">
              <span className="text-luxury-gold">LUMINA</span>FOLIO
            </a>
            <p className="text-sm text-white/60 mt-2">Designing tomorrow's experiences today</p>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <a href="#home" className="text-sm text-white/70 hover:text-luxury-gold transition-colors duration-300">Home</a>
            <a href="#about" className="text-sm text-white/70 hover:text-luxury-gold transition-colors duration-300">About</a>
            <a href="#projects" className="text-sm text-white/70 hover:text-luxury-gold transition-colors duration-300">Projects</a>
            <a href="#skills" className="text-sm text-white/70 hover:text-luxury-gold transition-colors duration-300">Skills</a>
            <a href="#contact" className="text-sm text-white/70 hover:text-luxury-gold transition-colors duration-300">Contact</a>
          </nav>
          
          {/* Copyright */}
          <div className="text-sm text-white/60">
            © {currentYear} LuminaFolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
