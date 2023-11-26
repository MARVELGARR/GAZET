'use client'
import React from 'react'
import { Button } from '@/components/ui/button';
import Avatar from '@/components/invoiceComponents/Avatar';
import { Plus } from 'lucide-react';
import { AddBtnProps } from '@/interfaces/interface';


const Header = ({ label, onClick }: AddBtnProps) => {
  return (
    <div className='w-full flex flex-col sm:flex-row py-4  md:py-10 items-center justify-between'>
    <div className="mb-4 sm:mb-0">
        <Avatar />
    </div>
    <Button className='bg-[#7433FF] text-white px-2 rounded-[.5rem] hover:bg-[#7433FF] w-full sm:w-auto' onClick={onClick}>
        {label} <Plus size={20} color="#fff" className='ml-2'/>
    </Button>
</div>
  )
}

export default Header;