const Features: React.FC = () => {
    const features = [
      { title: 'AI-Generated Plans', description: 'Customized workouts and diets based on your data.' },
      { title: 'Progress Tracking', description: 'Track your fitness journey with analytics.' },
      { title: 'Expert Advice', description: 'Get tips from certified fitness trainers.' },
    ];
  
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;