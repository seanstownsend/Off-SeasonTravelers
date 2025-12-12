import React from 'react';
import { LogOut, Shield } from 'lucide-react';

const AdminPanel = ({ onLogout }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-emerald-600" />
          <span className="text-sm font-medium text-gray-700">Preview Mode</span>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm text-gray-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;