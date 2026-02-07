import React, { useState } from 'react';
import { PlusIcon } from './ui/Icons';

export const ProductForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        category: '',
        description: '',
        images: [] as string[]
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    return (
        <div className="max-w-2xl mx-auto py-6 px-4 pb-24 md:pb-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">Vendre une création</h1>
                <p className="text-sm text-slate-500">Mise en ligne en moins d'une minute.</p>
            </div>

            <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200 overflow-hidden">
                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-slate-50 flex">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={`h-full flex-1 transition-all duration-500 ${s <= step ? 'bg-slate-900' : 'bg-transparent'}`}
                        />
                    ))}
                </div>

                <div className="p-8">
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Photos de votre œuvre</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-slate-400 hover:text-slate-600 transition-all">
                                        <PlusIcon className="w-8 h-8" />
                                        <span className="text-xs font-medium">Ajouter</span>
                                    </button>
                                    <div className="aspect-square rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300">
                                        <span className="text-[10px] uppercase font-bold tracking-widest">Aperçu</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Titre</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: Vase en porcelaine bleue"
                                        className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-slate-900/10 outline-none transition-all"
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Catégorie</label>
                                    <select
                                        className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-slate-900/10 outline-none transition-all appearance-none"
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        <option value="">Sélectionner...</option>
                                        <option value="ceramique">Céramique</option>
                                        <option value="textile">Textile</option>
                                        <option value="bijoux">Bijoux</option>
                                        <option value="design">Design</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Prix (€)</label>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-slate-900/10 outline-none transition-all"
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Description</label>
                                <textarea
                                    rows={4}
                                    placeholder="Racontez l'histoire de cette pièce..."
                                    className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-slate-900/10 outline-none transition-all resize-none"
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6 text-center animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">Tout est prêt !</h2>
                            <p className="text-sm text-slate-500">
                                Votre création sera mise en ligne instantanément. Nous nous occupons de la valorisation et du ciblage.
                            </p>

                            <div className="bg-slate-50 rounded-2xl p-4 text-left space-y-2">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Récapitulatif</p>
                                <p className="text-sm font-semibold text-slate-900">{formData.title || 'Sans titre'}</p>
                                <p className="text-sm text-slate-600 font-bold">{formData.price || '0'} €</p>
                            </div>
                        </div>
                    )}

                    <div className="mt-10 flex gap-4">
                        {step > 1 && step < 3 && (
                            <button
                                onClick={prevStep}
                                className="flex-1 py-4 rounded-full border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
                            >
                                Retour
                            </button>
                        )}
                        {step < 3 ? (
                            <button
                                onClick={nextStep}
                                disabled={step === 1 && !formData.title}
                                className="flex-1 py-4 rounded-full bg-slate-900 text-sm font-semibold text-white shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Continuer
                            </button>
                        ) : (
                            <button
                                className="flex-1 py-4 rounded-full bg-slate-900 text-sm font-semibold text-white shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95"
                                onClick={() => window.location.reload()}
                            >
                                Publier maintenant
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
