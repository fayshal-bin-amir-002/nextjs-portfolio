import Container from "@/components/shared/Container";
import Image from "next/image";
import bannerImage from "@/assets/bannerImage.png";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 my-10 md:my-16 lg:my-20">
      <div className="lg:w-1/2">
        <AnimatedText />
        <h3 className="text-3xl md:text-5xl mb-4 md:mb-6">
          <span className="text-main">Hi,</span> I'm Fayshal Bin Amir
        </h3>
        <p className="text-gray-500 text-justify mb-8 md:mb-10">
          A passionate Web Developer and Computer Science and Engineering
          student at Begum Rokeya University. I specialize in building dynamic
          and responsive websites using the MERN stack, Next.js, and Tailwind
          CSS. With a strong foundation in both front-end and back-end
          technologies, I create seamless web experiences tailored to your
          needs. Let's build something amazing together!
        </p>
        <Button
          size={"lg"}
          variant={"outline"}
          className="hover:scale-105 duration-300 ease-in-out"
        >
          View Resume
        </Button>
      </div>
      <div>
        <Image src={bannerImage} width={400} height={400} alt="banner-image" />
      </div>
    </div>
  );
};

export default Banner;
