import { Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src="/Untitled Project (2).png"
              alt="Kwela Logo"
              className="h-10 w-auto"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-[#FF9500] transition-colors"
            >
              About
            </button>
            <a href="#" className="text-gray-400 hover:text-[#FF9500] transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF9500] transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF9500] transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF9500] transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF9500] transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF9500] transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>Copyright © {currentYear} Kwela Africa. All rights reserved.</p>
          <p className="mt-2">Making money make sense for Africa's youth.</p>
        </div>
      </div>
    </footer>
  );
}
