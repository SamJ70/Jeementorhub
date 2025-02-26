import React, { useState, useEffect } from 'react';
import { MentorshipSelector } from './components/MentorshipSelector';
import { PlanCard } from './components/PlanCard';
import { CurlDivider } from './components/CurlDivider';
import { AuthModal } from './components/AuthModal';
import { PaymentModal } from './components/PaymentModal';
import { Navbar } from './components/Navbar';
import { mentorshipPlans, counselingPlan } from './data/plans';
import { MentorshipType, Plan } from './types';
import { GraduationCap, Users, BookOpen, Target, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [selectedType, setSelectedType] = useState<MentorshipType | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handlePlanSelect = (plan: Plan) => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    setSelectedPlan(plan);
    setIsPaymentModalOpen(true);
  };

  const handleScroll = (type: MentorshipType) => {
    setSelectedType(type);
    const plansSection = document.getElementById('plans-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onOpenAuth={() => setIsAuthModalOpen(true)} />
      
      {/* Header with Pattern Background */}
      <header className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 bg-repeat" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        {/* Logo and Content */}
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center mb-10">
            <img 
              src="src/logo.png" 
              alt="JEE Mentor Hub Logo" 
              className="h-32 mb-6 rounded-full"
            />
            <h1 className="text-4xl font-bold text-center mb-4">JEE Mentor Hub</h1>
            <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Get personalized mentorship from current IIT Roorkee students who've been through the same journey
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button 
                onClick={() => handleScroll('ongoing')}
                className="px-8 py-4 bg-black text-white rounded-lg font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center"
              >
                Start Your Mentorship 
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a 
                href="https://chat.whatsapp.com/IixEOyYFcHrKolsNhQl7Rk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-black text-black rounded-lg font-bold text-lg transition-all hover:bg-black hover:text-white flex items-center justify-center"
              >
                Join WhatsApp Group
              </a>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="flex justify-between mb-2 text-sm font-medium">
              <span>Register</span>
              <span>Select Plan</span>
              <span>Get Mentored</span>
              <span>Succeed</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-black rounded-full w-1/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      <CurlDivider />

      {/* Key Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Our Mentorship?</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-6 transform transition-transform hover:scale-105 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-black mr-3" />
                <h3 className="text-xl font-bold">Direct IIT Roorkee Mentorship</h3>
              </div>
              <p className="text-gray-600">
                Get guidance directly from current IIT Roorkee students who've cracked JEE with top ranks. Benefit from their recent experience and proven strategies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-6 transform transition-transform hover:scale-105 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-black mr-3" />
                <h3 className="text-xl font-bold">Personalized Guidance</h3>
              </div>
              <p className="text-gray-600">
                Receive unbiased, personalized advice tailored to your strengths and areas of improvement. We focus on your individual growth and success.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-6 transform transition-transform hover:scale-105 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-black mr-3" />
                <h3 className="text-xl font-bold">Comprehensive Resources</h3>
              </div>
              <p className="text-gray-600">
                Access curated study materials, detailed revision notes, and regular test series. GOLD and PLATINUM members get exclusive advanced resources.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl p-6 transform transition-transform hover:scale-105 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-black mr-3" />
                <h3 className="text-xl font-bold">Regular Live Sessions</h3>
              </div>
              <p className="text-gray-600">
                Participate in scheduled live sessions for doubt clearing and concept discussions. Get real-time solutions to your queries.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-xl p-6 transform transition-transform hover:scale-105 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-black mr-3" />
                <h3 className="text-xl font-bold">Progress Tracking</h3>
              </div>
              <p className="text-gray-600">
                Stay motivated with regular progress tracking and performance analysis. Get detailed insights into your preparation journey.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-xl p-6 transform transition-transform hover:scale-105 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-black mr-3" />
                <h3 className="text-xl font-bold">Immediate Onboarding</h3>
              </div>
              <p className="text-gray-600">
                Start your preparation journey instantly with clear next steps and a structured study plan. No time wasted in getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurlDivider />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16 relative">
        {/* Background Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <img 
            src="/logo.png" 
            alt="Background Logo" 
            className="w-[80%] max-w-3xl"
          />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            Which mentorship do you need?
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <button
              onClick={() => handleScroll('counseling')}
              className="group bg-white border-2 border-black rounded-lg p-8 text-center transition-all hover:bg-black hover:text-white shadow-md"
            >
              <GraduationCap className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">College Counseling & Selection</h3>
              <p className="text-gray-600 group-hover:text-gray-300">
                Get expert guidance on college and branch selection based on your JEE rank
              </p>
            </button>
            
            <button
              onClick={() => handleScroll('ongoing')}
              className="group bg-white border-2 border-black rounded-lg p-8 text-center transition-all hover:bg-black hover:text-white shadow-md"
            >
              <GraduationCap className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Complete JEE Preparation Journey</h3>
              <p className="text-gray-600 group-hover:text-gray-300">
                Get comprehensive mentorship throughout your JEE preparation with personalized guidance
              </p>
            </button>
          </div>

          {/* Plans Section */}
          <div id="plans-section" className="mt-32">
            {selectedType && (
              <>
                <h2 className="text-3xl font-bold text-center mb-4">
                  {selectedType === 'counseling' ? 'College Counseling Plan' : 'Choose Your Mentorship Plan'}
                </h2>
                <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {selectedType === 'counseling' ? (
                    <div className="md:col-start-2">
                      <PlanCard plan={counselingPlan} onSelect={() => handlePlanSelect(counselingPlan)} />
                    </div>
                  ) : (
                    mentorshipPlans.map((plan) => (
                      <PlanCard key={plan.name} plan={plan} onSelect={() => handlePlanSelect(plan)} />
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <CurlDivider />

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <img 
              src="/logo.png" 
              alt="JEE Mentor Hub Logo" 
              className="h-16"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About the Mentor</h3>
              <p className="text-gray-600">
                Samyak Jain<br />
                IIT Roorkee<br />
                Experienced JEE Mentor
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-600">
                Phone: 8449044750<br />
                Available: Mon-Sat, 2 PM - 10 PM
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <button onClick={() => handleScroll('counseling')} className="hover:underline">
                    College Counseling
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScroll('ongoing')} className="hover:underline">
                    Ongoing Mentorship
                  </button>
                </li>
                <li>
                  <a 
                    href="https://chat.whatsapp.com/IixEOyYFcHrKolsNhQl7Rk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Join WhatsApp Group
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© 2024 JEE Mentor Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      {selectedPlan && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          plan={selectedPlan}
        />
      )}
    </div>
  );
}

export default App;