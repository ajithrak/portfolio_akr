import { doc, increment, onSnapshot, setDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';

export interface SiteCounters {
  visits: number;
  contacts: number;
}

const COUNTERS_DOC = 'stats/counters';

/** Increments a counter field. Fails silently — analytics must never block the UI. */
const bumpCounter = (field: keyof SiteCounters) => {
  if (!db) return;
  const ref = doc(db, COUNTERS_DOC);
  setDoc(ref, { [field]: increment(1) }, { merge: true }).catch((err) => {
    console.error(`Failed to increment ${field}:`, err);
  });
};

const VISIT_SESSION_KEY = 'portfolio_visit_counted';

/** Counts at most once per browser tab session, so refreshes/navigation don't inflate the number. */
export const recordVisit = () => {
  if (!isFirebaseConfigured) return;
  if (sessionStorage.getItem(VISIT_SESSION_KEY)) return;
  sessionStorage.setItem(VISIT_SESSION_KEY, '1');
  bumpCounter('visits');
};

export const recordContactSubmission = () => {
  if (!isFirebaseConfigured) return;
  bumpCounter('contacts');
};

/** Subscribes to live counter values. Returns an unsubscribe function. */
export const subscribeToCounters = (callback: (counters: SiteCounters) => void): (() => void) => {
  if (!db) return () => {};
  const ref = doc(db, COUNTERS_DOC);
  return onSnapshot(
    ref,
    (snap) => {
      const data = snap.data();
      callback({
        visits: data?.visits ?? 0,
        contacts: data?.contacts ?? 0,
      });
    },
    (err) => console.error('Failed to read counters:', err)
  );
};
