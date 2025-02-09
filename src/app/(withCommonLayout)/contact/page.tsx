"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import Container from "@/components/shared/Container";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { createContact } from "@/actions/createContact";
import { toast } from "sonner";

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

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await createContact(data);
    toast.success("Message sent successfully!");
    form.reset();
  }

  return (
    <Container>
      <div
        className="flex justify-center items-center h-[60vh]"
        suppressHydrationWarning
      >
        <Card className="p-4 md:p-6 w-full md:w-[450px] lg:w-1/2 mx-auto">
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
        </Card>
      </div>
    </Container>
  );
};

export default ContactPage;
