import Banner from "@/components/home/banner/Banner";
import FeaturedProjects from "@/components/home/featuredProjects/FeaturedProjects";
import SkillsSection from "@/components/home/skills/SkillsSection";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <Container>
      <Banner />
      <SkillsSection />
      <FeaturedProjects />
    </Container>
  );
}
