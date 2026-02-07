import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface ProfileProps {
    onLogout: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState('creations');
    const [user, setUser] = useState<any>(null);
    const [creations, setCreations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ name: '', bio: '' });
    const [saving, setSaving] = useState(false);

    const fetchUserData = async () => {
        try {
            const userData = await supabase.auth.getUser();
            if (userData) {
                const profile = {
                    name: userData.user_metadata?.full_name || userData.email?.split('@')[0],
                    username: userData.user_metadata?.username || userData.email?.split('@')[0],
                    avatar: userData.user_metadata?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.email}`,
                    bio: userData.user_metadata?.bio || "Nouvel artisan sur NOVA. Passionné par la création.",
                    followers: 0,
                    following: 0,
                };
                setUser(profile);
                setEditData({ name: profile.name, bio: profile.bio });

                // Fetch user's creations
                const products = await supabase.from('products').select('*');
                setCreations(products || []);
            }
        } catch (err) {
            console.error("Error fetching profile:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleSave = async () => {
        setSaving(true);
        try {
            await supabase.auth.updateUser({
                full_name: editData.name,
                bio: editData.bio
            });
            await fetchUserData(); // Refresh local state
            setIsEditing(false);
        } catch (err: any) {
            alert(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="max-w-4xl mx-auto py-20 text-center text-slate-400">Chargement du profil...</div>;
    }

    if (!user) {
        return <div className="max-w-4xl mx-auto py-20 text-center text-slate-400">Veuillez vous connecter.</div>;
    }

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
                        <div className="flex gap-3 translate-y-8">
                            {!isEditing ? (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="rounded-full border border-slate-200 px-6 py-2 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-all active:scale-95"
                                >
                                    Modifier le profil
                                </button>
                            ) : (
                                <button
                                    onClick={handleSave}
                                    disabled={saving}
                                    className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-50"
                                >
                                    {saving ? "Enregistrement..." : "Enregistrer"}
                                </button>
                            )}
                            <button
                                onClick={onLogout}
                                className="rounded-full border border-red-100 px-6 py-2 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 transition-all active:scale-95"
                            >
                                Déconnexion
                            </button>
                        </div>
                    </div>

                    <div className="mt-[-2rem]">
                        {isEditing ? (
                            <div className="space-y-4 max-w-lg">
                                <input
                                    type="text"
                                    value={editData.name}
                                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                    className="text-2xl font-bold text-slate-900 bg-slate-50 border-none rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-slate-900/10 outline-none"
                                    placeholder="Nom complet"
                                />
                                <textarea
                                    value={editData.bio}
                                    onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                                    className="mt-2 text-sm text-slate-700 bg-slate-50 border-none rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-slate-900/10 outline-none resize-none"
                                    rows={3}
                                    placeholder="Racontez votre histoire..."
                                />
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600"
                                >
                                    Annuler les modifications
                                </button>
                            </div>
                        ) : (
                            <>
                                <h1 className="text-2xl font-bold text-slate-900">{user.name}</h1>
                                <p className="text-sm text-slate-500">@{user.username}</p>

                                <p className="mt-4 text-sm text-slate-700 leading-relaxed max-w-lg">
                                    {user.bio}
                                </p>
                            </>
                        )}

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
                {creations.length > 0 ? creations.map(c => (
                    <div key={c.id} className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 group cursor-pointer">
                        <img
                            src={c.image}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                )) : (
                    <div className="col-span-full py-20 text-center text-slate-400 italic">Aucune création pour le moment.</div>
                )}
            </div>
        </div>
    );
};
