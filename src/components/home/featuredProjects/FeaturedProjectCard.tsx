"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TFeaturedProject } from "./FeaturedProjects";
import { Rocket } from "lucide-react";
import Link from "next/link";

const cardVariants = [
  { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } }, // Left
  { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } }, // Bottom
  { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } }, // Right
];

const FeaturedProjectCard = ({
  project,
  index,
}: {
  project: TFeaturedProject;
  index: number;
}) => {
  return (
    <motion.div
      initial={cardVariants[index % 3].initial}
      whileInView={cardVariants[index % 3].animate}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="border border-main rounded-lg bg-main overflow-hidden group"
    >
      <div className="w-full h-[370px] relative overflow-hidden cursor-pointer shadow-lg bg-main-light bg-opacity-30">
        {/* Image */}
        <Image
          priority
          src={project?.image}
          alt="animated_card"
          fill
          sizes="100%"
          className="w-full h-full object-top object-cover group-hover:scale-[1.1] transition-all duration-700"
        />

        {/* Text */}
        <div className="absolute top-[100%] transform group-hover:top-0 transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col px-4">
          <h1 className="text-2xl font-medium text-center capitalize mb-3 dark:text-black">
            {project?.title}
          </h1>
          <p className="z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-90 transition-all duration-700 text-[0.9rem] mb-6 dark:text-black text-justify">
            {project?.description}
          </p>
        </div>

        {/* Bottom Shadow */}
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
    </motion.div>
  );
};

export default FeaturedProjectCard;
