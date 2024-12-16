"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
} from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createMessage } from "@/db/actions";
import { type Message } from "@/db/schema";
import { Info, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const MAX_LENGTHS = {
  name: 100,
  email: 100,
  message: 1000,
};
type FormSchema = Message;
const formSchema = z.object({
  name: z.string().min(1).max(MAX_LENGTHS.name),
  email: z.string().email(),
  message: z.string().min(1).max(MAX_LENGTHS.message),
});

export default function ContactForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const { control, handleSubmit, watch, formState } = form;

  const onSubmit = (values: FormSchema) => {
    createMessage(values).catch((error) => {
      console.error(error);
    });
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="name"
                  style={{
                    borderColor: formState.errors.name?.message
                      ? "hsl(var(--destructive))"
                      : "inherit",
                  }}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                <span
                  style={{
                    color:
                      watch("name")?.length >= MAX_LENGTHS.name
                        ? "hsl(var(--destructive))"
                        : "inherit",
                  }}
                >
                  {watch("name")?.length ?? 0} / {MAX_LENGTHS.name}
                </span>
              </FormDescription>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="email"
                  style={{
                    borderColor: formState.errors.email?.message
                      ? "hsl(var(--destructive))"
                      : "inherit",
                  }}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                <span
                  style={{
                    color:
                      watch("email")?.length >= MAX_LENGTHS.email
                        ? "hsl(var(--destructive))"
                        : "inherit",
                  }}
                >
                  {watch("email")?.length ?? 0} / {MAX_LENGTHS.email}
                </span>
              </FormDescription>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="h-[150px] max-h-[500px] min-h-[75px]"
                  placeholder="message"
                  style={{
                    borderColor: formState.errors.message?.message
                      ? "hsl(var(--destructive))"
                      : "inherit",
                  }}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                <span
                  style={{
                    color:
                      watch("message")?.length >= MAX_LENGTHS.message
                        ? "hsl(var(--destructive))"
                        : "inherit",
                  }}
                >
                  {watch("message")?.length ?? 0} / {MAX_LENGTHS.message}
                </span>
              </FormDescription>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between gap-2">
          <Button
            className="grid grid-cols-1 grid-rows-1 self-start"
            variant="outline"
            type="submit"
            disabled={formState.isSubmitting || formState.isSubmitSuccessful}
          >
            <p
              className="col-start-1 row-start-1"
              style={{
                opacity: formState.isSubmitting ? 0 : 1,
              }}
            >
              submit
            </p>
            <Loader2
              className="col-start-1 row-start-1 mx-auto animate-spin"
              style={{
                opacity: formState.isSubmitting ? 1 : 0,
              }}
            />
          </Button>
          <div className="flex items-center gap-2">
            <Info className="size-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              please confirm your details before submitting. submissions{" "}
              <span className="font-bold">cannot</span> be undone.
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
}
