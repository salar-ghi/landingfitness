'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Features: React.FC = () => {
  const features = [
    {
      title: 'AI-Generated Plans',
      description: 'Customized workouts and diets based on your data.',
      image: '/images/exercise-1.jpg',
    },
    {
      title: 'Progress Tracking',
      description: 'Track your fitness journey with analytics.',
      image: '/images/exercise-2.jpg',
    },
    {
      title: 'Expert Advice',
      description: 'Get tips from certified fitness trainers.',
      image: '/images/exercise-1.jpg',
    },
  ];
  
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-lg text-center"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
        </div>
      </section>
    );
  };
  
  export default Features;