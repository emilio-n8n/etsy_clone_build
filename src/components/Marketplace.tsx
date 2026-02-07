import React from 'react';
import { HeartIcon, SearchIcon } from './ui/Icons';

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    creator: string;
    category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, creator, category }) => (
    <div className="group cursor-pointer">
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
    const products = [
        {
            id: "1",
            title: "Vase Océan Brute",
            price: 45,
            image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800",
            creator: "Marc Touffet",
            category: "Céramique"
        },
        {
            id: "2",
            title: "Étole Soie Indigo",
            price: 75,
            image: "https://images.unsplash.com/photo-1524331153400-f99066461993?auto=format&fit=crop&q=80&w=800",
            creator: "Sophie Bernard",
            category: "Textile"
        },
        {
            id: "3",
            title: "Lampe Bulle",
            price: 120,
            image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800",
            creator: "Lumi Art",
            category: "Design"
        },
        {
            id: "4",
            title: "Carnet Cuir Gravé",
            price: 35,
            image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
            creator: "Atelier Papyrus",
            category: "Papeterie"
        },
        {
            id: "5",
            title: "Bague Argent & Jade",
            price: 95,
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
            creator: "Maison Jade",
            category: "Bijoux"
        },
        {
            id: "6",
            title: "Panier Osier Tressé",
            price: 55,
            image: "https://images.unsplash.com/photo-1544131495-998816f564ce?auto=format&fit=crop&q=80&w=800",
            creator: "Brins de Nature",
            category: "Déco"
        }
    ];

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
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};
