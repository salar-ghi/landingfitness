const SubscriptionPlans: React.FC = () => {
    const plans = [
      { name: 'Basic', price: '$9.99/month', features: ['AI Workout Plan', 'Basic Diet Plan'] },
      { name: 'Premium', price: '$19.99/month', features: ['AI Workout Plan', 'Advanced Diet Plan', 'Progress Tracking'] },
      { name: 'Pro', price: '$29.99/month', features: ['AI Workout Plan', 'Advanced Diet Plan', 'Progress Tracking', 'Expert Advice'] },
    ];
  
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-lg mb-4">{plan.price}</p>
              <ul className="list-disc list-inside">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="bg-primary text-white px-6 py-2 rounded-full mt-4 hover:bg-secondary">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SubscriptionPlans;