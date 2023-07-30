'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { step1Schema } from '@/models'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

interface IStep1Form {
  onSubmit: (values: z.infer<typeof step1Schema>) => void
}

export default function Step1form({ onSubmit }: IStep1Form) {
  const form = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      gender: undefined,
      university: '',
      course: '',
      state: undefined,
    },
  })

  const {
    formState: { errors },
  } = form

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-fit mt-8 flex flex-col justify-center items-center"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
                    className={`${
                      errors[field.name] ? 'ring-1 ring-red-400' : ''
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
                    className={`${
                      errors[field.name] ? 'ring-1 ring-red-400' : ''
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your age"
                    className={`${
                      errors[field.name] ? 'ring-1 ring-red-400' : ''
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`${
                        errors[field.name] ? 'ring-1 ring-red-400' : ''
                      }`}
                    >
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="none">
                      Do not wish to disclose
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="university"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>University</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your university"
                    className={`${
                      errors[field.name] ? 'ring-1 ring-red-400' : ''
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>Course</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your course"
                    className={`${
                      errors[field.name] ? 'ring-1 ring-red-400' : ''
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`${
                        errors[field.name] ? 'ring-1 ring-red-400' : ''
                      }`}
                    >
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="none">
                      Do not wish to disclose
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-[40%] my-8">
          Continue
        </Button>
      </form>
    </Form>
  )
}
