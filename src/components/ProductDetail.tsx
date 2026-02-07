import React from 'react';

interface ProductDetailProps {
    product: any;
    onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
    return (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
            {/* Header / Navigation */}
            <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="p-2 -ml-2 text-slate-500 hover:text-slate-900 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Détails de l'article</span>
                <button
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({
                                title: product.title,
                                text: `Découvrez cette création sur NOVA : ${product.title}`,
                                url: window.location.href,
                            }).catch(console.error);
                        } else {
                            navigator.clipboard.writeText(window.location.href);
                            alert("Lien copié dans le presse-papier !");
                        }
                    }}
                    className="text-slate-400 hover:text-slate-900 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>
            </div>

            <div className="max-w-6xl mx-auto md:flex md:items-stretch min-h-[calc(100vh-65px)]">
                {/* Image Section */}
                <div className="md:w-1/2 aspect-square md:aspect-auto relative bg-slate-100 overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover animate-in zoom-in-110 duration-1000"
                    />
                    <div className="absolute top-6 left-6">
                        <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                            {product.category}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${product.creator}`} alt={product.creator} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Créé par</p>
                                <p className="text-sm font-bold text-slate-900">{product.creator}</p>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                            {product.title}
                        </h1>

                        <div className="text-2xl font-bold text-slate-900 mb-8">
                            {product.price} €
                            <span className="text-sm font-medium text-slate-400 ml-2">TVA incluse</span>
                        </div>

                        <div className="space-y-6 mb-12">
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">L'histoire de la pièce</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {product.description || "Cette pièce unique a été façonnée à la main avec passion. Chaque détail raconte une histoire d'artisanat authentique et de recherche esthétique. Un objet conçu pour durer et apporter une touche d'élégance naturelle à votre intérieur."}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                                <div>
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Matériaux</h4>
                                    <p className="text-xs font-semibold text-slate-700">Responsables & Durables</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Livraison</h4>
                                    <p className="text-xs font-semibold text-slate-700">3-5 Jours Ouvrés</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8">
                        <button className="flex-[2] py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-2">
                            <span>Ajouter au panier</span>
                            <span className="text-xs opacity-50">—</span>
                            <span>{product.price} €</span>
                        </button>
                        <button className="flex-1 py-4 rounded-2xl border border-slate-200 text-slate-900 font-bold text-sm hover:bg-slate-50 transition-all active:scale-95">
                            Contacter l'artisan
                        </button>
                    </div>

                    <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-bold">
                        Paiement sécurisé par NOVA
                    </p>
                </div>
            </div>
        </div>
    );
};
