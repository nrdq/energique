import { Link } from "react-router-dom";
import { ArrowRight, Sun, Wind, Battery, Leaf, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import heroImage from "@/assets/hero-solar-farm.jpg";
import solarImage from "@/assets/service-solar.jpg";
import windImage from "@/assets/service-wind.jpg";
import storageImage from "@/assets/service-storage.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

// Services Data
const services = [
  {
    icon: Sun,
    title: "Solar Energy",
    description: "Harness the power of the sun with our cutting-edge solar panel installations for homes and businesses.",
    image: solarImage,
    link: "/services/solar",
  },
  {
    icon: Wind,
    title: "Wind Power",
    description: "Clean, renewable wind energy solutions designed for optimal efficiency and environmental impact.",
    image: windImage,
    link: "/services/wind",
  },
  {
    icon: Battery,
    title: "Battery Storage",
    description: "Store excess energy with our advanced battery systems for reliable power when you need it most.",
    image: storageImage,
    link: "/services/storage",
  },
];

// Stats Data
const stats = [
  { icon: Leaf, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: TrendingUp, value: 2.5, suffix: "GW", label: "Energy Generated" },
  { icon: Users, value: 10000, suffix: "+", label: "Happy Customers" },
  { icon: Award, value: 15, suffix: "+", label: "Years Experience" },
];

// Featured Projects
const projects = [
  {
    id: 1,
    title: "Sunrise Solar Farm",
    category: "solar",
    location: "California, USA",
    capacity: "150 MW",
    image: project1,
  },
  {
    id: 2,
    title: "Coastal Wind Park",
    category: "wind",
    location: "North Sea, UK",
    capacity: "200 MW",
    image: project2,
  },
  {
    id: 3,
    title: "Metro Grid Storage",
    category: "storage",
    location: "Texas, USA",
    capacity: "100 MWh",
    image: project3,
  },
];

// News Data
const news = [
  {
    id: 1,
    title: "Energique Expands Solar Operations to Europe",
    excerpt: "Major expansion brings clean energy solutions to 5 new European markets...",
    date: "Jan 10, 2024",
    category: "Company News",
  },
  {
    id: 2,
    title: "New Battery Technology Breakthrough",
    excerpt: "Our R&D team achieves 40% increase in energy storage efficiency...",
    date: "Jan 5, 2024",
    category: "Innovation",
  },
  {
    id: 3,
    title: "Partnership with Global Energy Initiative",
    excerpt: "Joining forces to accelerate the transition to renewable energy worldwide...",
    date: "Dec 28, 2023",
    category: "Partnerships",
  },
];

// Partners
const partners = [
  "SunTech Global",
  "WindForce Energy",
  "GreenGrid Solutions",
  "EcoVolt Systems",
  "CleanPower Inc",
  "Renewable Future",
];

// Counter Animation Hook
function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(progress * end);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  
  return count;
}

// Stats Section Component
function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={ref} className="bg-primary section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible);
  const Icon = stat.icon;
  
  return (
    <div className="text-center text-primary-foreground">
      <Icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
      <div className="font-heading text-4xl md:text-5xl font-bold mb-2">
        {stat.value >= 100 ? Math.round(count) : count.toFixed(1)}
        {stat.suffix}
      </div>
      <div className="text-primary-foreground/80">{stat.label}</div>
    </div>
  );
}

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-6 animate-fade-up">
              🌱 Powering a Sustainable Future
            </span>
            <h1 className="heading-xl text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Clean Energy for a <span className="text-secondary">Brighter Tomorrow</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Leading the renewable energy revolution with innovative solar, wind, and battery storage solutions for homes and businesses worldwide.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">
                  Our Services <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Welcome to <span className="text-primary">Energique</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2009, we've been at the forefront of the clean energy transition. Our mission is simple: 
              make sustainable energy accessible, affordable, and reliable for everyone. From residential 
              solar installations to utility-scale wind farms, we deliver solutions that power progress.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold mb-2 block">What We Offer</span>
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive renewable energy solutions tailored to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-semibold">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Projects Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <span className="text-primary font-semibold mb-2 block">Our Work</span>
              <h2 className="heading-lg">Featured Projects</h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3]"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full mb-3 capitalize">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex justify-between text-sm text-primary-foreground/80">
                    <span>{project.location}</span>
                    <span>{project.capacity}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <span className="text-primary font-semibold mb-2 block">Stay Informed</span>
              <h2 className="heading-lg">Latest News</h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/news">
                All Articles <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <span className="text-sm text-primary font-medium">{item.category}</span>
                <h3 className="font-heading text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-background border-y border-border overflow-hidden">
        <div className="container-wide">
          <p className="text-center text-muted-foreground mb-8">Trusted by Industry Leaders</p>
        </div>
        <div className="relative">
          <div className="flex animate-marquee">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-12 text-2xl font-heading font-bold text-muted-foreground/50"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container-wide text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Ready to Go Green?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean energy. 
            Get a free consultation and quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote">Get Your Free Quote</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
