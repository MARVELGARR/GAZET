'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '../../../components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form';
import { Input } from '../../../components/ui/input';
import google from '@/public/svg/google.svg';
import facebook from '@/public/svg/facebook.svg';
import linkedin from '@/public/svg/linkedin.svg';
import Image from 'next/image';


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
    <div className='h-screen'>
      <div className='mb-5 w-full flex items-center gap-10'><p className='text-slate-400'>Already have an account?</p>
      <Button className='rounded-3xl border-black border-2 text-black bg-transparent h-8'>Sign In</Button></div>
      <h1 className='text-extrabold text-3xl'>Welcome to Gazet!</h1>
      <p className='text-slate-400 mb-10 text-bold'>Register your account</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={(field) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} type='text' className="w-full rounded border-gray-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessName"
            render={(field) => (
              <FormItem>
                <FormLabel>Business Name</FormLabel>
                <FormControl>
                  <Input {...field} type='text' className="w-full rounded border-gray-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={(field) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input {...field} type='password' className="w-full rounded border-gray-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-[#7433FF] w-full text-white rounded-3xl hover:bg-[#7433FF]">
            Sign Up
          </Button>

          <div className='flex items-center gap-2'>
            <div className="border-b-slate-400 border-b-2 w-1/2 h-2"></div>
            <p className='block text-slate-400'>OR</p>
            <div className="border-b-slate-400 border-b-2 w-1/2 h-2"></div>
          </div>
          <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5 text-slate-400'><p>Create an account with</p>
            <div className='flex gap-2 items-center'>
              <Image src={google} alt="google logo" width={40} height={40} className='cursor-pointer' />
              <Image src={facebook} alt="facebook logo" width={40} height={40} className='cursor-pointer' />
              <Image src={linkedin} alt="linkedin logo" width={40} height={40} className='cursor-pointer' />
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
};

export default Forms;