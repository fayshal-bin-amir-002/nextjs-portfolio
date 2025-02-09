"use client";

import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { postBlog } from "@/actions/postBlog";

const BlogPostPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      title: "",
      image: "",
      description: "",
      content: "",
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const img = await uploadToCloudinary(file as File);

    if (img === null) {
      toast.error("Failed to upload image.");
      return;
    }

    const payload = {
      ...data,
      image: img || "",
    };

    try {
      await postBlog(payload);
      toast.success("Blog posted successfully.");
      router.push("/dashboard/blog-management");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to post blog.");
    }

    // form.reset();
  };

  return (
    <Card className="my-6" suppressHydrationWarning>
      <CardContent className="pt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
            suppressHydrationWarning
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
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
                  <FormItem className="lg:col-span-2">
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
                  <FormItem className="lg:col-span-2">
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
      </CardContent>
    </Card>
  );
};

export default BlogPostPage;
