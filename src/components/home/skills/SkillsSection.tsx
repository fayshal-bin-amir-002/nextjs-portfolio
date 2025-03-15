import SectionTitle from "@/components/shared/SectionTitle";
import { skillData } from "@/constants/skills";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const SkillsSection = () => {
  return (
    <div>
      <SectionTitle title="Skills" />
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        <Marquee autoFill={true} pauseOnHover={true}>
          {skillData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center size-[140px] md:size-[160px] lg:size-[180px] md:mx-1.5 lg:mx-3"
            >
              <div className="size-[100px] md:size-[120px] lg:size-[140px] bg-main-light bg-opacity-30 dark:bg-white rounded-full flex items-center justify-center p-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-sm sm:text-base font-semibold mt-3 text-center dark:text-main">
                {item.name}
              </p>
            </div>
          ))}
        </Marquee>
        <Marquee autoFill={true} pauseOnHover={true} direction="right">
          {skillData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center size-[140px] md:size-[160px] lg:size-[180px] md:mx-1.5 lg:mx-3"
            >
              <div className="size-[100px] md:size-[120px] lg:size-[140px] bg-main-light bg-opacity-30 dark:bg-white rounded-full flex items-center justify-center p-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-sm sm:text-base font-semibold mt-3 text-center dark:text-main">
                {item.name}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsSection;
