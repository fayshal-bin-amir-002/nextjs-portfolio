import { TBlog } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const date = new Date(blog?.createdAt);
  const formattedDate = format(date, "MMMM dd, yyyy");

  return (
    <Link href={`/blogs/${blog?._id}`} className="group">
      <div className="w-full h-full shadow-lg bg-white rounded-lg border border-main-light">
        <div className="flex w-full justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] flex items-center justify-center text-secondary text-[1.3rem] rounded-full overflow-hidden">
              <Image
                src={blog?.author?.image}
                alt="author image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="">
              <h2 className="font-[500] text-lg dark:text-black">
                {blog?.author?.name}
              </h2>
              <p className="text-[#424242] text-sm">{formattedDate}</p>
            </div>
          </div>
        </div>

        <Image
          src={blog?.image}
          alt="blog image"
          width={500}
          height={500}
          className="w-full h-[250px] object-cover"
        />

        <div className="p-4">
          <h3 className="text-xl mb-4 font-medium dark:text-black group-hover:text-main duration-200">
            {blog?.title}
          </h3>
          <p className="text-[#424242] text-sm text-justify">
            {blog?.description}
            <span className="text-main underline"> Read More</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
