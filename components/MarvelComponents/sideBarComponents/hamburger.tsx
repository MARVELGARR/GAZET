
'use client'
import { useAppDispatch } from '@/redux/redux-hooks/hooks';
import Image from 'next/image'
import { changeNavState } from '@/redux/features/nav/navSlice';

const Hamburger = () => {

    const  dispatch = useAppDispatch()
    
    return (
        <div className='lg:hidden' onClick={()=>dispatch(changeNavState())}>
            <Image
                src='/svg/hamburger.svg'
                alt='open'
                width='40'
                height='40'
                className='absolute right-5 top-3'
            />
        </div>
    );
}
 
export default Hamburger;