import React from 'react';
import { EdtechCard, CourseRow, AssignmentRow } from './ui';
import { COURSES, UPCOMING_ASSIGNMENTS, WEEKLY_STUDY_TIME } from './data';

export const EdtechDashboard: React.FC = () => {
  const inProgress = COURSES.filter((c) => c.status === 'In Progress');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Welcome back, Sam</h1>
        <p className="text-sm text-slate-500">You're making great progress this week.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <EdtechCard>
          <p className="text-xs font-medium text-slate-500 mb-2">Courses in progress</p>
          <p className="text-2xl font-bold text-slate-900">{inProgress.length}</p>
        </EdtechCard>
        <EdtechCard>
          <p className="text-xs font-medium text-slate-500 mb-2">Completed courses</p>
          <p className="text-2xl font-bold text-slate-900">{COURSES.filter((c) => c.status === 'Completed').length}</p>
        </EdtechCard>
        <EdtechCard>
          <p className="text-xs font-medium text-slate-500 mb-2">Learning streak</p>
          <p className="text-2xl font-bold text-slate-900">12 days</p>
        </EdtechCard>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <EdtechCard className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-slate-900 mb-6">Study time this week</h2>
          <div className="flex items-end gap-3 h-40">
            {WEEKLY_STUDY_TIME.map((d) => (
              <div key={d.label} className="flex-1 bg-violet-400 rounded-t" style={{ height: `${d.value}%` }} />
            ))}
          </div>
          <div className="flex gap-3 mt-2">
            {WEEKLY_STUDY_TIME.map((d) => (
              <span key={d.label} className="flex-1 text-center text-[10px] text-slate-500">
                {d.label}
              </span>
            ))}
          </div>
        </EdtechCard>

        <EdtechCard>
          <h2 className="text-sm font-semibold text-slate-900 mb-4">Upcoming assignments</h2>
          <ul className="space-y-4">
            {UPCOMING_ASSIGNMENTS.slice(0, 4).map((a) => (
              <li key={a.id}>
                <AssignmentRow assignment={a} />
              </li>
            ))}
          </ul>
        </EdtechCard>
      </div>

      <EdtechCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Continue learning</h2>
        <ul className="space-y-4">
          {inProgress.map((course) => (
            <li key={course.id}>
              <CourseRow course={course} />
            </li>
          ))}
        </ul>
      </EdtechCard>
    </div>
  );
};
