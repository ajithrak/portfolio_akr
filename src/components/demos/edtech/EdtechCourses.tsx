import React, { useState } from 'react';
import { EdtechCard, CourseRow } from './ui';
import { COURSES, type Course } from './data';

const FILTERS = ['All', 'In Progress', 'Completed', 'Not Started'] as const;

export const EdtechCourses: React.FC = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const filtered = COURSES.filter((c) => filter === 'All' || c.status === (filter as Course['status']));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-xl font-bold text-slate-900">My Courses</h1>
        <div className="flex gap-1.5 bg-white border border-slate-200 rounded-lg p-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                filter === f ? 'bg-violet-500 text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <EdtechCard>
        <ul className="divide-y divide-slate-100">
          {filtered.map((course) => (
            <li key={course.id} className="py-4 first:pt-0 last:pb-0">
              <CourseRow course={course} />
            </li>
          ))}
        </ul>
      </EdtechCard>
    </div>
  );
};
