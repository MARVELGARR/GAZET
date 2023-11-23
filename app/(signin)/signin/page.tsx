'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '../../../components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form';
import { Input } from '../../../components/ui/input';
import Slider from '@/components/formComponents/Sliders';



const formSchema = z.object({
  username: z.string().min(3, "Name must be at least 3 characters.").max(50),
  email: z.string().email(),
  businessName: z.string().min(5),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string()
})
const Forms = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      businessName: "",
      password: "",
      confirmPassword: ""
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }


  return (
    <div  className='w-full'>
     <Slider />   
    <div>
      <h1 className='text-extrabold text-3xl'>Welcome to Gazet!</h1>
      <p className='text-slate-400 mb-10 text-bold'>Register your account</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-1/4">
          <FormField
            control={form.control}
            name="email"
            render={(field) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type='email' className="w-full rounded border-gray-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={(field) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type='password' className="w-full rounded border-gray-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-[#7433FF] w-full text-white rounded-3xl hover:bg-[#7433FF]">
            Login
          </Button>
          <p className='text-center'>Forgot your {" "}<span className='text-[#7433FF]'>Password?</span></p>
          <p className='text-center'>Don't have an account? {" "}<span className='text-[#7433FF]'>Sign Up</span></p>
        </form>
      </Form>
    </div>
    </div>
  )
};

export default Forms;