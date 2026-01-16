import { Link } from "react-router-dom";
import { Battery, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import storageImage from "@/assets/service-storage.jpg";

const benefits = [
  "Energy independence",
  "Backup power during outages",
  "Peak demand management",
  "Grid services revenue",
  "Seamless integration",
  "Smart energy management",
];

const StorageService = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Battery className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-secondary font-semibold">Battery Storage</span>
            </div>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Store Energy, Unlock Freedom
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Advanced battery storage systems that capture excess renewable energy 
              for use when you need it most. Achieve true energy independence with 
              our state-of-the-art solutions.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote">Explore Storage Options</Link>
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
                src={storageImage} 
                alt="Battery Storage" 
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="heading-md mb-6">Why Battery Storage?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Battery storage is the key to unlocking the full potential of renewable 
                energy. Store power generated during peak production and use it when 
                demand is highest or the sun isn't shining.
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
          <h2 className="heading-lg mb-6">Ready for Energy Independence?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how battery storage can transform your energy usage and reduce costs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link to="/quote">Request a Quote</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/projects">
                View Storage Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorageService;
