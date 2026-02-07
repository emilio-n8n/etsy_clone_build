import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { PlusIcon } from './ui/Icons';

interface CreatePostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onClose, onSuccess }) => {
    const [content, setContent] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isPosting, setIsPosting] = useState(false);

    if (!isOpen) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handlePost = async () => {
        if (!content.trim() && !selectedFile) return;

        setIsPosting(true);
        try {
            const userResponse = await supabase.auth.getUser();
            if (!userResponse) throw new Error("Vous devez être connecté.");

            let imageUrl = null;
            if (selectedFile) {
                const fileName = `${Date.now()}-${selectedFile.name}`;
                await supabase.storage.from('post-images').upload(fileName, selectedFile);
                imageUrl = supabase.storage.from('post-images').getPublicUrl(fileName).data.publicUrl;
            }

            const newPost = {
                content: content,
                image: imageUrl,
                creator: {
                    name: userResponse.user_metadata?.full_name || userResponse.email?.split('@')[0],
                    username: userResponse.user_metadata?.username || userResponse.email?.split('@')[0],
                    avatar: userResponse.user_metadata?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${userResponse.email}`,
                },
                likes: 0,
                comments: 0,
                time: "À l'instant",
            };

            await supabase.from('posts').insert(newPost);

            // Cleanup and Close
            setContent('');
            setSelectedFile(null);
            setPreviewUrl(null);
            onSuccess();
            onClose();
        } catch (err: any) {
            alert(err.message);
        } finally {
            setIsPosting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
                <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900">Nouvelle publication</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-8">
                    <textarea
                        autoFocus
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Quoi de neuf dans votre atelier ?"
                        className="w-full bg-slate-50 border-none rounded-2xl p-5 text-base focus:ring-2 focus:ring-slate-900/10 outline-none resize-none min-h-[150px] transition-all"
                    />

                    {previewUrl && (
                        <div className="mt-4 relative rounded-2xl overflow-hidden aspect-video border border-slate-100">
                            <img src={previewUrl} className="w-full h-full object-cover" alt="Preview" />
                            <button
                                onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
                                className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/50 text-white backdrop-blur-sm hover:bg-slate-900 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    )}

                    <div className="flex items-center justify-between mt-8">
                        <label className="flex items-center gap-2 text-slate-500 hover:text-slate-900 cursor-pointer transition-all group">
                            <div className="p-2 rounded-xl bg-slate-100 group-hover:bg-slate-200 transition-colors">
                                <PlusIcon className="w-5 h-5 text-slate-600" />
                            </div>
                            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                            <span className="text-sm font-bold uppercase tracking-widest">Ajouter une photo</span>
                        </label>

                        <button
                            onClick={handlePost}
                            disabled={isPosting || (!content.trim() && !selectedFile)}
                            className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all disabled:opacity-50 active:scale-95"
                        >
                            {isPosting ? "Publication..." : "Publier"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
