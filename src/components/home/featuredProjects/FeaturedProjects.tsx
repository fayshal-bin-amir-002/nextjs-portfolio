import SectionTitle from "@/components/shared/SectionTitle";
import FeaturedProjectCard from "./FeaturedProjectCard";

const projects = [
  {
    title: "Doodle Stationery Shop",
    description:
      "A modern, feature-rich e-commerce website built using React, TypeScript, TailwindCSS, ShadCN, and Redux.",
    image:
      "https://i.postimg.cc/G2LmwBGX/screencapture-doodle-stationery-shop-vercel-app-2025-02-09-00-34-31.png",
  },
  {
    title: "Fit Vessel",
    description:
      "Fit Vessel is a fitness a cutting-edge Fitness Tracker platform.",
    image:
      "https://i.postimg.cc/Kj2ZmR6K/screencapture-fit-vessel-netlify-app-2025-02-09-00-57-14.png",
  },
  {
    title: "Tech Menia",
    description: "At Tech Menia, we are passionate about all things tech.",
    image:
      "https://i.postimg.cc/6pDgkDJq/screencapture-tech-menia-netlify-app-2025-02-09-01-00-49.png",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="my-10 md:my-16 lg:my-20">
      <SectionTitle title="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects?.map((project, i) => (
          <FeaturedProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
