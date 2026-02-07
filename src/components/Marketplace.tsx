import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { HeartIcon, SearchIcon } from './ui/Icons';
import { ProductDetail } from './ProductDetail';

interface ProductCardProps extends ProductCardData {
    onClick: () => void;
}

interface ProductCardData {
    title: string;
    price: number;
    image: string;
    creator: string;
    category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, creator, category, onClick }) => (
    <div className="group cursor-pointer" onClick={onClick}>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 shadow-sm transition-all group-hover:shadow-md">
            <img
                src={image}
                alt={title}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-slate-400 hover:text-pink-500 transition-colors shadow-sm">
                <HeartIcon className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 left-3">
                <span className="px-2 py-1 rounded-full bg-slate-900/10 backdrop-blur-md text-[10px] font-semibold text-white uppercase tracking-wider">
                    {category}
                </span>
            </div>
        </div>
        <div className="mt-3 space-y-1 px-1">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-slate-700 truncate">{title}</h3>
                <p className="text-sm font-bold text-slate-900">{price}€</p>
            </div>
            <p className="text-xs text-slate-500 truncate">Soutenez {creator}</p>
        </div>
    </div>
);

export const Marketplace: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await supabase.from('products').select('*');
                setProducts(data || []);
            } catch (err) {
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="max-w-6xl mx-auto py-6 px-4 pb-24 md:pb-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Découverte</h1>
                    <p className="text-sm text-slate-500">Trouvez des pièces uniques fabriquées avec passion.</p>
                </div>

                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-slate-600">
                        <SearchIcon className="w-5 h-5" />
                    </div>
                    <input
                        type="search"
                        className="w-full md:w-64 bg-slate-100 border-none rounded-2xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-slate-900/10 transition-all outline-none"
                        placeholder="Rechercher une création..."
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {loading ? (
                    <div className="col-span-full py-20 text-center text-slate-400">Chargement des créations...</div>
                ) : products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            onClick={() => setSelectedProduct(product)}
                        />
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center text-slate-400">Aucune création disponible pour le moment.</div>
                )}
            </div>

            {selectedProduct && (
                <ProductDetail
                    product={selectedProduct}
                    onBack={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};
