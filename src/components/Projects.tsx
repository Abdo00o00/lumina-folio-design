
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  // Categories for filtering
  const categories = ['All', 'Web Design', 'Development', 'UX/UI', 'Branding'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Luxury E-commerce Platform',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      description: 'Premium shopping experience with sophisticated UI and seamless checkout flow.',
    },
    {
      id: 2,
      title: 'Financial Dashboard',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      description: 'Advanced analytics platform with real-time data visualization for financial insights.',
    },
    {
      id: 3,
      title: 'Brand Identity System',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      description: 'Comprehensive brand identity with logo suite, typography, and usage guidelines.',
    },
    {
      id: 4,
      title: 'Mobile App Interface',
      category: 'UX/UI',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      description: 'Intuitive and elegant mobile experience with motion design and micro-interactions.',
    },
    {
      id: 5,
      title: 'Corporate Website Redesign',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      description: 'Modern, responsive corporate site with enhanced user journey and conversion focus.',
    },
    {
      id: 6,
      title: 'Customer Portal',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      description: 'Secure client dashboard with personalized reporting and document management.',
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-luxury-gold tracking-widest text-sm font-medium">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm border ${
                activeCategory === category
                  ? 'bg-luxury-gold text-luxury-black border-luxury-gold'
                  : 'bg-transparent text-white/80 border-white/20 hover:border-luxury-gold/50'
              } transition-all duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group bg-luxury-black border border-white/10 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs text-luxury-gold">{project.category}</span>
                </div>
                <p className="text-sm text-white/70">{project.description}</p>
                <a href="#" className="inline-block text-luxury-gold text-sm uppercase tracking-wider after:content-[''] after:block after:w-0 after:h-0.5 after:bg-luxury-gold after:transition-all after:duration-300 group-hover:after:w-full">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all button */}
        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button className="bg-transparent hover:bg-luxury-gold/10 text-luxury-gold border border-luxury-gold px-8 py-6 rounded-none">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
