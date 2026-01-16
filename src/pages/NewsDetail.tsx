import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const articlesData: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}> = {
  "1": {
    title: "Energique Expands Solar Operations to Europe",
    category: "Company News",
    date: "January 10, 2024",
    readTime: "5 min read",
    content: [
      "We are thrilled to announce a major expansion of our solar operations into five new European markets: Germany, France, Spain, Netherlands, and Poland. This strategic move represents a significant milestone in our mission to accelerate the global transition to renewable energy.",
      "The expansion will bring our cutting-edge solar technology and proven installation expertise to millions of new potential customers. We're committed to creating local jobs and partnerships in each market, contributing to both economic growth and environmental sustainability.",
      "Our European headquarters will be established in Amsterdam, serving as the central hub for operations across the continent. We expect to install over 500MW of solar capacity across Europe within the first three years of operation.",
      "This expansion is supported by strategic partnerships with local utilities, construction firms, and financing institutions, ensuring we can deliver the same high-quality service that our customers in the Americas have come to expect."
    ]
  },
  "2": {
    title: "New Battery Technology Breakthrough",
    category: "Innovation",
    date: "January 5, 2024",
    readTime: "4 min read",
    content: [
      "Our research and development team has achieved a groundbreaking 40% improvement in energy storage efficiency, marking one of the most significant advances in battery technology in recent years.",
      "The new technology utilizes a novel cathode material that dramatically improves energy density while reducing manufacturing costs. This breakthrough will make battery storage more accessible and affordable for both residential and commercial applications.",
      "We've already begun the process of integrating this technology into our next-generation storage products, with commercial availability expected by Q3 2024.",
      "This innovation reinforces our position as industry leaders in the renewable energy sector and demonstrates our ongoing commitment to pushing the boundaries of what's possible in clean energy technology."
    ]
  },
  "3": {
    title: "Partnership with Global Energy Initiative",
    category: "Partnerships",
    date: "December 28, 2023",
    readTime: "3 min read",
    content: [
      "Energique is proud to announce a strategic partnership with the Global Energy Initiative (GEI), a coalition of leading organizations working to accelerate the worldwide transition to renewable energy.",
      "Through this partnership, we will collaborate on large-scale renewable energy projects in developing markets, share technical expertise and best practices, and advocate for supportive policy frameworks.",
      "This collaboration aligns perfectly with our mission to make clean energy accessible to everyone, regardless of geography or economic status.",
      "Together with GEI, we aim to deploy over 1GW of renewable energy capacity in underserved markets over the next five years."
    ]
  },
};

const NewsDetail = () => {
  const { id } = useParams();
  const article = articlesData[id || "1"];

  if (!article) {
    return (
      <div className="section-padding text-center">
        <h1 className="heading-lg mb-4">Article Not Found</h1>
        <Button asChild>
          <Link to="/news">Back to News</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold mb-4 block">{article.category}</span>
            <h1 className="heading-xl text-primary-foreground mb-6">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {article.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <Link 
              to="/news" 
              className="inline-flex items-center text-primary font-medium mb-8 hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>

            <article className="prose prose-lg max-w-none">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </article>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Ready to start your energy journey?
              </h3>
              <Button variant="cta" asChild>
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
