import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TFeaturedProject } from "./FeaturedProjects";
import { Rocket } from "lucide-react";
import Link from "next/link";

const FeaturedProjectCard = ({ project }: { project: TFeaturedProject }) => {
  return (
    <div className="border border-main rounded-lg bg-main overflow-hidden group">
      <div className="w-full h-[370px] relative overflow-hidden cursor-pointer  shadow-lg bg-main-light bg-opacity-30">
        {/*  image  */}
        <Image
          priority
          src={project?.image}
          alt="animated_card"
          fill
          sizes="100%"
          className="w-full h-full object-top object-cover group-hover:scale-[1.1] transition-all duration-700"
        />

        {/*  text  */}
        <div className="absolute top-[100%] transform group-hover:top-0 transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col px-4">
          <h1 className="text-2xl font-medium text-center capitalize mb-3 dark:text-black">
            {project?.title}
          </h1>
          <p className="z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-90 transition-all duration-700 text-[0.9rem] mb-6 dark:text-black text-justify">
            {project?.description}
          </p>
        </div>

        {/*  bottom shadow  */}
        <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-main-light h-[100%] absolute bottom-0 left-0 right-0"></div>
      </div>
      <Link href={project?.live_link} target="_blank">
        <Button
          size={"lg"}
          className="transition-all duration-300 bg-main hover:bg-main dark:hover:bg-main dark:bg-main w-full dark:text-white text-lg"
        >
          View Website <Rocket color="white" />
        </Button>
      </Link>
    </div>
  );
};

export default FeaturedProjectCard;
