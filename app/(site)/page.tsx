import OverView from "@/components/MarvelComponents/dashboard/overView";
import RecentInvoice from "@/components/MarvelComponents/dashboard/recentinvoice";


export default function Home() {

  const chartData = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    values: [10, 30, 15, 25, 20],
  };

  return (
    <main className=' h-full w-full flex gap-3 items-center'>
      <OverView/>
      <RecentInvoice/>

    </main>
  );
}
