
import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  // Skills data with proficiency percentages
  const skills = [
    { name: 'UX/UI Design', percentage: 95 },
    { name: 'Web Development', percentage: 90 },
    { name: 'Brand Strategy', percentage: 85 },
    { name: 'Interaction Design', percentage: 90 },
    { name: 'Frontend Development', percentage: 95 },
    { name: 'Motion Design', percentage: 80 },
  ];
  
  const technologies = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 
    'Angular', 'Node.js', 'Figma', 'Adobe XD', 'Sketch', 
    'SCSS', 'Tailwind CSS', 'GraphQL', 'MongoDB', 'Git'
  ];
  
  // Animation for skill bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar .fill');
            skillBars.forEach((bar) => {
              if (bar instanceof HTMLElement) {
                bar.style.width = bar.dataset.percentage || '0%';
              }
            });
            
            // Add animation class to other elements
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach(el => {
              el.classList.add('animate-fade-in');
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="skills" className="section-padding bg-luxury-black">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <p className="text-luxury-gold tracking-widest text-sm font-medium">EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Skills & Technologies</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" ref={skillsRef}>
          {/* Skill bars */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6 opacity-0 animate-on-scroll">Core Competencies</h3>
            
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2 opacity-0 animate-on-scroll" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-luxury-gold">{skill.percentage}%</span>
                </div>
                <div className="h-1.5 bg-white/10 w-full skill-bar">
                  <div 
                    className="h-full bg-gradient-to-r from-luxury-gold to-luxury-emerald fill" 
                    data-percentage={`${skill.percentage}%`}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-6 opacity-0 animate-on-scroll">Technologies & Tools</h3>
            
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white/5 border border-white/10 hover:border-luxury-gold/50 text-sm transition-colors duration-300 opacity-0 animate-on-scroll"
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Additional experience section */}
            <div className="mt-12 p-6 border border-white/10 relative shiny-border opacity-0 animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
              
              <ul className="space-y-4 text-white/80">
                <li className="flex gap-3">
                  <div className="text-luxury-gold">•</div>
                  <p>Lead Designer at TechFusion — 2020-Present</p>
                </li>
                <li className="flex gap-3">
                  <div className="text-luxury-gold">•</div>
                  <p>Senior Developer at CreativeWorks — 2017-2020</p>
                </li>
                <li className="flex gap-3">
                  <div className="text-luxury-gold">•</div>
                  <p>UX Designer at DigitalEdge — 2015-2017</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
