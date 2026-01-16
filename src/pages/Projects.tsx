import { useState } from "react";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const allProjects = [
  {
    id: 1,
    title: "Sunrise Solar Farm",
    category: "solar",
    location: "California, USA",
    capacity: "150 MW",
    year: "2023",
    image: project1,
    description: "One of the largest solar installations in the Western US, powering over 40,000 homes.",
  },
  {
    id: 2,
    title: "Coastal Wind Park",
    category: "wind",
    location: "North Sea, UK",
    capacity: "200 MW",
    year: "2022",
    image: project2,
    description: "Offshore wind farm delivering clean energy to coastal communities.",
  },
  {
    id: 3,
    title: "Metro Grid Storage",
    category: "storage",
    location: "Texas, USA",
    capacity: "100 MWh",
    year: "2023",
    image: project3,
    description: "State-of-the-art battery storage facility supporting grid stability.",
  },
  {
    id: 4,
    title: "Desert Sun Project",
    category: "solar",
    location: "Arizona, USA",
    capacity: "80 MW",
    year: "2021",
    image: project1,
    description: "Utility-scale solar farm in the Arizona desert.",
  },
  {
    id: 5,
    title: "Highland Wind Farm",
    category: "wind",
    location: "Scotland, UK",
    capacity: "120 MW",
    year: "2022",
    image: project2,
    description: "Onshore wind farm in the Scottish Highlands.",
  },
  {
    id: 6,
    title: "Urban Battery Hub",
    category: "storage",
    location: "New York, USA",
    capacity: "50 MWh",
    year: "2024",
    image: project3,
    description: "Urban battery storage supporting peak demand management.",
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "solar", label: "Solar" },
  { value: "wind", label: "Wind" },
  { value: "storage", label: "Storage" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold mb-4 block">Our Projects</span>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Transforming Energy Worldwide
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Explore our portfolio of completed renewable energy projects, from 
              residential installations to utility-scale power plants.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{project.location}</span>
                    <span>{project.capacity}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
