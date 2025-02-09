import SectionTitle from "@/components/shared/SectionTitle";
import FeaturedProjectCard from "./FeaturedProjectCard";

export type TFeaturedProject = {
  _id: string;
  title: string;
  description: string;
  image: string;
  live_link: string;
};

const FeaturedProjects = async () => {
  const res = await fetch(
    "http://localhost:3500/api/project/featured-projects"
  );
  const data = await res.json();
  const featuredProjects = data?.data || ([] as TFeaturedProject[]);

  return (
    <div className="my-10 md:my-16 lg:my-20">
      <SectionTitle title="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {featuredProjects?.map((project: TFeaturedProject) => (
          <FeaturedProjectCard key={project?._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
