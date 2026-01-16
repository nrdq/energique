import { Link } from "react-router-dom";
import { ArrowRight, Sun, Wind, Battery, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import solarImage from "@/assets/service-solar.jpg";
import windImage from "@/assets/service-wind.jpg";
import storageImage from "@/assets/service-storage.jpg";

const services = [
  {
    icon: Sun,
    title: "Solar Energy",
    description: "From rooftop installations to utility-scale solar farms, we design and build systems that maximize energy production and return on investment.",
    image: solarImage,
    link: "/services/solar",
    features: ["Residential & Commercial", "Custom System Design", "Monitoring & Maintenance"],
  },
  {
    icon: Wind,
    title: "Wind Power",
    description: "Harness the power of wind with our state-of-the-art turbine solutions, suitable for both onshore and offshore applications.",
    image: windImage,
    link: "/services/wind",
    features: ["Onshore & Offshore", "Turbine Installation", "Grid Integration"],
  },
  {
    icon: Battery,
    title: "Battery Storage",
    description: "Store excess renewable energy for when you need it most. Our battery solutions ensure reliable power supply 24/7.",
    image: storageImage,
    link: "/services/storage",
    features: ["Grid-Scale Storage", "Home Batteries", "Smart Energy Management"],
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold mb-4 block">Our Services</span>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Comprehensive Energy Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We offer end-to-end renewable energy services, from consultation and design 
              to installation and ongoing maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-3xl overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="cta" asChild>
                    <Link to={service.link}>
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide text-center">
          <h2 className="heading-lg mb-6">Not Sure Which Solution Is Right for You?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our energy experts will assess your needs and recommend the perfect solution 
            for your home or business.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/quote">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
