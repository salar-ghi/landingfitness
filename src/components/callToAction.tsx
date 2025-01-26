import Link from 'next/link';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-primary text-white py-12 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Fitness Journey?</h2>
        <p className="text-lg mb-8">Start your personalized AI-generated fitness plan today.</p>
        <Link href="/generate-plan">
          <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-accent">
            Get Started Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;