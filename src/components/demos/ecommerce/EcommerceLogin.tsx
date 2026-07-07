import React from 'react';

export const EcommerceLogin: React.FC = () => (
  <div className="min-h-[720px] bg-orange-50 flex items-center justify-center p-8">
    <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center font-bold text-white">
          U
        </div>
        <span className="text-lg font-bold text-slate-900">Urban Cart</span>
      </div>

      <h2 className="text-xl font-semibold text-slate-900 mb-1">Store dashboard</h2>
      <p className="text-sm text-slate-500 mb-6">Sign in to manage your store</p>

      <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
      <input
        readOnly
        value="maria@urbancart.store"
        className="w-full mb-4 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm focus:outline-none"
      />

      <label className="block text-xs font-medium text-slate-500 mb-1">Password</label>
      <input
        readOnly
        type="password"
        value="password123"
        className="w-full mb-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm focus:outline-none"
      />

      <div className="flex justify-end mb-6">
        <span className="text-xs text-orange-600 cursor-pointer">Forgot password?</span>
      </div>

      <button className="w-full py-2.5 rounded-lg bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors">
        Sign In
      </button>

      <p className="text-center text-xs text-slate-400 mt-6">Trusted by 2,400+ independent stores</p>
    </div>
  </div>
);
