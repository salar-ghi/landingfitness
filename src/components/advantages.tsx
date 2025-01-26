const Advantages: React.FC = () => {
    const advantages = [
      {
        title: 'Personalized Plans',
        description: 'Get workout and diet plans tailored to your fitness level and goals.',
      },
      {
        title: 'Time-Saving',
        description: 'No more guesswork. AI generates plans instantly based on your inputs.',
      },
      {
        title: 'Data-Driven Insights',
        description: 'Track progress and get recommendations based on real-time data.',
      },
      {
        title: 'Expert Guidance',
        description: 'Access advice from certified trainers and nutritionists.',
      },
    ];
  
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Advantages of AI-Generated Fitness Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Advantages;