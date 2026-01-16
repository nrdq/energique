import { Link } from "react-router-dom";
import { Sun, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import solarImage from "@/assets/service-solar.jpg";

const benefits = [
  "Reduce electricity bills by up to 80%",
  "25+ year system lifespan",
  "Government incentives available",
  "Increase property value",
  "Zero emissions energy",
  "Minimal maintenance required",
];

const SolarService = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Sun className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-secondary font-semibold">Solar Energy</span>
            </div>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Harness the Power of the Sun
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform sunlight into savings with our premium solar panel installations. 
              From residential rooftops to commercial facilities, we deliver custom solutions 
              that maximize energy production.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote">Get a Solar Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={solarImage} 
                alt="Solar Installation" 
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="heading-md mb-6">Why Choose Solar?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Solar energy is the most abundant energy source on Earth. With our advanced 
                photovoltaic technology, you can capture this free, renewable resource and 
                power your life sustainably.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-wide text-center">
          <h2 className="heading-lg mb-6">Ready to Start Your Solar Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free site assessment and custom quote tailored to your energy needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link to="/quote">Request a Quote</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/projects">
                View Solar Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarService;
