import React, { useState } from 'react';
import { EcommerceCard, EcommerceToggle } from './ui';

export const EcommerceSettings: React.FC = () => {
  const [newOrderAlerts, setNewOrderAlerts] = useState(true);
  const [lowStockAlerts, setLowStockAlerts] = useState(true);
  const [autoPayouts, setAutoPayouts] = useState(false);

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-xl font-bold text-slate-900">Settings</h1>

      <EcommerceCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-800">New order alerts</p>
              <p className="text-xs text-slate-500">Get notified the moment a new order comes in</p>
            </div>
            <EcommerceToggle enabled={newOrderAlerts} onToggle={() => setNewOrderAlerts((v) => !v)} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-800">Low stock alerts</p>
              <p className="text-xs text-slate-500">Notify when a product drops below 10 units</p>
            </div>
            <EcommerceToggle enabled={lowStockAlerts} onToggle={() => setLowStockAlerts((v) => !v)} />
          </div>
        </div>
      </EcommerceCard>

      <EcommerceCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Payments</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-800">Automatic payouts</p>
            <p className="text-xs text-slate-500">Transfer earnings to your bank on a weekly schedule</p>
          </div>
          <EcommerceToggle enabled={autoPayouts} onToggle={() => setAutoPayouts((v) => !v)} />
        </div>
      </EcommerceCard>

      <EcommerceCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Preferences</h2>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-800">Store currency</span>
          <span className="text-slate-500">USD ($)</span>
        </div>
      </EcommerceCard>
    </div>
  );
};
