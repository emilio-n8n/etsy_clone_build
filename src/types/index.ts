export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  creatorId: string;
  createdAt: string;
  likes: number;
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  links: string[];
}

export interface Post {
  id: string;
  creatorId: string;
  content: string;
  media: { type: 'image' | 'video'; url: string }[];
  likes: number;
  comments: number;
  createdAt: string;
}
