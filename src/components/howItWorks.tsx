const HowItWorks: React.FC = () => {
    const steps = [
      {
        title: 'Step 1: Sign Up',
        description: 'Create an account in just a few seconds.',
        icon: '📝',
      },
      {
        title: 'Step 2: Answer Questions',
        description: 'Tell us about your fitness goals and preferences.',
        icon: '💬',
      },
      {
        title: 'Step 3: Get Your Plan',
        description: 'Receive a personalized fitness and diet plan instantly.',
        icon: '📋',
      },
    ];
  
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HowItWorks;