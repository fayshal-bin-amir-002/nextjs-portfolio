"use client";

import { TBlog } from "@/types/blog.type";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BlogEditModal from "@/components/dashboard/blog/BlogEditModal";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { deleteBlog } from "@/actions/deleteBlog";

const BlogsTable = ({ blogs }: { blogs: TBlog[] }) => {
  const handleDeleteBlog = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteBlog(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your blog has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden md:table-cell">Title</TableHead>
          <TableHead className="hidden md:table-cell">Description</TableHead>
          <TableHead className="hidden md:table-cell">Post Date</TableHead>
          <TableHead className="hidden md:table-cell">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs &&
          blogs.map((blog: TBlog) => (
            <TableRow
              key={blog?._id}
              className="md:table-row flex flex-col border-b"
            >
              <TableCell className="md:table-cell block before:content-['Title'] before:font-bold before:text-slate-700 before:block md:before:content-none md:before:inline cursor-pointer">
                {blog?.title}
              </TableCell>
              <TableCell className="md:table-cell block before:content-['Description'] before:font-bold before:text-slate-700 before:block md:before:content-none md:before:inline cursor-pointer">
                {blog?.description.slice(0, 50)}...
              </TableCell>
              <TableCell className="md:table-cell block before:content-['Post Date'] before:font-bold before:text-slate-700 before:block md:before:content-none md:before:inline cursor-pointer">
                {new Date(blog?.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="md:table-cell block before:content-['Actions'] before:font-bold before:text-slate-700 before:block md:before:content-none md:before:inline cursor-pointer ">
                <div className="flex justify-start items-center gap-4">
                  <BlogEditModal blog={blog} />
                  <Button
                    onClick={() => handleDeleteBlog(blog?._id)}
                    size="icon"
                    variant="outline"
                  >
                    <Trash2 color="red" strokeWidth={2} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default BlogsTable;
