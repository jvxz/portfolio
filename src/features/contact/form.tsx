"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MAX_MESSAGE_LENGTH = 1000;

const formSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(MAX_MESSAGE_LENGTH),
});

type FormSchema = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<FormSchema>();

  const onSubmit = (values: FormSchema) => {
    console.log(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>
                <p>name</p>
              </FormLabel> */}
              <FormControl>
                <Input placeholder="name" {...field} />
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
              {/* <FormLabel>
                <p>name</p>
              </FormLabel> */}
              <FormControl>
                <Input placeholder="email" {...field} />
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
              {/* <FormLabel>message</FormLabel> */}
              <FormControl>
                <Textarea
                  className="h-[150px] max-h-[500px] min-h-[75px]"
                  placeholder="message"
                  {...field}
                />
              </FormControl>
              <FormDescription
                style={{
                  color:
                    form.watch("message")?.length >= MAX_MESSAGE_LENGTH
                      ? "red"
                      : "inherit",
                }}
              >
                {form.watch("message")?.length ?? 0} / {MAX_MESSAGE_LENGTH}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="grid grid-cols-1 grid-rows-1 self-start"
          variant="outline"
          type="submit"
        >
          <p
            className="col-start-1 row-start-1"
            style={{
              opacity: true ? 0 : 1,
            }}
          >
            submit
          </p>
          <Loader2
            className="col-start-1 row-start-1 mx-auto animate-spin"
            style={{
              opacity: true ? 1 : 0,
            }}
          />
        </Button>
      </form>
    </Form>
  );
}
