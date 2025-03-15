import SectionTitle from "@/components/shared/SectionTitle";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getFeaturedProjects } from "@/service/project";

export type TFeaturedProject = {
  _id: string;
  title: string;
  description: string;
  image: string;
  live_link: string;
};

const FeaturedProjects = async () => {
  const featuredProjects =
    ((await getFeaturedProjects()) as TFeaturedProject[]) || [];

  return (
    <div className="my-10 md:my-16 lg:my-20">
      <SectionTitle title="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-hidden">
        {featuredProjects?.map((project: TFeaturedProject, i: number) => (
          <FeaturedProjectCard key={project?._id} project={project} index={i} />
        ))}
      </div>
      <div className="text-center mt-6 lg:mt-10">
        <Link href="/projects">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
