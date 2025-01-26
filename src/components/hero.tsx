'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center text-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">Transform Your Fitness Journey with AI</h1>
        <p className="text-xl mb-8">
          Get personalized workout and diet plans tailored to your goals.
        </p>
        <ScrollLink
          to="generate-plan"
          smooth={true}
          duration={500}
          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary cursor-pointer"
        >
          Start Now
        </ScrollLink>
      </div>
    </motion.section>
  );
};

export default Hero;