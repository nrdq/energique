import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projectsData: Record<string, {
  title: string;
  category: string;
  location: string;
  capacity: string;
  year: string;
  image: string;
  description: string;
  fullDescription: string;
}> = {
  "1": {
    title: "Sunrise Solar Farm",
    category: "solar",
    location: "California, USA",
    capacity: "150 MW",
    year: "2023",
    image: project1,
    description: "One of the largest solar installations in the Western US.",
    fullDescription: "The Sunrise Solar Farm represents a landmark achievement in renewable energy infrastructure. Spanning over 1,000 acres of previously unused land, this utility-scale solar installation generates enough clean electricity to power more than 40,000 homes annually. The project incorporates the latest bifacial solar panel technology, maximizing energy capture and efficiency. Throughout construction, we prioritized environmental stewardship, implementing wildlife corridors and native vegetation restoration."
  },
  "2": {
    title: "Coastal Wind Park",
    category: "wind",
    location: "North Sea, UK",
    capacity: "200 MW",
    year: "2022",
    image: project2,
    description: "Offshore wind farm delivering clean energy to coastal communities.",
    fullDescription: "The Coastal Wind Park stands as a testament to engineering excellence and environmental commitment. Located 25 kilometers off the British coast, this offshore wind installation features 40 state-of-the-art turbines capable of generating enough electricity for approximately 180,000 homes. The project was designed to minimize impact on marine ecosystems while maximizing energy output, utilizing advanced foundation designs and optimized turbine spacing."
  },
  "3": {
    title: "Metro Grid Storage",
    category: "storage",
    location: "Texas, USA",
    capacity: "100 MWh",
    year: "2023",
    image: project3,
    description: "State-of-the-art battery storage facility supporting grid stability.",
    fullDescription: "The Metro Grid Storage facility represents the future of energy infrastructure. This cutting-edge battery storage installation provides critical grid stabilization services during peak demand periods, while also enabling greater integration of renewable energy sources. The facility uses advanced lithium-ion technology with sophisticated thermal management systems, ensuring safe and efficient operation around the clock."
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[id || "1"];

  if (!project) {
    return (
      <div className="section-padding text-center">
        <h1 className="heading-lg mb-4">Project Not Found</h1>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
        </div>
        <div className="container-wide relative h-full flex items-end pb-12">
          <div>
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full capitalize mb-4">
              {project.category}
            </span>
            <h1 className="heading-xl text-primary-foreground mb-4">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-primary font-medium mb-8 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-md mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div className="bg-muted/50 rounded-3xl p-8">
              <h3 className="font-heading text-xl font-semibold mb-6">Project Details</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <span className="text-sm text-muted-foreground block">Location</span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <span className="text-sm text-muted-foreground block">Capacity</span>
                    <span className="font-medium">{project.capacity}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <span className="text-sm text-muted-foreground block">Completed</span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                </li>
              </ul>
              <Button variant="cta" className="w-full mt-8" asChild>
                <Link to="/quote">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
