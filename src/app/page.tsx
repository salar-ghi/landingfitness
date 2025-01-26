import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
//     </div>
//   );
// }
import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import Features from '../components/features';
import Advantages from '../components/advantages';
import CallToAction from '../components/callToAction';
import Footer from '../components/footer';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Fitness AI App - AI-Generated Fitness Plans</title>
        <meta name="description" content="Transform your fitness journey with AI-generated workout and diet plans." />
      </Head>
      <Header />
      <Hero />
      <Features />
      <Advantages />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;