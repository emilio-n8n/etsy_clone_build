import React from "react";

interface LandingPageProps {
    onLogin: () => void;
    onSignup: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onSignup }) => {
    return (
        <div className="min-h-screen bg-[#FDFCFB] selection:bg-slate-900 selection:text-white overflow-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200">
                            <span className="text-white font-bold text-lg tracking-tighter">
                                N
                            </span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-slate-900">
                            NOVA
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#vision"
                            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            Vision
                        </a>
                        <a
                            href="#artisans"
                            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            Artisans
                        </a>
                        <a
                            href="#communaute"
                            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            Communauté
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onLogin}
                            className="hidden sm:block text-sm font-bold text-slate-900 px-6 py-2.5 hover:text-slate-700 transition-all active:scale-95"
                        >
                            Se connecter
                        </button>
                        <button
                            onClick={onSignup}
                            className="bg-slate-900 text-white text-sm font-bold px-8 py-3 rounded-full shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all hover:-translate-y-0.5 active:scale-95"
                        >
                            S'inscrire
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32">
                {/* Background Decors */}
                <div className="absolute top-0 right-0 -translate-y-24 translate-x-24 w-[600px] h-[600px] bg-slate-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-50" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 backdrop-blur-sm border border-slate-200 mb-8 animate-in">
                        <span className="flex h-2 w-2 rounded-full bg-slate-900 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                            L'artisanat Nouvelle Génération
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8 animate-in delay-100">
                        Créez. Partagez. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                            Vivez de votre passion.
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed mb-12 animate-in delay-200">
                        La plateforme européenne de référence pour les créations artisanales uniques.
                        Publiez vos œuvres en moins d'une minute et rejoignez une communauté passionnée.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in delay-300">
                        <button
                            onClick={onSignup}
                            className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-3xl text-lg font-bold shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95 group"
                        >
                            Commencer l'aventure
                            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
                                →
                            </span>
                        </button>
                        <button
                            onClick={onSignup}
                            className="w-full sm:w-auto bg-white/50 backdrop-blur-md border border-slate-200 px-10 py-5 rounded-3xl text-lg font-bold text-slate-900 hover:bg-white transition-all active:scale-95"
                        >
                            Découvrir les créations
                        </button>
                    </div>

                    {/* Visual Showcase */}
                    <div className="mt-24 relative max-w-5xl mx-auto animate-in delay-500">
                        <div className="aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 border border-white">
                            <img
                                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=2000"
                                alt="NOVA Showcase"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute -bottom-10 -left-10 hidden md:block w-64 p-6 bg-white rounded-[32px] shadow-2xl border border-slate-50">
                            <div className="flex items-center gap-3 mb-4">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marc" className="w-10 h-10 rounded-full bg-slate-100" />
                                <div>
                                    <p className="text-sm font-bold">Marc Touffet</p>
                                    <p className="text-[10px] text-slate-400">@marcrt</p>
                                </div>
                            </div>
                            <p className="text-xs text-slate-600 italic">"Gérer mes ventes n'a jamais été aussi simple."</p>
                        </div>

                        <div className="absolute -top-10 -right-10 hidden md:block w-48 p-4 bg-slate-900 text-white rounded-[32px] shadow-2l">
                            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Impact</p>
                            <p className="text-2xl font-bold">+2.4k</p>
                            <p className="text-[10px] text-slate-400">Créateurs inscrits</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section id="vision" className="py-24 px-6 bg-slate-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Simplicité Absolue",
                                desc: "Publiez vos créations en moins d'une minute. Concentrez-vous sur votre art.",
                                icon: "✨"
                            },
                            {
                                title: "Communauté Vivante",
                                desc: "Partagez vos étapes de création et échangez avec votre public.",
                                icon: "🤝"
                            },
                            {
                                title: "Valorisation Unique",
                                desc: "L'IA auto-valorise vos produits pour maximiser votre visibilité.",
                                icon: "💎"
                            }
                        ].map((f, i) => (
                            <div key={i} className="space-y-4">
                                <div className="text-4xl">{f.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs tracking-tighter">N</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">NOVA</span>
                    </div>
                    <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-slate-400">
                        <a href="#" className="hover:text-slate-900 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">TikTok</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
                    </div>
                    <p className="text-sm text-slate-400 font-medium">© 2026 NOVA. Made for creators.</p>
                </div>
            </footer>
        </div>
    );
};
