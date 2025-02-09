import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TBlog } from "@/types/blog.type";
import { FilePenLine, FilePlus, Trash2 } from "lucide-react";

const BlogManagement = async () => {
  const res = await fetch("http://localhost:3500/api/blogs");
  const data = await res.json();
  const blogs = (data?.data as TBlog[]) || [];

  return (
    <div>
      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl font-bold">Blog Management</h1>
        <Button variant="outline">
          <FilePlus /> Add New Blog
        </Button>
      </div>
      <Card className="mt-6">
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden md:table-cell">Title</TableHead>
                <TableHead className="hidden md:table-cell">
                  Description
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Post Date
                </TableHead>
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
                        <Button size="icon" variant="outline">
                          <FilePenLine color="green" strokeWidth={2} />
                        </Button>
                        <Button size="icon" variant="outline">
                          <Trash2 color="red" strokeWidth={2} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogManagement;
