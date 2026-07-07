import React from 'react';
import { type Appointment, STATUS_STYLES } from './data';

export const HealthcareCard: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => <div className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm ${className}`}>{children}</div>;

export const StatusBadge: React.FC<{ status: Appointment['status'] }> = ({ status }) => (
  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[status]}`}>{status}</span>
);

export const AppointmentRow: React.FC<{ appt: Appointment }> = ({ appt }) => (
  <div className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-3 min-w-0">
      <span className="w-9 h-9 shrink-0 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-semibold">
        {appt.doctor
          .split(' ')
          .slice(-2)
          .map((n) => n[0])
          .join('')}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-800 truncate">{appt.doctor}</p>
        <p className="text-xs text-slate-500">
          {appt.specialty} · {appt.date}, {appt.time}
        </p>
      </div>
    </div>
    <StatusBadge status={appt.status} />
  </div>
);

export const TimelineItem: React.FC<{ title: string; meta: string; badge?: React.ReactNode; isLast?: boolean }> = ({
  title,
  meta,
  badge,
  isLast = false,
}) => (
  <div className="flex gap-3">
    <div className="flex flex-col items-center">
      <span className="w-2.5 h-2.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
      {!isLast && <span className="w-px flex-1 bg-slate-200 my-1" />}
    </div>
    <div className={`flex-1 flex items-center justify-between gap-3 ${isLast ? '' : 'pb-5'}`}>
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-800 truncate">{title}</p>
        <p className="text-xs text-slate-500">{meta}</p>
      </div>
      {badge}
    </div>
  </div>
);

export const HealthcareToggle: React.FC<{ enabled: boolean; onToggle: () => void }> = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    aria-pressed={enabled}
    className={`relative w-10 h-[22px] rounded-full transition-colors ${enabled ? 'bg-sky-500' : 'bg-slate-300'}`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-white transition-transform ${
        enabled ? 'translate-x-[18px]' : 'translate-x-0'
      }`}
    />
  </button>
);
