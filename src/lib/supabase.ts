// Supabase Fetch Wrapper
const SUPABASE_URL = (import.meta as any).env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

type FetchOptions = RequestInit & {
    headers?: Record<string, string>;
};

async function supabaseFetch(path: string, options: FetchOptions = {}) {
    const url = `${SUPABASE_URL}${path}`;
    const headers = {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${localStorage.getItem('supabase_token') || SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        ...options.headers,
    };

    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
        let errorMessage = 'Supabase request failed';
        try {
            const error = await response.json();
            errorMessage = error.message || errorMessage;
        } catch (e) {
            // Ignore if not JSON
        }
        throw new Error(errorMessage);
    }

    return response.status === 204 ? null : response.json();
}

export const supabase = {
    auth: {
        async signUp(email: string, password: string, metadata: any = {}) {
            const data = await supabaseFetch('/auth/v1/signup', {
                method: 'POST',
                body: JSON.stringify({ email, password, data: metadata }),
            });
            if (data?.access_token) {
                localStorage.setItem('supabase_token', data.access_token);
            }
            return data;
        },

        async signIn(email: string, password: string) {
            const data = await supabaseFetch('/auth/v1/token?grant_type=password', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
            if (data?.access_token) {
                localStorage.setItem('supabase_token', data.access_token);
            }
            return data;
        },

        async signOut() {
            localStorage.removeItem('supabase_token');
        },

        async getUser() {
            const token = localStorage.getItem('supabase_token');
            if (!token) return null;
            try {
                return await supabaseFetch('/auth/v1/user');
            } catch (e) {
                localStorage.removeItem('supabase_token');
                return null;
            }
        },

        async updateUser(metadata: any) {
            return await supabaseFetch('/auth/v1/user', {
                method: 'PUT',
                body: JSON.stringify({ data: metadata }),
            });
        }
    },

    from(table: string) {
        return {
            async select(query: string = '*') {
                return supabaseFetch(`/rest/v1/${table}?select=${query}`, {
                    method: 'GET',
                });
            },

            async insert(data: any) {
                return supabaseFetch(`/rest/v1/${table}`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Prefer': 'return=representation' },
                });
            },

            async update(id: string | number, data: any) {
                return supabaseFetch(`/rest/v1/${table}?id=eq.${id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(data),
                    headers: { 'Prefer': 'return=representation' },
                });
            }
        };
    },

    storage: {
        from(bucket: string) {
            return {
                async upload(path: string, file: File) {
                    const url = `${SUPABASE_URL}/storage/v1/object/${bucket}/${path}`;
                    const headers = {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${localStorage.getItem('supabase_token') || SUPABASE_ANON_KEY}`,
                        // Content-Type is set automatically for Multipart/Form-Data if we use FormData
                    };

                    const response = await fetch(url, {
                        method: 'POST',
                        headers,
                        body: file, // Send file directly as binary
                    });

                    if (!response.ok) {
                        const error = await response.json();
                        throw new Error(error.message || 'Upload failed');
                    }

                    return response.json();
                },

                getPublicUrl(path: string) {
                    return {
                        data: {
                            publicUrl: `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${path}`
                        }
                    };
                }
            };
        }
    }
};
