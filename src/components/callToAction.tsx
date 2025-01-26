'use client'
import { motion } from 'framer-motion';


const CallToAction: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-primary text-white py-12 text-center"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Fitness Journey?</h2>
        <p className="text-lg mb-8">Start your personalized AI-generated fitness plan today.</p>
        <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-accent">
          Get Started Now
        </button>
      </div>
    </motion.section>
  );
};

export default CallToAction;