"use client";

import { Input } from "@/components/ui/input";
import { MediumText, RegularText } from "@/core/Typography";
import { loginFormSchema } from "@/schema";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberUser: false,
    },
  });

  const {
    formState: { isValid },
  } = form;

  const handleSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 h-full w-fit m-auto">
      <MediumText className="text-3xl">Welcome Back</MediumText>
      <div className="flex items-center gap-2">
        <hr className="border-t-1 border-primary w-[120px]" />
        <RegularText className="text-gray-400 text-sm">
          or Login with email
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
          <FormField
            control={form.control}
            name="rememberUser"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Remember me</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!isValid}>
            Login
          </Button>
        </form>
      </Form>
      <div className="flex items-center self-start gap-1">
        <RegularText className="text-gray-500 text-sm">
          Don’t have an account?
        </RegularText>
        <Link href="/signup" className="text-sm text-primary font-medium">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
