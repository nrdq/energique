import { Link } from "react-router-dom";
import { Wind, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import windImage from "@/assets/service-wind.jpg";

const benefits = [
  "Scalable for any project size",
  "Operates day and night",
  "Low operational costs",
  "Long-term energy security",
  "Community investment opportunities",
  "Grid stability support",
];

const WindService = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Wind className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-secondary font-semibold">Wind Power</span>
            </div>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Clean Energy from the Wind
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Our wind energy solutions deliver reliable, clean power at scale. 
              From onshore wind farms to offshore installations, we develop projects 
              that transform communities and protect our planet.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote">Explore Wind Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <img 
                src={windImage} 
                alt="Wind Farm" 
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="heading-md mb-6">The Power of Wind Energy</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Wind is one of the fastest-growing sources of electricity worldwide. 
                Our expertise in wind farm development ensures maximum efficiency and 
                minimal environmental impact.
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
          <h2 className="heading-lg mb-6">Interested in Wind Energy?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a developer, landowner, or business, we can help you harness wind power.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link to="/quote">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/projects">
                View Wind Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindService;
