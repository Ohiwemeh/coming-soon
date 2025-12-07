// import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function App() {
  // const [email, setEmail] = useState('');
  // const [submitted, setSubmitted] = useState(false);
  // const [timeLeft, setTimeLeft] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0
  // });

  // useEffect(() => {
  //   const launchDate = new Date('2025-02-01T00:00:00').getTime();
    
  //   const timer = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = launchDate - now;
      
  //     setTimeLeft({
  //       days: Math.floor(distance / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  //       minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  //       seconds: Math.floor((distance % (1000 * 60)) / 1000)
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // // const handleSubmit = () => {
  // //   if (email) {
  //     setSubmitted(true);
  //     setTimeout(() => {
  //       setSubmitted(false);
  //       setEmail('');
  //     }, 3000);
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse -bottom-48 -right-48 animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center space-y-8">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-2 text-white mb-8">
            <Sparkles className="w-10 h-10 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              TopeAdebanjo
            </h1>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
              Something Amazing is Coming
            </h2>
            <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto">
              We're crafting an extraordinary experience just for you. Stay tuned for the launch!
            </p>
          </div>

          {/* Countdown Timer */}
          {/* <div className="flex justify-center gap-4 md:gap-8 my-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-5xl font-bold text-white mb-1">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-blue-200 uppercase tracking-wider">
                  {unit}
                </div>
              </div>
            ))}
          </div> */}

          {/* Email signup */}
          {/* <div className="max-w-md mx-auto">
            {!submitted ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Notify Me
                </button>
              </div>
            ) : (
              <div className="bg-green-500/20 backdrop-blur-md border border-green-500/50 rounded-xl p-4 text-green-200 animate-fade-in">
                ✓ Thanks! We'll notify you when we launch.
              </div>
            )}
          </div> */}

          {/* Additional info */}
          {/* <div className="flex items-center justify-center gap-2 text-blue-200 mt-8">
            <Clock className="w-5 h-5" />
            <p className="text-sm">Launching February 2025</p>
          </div> */}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}