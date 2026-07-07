import { FiHome, FiBookOpen, FiUser, FiSettings } from 'react-icons/fi';

export const EDTECH_NAV = [
  { key: 'dashboard', label: 'Overview', icon: FiHome },
  { key: 'courses', label: 'Courses', icon: FiBookOpen },
  { key: 'profile', label: 'Profile', icon: FiUser },
  { key: 'settings', label: 'Settings', icon: FiSettings },
];

export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  progress: number;
  status: 'In Progress' | 'Completed' | 'Not Started';
}

export const COURSES: Course[] = [
  { id: 'c1', title: 'UX Design Fundamentals', instructor: 'Nadia Farouk', category: 'Design', progress: 72, status: 'In Progress' },
  { id: 'c2', title: 'Advanced TypeScript Patterns', instructor: 'Ravi Iyer', category: 'Development', progress: 100, status: 'Completed' },
  { id: 'c3', title: 'Data Visualization with D3', instructor: 'Elena Petrova', category: 'Data', progress: 34, status: 'In Progress' },
  { id: 'c4', title: 'Product Management Basics', instructor: 'Sam Whitfield', category: 'Business', progress: 0, status: 'Not Started' },
  { id: 'c5', title: 'Accessible Web Design', instructor: 'Nadia Farouk', category: 'Design', progress: 100, status: 'Completed' },
];

export const COURSE_STATUS_STYLES: Record<Course['status'], string> = {
  'In Progress': 'bg-violet-50 text-violet-700',
  Completed: 'bg-emerald-50 text-emerald-700',
  'Not Started': 'bg-slate-100 text-slate-500',
};

export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: 'Submitted' | 'Pending' | 'Graded';
}

export const UPCOMING_ASSIGNMENTS: Assignment[] = [
  { id: 'a1', title: 'Wireframe Critique', course: 'UX Design Fundamentals', dueDate: 'Jul 10', status: 'Pending' },
  { id: 'a2', title: 'Generics Exercise Set', course: 'Advanced TypeScript Patterns', dueDate: 'Jul 03', status: 'Graded' },
  { id: 'a3', title: 'Force-Directed Graph', course: 'Data Visualization with D3', dueDate: 'Jul 12', status: 'Pending' },
  { id: 'a4', title: 'Persona Workshop', course: 'UX Design Fundamentals', dueDate: 'Jun 28', status: 'Submitted' },
];

export const ASSIGNMENT_STATUS_STYLES: Record<Assignment['status'], string> = {
  Submitted: 'bg-sky-50 text-sky-700',
  Pending: 'bg-amber-50 text-amber-700',
  Graded: 'bg-emerald-50 text-emerald-700',
};

export const WEEKLY_STUDY_TIME = [
  { label: 'Mon', value: 40 },
  { label: 'Tue', value: 65 },
  { label: 'Wed', value: 30 },
  { label: 'Thu', value: 80 },
  { label: 'Fri', value: 55 },
  { label: 'Sat', value: 20 },
  { label: 'Sun', value: 45 },
];
