import React from 'react';
import { HealthcareCard, StatusBadge, TimelineItem } from './ui';
import { APPOINTMENTS } from './data';

export const HealthcareAppointments: React.FC = () => {
  const upcoming = APPOINTMENTS.filter((a) => a.status !== 'Completed');
  const past = APPOINTMENTS.filter((a) => a.status === 'Completed');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-xl font-bold text-slate-900">Appointments</h1>
        <button className="px-4 py-2 rounded-lg bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-colors">
          Book New Appointment
        </button>
      </div>

      <HealthcareCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Upcoming</h2>
        <div>
          {upcoming.map((appt, idx) => (
            <TimelineItem
              key={appt.id}
              title={`${appt.doctor} · ${appt.specialty}`}
              meta={`${appt.date}, ${appt.time}`}
              badge={<StatusBadge status={appt.status} />}
              isLast={idx === upcoming.length - 1}
            />
          ))}
        </div>
      </HealthcareCard>

      <HealthcareCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Past</h2>
        <div>
          {past.map((appt, idx) => (
            <TimelineItem
              key={appt.id}
              title={`${appt.doctor} · ${appt.specialty}`}
              meta={`${appt.date}, ${appt.time}`}
              badge={<StatusBadge status={appt.status} />}
              isLast={idx === past.length - 1}
            />
          ))}
        </div>
      </HealthcareCard>
    </div>
  );
};
