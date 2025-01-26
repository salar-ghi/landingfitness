import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faRunning, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const AnimatedIcons: React.FC = () => {
  return (
    <div className="flex justify-around my-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      >
        <FontAwesomeIcon icon={faDumbbell} className="text-primary text-4xl" />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      >
        <FontAwesomeIcon icon={faRunning} className="text-secondary text-4xl" />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      >
        <FontAwesomeIcon icon={faHeartbeat} className="text-accent text-4xl" />
      </motion.div>
    </div>
  );
};

export default AnimatedIcons;