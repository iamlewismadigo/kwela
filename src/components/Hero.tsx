import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  const scrollToLearnMore = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FF9500] via-[#FFA500] to-[#FFB84D]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#007C89] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#007C89] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src="/Untitled Project (2).png"
            alt="Kwela Logo"
            className="h-20 md:h-24 w-auto"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up font-heading">
          Make Your Money <br />Make Sense
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Kwela empowers Africa's young generation to save, spend, and invest smarter — all in one app.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={onJoinClick}
            className="group bg-[#FFC300] text-[#0A0A0A] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FFD700] transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Join Early Access
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
          <button
            onClick={scrollToLearnMore}
            className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border-2 border-white/30 hover:scale-105"
          >
            Learn More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20 animate-bounce">
          <div className="inline-block w-6 h-10 rounded-full border-2 border-white/40 p-1">
            <div className="w-1.5 h-2 bg-white/60 rounded-full mx-auto animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
