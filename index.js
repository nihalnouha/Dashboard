import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

import dynamic from 'next/dynamic';

const AreaChart = dynamic(() => import('../components/AreaChart'), { ssr: false });
const LinearBarChart = dynamic(() => import('../components/HorizontalBarchart'), { ssr: false });
const DonutChart = dynamic(() => import('../components/DonutChart'), { ssr: false });
const BarChart = dynamic(() => import('../components/StackedBarChart'), { ssr: false });
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <div className='p-4 grid md:grid-cols-4 grid-cols-1 gap-4'>
          {/* <BarChart /> */}
          <AreaChart />
          <DonutChart/>
          <LinearBarChart />
          <BarChart />
        </div>
      </main>
    </>
  );
}
