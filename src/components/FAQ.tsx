import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 px-6 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-[#0A0A0A] pr-8">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-[#007C89] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is Kwela free to join?',
      answer:
        'Yes! Kwela is completely free to join during our early access phase. We want to make financial management accessible to every young African. Some premium features may be introduced later, but core money management tools will always remain free.',
    },
    {
      question: 'When does the app launch?',
      answer:
        'We\'re currently in development and planning to launch our beta version in Q2 2025. Early access members will be the first to try the app and help shape its features. Sign up now to be notified when we go live!',
    },
    {
      question: 'How can I invest through Kwela?',
      answer:
        'Kwela will provide easy access to investment opportunities tailored for young Africans, including savings plans, micro-investments, and partnerships with trusted financial institutions. Investment features will roll out after launch with full guidance and educational resources.',
    },
    {
      question: 'Is my financial data secure?',
      answer:
        'Absolutely. We use bank-level encryption and security measures to protect your data. Your privacy is our priority, and we never share your personal information with third parties without your consent.',
    },
    {
      question: 'Which countries will Kwela be available in?',
      answer:
        'We\'re starting with Nigeria, Kenya, Ghana, and South Africa, with plans to expand across Africa within the first year. Sign up for early access to be notified when we launch in your country.',
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
