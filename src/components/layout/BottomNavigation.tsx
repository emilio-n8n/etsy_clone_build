import React from 'react';
import { HomeIcon, SearchIcon, PlusIcon, BellIcon, UserIcon } from '../ui/Icons';

interface BottomNavigationProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'feed', icon: HomeIcon, label: 'Feed' },
        { id: 'discover', icon: SearchIcon, label: 'Découvrir' },
        { id: 'sell', icon: PlusIcon, label: 'Vendre', center: true },
        { id: 'notifications', icon: BellIcon, label: 'Alertes' },
        { id: 'profile', icon: UserIcon, label: 'Profil' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 px-6 pb-6 pt-3 md:hidden">
            <div className="flex items-center justify-between max-w-md mx-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex flex-col items-center gap-1 transition-colors ${tab.center
                                ? 'bg-slate-900 text-white p-3 rounded-2xl -translate-y-6 shadow-xl shadow-slate-200 active:scale-95'
                                : activeTab === tab.id
                                    ? 'text-slate-900'
                                    : 'text-slate-400'
                            }`}
                    >
                        <tab.icon className={tab.center ? "w-6 h-6" : "w-6 h-6"} />
                        {!tab.center && <span className="text-[10px] font-medium uppercase tracking-wider">{tab.label}</span>}
                    </button>
                ))}
            </div>
        </nav>
    );
};
