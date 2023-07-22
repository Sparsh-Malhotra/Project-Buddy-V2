"use client";

import { Input } from "@/components/ui/input";
import { MediumText, RegularText } from "@/core/Typography";
import { signupFormSchema } from "@/schema";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Signup() {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    formState: { isValid },
  } = form;

  const handleSubmit = (values: z.infer<typeof signupFormSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 h-full w-fit m-auto">
      <MediumText className="text-3xl">Find your Project Partner</MediumText>
      <div className="flex items-center gap-2">
        <hr className="border-t-1 border-primary w-[120px]" />
        <RegularText className="text-gray-400 text-sm">
          or Signup with email
        </RegularText>
        <hr className="border-t-1 border-primary w-[120px]" />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
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
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!isValid}>
            Continue
          </Button>
        </form>
      </Form>
      <div className="flex items-center self-start gap-1">
        <RegularText className="text-gray-500 text-sm">
          Already have an account?
        </RegularText>
        <Link href="/login" className="text-sm text-primary font-medium">
          Login
        </Link>
      </div>
    </div>
  );
}
