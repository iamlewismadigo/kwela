import { useState } from 'react';
import { Mail, User, Globe, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function EarlyAccess() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('early_access_signups')
        .insert([formData])
        .maybeSingle();

      if (error) {
        if (error.code === '23505') {
          setErrorMessage('This email is already registered!');
        } else {
          setErrorMessage('Something went wrong. Please try again.');
        }
        setStatus('error');
      } else {
        setStatus('success');
        setFormData({ name: '', email: '', country: '' });
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection.');
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus('idle');
  };

  return (
    <section id="early-access" className="py-20 bg-gradient-to-br from-[#FF9500] via-[#FFA500] to-[#FFB84D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#007C89] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#007C89] rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Be Among the First to Experience Kwela
          </h2>
          <p className="text-xl text-white/90">
            Join our early adopters and get exclusive beta access before launch.
          </p>
        </div>

        {status === 'success' ? (
          <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-2xl text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-heading">
              Thanks for joining Kwela!
            </h3>
            <p className="text-gray-600 mb-6">
              You'll hear from us soon with exclusive updates and early access details.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-[#FF9500] font-semibold hover:underline"
            >
              Sign up another person
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-2xl animate-fade-in-up"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF9500] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF9500] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                  Country
                </label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF9500] focus:outline-none transition-colors appearance-none bg-white"
                  >
                    <option value="">Select your country</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Kenya">Kenya</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-red-700 text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-[#FF9500] to-[#FFA500] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  'Join Early Access'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
