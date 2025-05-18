export interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'student' | 'faculty' | 'admin';
  department?: string;
  year?: number;
  bio?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: User;
  createdAt: string;
  likes: number;
  comments: number;
  tags: string[];
  imageUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  organizer: string;
  imageUrl?: string;
  attendees: number;
}

export interface Discussion {
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: User;
  createdAt: string;
  category: string;
  replies: number;
  views: number;
  isSticky?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: string;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'mention' | 'event' | 'announcement';
  content: string;
  createdAt: string;
  isRead: boolean;
  link: string;
}