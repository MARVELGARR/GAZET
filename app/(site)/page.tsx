import OverView from "@/components/MarvelComponents/dashboard/overView";
import RecentInvoice from "@/components/MarvelComponents/dashboard/recentinvoice";


export default function Home() {


  return (
    <main className=' h-full w-full flex gap-3 items-center'>
      <OverView/>
      <RecentInvoice/>

    </main>
  );
}
