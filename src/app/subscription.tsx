import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

const AboutUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Fitness AI App</title>
        <meta name="description" content="Learn more about our mission and team." />
      </Head>
      <Header />
      <section className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          At Fitness AI App, we are dedicated to helping you achieve your fitness goals with the power of artificial intelligence.
        </p>
        <p className="text-lg">
          Our mission is to make fitness accessible, personalized, and effective for everyone. Whether you're a beginner or an
          experienced athlete, our AI-generated plans will guide you every step of the way.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;