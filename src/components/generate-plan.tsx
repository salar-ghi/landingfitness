import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const GeneratePlan: React.FC = () => {
  return (
    <>
      <Head>
        <title>Generate Plan - Fitness AI App</title>
        <meta name="description" content="Generate your personalized fitness plan with AI." />
      </Head>
      <Header />
      <section className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Generate Your Fitness Plan</h1>
        <p className="text-lg">Answer a few questions to get started.</p>
        {/* Add form or questionnaire here */}
      </section>
      <Footer />
    </>
  );
};

export default GeneratePlan;