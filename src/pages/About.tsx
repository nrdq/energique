import { Link } from "react-router-dom";
import { Target, Eye, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/about-team.jpg";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to accelerating the world's transition to sustainable energy.",
  },
  {
    icon: Eye,
    title: "Innovation First",
    description: "Constantly pushing boundaries to deliver cutting-edge energy solutions.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our success. We build lasting partnerships with every client.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We set the highest standards in safety, quality, and environmental responsibility.",
  },
];

const milestones = [
  { year: "2009", event: "Energique founded with a vision for clean energy" },
  { year: "2012", event: "Completed first 10MW solar installation" },
  { year: "2015", event: "Expanded into wind energy sector" },
  { year: "2018", event: "Launched battery storage division" },
  { year: "2021", event: "Reached 1GW total installed capacity" },
  { year: "2024", event: "Serving customers across 15 countries" },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold mb-4 block">About Us</span>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Powering Progress Since 2009
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We're a team of engineers, innovators, and environmental advocates 
              united by a common goal: making clean energy accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Image */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Energique, we believe that the transition to renewable energy isn't 
                just good for the environment—it's essential for our future. Every day, 
                we work to make solar, wind, and battery storage more accessible, 
                affordable, and reliable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our headquarters, we've grown to serve clients worldwide, 
                delivering over 500 projects and generating more than 2.5 gigawatts 
                of clean energy. But we're just getting started.
              </p>
            </div>
            <div>
              <img 
                src={teamImage} 
                alt="Energique Team" 
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform the energy landscape.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-start gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <span className="text-primary font-heading text-2xl font-bold">{milestone.year}</span>
                    <p className="text-muted-foreground mt-1">{milestone.event}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center md:-translate-x-1/2 z-10">
                    <div className="w-3 h-3 bg-secondary rounded-full" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">Join Our Mission</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you're looking to power your home, business, or community, 
            we're here to help you make the switch to clean energy.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/quote">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
