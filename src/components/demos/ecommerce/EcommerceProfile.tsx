import React from 'react';
import { EcommerceCard } from './ui';

export const EcommerceProfile: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      <span className="w-16 h-16 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xl font-bold">
        MR
      </span>
      <div>
        <h1 className="text-xl font-bold text-slate-900">Maria Reyes</h1>
        <p className="text-sm text-slate-500">Store owner since 2023</p>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      <EcommerceCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Store details</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-slate-500">Store name</dt>
            <dd className="text-slate-700">Urban Cart</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Email</dt>
            <dd className="text-slate-700">maria@urbancart.store</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Store URL</dt>
            <dd className="text-slate-700">urbancart.store</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Plan</dt>
            <dd className="text-orange-600 font-medium">Growth</dd>
          </div>
        </dl>
      </EcommerceCard>

      <EcommerceCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Business & payouts</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-slate-500">Tax ID</dt>
            <dd className="text-slate-700">84-3319201</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Payout account</dt>
            <dd className="text-slate-700">Chase ••6621</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Payout schedule</dt>
            <dd className="text-slate-700">Weekly</dd>
          </div>
        </dl>
      </EcommerceCard>
    </div>
  </div>
);
