
import Image from "next/image";

const RecentInvoice = () => {
    return (
        <div className=" w-[20.875rem] h-[19.75rem] flex flex-col justify-center gap-3 bg-white ">
            <h1 className=' w-[19rem]  ml-5 font-bold'>Recent Invoices</h1>
            <div className=" flex flex-col items-center gap-3">

                <div className="bg-[#F1F1F1] px-2 rounded-[10px] items-center justify-between flex h-[3.75rem] w-[19.75rem]">
                    <div className="flex items-center gap-2">
                        <Image
                            src=''
                            alt='total earning'
                            width='20'
                            height='20'
                            className=''
                        />
                        <div className="flex flex-col items-center">
                            <div className="">{`name`}</div>
                            <div className="">{`status`}</div>
                        </div>
                    </div>
                    <div className="">{`NG 1,250,00`}</div>
                </div>
                <div className="bg-[#F1F1F1] px-2 rounded-[10px] items-center justify-between flex h-[3.75rem] w-[19.75rem]">
                    <div className="flex items-center gap-2">
                        <Image
                            src=''
                            alt='total earning'
                            width='20'
                            height='20'
                            className=''
                        />
                        <div className="flex flex-col items-center">
                            <div className="">{`name`}</div>
                            <div className="">{`status`}</div>
                        </div>
                    </div>
                    <div className="">60</div>
                </div>
                <div className="bg-[#F1F1F1] px-2 rounded-[10px] items-center justify-between flex h-[3.75rem] w-[19.75rem]">
                    <div className="flex items-center gap-2">
                        <Image
                            src=''
                            alt='total earning'
                            width='20'
                            height='20'
                            className=''
                        />
                        <div className="flex flex-col items-center">
                            <div className="">{`name`}</div>
                            <div className="">{`status`}</div>
                        </div>
                    </div>
                    <div className="">1.234 INV</div>
                </div>
            </div>
        </div>
    );
}
 
export default RecentInvoice;