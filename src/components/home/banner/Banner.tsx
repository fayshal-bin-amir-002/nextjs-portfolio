"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bannerImage from "@/assets/bannerImage.png";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 my-10 md:my-16 lg:my-20">
      {/* text side */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-1/2"
      >
        <AnimatedText />
        <motion.h3
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="text-3xl md:text-5xl mb-4 md:mb-6"
        >
          <span className="text-main">Hi,</span> I&apos;m Fayshal Bin Amir
        </motion.h3>
        <p className="text-gray-500 text-justify mb-8 md:mb-10">
          A passionate Web Developer and Computer Science and Engineering
          student at Begum Rokeya University. I specialize in building dynamic
          and responsive websites using the MERN stack, Next.js, and Tailwind
          CSS. With a strong foundation in both front-end and back-end
          technologies, I create seamless web experiences tailored to your
          needs. Let&apos;s build something amazing together!
        </p>
        <Link
          href="https://drive.google.com/drive/folders/1lbChe2yHsKnLAZjYB5SBU_kVepdq3sW6?usp=drive_link"
          target="_blank"
        >
          <Button
            size={"lg"}
            variant={"outline"}
            className="hover:scale-105 duration-300 ease-in-out"
          >
            View Resume
          </Button>
        </Link>
      </motion.div>

      {/* image side */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image src={bannerImage} width={400} height={400} alt="banner-image" />
      </motion.div>
    </div>
  );
};

export default Banner;
