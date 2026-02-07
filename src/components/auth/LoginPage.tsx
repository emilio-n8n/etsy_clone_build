import React from "react";
import { supabase } from "../../lib/supabase";

interface LoginPageProps {
    onLogin: () => void;
    onBack: () => void;
    onSwitchToSignup: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBack, onSwitchToSignup }) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            await supabase.auth.signIn(email, password);
            onLogin();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] flex flex-col justify-center py-12 px-6 lg:px-8 animate-in">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div
                    onClick={onBack}
                    className="mx-auto h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200 cursor-pointer hover:scale-105 transition-transform"
                >
                    <span className="text-white font-bold text-xl tracking-tighter">N</span>
                </div>
                <h2 className="mt-8 text-center text-3xl font-bold tracking-tight text-slate-900">
                    Bon retour sur NOVA
                </h2>
                <p className="mt-2 text-center text-sm text-slate-500">
                    Ou{" "}
                    <button
                        onClick={onSwitchToSignup}
                        className="font-bold text-slate-900 hover:text-slate-700 transition-colors"
                    >
                        créez votre compte gratuitement
                    </button>
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-10 px-8 shadow-2xl shadow-slate-200 border border-slate-100 rounded-[32px]">
                    {error && (
                        <div className="mb-6 p-4 rounded-2xl bg-red-50 text-red-600 text-sm font-medium border border-red-100">
                            {error}
                        </div>
                    )}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                                Adresse e-mail
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-slate-900/10 outline-none transition-all"
                                    placeholder="nom@exemple.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                                Mot de passe
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-slate-900/10 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-slate-900 focus:ring-slate-900 border-slate-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-500">
                                    Se souvenir de moi
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-semibold text-slate-900 hover:text-slate-700">
                                    Oublié ?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-xl shadow-slate-100 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Connexion..." : "Se connecter"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-100" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-slate-400 font-medium">Ou continuer avec</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <button className="flex w-full items-center justify-center gap-3 bg-white border border-slate-100 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all active:scale-95">
                                <svg className="h-5 w-5" viewBox="0 0 24 24">
                                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.288 1.288-3.312 2.696-7.112 2.696-6.128 0-10.84-4.96-10.84-11.088s4.712-11.088 10.84-11.088c3.312 0 5.696 1.304 7.456 2.976l2.304-2.304c-2.072-1.928-4.832-3.416-9.76-3.416-8.76 0-16 7.24-16 16s7.24 16 16 16c4.76 0 8.352-1.568 11.232-4.52 2.976-2.976 3.872-7.112 3.872-10.592 0-1.016-.08-2.016-.24-2.976H12.48z" fill="currentColor" />
                                </svg>
                                Google
                            </button>
                            <button className="flex w-full items-center justify-center gap-3 bg-white border border-slate-100 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all active:scale-95">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.32 1.08 2.89.83.09-1.05.52-1.75 1-2.15-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.64.71 1.03 1.61 1.03 2.71 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
                                </svg>
                                Github
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    onClick={onBack}
                    className="mt-8 w-full text-center text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors"
                >
                    ← Retour à l'accueil
                </button>
            </div>
        </div>
    );
};
