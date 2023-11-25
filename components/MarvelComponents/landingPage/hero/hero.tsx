import Image from "next/image";


const Hero = () => {
    return (
        <section className=''>
            <p className="">No. 1 stop to financial care</p>
            <article className=''>

                <h1 className="font-bold"><span className=' text-violet-600'>Invest</span> now.</h1>
                <h1 className="font-bold">Leave it to <span className=' text-violet-600'>Gazet</span>.</h1>
            </article>
            <Image
                src='/svg/learnmore.svg'
                width='40'
                height='40'
                alt='learn more'
                className=''
            />
        </section>
    );
}
 
export default Hero;