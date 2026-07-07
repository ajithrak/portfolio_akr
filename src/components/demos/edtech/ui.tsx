import React from 'react';
import { type Course, type Assignment, COURSE_STATUS_STYLES, ASSIGNMENT_STATUS_STYLES } from './data';

export const EdtechCard: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => <div className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm ${className}`}>{children}</div>;

export const CourseStatusBadge: React.FC<{ status: Course['status'] }> = ({ status }) => (
  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${COURSE_STATUS_STYLES[status]}`}>{status}</span>
);

export const AssignmentStatusBadge: React.FC<{ status: Assignment['status'] }> = ({ status }) => (
  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${ASSIGNMENT_STATUS_STYLES[status]}`}>
    {status}
  </span>
);

export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="w-full h-1.5 rounded-full bg-slate-100">
    <div className="h-1.5 rounded-full bg-violet-500" style={{ width: `${progress}%` }} />
  </div>
);

export const CourseRow: React.FC<{ course: Course }> = ({ course }) => (
  <div className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-3 min-w-0 flex-1">
      <span className="w-9 h-9 shrink-0 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-semibold">
        {course.title
          .split(' ')
          .slice(0, 2)
          .map((w) => w[0])
          .join('')}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-slate-800 truncate">{course.title}</p>
        <p className="text-xs text-slate-500 mb-1.5">
          {course.instructor} · {course.category}
        </p>
        <ProgressBar progress={course.progress} />
      </div>
    </div>
    <CourseStatusBadge status={course.status} />
  </div>
);

export const AssignmentRow: React.FC<{ assignment: Assignment }> = ({ assignment }) => (
  <div className="flex items-center justify-between gap-3">
    <div className="min-w-0">
      <p className="text-sm font-medium text-slate-800 truncate">{assignment.title}</p>
      <p className="text-xs text-slate-500">
        {assignment.course} · Due {assignment.dueDate}
      </p>
    </div>
    <AssignmentStatusBadge status={assignment.status} />
  </div>
);

export const EdtechToggle: React.FC<{ enabled: boolean; onToggle: () => void }> = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    aria-pressed={enabled}
    className={`relative w-10 h-[22px] rounded-full transition-colors ${enabled ? 'bg-violet-500' : 'bg-slate-300'}`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-white transition-transform ${
        enabled ? 'translate-x-[18px]' : 'translate-x-0'
      }`}
    />
  </button>
);
