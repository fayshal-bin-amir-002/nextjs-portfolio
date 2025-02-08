import Image from "next/image";
import Marquee from "react-fast-marquee";

const SkillsSection = () => {
  const skillData = [
    {
      name: "HTML",
      image: "https://i.postimg.cc/zBQnQkWw/icons8-html-480.png",
    },
    { name: "CSS", image: "https://i.postimg.cc/3wnjXhxc/icons8-css-400.png" },
    {
      name: "Tailwind CSS",
      image: "https://i.postimg.cc/qMy58tVD/icons8-tailwind-css-480.png",
    },
    {
      name: "JavaScript",
      image: "https://i.postimg.cc/gj6vb6qC/icons8-javascript-480.png",
    },
    {
      name: "TypeScript",
      image: "https://i.postimg.cc/KjH3jcQn/icons8-typescript-96.png",
    },
    {
      name: "React",
      image: "https://i.postimg.cc/QNRz9QPW/icons8-react-native-480.png",
    },
    {
      name: "Redux",
      image:
        "https://i.postimg.cc/qMNCYnMQ/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png",
    },
    {
      name: "Next.js",
      image: "https://i.postimg.cc/ZY7dVjZC/icons8-nextjs-96.png",
    },
    {
      name: "Node.js",
      image: "https://i.postimg.cc/23Rnk80V/icons8-nodejs-480.png",
    },
    {
      name: "Express.js",
      image: "https://i.postimg.cc/mDkYVnc2/icons8-express-js-480.png",
    },
    {
      name: "MongoDB",
      image: "https://i.postimg.cc/7PCcZsBk/icons8-mongodb-480.png",
    },
    {
      name: "Mongoose",
      image: "https://i.postimg.cc/gjXkMVqZ/icons8-mongoose-96.png",
    },
    { name: "Firebase", image: "https://i.postimg.cc/3xQZ79qn/firebase.png" },
    { name: "JWT", image: "https://i.postimg.cc/BvQ79M8R/jwt.png" },
    { name: "C++", image: "https://i.postimg.cc/0jQJ9KGk/icons8-c-100.png" },
  ];

  return (
    <div className="overflow-hidden mt-6">
      <h1 className="text-4xl md:text-5xl font-semibold text-main text-center mb-6 md:mb-10 lg:mb-12">
        Skills
      </h1>
      <div className="space-y-8">
        <Marquee autoFill={true} pauseOnHover={true}>
          {skillData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center size-[180px] lg:mx-6"
            >
              <div className="size-[140px] bg-main-light bg-opacity-30 dark:bg-white rounded-full flex items-center justify-center">
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
              className="flex flex-col items-center justify-center size-[180px] lg:mx-6"
            >
              <div className="size-[140px] bg-main-light bg-opacity-30 dark:bg-white rounded-full flex items-center justify-center">
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
