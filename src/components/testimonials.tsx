'use client'
import Image from 'next/image'; // Add this import

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'This app changed my life! I lost 20 pounds in 3 months.',
      image: '/images/user-1.jpg', // Ensure this path is correct
    },
    {
      name: 'Jane Smith',
      feedback: 'The AI-generated plans are so easy to follow. Highly recommend!',
      image: '/images/user-2.jpg', // Ensure this path is correct
    },
  ];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="relative h-32 w-32 mx-auto mb-4">
              <Image
                src={testimonial.image} // Path to the image
                alt={testimonial.name} // Alt text for accessibility
                layout="fill" // Fill the container
                objectFit="cover" // Cover the container
                className="rounded-full" // Round the image
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;