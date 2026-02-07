import React, { useState } from 'react';

export const Profile: React.FC = () => {
    const [activeTab, setActiveTab] = useState('creations');

    const user = {
        name: "Emilio Moreau",
        username: "emilio_m",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emilio",
        bio: "Artisan passionné par le bois et les formes organiques. Je crée des objets durables pour votre quotidien. 🌲✨",
        followers: 1240,
        following: 450,
    };

    const creations = [
        { id: '1', image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800' },
        { id: '2', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800' },
        { id: '3', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800' },
    ];

    return (
        <div className="max-w-4xl mx-auto py-6 px-4 pb-24 md:pb-6">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200 overflow-hidden mb-8">
                <div className="h-32 bg-gradient-to-r from-slate-200 to-slate-100" />
                <div className="px-8 pb-8">
                    <div className="relative flex justify-between items-end -translate-y-12">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-24 h-24 rounded-[32px] border-4 border-white bg-slate-50 object-cover shadow-md"
                        />
                        <button className="rounded-full border border-slate-200 px-6 py-2 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-all active:scale-95 translate-y-8">
                            Modifier le profil
                        </button>
                    </div>

                    <div className="mt-[-2rem]">
                        <h1 className="text-2xl font-bold text-slate-900">{user.name}</h1>
                        <p className="text-sm text-slate-500">@{user.username}</p>

                        <p className="mt-4 text-sm text-slate-700 leading-relaxed max-w-lg">
                            {user.bio}
                        </p>

                        <div className="flex gap-6 mt-6">
                            <div className="text-center md:text-left">
                                <p className="text-lg font-bold text-slate-900">{user.followers}</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Abonnés</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-lg font-bold text-slate-900">{user.following}</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Abonnements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex border-b border-slate-100 mb-6">
                {['creations', 'posts', 'favoris'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${activeTab === tab
                                ? 'border-slate-900 text-slate-900'
                                : 'border-transparent text-slate-400'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {creations.map(c => (
                    <div key={c.id} className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 group cursor-pointer">
                        <img
                            src={c.image}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
