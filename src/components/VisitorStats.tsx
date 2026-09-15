import React, { useEffect, useState } from 'react';
import { isFirebaseConfigured } from '../lib/firebase';
import { subscribeToCounters, type SiteCounters } from '../lib/counters';

export const VisitorStats: React.FC = () => {
  const [counters, setCounters] = useState<SiteCounters | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    return subscribeToCounters(setCounters);
  }, []);

  if (!isFirebaseConfigured || !counters) return null;

  return (
    <p className="text-xs text-gray-400 dark:text-zinc-500 tabular-nums">
      {counters.visits.toLocaleString()} visits &middot; {counters.contacts.toLocaleString()} messages
    </p>
  );
};
