import BlogCard from "@/components/home/blog/BlogCard";
import Container from "@/components/shared/Container";
import { TBlog } from "@/types/blog.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fayshal Bin Amir | Web Developer",
  description:
    "Portfolio of Fayshal Bin Amir, a passionate web developer skilled in React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose and modern web technologies.",
  keywords:
    "Fayshal Bin Amir, Web Developer, React, Redux, TypeScript, NodeJs, ExpressJs, Mongodb, Mongoose, MERN, Full Stack, Portfolio",
};

const BlogsPage = async () => {
  const res = await fetch(
    "https://nextjs-portfolio-backend.vercel.app/api/blogs"
  );
  const data = await res.json();
  const blogs = data?.data || [];

  return (
    <Container>
      <div className="my-10 lg:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogs &&
          blogs?.map((blog: TBlog) => <BlogCard key={blog?._id} blog={blog} />)}
      </div>
    </Container>
  );
};

export default BlogsPage;
