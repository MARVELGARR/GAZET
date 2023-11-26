'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import format from "date-fns/format";
import * as z from "zod";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "../ui/textarea";

import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks/hooks"
import { changeState } from "@/redux/features/client/clientStateSlice"

import { cn } from "@/lib/utils";
import Image from "next/image";
import AddNew from "@/public/svg/add.svg";


const formSchema = z.object({
    clientName: z.string({
        required_error: "Please select a client name.",
    }),
    invoiceNo: z.string(),
    invoiceDate: z.date({
        required_error: "Invoice date is required.",
    }),
    invoiceDueDate: z.date({
        required_error: "Invoice due date is required.",
    }),
    invoiceDesc: z.string().min(5, {
        message: 'must be more than 2 characters'
    }).max(50, {
        message: 'must not exceed 30 characters'
    }),
    itemDetails: z.string(),
    itemQuantity: z.number().min(1, {
        message: 'must be more than 1'
    }),
    rate: z.number(),
    tax: z.number(),
    discount: z.number(),
    amount: z.number().min(1, {
        message: 'must be more than 1'
    }),
})

const languages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
] as const

interface CancelProps {
    onClose: () => void;
}

const ClientForm = ({ onClose } : CancelProps) => {

    const isActive = useAppSelector((state) => state.clientState.value);
    const dispatch = useAppDispatch();


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            clientName: "Select Name",
            invoiceNo: "",
            invoiceDate: new Date("2023-01-23"),
            invoiceDueDate: new Date("2023-01-23"),
            invoiceDesc: "Describe invoice",
            itemDetails: " ",
            itemQuantity: 1,
            rate: 0,
            tax: 0,
            discount: 0,
            amount: 0,

        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className=" rounded-xl w-[50%] mt-10">
            <div className=" bg-[#7433FF] rounded-t-xl p-4 primary-bg w-full px-5 flex items-center gap-6">
                <Button onClick={onClose}>
                    <svg width="35" height="35" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3424 11.366L6.70825 23.0001L18.3424 34.6343" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M39.2914 23H7.03394" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Button>
                <div className="">
                    <h1 className="text-white text-bold text-lg">NEW INVOICE</h1>
                    <p className="text-white">Create and send invoices to you customers</p>
                </div>
            </div>
            <Form  {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 bg-white p-7 rounded-b-xl">
                    <div className="firstRow flex items-center w-full justify-start gap-10 mb-10">
                        <FormField
                            control={form.control}
                            name="clientName"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <div className="flex items-center gap-3">
                                        <FormLabel>Client name</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        className={cn(
                                                            "w-[250px] justify-between rounded-[.3rem] focus:ring",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value
                                                            ? languages.find(
                                                                (language) => language.value === field.value
                                                            )?.label
                                                            : "Select client name"}
                                                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[200px] p-0 bg-[#7433FF] text-white">
                                                <Command>
                                                    <CommandInput placeholder="Search name..." />
                                                    <CommandEmpty>No client name found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {languages.map((language) => (
                                                            <CommandItem
                                                                value={language.label}
                                                                key={language.value}
                                                                onSelect={() => {
                                                                    form.setValue("clientName", language.value)
                                                                }}
                                                            >
                                                                <CheckIcon
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        language.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {language.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="invoiceNo"
                            render={({ field }) => (
                                <FormItem className=''>
                                    <div className="flex items-center gap-3">
                                        <FormLabel>Invocie No#</FormLabel>
                                        <FormControl>
                                            <Input className="rounded-[.3rem] w-[200px]" placeholder="#########" {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="secondRow flex items-center justify-start gap-10 w-full mb-10">
                        <FormField
                            control={form.control}
                            name="invoiceDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <div className="flex items-center gap-3">
                                        <FormLabel>Invoice date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[180px] pl-3 text-left font-normal rounded-[.3rem]",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0 bg-[#7433FF] text-white" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date: any) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="invoiceDueDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <div className="flex items-center gap-3">
                                        <FormLabel>Invoice due date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[180px] pl-3 text-left font-normal rounded-[.3rem]",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0 bg-[#7433FF] text-white" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date: any) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="thirdRow">
                        <FormField
                            control={form.control}
                            name="itemDetails"
                            render={({ field }) => (
                                <FormItem className=''>
                                    <div className="flex items-center gap-3 my-10">
                                        <FormLabel>Invoice <br /> Description</FormLabel>
                                        <FormControl>
                                            <Textarea className=" h-8 rounded-[0.3rem] w-[70%]" placeholder="Give your invoice a description" {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                    </div>
                    <div className="horizontalLine flex justify-center">
                        <div className="border-t-[1px] border-t-black w-[70%]"></div>
                    </div>
                    <div className="fourthRow flex items-center justify-center mt-10">
                        <div>
                            <FormLabel className="text-[.7rem]">ITEM DETAILS</FormLabel>
                            <FormField
                                control={form.control}
                                name="itemDetails"
                                render={({ field }) => (
                                    <FormItem className=''>
                                        <div className="flex items-center gap-3">
                                            <FormControl>
                                                <Input className="h-[80px] w-[80px] border-l-0"  {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormLabel className="text-[.7rem]">QUANTITY</FormLabel>
                            <FormField
                                control={form.control}
                                name="itemQuantity"
                                render={({ field }) => (
                                    <FormItem className=''>
                                        <div className="flex items-center gap-3">
                                            <FormControl>
                                                <Input className="h-[80px] w-[80px] border-l-0" {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormLabel className="text-[.7rem]">RATE{" "}(PER)</FormLabel>
                            <FormField
                                control={form.control}
                                name="rate"
                                render={({ field }) => (
                                    <FormItem className=''>
                                        <div className="flex items-center gap-3">
                                            <FormControl>
                                                <Input className="h-[80px] w-[80px] border-l-0" {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormLabel className="text-[.7rem]">TAX</FormLabel>
                            <FormField
                                control={form.control}
                                name="tax"
                                render={({ field }) => (
                                    <FormItem className=''>
                                        <div className="flex items-center gap-3">
                                            <FormControl>
                                                <Input className="h-[80px] w-[80px] border-l-0" {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormLabel className="text-[.7rem]">DISCOUNT</FormLabel>
                            <FormField
                                control={form.control}
                                name="discount"
                                render={({ field }) => (
                                    <FormItem className=''>
                                        <div className="flex items-center gap-3">
                                            <FormControl>
                                                <Input className="h-[80px] w-[80px] border-l-0" {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormLabel className="text-[.7rem]">AMOUNT</FormLabel>
                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem className=''>
                                        <div className="flex items-center gap-3">
                                            <FormControl>
                                                <Input className="h-[80px] w-[80px] border-x-0" {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="fifthRow">
                        <Button>Add new item<Image className="mx-2" src={AddNew} alt="add new" width={20} height={20} /></Button>
                    </div>
                    <div className="sixthRow flex justify-between items-end">
                        <div className="flex gap-3">
                            <Button onClick={()=>dispatch(changeState())} className='bg-[#7433FF] text-white text-xs px-2 rounded-[.5rem] hover:bg-[#7433FF] w-full sm:w-auto' type="submit">
                                Save and send
                            </Button>
                            <Button onClick={()=>dispatch(changeState())} className='bg-white border-[#7433FF] border-[1px] hover:text-white text-[#7433ff] text-xs px-2 rounded-[.5rem] hover:bg-[#7433FF] w-full sm:w-auto' type="submit">
                                Save as draft
                            </Button>
                        </div>
                        <div className="p-3 bg-gray-200 w-[300px] rounded-[5px]">
                            <div className="flex justify-between mb-3"><p className="font-bold">Subtotal</p><p className="font-bold">0:00</p></div>
                            <div className="flex justify-between"><div className="flex gap-2"><p>Shipping charges</p><div className="p-2 bg-white w-10 rounded-[5px]"></div></div><p>0.00</p></div>
                            <div className="horizontalLine flex justify-center">
                                <div className="border-t-[1px] border-t-black w-full my-5"></div>
                            </div>
                            <div className="flex justify-between mb-3"><p className="font-bold">Total(NGN)</p><p className="font-bold">0:00</p></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between ">
                        {/* <FormField
                        control={form.control}
                        name="invoiceDesc"
                        render={({ field }) => (
                            <FormItem className=''>
                                <FormLabel>Invoice <br/> Description</FormLabel>
                                    <FormControl>
                                        <Textarea className=" h-8 rounded-[0.3rem]" placeholder="Give your invoice a description" {...field} />
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        /> */}
                        {/* <FormField
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
                        /> */}
                    </div>
                    {/* <FormField
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
                    /> */}
                    {/* <div className="flex items-center gap-4 w-full justify-end">
                        <Button onClick={()=>dispatch(changeState())} className='rounded-[0.3rem]' variant={"outline"} type="button">Cancel</Button>
                        <Button className="rounded-[0.3rem] bg-violet-600"  type="submit">Save</Button>
                    </div> */}
                </form>
            </Form>
        </div>
    )
}

export default ClientForm;