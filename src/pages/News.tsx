import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "Energique Expands Solar Operations to Europe",
    excerpt: "Major expansion brings clean energy solutions to 5 new European markets, marking a significant milestone in our global growth strategy.",
    date: "Jan 10, 2024",
    category: "Company News",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "New Battery Technology Breakthrough",
    excerpt: "Our R&D team achieves 40% increase in energy storage efficiency, paving the way for more affordable and reliable battery solutions.",
    date: "Jan 5, 2024",
    category: "Innovation",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Partnership with Global Energy Initiative",
    excerpt: "Joining forces to accelerate the transition to renewable energy worldwide through strategic collaboration and shared expertise.",
    date: "Dec 28, 2023",
    category: "Partnerships",
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "2023 Sustainability Report Released",
    excerpt: "Our annual report highlights achievements in carbon reduction, community engagement, and environmental stewardship.",
    date: "Dec 15, 2023",
    category: "Sustainability",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Energique Recognized as Industry Leader",
    excerpt: "Awarded 'Renewable Energy Company of the Year' at the Global Clean Energy Awards ceremony.",
    date: "Dec 1, 2023",
    category: "Awards",
    readTime: "2 min read",
  },
  {
    id: 6,
    title: "Community Solar Program Launch",
    excerpt: "New initiative makes solar energy accessible to renters and homeowners who can't install panels on their own properties.",
    date: "Nov 20, 2023",
    category: "Programs",
    readTime: "4 min read",
  },
];

const News = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold mb-4 block">News & Insights</span>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Latest Updates
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Stay informed about our latest projects, innovations, and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-primary">{article.category}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                  <span className="text-primary font-semibold flex items-center">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
