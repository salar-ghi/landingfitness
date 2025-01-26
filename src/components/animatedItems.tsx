import { motion } from 'framer-motion';

const AnimatedItems: React.FC = () => {
  return (
    <div className="flex justify-around my-8">
      <motion.img
        src="/weights.png"
        alt="Weights"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 2 }}
        className="w-16 h-16"
      />
      <motion.img
        src="/apple.png"
        alt="Apple"
        initial={{ y: 20 }}
        animate={{ y: -20 }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 2 }}
        className="w-16 h-16"
      />
    </div>
  );
};

export default AnimatedItems;