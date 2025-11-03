import { Target, Eye, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6 font-heading">
            About Kwela
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Built by young Africans for young Africans. We're on a mission to transform how Africa's youth manages money.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
            <div className="w-14 h-14 bg-gradient-to-br from-[#007C89] to-[#00A3A3] rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-heading">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed">
              A team of passionate young innovators from across Africa, building financial tools that truly understand our generation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-[#FFC300] to-[#FFD700] rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-[#0A0A0A]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-heading">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Financial empowerment through technology. Making smart money management accessible to every young African.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-[#007C89] to-[#FFC300] rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-heading">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Simplify financial management using AI and behavioral insights, helping you build wealth one smart decision at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
