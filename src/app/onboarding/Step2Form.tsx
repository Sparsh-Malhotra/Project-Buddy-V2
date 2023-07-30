import { step2Schema } from '@/models'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SkillOptions, TechStackOptions } from '@/constants'
import MultiSelect from '@/components/ui/multi-select'

interface IStep2Form {
  onSubmit: (values: z.infer<typeof step2Schema>) => void
}

export default function Step2Form({ onSubmit }: IStep2Form) {
  const form = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      techStack: undefined,
      skills: [],
      linkedin: '',
      github: '',
      dribble: '',
      twitter: '',
    },
  })

  const {
    formState: { errors },
    setValue,
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
            name="techStack"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>Preferred Tech Stack</FormLabel>
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
                      <SelectValue placeholder="Select your tech stack" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TechStackOptions.map(({ label, value }, index) => (
                      <SelectItem value={value} key={index}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skills"
            render={() => (
              <FormItem className="w-[40%]">
                <FormLabel>Skills</FormLabel>
                <MultiSelect
                  options={SkillOptions}
                  placeholder="Select Skills"
                  onChange={(values) => setValue('skills', values)}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>LinkedIn</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your LinkedIn Profile URL"
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
            name="github"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>Github</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Github Profile URL"
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
            name="twitter"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>Twitter</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Twitter Profile URL"
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
            name="dribble"
            render={({ field }) => (
              <FormItem className="w-[40%]">
                <FormLabel>Dribble</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Github Profile URL"
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
        </div>
        <Button type="submit" className="w-[40%] my-8">
          Continue
        </Button>
      </form>
    </Form>
  )
}
