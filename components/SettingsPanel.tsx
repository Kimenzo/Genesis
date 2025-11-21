
import React from 'react';
import { 
  Settings, 
  User, 
  CreditCard, 
  Bell, 
  Shield, 
  LogOut,
  Cpu
} from 'lucide-react';

const SettingsPanel: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 pb-24 animate-fadeIn">
        
        <div className="mb-10">
            <h1 className="font-heading font-bold text-4xl text-charcoal-soft mb-2">Settings</h1>
            <p className="text-cocoa-light font-body">Manage your profile, preferences, and system configuration.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
            
            {/* Sidebar Menu */}
            <div className="w-full md:w-64 space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-soft-sm text-coral-burst font-bold border border-peach-soft">
                    <User className="w-5 h-5" /> Profile
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-transparent rounded-xl text-cocoa-light hover:bg-white/50 hover:text-charcoal-soft transition-colors">
                    <Cpu className="w-5 h-5" /> AI Config
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-transparent rounded-xl text-cocoa-light hover:bg-white/50 hover:text-charcoal-soft transition-colors">
                    <Bell className="w-5 h-5" /> Notifications
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-transparent rounded-xl text-cocoa-light hover:bg-white/50 hover:text-charcoal-soft transition-colors">
                    <Shield className="w-5 h-5" /> Privacy
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white rounded-3xl shadow-soft-lg border border-white/50 p-8">
                
                {/* Profile Section */}
                <div className="space-y-8">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-sunshine to-coral-burst flex items-center justify-center shadow-lg text-white">
                             <User className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-2xl text-charcoal-soft">Creative Author</h3>
                            <p className="text-cocoa-light">Pro Plan • Member since 2023</p>
                            <button className="mt-2 text-sm font-bold text-coral-burst hover:underline">Change Avatar</button>
                        </div>
                    </div>

                    <div className="h-px bg-peach-soft/50 w-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-cocoa-light uppercase">Display Name</label>
                            <input type="text" defaultValue="Creative Author" className="w-full bg-cream-base border border-peach-soft rounded-xl p-3 text-charcoal-soft" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-cocoa-light uppercase">Email Address</label>
                            <input type="email" defaultValue="author@genesis.ai" className="w-full bg-cream-base border border-peach-soft rounded-xl p-3 text-charcoal-soft" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-cocoa-light uppercase">Bio / Author Note</label>
                        <textarea className="w-full h-24 bg-cream-base border border-peach-soft rounded-xl p-3 text-charcoal-soft resize-none" defaultValue="I love creating magical stories for children..."></textarea>
                    </div>

                    <div className="h-px bg-peach-soft/50 w-full"></div>

                    <div className="flex justify-between items-center pt-4">
                         <button className="flex items-center gap-2 text-red-400 font-bold hover:text-red-500 text-sm px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                            <LogOut className="w-4 h-4" /> Sign Out
                         </button>
                         <button className="px-8 py-3 bg-coral-burst text-white rounded-full font-heading font-bold shadow-soft-md hover:shadow-soft-lg hover:scale-105 transition-all">
                            Save Changes
                         </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SettingsPanel;
