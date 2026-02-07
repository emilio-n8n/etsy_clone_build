import { useState, useEffect } from 'react';
import { DesktopNavigation } from './components/layout/DesktopNavigation';
import { BottomNavigation } from './components/layout/BottomNavigation';
import { CommunityFeed } from './components/CommunityFeed';
import { Marketplace } from './components/Marketplace';
import { ProductForm } from './components/ProductForm';
import { Profile } from './components/Profile';
import { LandingPage } from './components/LandingPage';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isAuthenticated) {
    return <LandingPage onEnter={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return <CommunityFeed />;
      case 'discover':
        return <Marketplace />;
      case 'sell':
        return <ProductForm />;
      case 'notifications':
        return (
          <div className="max-w-2xl mx-auto py-12 px-4 text-center">
            <h2 className="text-xl font-bold text-slate-900">Pas encore de notifications</h2>
            <p className="text-sm text-slate-500 mt-2">Nous vous préviendrons dès qu'il y aura du nouveau !</p>
          </div>
        );
      case 'profile':
        return <Profile />;
      default:
        return <CommunityFeed />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Desktop Layout Header */}
      <DesktopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Mobile Header (Sticky) */}
      <header className={`md:hidden sticky top-0 z-40 px-6 py-4 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'bg-transparent'
        }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs tracking-tighter">N</span>
            </div>
            <span className="text-lg font-bold tracking-tight">NOVA</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-slate-900 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-80px)]">
        {renderContent()}
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Footer for Desktop */}
      <footer className="hidden md:block py-12 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight">NOVA</span>
            <span className="text-xs text-slate-400">© 2026 Plateforme Artisanale</span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">CGU</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
