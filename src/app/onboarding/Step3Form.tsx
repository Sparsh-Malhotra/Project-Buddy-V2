import { step3Schema } from '@/models'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface IStep3Form {
  onSubmit: (values: z.infer<typeof step3Schema>) => void
}

export default function Step3Form({ onSubmit }: IStep3Form) {
  const form = useForm<z.infer<typeof step3Schema>>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      type: undefined,
      about: '',
    },
  })

  const {
    formState: { errors },
  } = form

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mt-8 flex flex-col justify-center items-center gap-5"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="w-2/3">
              <FormLabel>Are you a Student or Professional?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={`${
                      errors[field.name] ? 'ring-1 ring-red-400' : ''
                    }`}
                  >
                    <SelectValue
                      placeholder="Select"
                      className="placeholder:text-secondary"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem className="w-2/3">
              <FormLabel>Tell us a little bit about yourself</FormLabel>
              <FormControl>
                <Textarea placeholder="Write here...." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="my-8 w-[40%]">
          Submit
        </Button>
      </form>
    </Form>
  )
}
