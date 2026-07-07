import React, { useState } from 'react';
import { EdtechCard, EdtechToggle } from './ui';

export const EdtechSettings: React.FC = () => {
  const [assignmentReminders, setAssignmentReminders] = useState(true);
  const [courseUpdates, setCourseUpdates] = useState(true);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-xl font-bold text-slate-900">Settings</h1>

      <EdtechCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-800">Assignment reminders</p>
              <p className="text-xs text-slate-500">Get notified before an assignment is due</p>
            </div>
            <EdtechToggle enabled={assignmentReminders} onToggle={() => setAssignmentReminders((v) => !v)} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-800">Course updates</p>
              <p className="text-xs text-slate-500">Notify when instructors post new material</p>
            </div>
            <EdtechToggle enabled={courseUpdates} onToggle={() => setCourseUpdates((v) => !v)} />
          </div>
        </div>
      </EdtechCard>

      <EdtechCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Privacy</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-800">Show profile to instructors</p>
            <p className="text-xs text-slate-500">Let instructors see your progress and activity</p>
          </div>
          <EdtechToggle enabled={showProfile} onToggle={() => setShowProfile((v) => !v)} />
        </div>
      </EdtechCard>

      <EdtechCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Account</h2>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-800">Change password</span>
          <button className="text-xs font-semibold text-violet-600 hover:text-violet-700">Update</button>
        </div>
      </EdtechCard>
    </div>
  );
};
