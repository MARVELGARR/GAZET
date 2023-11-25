'use client'
import React from 'react';
import { Input } from '@/components/ui/input';
import { Filter, Search } from 'lucide-react';
import { SearchFilterInputProps } from '@/interfaces/interface';


const SearchBar:React.FC<SearchFilterInputProps> = ({ onSearch, searchPlaceholder }) => {
    return (
        <div>
            <div className='rounded-full flex items-center justify-center shadow-xl mb-10 bg-white'>
                <Search size={20} className='text-gray-400 ml-5 md:ml-0' />
                <Input type='text'
                 className={`border-transparent w-[90%]`}
                 placeholder={`${searchPlaceholder || 'Search...'}`}
                 onChange={onSearch}
                 />
                <Filter size={20} className='text-gray-400 mr-5 md:mr-0' />
            </div>
        </div>
    )
}

export default SearchBar;