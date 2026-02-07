import React from "react";
import { supabase } from "../../lib/supabase";

interface SignupPageProps {
    onSignup: () => void;
    onBack: () => void;
    onSwitchToLogin: () => void;
}

export const SignupPage: React.FC<SignupPageProps> = ({ onSignup, onBack, onSwitchToLogin }) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const firstName = formData.get("first-name") as string;
        const lastName = formData.get("last-name") as string;

        try {
            await supabase.auth.signUp(email, password, {
                first_name: firstName,
                last_name: lastName,
                full_name: `${firstName} ${lastName}`
            });
            onSignup();
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
                    Rejoignez la communauté NOVA
                </h2>
                <p className="mt-2 text-center text-sm text-slate-500">
                    Ou{" "}
                    <button
                        onClick={onSwitchToLogin}
                        className="font-bold text-slate-900 hover:text-slate-700 transition-colors"
                    >
                        connectez-vous à votre compte
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
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold text-slate-700">
                                    Prénom
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        required
                                        className="block w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-slate-900/10 outline-none transition-all"
                                        placeholder="Jean"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold text-slate-700">
                                    Nom
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        required
                                        className="block w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-slate-900/10 outline-none transition-all"
                                        placeholder="Dupont"
                                    />
                                </div>
                            </div>
                        </div>

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
                                    autoComplete="new-password"
                                    required
                                    className="block w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-slate-900/10 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-slate-900 focus:ring-slate-900 border-slate-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-slate-500">
                                J'accepte les{" "}
                                <a href="#" className="font-semibold text-slate-900 hover:text-slate-700">
                                    Conditions Générales
                                </a>
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-xl shadow-slate-100 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Création..." : "Créer mon compte"}
                            </button>
                        </div>
                    </form>
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
