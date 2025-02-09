import BlogCard from "@/components/home/blog/BlogCard";
import Container from "@/components/shared/Container";
import { TBlog } from "@/types/blog.type";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:3500/api/blogs");
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
