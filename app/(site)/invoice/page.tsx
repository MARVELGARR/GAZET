'use client'
import React, { useState } from 'react';
import Header from '@/components/invoiceComponents/Header';
import Search from '@/components/invoiceComponents/SearchBar';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal } from 'lucide-react';
import InvoiceForm from '@/components/invoiceComponents/InvoiceForm';




const Invoice = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
        // document.body.style.overflowY = "hidden";
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        // document.body.style.overflowY = "scroll";
    };

    const data = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV002",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV003",
            paymentStatus: "Unpaid",
            totalAmount: "$350.00",
            paymentMethod: "Bank Transfer",
        },
        {
            invoice: "INV004",
            paymentStatus: "Paid",
            totalAmount: "$450.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV005",
            paymentStatus: "Paid",
            totalAmount: "$550.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV006",
            paymentStatus: "Pending",
            totalAmount: "$200.00",
            paymentMethod: "Bank Transfer",
        },
        {
            invoice: "INV007",
            paymentStatus: "Unpaid",
            totalAmount: "$300.00",
            paymentMethod: "Credit Card",
        },
    ];


    const handleSearch = (event: string) => {
    };

    return (
        <div className="w-full bg-[#E6EAEE] absolute right-0 top-0 z-10 px-4 sm:px-10">
            <Header label='Add new' onClick={openPopup} />
            <Search
                onSearch={handleSearch}
                searchPlaceholder="Search products..."
            />
            <div className='container'>
                <Table className='h-screen'>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='hidden'><Checkbox /></TableHead>
                            <TableHead className='pointer-cursor'><Button>All Invoice(0)</Button></TableHead>
                            <TableHead className='pointer-cursor'><Button>Paid Invoice(0)</Button></TableHead>
                            <TableHead className='pointer-cursor'><Button>Update Invoice(0)</Button></TableHead>
                            <TableHead className='pointer-cursor text-right'><Button>Pending Invoice(0)</Button></TableHead>
                            <TableHead className='pointer-cursor'><Button>Overdue Invoice(0)</Button></TableHead>
                            <TableHead className='pointer-cursor'><Button>Overdue Invoice(0)</Button></TableHead>
                        </TableRow>
                        <TableRow>
                            <TableHead><Checkbox /></TableHead>
                            <TableHead>DATE</TableHead>
                            <TableHead>CLIENT NAME</TableHead>
                            <TableHead>INVOICE NUMBER</TableHead>
                            <TableHead className="text-right">DUE DATE</TableHead>
                            <TableHead>AMOUNT</TableHead>
                            <TableHead>DESCRIPTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className='bg-gray-300'>
                        {data.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell><Checkbox /></TableCell>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right">{invoice.paymentStatus}</TableCell>
                                <TableCell >{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-left">
                                    {invoice.totalAmount}
                                </TableCell>
                                <TableCell><MoreHorizontal size={20} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div>
                <div>
                </div>
                {isPopupOpen && (
                    <div className='w-full h-screen p-10 bg-white bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center absolute z-20 top-0 left-0'>
                        <InvoiceForm onClose={closePopup} />
                    </div>)}
            </div>
        </div>
    );
}

export default Invoice;