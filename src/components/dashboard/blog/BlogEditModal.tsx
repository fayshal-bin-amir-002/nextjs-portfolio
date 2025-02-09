"use client";

import { TBlog } from "@/types/blog.type";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TProject } from "@/types/project.type";
import { FilePenLine } from "lucide-react";

import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { ChangeEvent, useState } from "react";

import MultiSelect from "@/components/dashboard/project/MultiSelect";
import { X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { updateProject } from "@/actions/updateProject";
import { updateBlog } from "@/actions/updateBlog";

const BlogEditModal = ({ blog }: { blog: TBlog }) => {
  const [open, setOpen] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [technologies, setTechnologies] = useState<string[]>([]);

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      title: blog?.title,
      image: blog?.image,
      description: blog?.description,
      content: blog?.content,
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const img = await uploadToCloudinary(file as File);

    const payload = {
      ...data,
      image: img || blog?.image,
      technologies,
    };

    try {
      // console.log(payload);

      await updateBlog(blog?._id, payload);

      toast.success("Blog updated successfully.");
      router.push("/dashboard/blog-management");
      setOpen(false);
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update blog");
    }

    form.reset();
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <FilePenLine color="green" strokeWidth={2} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-auto w-full">
        <DialogHeader>
          <DialogTitle>Update Blog</DialogTitle>
          <DialogDescription>
            Make changes to your blog here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="p-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              suppressHydrationWarning
            >
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          onChange={handleFileChange}
                          type="file"
                          className="cursor-pointer"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea className="resize-none h-20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea
                          className="resize-none h-40"
                          {...field}
                          placeholder="<p>conent will be in HTML markdown</p>"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogEditModal;
