"use client";

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
import { FilePenLine, Loader2 } from "lucide-react";

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
import { Checkbox } from "@/components/ui/checkbox";
import { updateProject } from "@/service/project";

const UpdateProjectModal = ({ project }: { project: TProject }) => {
  const [open, setOpen] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [technologies, setTechnologies] = useState<string[]>([]);

  const form = useForm({
    defaultValues: {
      title: project?.title,
      image: project?.image,
      technologies: project?.technologies,
      features: project?.features,
      description: project?.description,
      isFeatured: project?.isFeatured,
      live_link: project?.live_link,
      github_link: project?.github_link,
      github_link_frontEnd: project?.github_link_frontEnd,
      github_link_backEnd: project?.github_link_backEnd,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let img = project?.image;
    if (file && file !== null) {
      img = (await uploadToCloudinary(file as File)) as string;
    }

    const payload = {
      ...data,
      image: img,
      technologies: technologies || project?.technologies,
    };

    try {
      const res = await updateProject(project?._id, payload as TProject);
      if (res?.success) {
        toast.success(res?.message);
        setOpen(false);

        form.reset();
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"icon"} className="bg-green-500">
          <FilePenLine color="white" strokeWidth={3} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-auto w-full">
        <DialogHeader>
          <DialogTitle>Update Project</DialogTitle>
          <DialogDescription>
            Make changes to your project here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Card suppressHydrationWarning>
          <CardContent className="pt-6">
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
                    <MultiSelect
                      defaultTechnologies={project?.technologies}
                      setTechnologies={setTechnologies}
                    />
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
                          onChange([
                            ...value,
                            event.currentTarget.value.trim(),
                          ]);
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
                            {error && (
                              <FormMessage>{error.message}</FormMessage>
                            )}
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
                      <FormItem className="">
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
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="animate-spin" />} Update
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProjectModal;
