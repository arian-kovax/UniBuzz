import { User, Post, Event, Discussion, Resource, Notification } from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100',
    role: 'student',
    department: 'Computer Science',
    year: 3,
    bio: 'CS student interested in AI and web development'
  },
  {
    id: '2',
    name: 'Dr. Sarah Williams',
    avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=100',
    role: 'faculty',
    department: 'Biology',
    bio: 'Professor specializing in molecular biology'
  },
  {
    id: '3',
    name: 'Jamie Chen',
    avatar: 'https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&w=100',
    role: 'student',
    department: 'Business',
    year: 2,
    bio: 'Finance major with an interest in startups'
  },
  {
    id: '4',
    name: 'Professor Michael Brown',
    avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=100',
    role: 'faculty',
    department: 'Computer Science',
    bio: 'Faculty researching distributed systems'
  }
];

export const posts: Post[] = [
  {
    id: '1',
    title: 'Computer Science Department Announces New AI Research Lab',
    content: 'We are excited to announce the opening of our new AI research laboratory, which will focus on machine learning applications in healthcare.',
    authorId: '2',
    createdAt: '2023-09-15T14:30:00Z',
    likes: 45,
    comments: 12,
    tags: ['AI', 'Research', 'Computer Science'],
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    title: 'Campus Coffee Shop Extended Hours During Finals Week',
    content: 'Great news! The campus coffee shop will be open 24/7 during finals week to help you power through your study sessions.',
    authorId: '3',
    createdAt: '2023-09-14T09:15:00Z',
    likes: 82,
    comments: 7,
    tags: ['Campus Life', 'Finals Week', 'Coffee']
  },
  {
    id: '3',
    title: 'Student Government Elections: Meet the Candidates',
    content: 'The student government elections are coming up next week. Click here to learn more about the candidates and their platforms.',
    authorId: '1',
    createdAt: '2023-09-13T11:20:00Z',
    likes: 29,
    comments: 15,
    tags: ['Student Government', 'Elections', 'Campus Events'],
    imageUrl: 'https://images.pexels.com/photos/6140527/pexels-photo-6140527.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Autumn Career Fair',
    description: 'Connect with over 50 employers from various industries looking to hire interns and full-time employees.',
    location: 'University Center, Main Hall',
    startDate: '2023-10-15T09:00:00Z',
    endDate: '2023-10-15T16:00:00Z',
    organizer: 'Career Services Center',
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    attendees: 247
  },
  {
    id: '2',
    title: 'Guest Lecture: The Future of Renewable Energy',
    description: 'Join us for a compelling talk by Dr. Amanda Chen, a leading researcher in renewable energy technologies.',
    location: 'Science Building, Room 305',
    startDate: '2023-09-28T15:30:00Z',
    endDate: '2023-09-28T17:00:00Z',
    organizer: 'Department of Environmental Science',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    attendees: 78
  },
  {
    id: '3',
    title: 'End of Semester Concert',
    description: 'Celebrate the end of the semester with live performances by student bands and musical groups.',
    location: 'Campus Amphitheater',
    startDate: '2023-12-10T18:00:00Z',
    endDate: '2023-12-10T22:00:00Z',
    organizer: 'Student Activities Board',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
    attendees: 356
  }
];

export const discussions: Discussion[] = [
  {
    id: '1',
    title: 'Tips for surviving CS301 Final Exam?',
    content: "The CS301 final is coming up next week, and I'm starting to freak out. Any tips from those who've taken it before?",
    authorId: '1',
    createdAt: '2023-09-10T18:25:00Z',
    category: 'Computer Science',
    replies: 8,
    views: 143
  },
  {
    id: '2',
    title: '[OFFICIAL] Changes to Winter Break Housing Policy',
    content: 'Please read this important update regarding the new housing policy for students staying on campus during winter break.',
    authorId: '4',
    createdAt: '2023-09-08T10:15:00Z',
    category: 'Campus Housing',
    replies: 12,
    views: 230,
    isSticky: true
  },
  {
    id: '3',
    title: 'Study group for Biology 202?',
    content: 'Looking to form a study group for Biology 202. We could meet at the library twice a week. Anyone interested?',
    authorId: '3',
    createdAt: '2023-09-07T14:50:00Z',
    category: 'Biology',
    replies: 6,
    views: 95
  }
];

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Academic Calendar',
    description: 'Important dates and deadlines for the academic year',
    url: '/resources/calendar',
    category: 'Academic',
    icon: 'calendar'
  },
  {
    id: '2',
    title: 'Library Database',
    description: 'Access to online journals, books, and research papers',
    url: '/resources/library',
    category: 'Research',
    icon: 'book-open'
  },
  {
    id: '3',
    title: 'Career Services Portal',
    description: 'Job listings, internship opportunities, and career advice',
    url: '/resources/careers',
    category: 'Career',
    icon: 'briefcase'
  },
  {
    id: '4',
    title: 'Mental Health Resources',
    description: 'Services and support for student mental health and wellness',
    url: '/resources/wellness',
    category: 'Health',
    icon: 'heart'
  }
];

export const notifications: Notification[] = [
  {
    id: '1',
    type: 'comment',
    content: 'Alex Johnson replied to your discussion post',
    createdAt: '2023-09-15T13:45:00Z',
    isRead: false,
    link: '/discussions/1'
  },
  {
    id: '2',
    type: 'like',
    content: 'Dr. Sarah Williams liked your post about the AI Research Lab',
    createdAt: '2023-09-15T11:20:00Z',
    isRead: true,
    link: '/posts/1'
  },
  {
    id: '3',
    type: 'event',
    content: 'Reminder: Career Fair starts tomorrow at 9 AM',
    createdAt: '2023-09-14T09:00:00Z',
    isRead: false,
    link: '/events/1'
  },
  {
    id: '4',
    type: 'announcement',
    content: 'New policy on campus parking has been posted',
    createdAt: '2023-09-13T15:30:00Z',
    isRead: false,
    link: '/announcements/parking'
  }
];