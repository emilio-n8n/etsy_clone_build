import { HeartIcon, MessageIcon, ShareIcon } from './ui/Icons';

interface PostProps {
    creator: {
        name: string;
        username: string;
        avatar: string;
    };
    content: string;
    image?: string;
    likes: number;
    comments: number;
    time: string;
}

const Post: React.FC<PostProps> = ({ creator, content, image, likes, comments, time }) => (
    <article className="bg-white border-b border-slate-100 p-4 md:rounded-2xl md:border md:mb-6 md:shadow-sm">
        <div className="flex items-center gap-3 mb-4">
            <img src={creator.avatar} alt={creator.name} className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm" />
            <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-900">{creator.name}</h3>
                <p className="text-xs text-slate-500">@{creator.username} • {time}</p>
            </div>
            <button className="text-slate-400 p-1 hover:text-slate-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    {/* Using custom dot-dot-dot manually if Icons don't have it */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
                </svg>
            </button>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed mb-4 whitespace-pre-wrap">{content}</p>

        {image && (
            <div className="relative rounded-xl overflow-hidden mb-4 border border-slate-100">
                <img src={image} alt="Post content" className="w-full h-auto aspect-video object-cover" />
            </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
            <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-slate-500 hover:text-pink-500 transition-colors">
                    <HeartIcon className="w-5 h-5" />
                    <span className="text-xs font-medium">{likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors">
                    <MessageIcon className="w-5 h-5" />
                    <span className="text-xs font-medium">{comments}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-green-500 transition-colors">
                    <ShareIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    </article>
);

export const CommunityFeed: React.FC = () => {
    const posts = [
        {
            id: "1",
            creator: {
                name: "Marc Touffet",
                username: "marcrt",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marc"
            },
            content: "Aujourd'hui, je travaille sur une nouvelle série de céramiques inspirées des côtes bretonnes. La texture de l'argile brute rappelle les rochers sculptés par l'océan. ✨\n\nQu'en pensez-vous ? #ceramique #artisanat #creation",
            image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=1000",
            likes: 124,
            comments: 12,
            time: "2h"
        },
        {
            id: "2",
            creator: {
                name: "Sophie Bernard",
                username: "sophie_art",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie"
            },
            content: "Nouveaux coloris pour les étoles en soie ! J'utilise des pigments naturels pour un rendu vibrant et durable. 🌿",
            image: "https://images.unsplash.com/photo-1524331153400-f99066461993?auto=format&fit=crop&q=80&w=1000",
            likes: 89,
            comments: 5,
            time: "5h"
        }
    ];

    return (
        <div className="max-w-2xl mx-auto py-6 px-4 md:px-0 pb-24 md:pb-6">
            <div className="mb-8 hidden md:block">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">Fil d'actualité</h1>
                <p className="text-sm text-slate-500">Découvrez ce que les créateurs partagent aujourd'hui.</p>
            </div>

            <div className="space-y-4 md:space-y-0">
                {posts.map(post => (
                    <Post key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
};
