import AllBlogs from "@/components/home/blog";
import Container from "@/components/shared/Container";
import { getAllBlogs } from "@/service/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fayshal Bin Amir | Web Developer",
  description:
    "Portfolio of Fayshal Bin Amir, a passionate web developer skilled in React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose and modern web technologies.",
  keywords:
    "Fayshal Bin Amir, Web Developer, React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose, MERN, Full Stack, Portfolio",
};

const BlogsPage = async () => {
  const blogs = await getAllBlogs();

  return (
    <Container>
      <AllBlogs blogs={blogs} />
    </Container>
  );
};

export default BlogsPage;
