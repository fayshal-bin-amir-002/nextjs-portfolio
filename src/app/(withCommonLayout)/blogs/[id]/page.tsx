import Container from "@/components/shared/Container";
import { Separator } from "@/components/ui/separator";
import { TBlog } from "@/types/blog.type";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://nextjs-portfolio-backend.vercel.app/api/blogs/${id}`
  );
  const data = await res.json();

  const blog = (data?.data as TBlog) || {};

  return (
    <Container>
      <div className="my-10 lg:my-16">
        <div>
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden">
            <Image
              priority
              src={blog?.image}
              alt="blog image"
              width={500}
              height={400}
              className="w-full object-cover h-[350px] md:h-[500px] dark:bg-gray-500"
            />
            <div className="p-4 mx-auto mt-0 lg:-mt-8 space-y-6 lg:max-w-2xl md:p-6  dark:bg-gray-50 bg-white border border-main-light">
              <div className="space-y-2">
                <h3 className="inline-block text-2xl font-semibold sm:text-3xl dark:text-black">
                  {blog?.title}
                </h3>
                <p className="text-xs dark:text-gray-600">
                  By {blog?.author?.name}
                </p>
                <Separator className="mt-4" />
              </div>
              <div className="dark:text-black">
                <Markdown rehypePlugins={[rehypeRaw]}>{blog?.content}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetailsPage;
