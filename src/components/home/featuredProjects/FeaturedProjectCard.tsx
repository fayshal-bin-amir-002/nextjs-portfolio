import { Button } from "@/components/ui/button";
import Image from "next/image";

const FeaturedProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="w-full h-[370px] relative overflow-hidden group cursor-pointer rounded-lg shadow-lg bg-main-light bg-opacity-30 border border-main-light">
      {/*  image  */}
      <Image
        src={project?.image}
        alt="animated_card"
        fill
        className="w-full h-full object-top object-cover group-hover:scale-[1.1] transition-all duration-700"
      />

      {/*  text  */}
      <div className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col p-2">
        <h1 className="text-2xl font-medium text-center capitalize mb-3 text-main bg-white w-full py-2 rounded-lg  group-hover:text-black group-hover:bg-transparent border border-main-light">
          {project?.title}
        </h1>
        <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-90 transition-all duration-700 text-[0.9rem] mb-6 dark:text-black">
          {project?.description}
        </p>
        <Button className=" z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100  transition-all duration-300 bg-main hover:bg-main-medium">
          View Details
        </Button>
      </div>

      {/*  bottom shadow  */}
      <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-main-light h-[100%] absolute bottom-0 left-0 right-0"></div>
    </div>
  );
};

export default FeaturedProjectCard;
