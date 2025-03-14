import BlogsTable from "@/components/dashboard/blog/BlogsTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllBlogs } from "@/service/blog";

import { TBlog } from "@/types/blog.type";
import { FilePlus } from "lucide-react";
import Link from "next/link";

const BlogManagement = async () => {
  const blogs = ((await getAllBlogs()) as TBlog[]) || [];

  return (
    <div>
      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl font-bold">Blog Management</h1>
        <Link href="/dashboard/blog-management/post-blog">
          <Button variant="outline">
            <FilePlus /> Add New Blog
          </Button>
        </Link>
      </div>
      <Card className="mt-6">
        <CardContent className="pt-6">
          <BlogsTable blogs={blogs} />
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogManagement;
