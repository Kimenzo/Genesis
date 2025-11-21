
import React from 'react';
import { 
  LayoutDashboard, 
  PenTool, 
  BookOpen, 
  Image as ImageIcon, 
  Layout, 
  Share, 
  Settings,
  User
} from 'lucide-react';
import { AppMode } from '../types';

interface NavigationProps {
  currentMode: AppMode;
  setMode: (mode: AppMode) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentMode, setMode }) => {
  const menuItems = [
    { mode: AppMode.DASHBOARD, icon: LayoutDashboard, label: 'Home' },
    { mode: AppMode.CREATION, icon: PenTool, label: 'Create' },
    { mode: AppMode.EDITOR, icon: BookOpen, label: 'Editor' },
    { mode: AppMode.VISUAL_STUDIO, icon: ImageIcon, label: 'Visual Studio' },
    // { mode: AppMode.LAYOUT_LAB, icon: Layout, label: 'Layout' }, // Kept hidden for now
    { mode: AppMode.EXPORT, icon: Share, label: 'Export' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] z-50 px-6 md:px-12 flex items-center justify-between transition-all duration-300
      bg-cream-base/80 backdrop-blur-md border-b border-peach-soft shadow-soft-sm">
      
      {/* Logo */}
      <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setMode(AppMode.DASHBOARD)}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-sunshine to-coral-burst flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
          <span className="text-white font-heading font-bold text-xl">G</span>
        </div>
        <span className="font-heading font-bold text-2xl text-charcoal-soft tracking-tight">
          Genesis
        </span>
      </div>

      {/* Center Nav Items */}
      <div className="hidden md:flex items-center gap-2 bg-white/50 p-1.5 rounded-full border border-peach-soft/50 backdrop-blur-sm">
        {menuItems.map((item) => (
          <button
            key={item.mode}
            onClick={() => setMode(item.mode)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-medium transition-all duration-300
              ${currentMode === item.mode 
                ? 'bg-gradient-to-r from-gold-sunshine to-coral-burst text-white shadow-md transform scale-105' 
                : 'text-cocoa-light hover:text-coral-burst hover:bg-cream-soft'
              }`}
          >
            <item.icon className={`w-4 h-4 ${currentMode === item.mode ? 'text-white' : ''}`} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button 
            onClick={() => setMode(AppMode.SETTINGS)}
            className={`p-3 rounded-full transition-colors ${currentMode === AppMode.SETTINGS ? 'bg-cream-soft text-coral-burst shadow-inner' : 'text-cocoa-light hover:bg-cream-soft hover:text-coral-burst'}`}
        >
          <Settings className="w-6 h-6" />
        </button>
        <button 
            onClick={() => setMode(AppMode.SETTINGS)}
            className="flex items-center gap-2 pl-2 pr-4 py-2 rounded-full bg-white border border-peach-soft hover:border-coral-burst/30 transition-colors shadow-soft-sm group"
        >
          <div className="w-8 h-8 rounded-full bg-cream-base flex items-center justify-center text-coral-burst group-hover:scale-110 transition-transform">
            <User className="w-5 h-5" />
          </div>
          <span className="font-heading font-medium text-charcoal-soft text-sm hidden sm:block">Creator</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
