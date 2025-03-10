"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Facebook, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
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
import { Card, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { createContact } from "@/actions/createContact";
import { toast } from "sonner";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required",
  }),
  email: z.string().trim().min(1, {
    message: "Email is required",
  }),
  message: z.string().trim().min(1, {
    message: "Message is required",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await createContact(data);
      toast.success("Message sent successfully!");
      form.reset();
    } catch (err) {
      toast.error("Failed to send message!");
    }
  }
  return (
    <Card className="p-4 md:p-6 w-full md:w-[450px] lg:w-1/2 mx-auto mt-8 md:mt-12 lg:mt-16">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 md:space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Type your name..."
                    {...field}
                    suppressHydrationWarning
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Type your email..."
                    {...field}
                    suppressHydrationWarning
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message..."
                    {...field}
                    suppressHydrationWarning
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Separator className="my-6" />
      <CardFooter className="p-0">
        <div className="flex md:gap-10 justify-between w-full md:justify-center items-center">
          <Link href="mailto:foyshalbinamir@gmail.com">
            <Mail />
          </Link>
          <Link href="https://wa.me/8801755288840" target="_blank">
            <MessageCircle />
          </Link>
          <Link
            href="https://www.facebook.com/foyshal.binamir.3/"
            target="_blank"
          >
            <Facebook />
          </Link>
          <Link
            href="https://www.linkedin.com/in/fayshal-bin-amir/"
            target="_blank"
          >
            <Linkedin />
          </Link>
          <Link href="https://github.com/fayshal-bin-amir-002" target="_blank">
            <Github />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
