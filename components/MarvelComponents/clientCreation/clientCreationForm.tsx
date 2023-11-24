'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
    title: z.string(),
    type: z.enum(["Business", "Individual"]),
    firstname: z.string().min(2, {
        message: 'must be more than 2 characters'
    }).max(30,{
        message: 'must not exceed 30 characters'
    }),
    othernames: z.string().optional(),
    companyname: z.string(),
    clientemail: z.string().email().toLowerCase(),
    phone: z.string().min(10, {
        message: 'must be more than 10 characters'
    }),
    address: z.string(),
    currency: z.string()

})


const ClientForm = () => {

    const form =  useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            title: "Mr.",
            firstname: " ",
            othernames: "",
            companyname: "",
            clientemail: "",
            phone:" ",
            address: " ",
            currency: "NG",
            type:"Business"

        }
    })  

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className=" rounded-xl">
            <div className=" bg-[#7433FF] rounded-t-xl p-4 primary-bg w-full flex items-center gap-6">
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3424 11.366L6.70825 23.0001L18.3424 34.6343" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M39.2914 23H7.03394" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="">
                    <h1 className="">CLIENT</h1>
                    <p className=''>Please take time to setup your client account</p>
                </div>
            </div>
            <Form  {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 bg-white p-7 rounded-b-xl">
                    <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem className="flex items-center gap-4">
                            <FormLabel>Customer Type</FormLabel>
                            <FormControl>
                                <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={`Business`}
                                className="flex items-center gap-4"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem id="Business" value="Business" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Business
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem id="Individual" value="Individual" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Individual
                                        </FormLabel>
                                    </FormItem>
                                
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="flex items-center gap-4">
                        <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>Title</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl className="">
                                            <SelectTrigger className="w-[5rem] rounded-lg">
                                                <SelectValue className=""  placeholder="Mr"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="">
                                            <SelectItem value="Mr.">Mr</SelectItem>
                                            <SelectItem value="Mrs.">Mrs</SelectItem>
                                        </SelectContent>
                                    </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem className=''>
                                <FormLabel itemID="firstname">First Name</FormLabel>
                                    <FormControl className="rounded-xl">
                                        <Input className=" h-8 rounded-[0.3rem]" id="firstname" placeholder="Marvellous" {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="othernames"
                        render={({ field }) => (
                            <FormItem className=''>
                                <FormLabel itemID="othername">Others Name</FormLabel>
                                    <FormControl>
                                        <Input className=" h-8 rounded-[0.3rem]" id="othername" placeholder="Victor Obatale" {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <span className="">Client display name</span>
                            <div className="">{form.getValues("title") +form.getValues("firstname") + form.getValues("othernames")}</div>
                        </div>
                        <div className="">
                            <span className="">Currency</span>
                            
                        </div>
                    </div>
                    <FormField
                    control={form.control}
                    name="companyname"
                    render={({ field }) => (
                        <FormItem className=''>
                            <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                    <Input className=" h-8 rounded-[0.3rem]" placeholder="GAZET" {...field} />
                                </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="flex items-center justify-between ">

                        <FormField
                        control={form.control}
                        name="clientemail"
                        render={({ field }) => (
                            <FormItem className=''>
                                <FormLabel>Client Email Address</FormLabel>
                                    <FormControl>
                                        <Input className=" h-8 rounded-[0.3rem]" placeholder="marvellousobatale@gmail.com" {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className=''>
                                <FormLabel>Phone No</FormLabel>
                                    <FormControl>
                                        <Input className=" h-8 rounded-[0.3rem]" placeholder="0805212328" {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem className=''>
                            <FormLabel>Billing Address</FormLabel>
                                <FormControl>
                                    <Input className=" h-20 rounded-[0.3rem]"  type="textarea" placeholder="Gazet street, Lagos, Nigeria" {...field} />
                                </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="flex items-center gap-4 w-full justify-end">
                        <Button className='rounded-[0.3rem]' variant={"outline"} type="button">Cancel</Button>
                        <Button className="rounded-[0.3rem] bg-violet-600"  type="submit">Save</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
 
export default ClientForm;