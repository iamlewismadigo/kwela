import { Brain, Target, TrendingUp, CreditCard } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: CreditCard,
      title: 'Zero Ecosystem Transaction Fees',
      description: 'Send and receive money within Kwela with zero fees. Keep more of what you earn.',
      gradient: 'from-[#FF9500] to-[#FFA500]',
    },
    {
      icon: Target,
      title: 'Goals & Savings with VCC',
      description: 'Set personalized saving plans and get a virtual card for secure global payments. Shop anywhere, anytime.',
      gradient: 'from-[#FF9500] to-[#FFB84D]',
    },
    {
      icon: Brain,
      title: 'Kwela AI as Your Financial Partner',
      description: 'Personalized financial guidance powered by AI. Get smart recommendations tailored to your goals and habits.',
      gradient: 'from-[#FF9500] to-[#FFC300]',
    },
    {
      icon: TrendingUp,
      title: 'Minimal Cross-Ecosystem Fees',
      description: 'Seamless transactions across networks with minimal fees. Move your money freely and affordably.',
      gradient: 'from-[#FF9500] to-[#FF8C00]',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6 font-heading">
            Powerful Features for Your Financial Journey
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to take control of your money and build the future you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-4 font-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
