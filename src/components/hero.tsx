import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-green-50 py-20 text-center"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Transform Your Fitness Journey with AI</h1>
        <p className="text-lg mb-8">
          Get personalized workout and diet plans tailored to your goals.
        </p>
        <Link href="/generate-plan">
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary">
            Start Now
          </button>
        </Link>
      </div>
    </motion.section>
  );
};

export default Hero;