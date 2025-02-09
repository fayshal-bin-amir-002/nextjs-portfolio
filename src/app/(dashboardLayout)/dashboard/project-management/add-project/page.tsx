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
import { ChangeEvent, useState } from "react";

import MultiSelect from "@/components/dashboard/project/MultiSelect";
import { X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { createProject } from "@/actions/createProject";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { TProject } from "@/types/project.type";

const AddProjectPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [technologies, setTechnologies] = useState<string[]>([]);

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      title: "",
      image: "",
      technologies: "",
      features: [],
      description: "",
      isFeatured: false,
      live_link: "",
      github_link: "",
      github_link_frontEnd: "",
      github_link_backEnd: "",
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
      technologies,
    };

    // console.log(payload);
    await createProject(payload as TProject);

    toast.success("Project added successfully.");
    router.push("/dashboard/project-management");

    // form.reset();
  };

  return (
    <Card className="mt-8 lg:mt-12" suppressHydrationWarning>
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
                render={() => (
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
              <div>
                <FormLabel>Technologies</FormLabel>
                <MultiSelect setTechnologies={setTechnologies} />
              </div>
              <Controller
                name="features"
                // control={control}
                defaultValue={[]}
                render={({
                  field: { value = [], onChange },
                  fieldState: { error },
                }) => {
                  const handleKeyDown = (
                    event: React.KeyboardEvent<HTMLInputElement>
                  ) => {
                    if (
                      event.key === "Enter" &&
                      event.currentTarget.value.trim()
                    ) {
                      event.preventDefault();
                      onChange([...value, event.currentTarget.value.trim()]);
                      event.currentTarget.value = "";
                    }
                  };

                  const removeTag = (
                    event: React.MouseEvent,
                    index: number
                  ) => {
                    event.preventDefault();
                    onChange(
                      value.filter((_: unknown, i: number) => i !== index)
                    );
                  };

                  return (
                    <div className="w-full space-y-3">
                      <FormItem>
                        <FormLabel htmlFor="features">Features</FormLabel>
                        <FormControl>
                          <Input
                            id="features"
                            type="text"
                            onKeyDown={handleKeyDown}
                            placeholder={"Type and press Enter..."}
                            // aria-label={label || "Multi Input"}
                          />
                        </FormControl>
                        {error && <FormMessage>{error.message}</FormMessage>}
                      </FormItem>

                      <div className="flex flex-wrap gap-2">
                        {value.map((tag: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-center bg-gray-200 px-1.5 rounded-md"
                          >
                            <span>{tag}</span>
                            <Button
                              type="button"
                              size="sm"
                              variant="ghost"
                              className="ml-2 text-red-500 p-0 hover:bg-transparent"
                              onClick={(event) => removeTag(event, index)}
                              aria-label={`Remove ${tag}`}
                            >
                              <X size={12} />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="lg:col-span-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea className="resize-none h-24" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="live_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Live Link</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="github_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Github Link</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="github_link_frontEnd"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Github Link FrontEnd</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="github_link_backEnd"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Github Link BackEnd</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="flex flex-row justify-start items-center space-x-3 space-y-0 ">
                    <FormControl>
                      <Checkbox
                        id="isFeatured"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <label
                      htmlFor="isFeatured"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Add to Featured Projects
                    </label>
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

export default AddProjectPage;
