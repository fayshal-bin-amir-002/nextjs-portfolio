import { TBlog } from "@/types/blog.type";
import BlogCard from "./BlogCard";

const AllBlogs = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <div className="py-10 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {blogs &&
        blogs?.map((blog: TBlog) => <BlogCard key={blog?._id} blog={blog} />)}
    </div>
  );
};

export default AllBlogs;
