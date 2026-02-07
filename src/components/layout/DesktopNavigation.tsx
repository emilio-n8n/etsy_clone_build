import React from 'react';
import { HomeIcon, SearchIcon, PlusIcon, BellIcon, UserIcon } from '../ui/Icons';

interface DesktopNavigationProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'feed', icon: HomeIcon, label: 'Feed' },
        { id: 'discover', icon: SearchIcon, label: 'Découvrir' },
        { id: 'sell', icon: PlusIcon, label: 'Vendre' },
        { id: 'notifications', icon: BellIcon, label: 'Notifications' },
        { id: 'profile', icon: UserIcon, label: 'Profil' },
    ];

    return (
        <header className="hidden md:block sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-200">
                        <span className="font-bold tracking-tighter">N</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">NOVA</span>
                </div>

                <nav className="flex items-center gap-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${activeTab === tab.id
                                    ? 'bg-slate-100 text-slate-900 font-semibold'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                                }`}
                        >
                            <tab.icon className="w-5 h-5" />
                            <span className="text-sm">{tab.label}</span>
                        </button>
                    ))}
                </nav>

                <button className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800 active:scale-95">
                    Connexion
                </button>
            </div>
        </header>
    );
};
