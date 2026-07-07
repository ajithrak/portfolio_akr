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

export const ProgressRing: React.FC<{ progress: number; size?: number }> = ({ progress, size = 52 }) => {
  const stroke = 4;
  const radius = (size - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} strokeWidth={stroke} className="stroke-violet-100" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          className="stroke-violet-500"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-slate-700">
        {progress}%
      </span>
    </div>
  );
};

export const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col gap-3">
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-800 truncate">{course.title}</p>
        <p className="text-xs text-slate-500">
          {course.instructor} · {course.category}
        </p>
      </div>
      <ProgressRing progress={course.progress} />
    </div>
    <CourseStatusBadge status={course.status} />
  </div>
);

export const AssignmentChecklistItem: React.FC<{ assignment: Assignment }> = ({ assignment }) => {
  const isDone = assignment.status !== 'Pending';
  return (
    <div className="flex items-center gap-3">
      <span
        className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
          isDone ? 'bg-violet-500 border-violet-500' : 'border-slate-300'
        }`}
      >
        {isDone && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
      </span>
      <div className="min-w-0 flex-1">
        <p className={`text-sm font-medium truncate ${isDone ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
          {assignment.title}
        </p>
        <p className="text-xs text-slate-500">
          {assignment.course} · Due {assignment.dueDate}
        </p>
      </div>
      <AssignmentStatusBadge status={assignment.status} />
    </div>
  );
};

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
