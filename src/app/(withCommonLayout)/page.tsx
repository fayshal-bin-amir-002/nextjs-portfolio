import Banner from "@/components/home/banner/Banner";
import FeaturedProjects from "@/components/home/featuredProjects/FeaturedProjects";
import SkillsSection from "@/components/home/skills/SkillsSection";
import Container from "@/components/shared/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fayshal Bin Amir | Web Developer",
  description:
    "Portfolio of Fayshal Bin Amir, a passionate web developer skilled in NextJS, React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose and modern web technologies.",
  keywords:
    "Fayshal Bin Amir, Web Developer, React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose, MERN, Full Stack, Portfolio",
};

export default function Home() {
  return (
    <Container>
      <Banner />
      <SkillsSection />
      <FeaturedProjects />
    </Container>
  );
}
