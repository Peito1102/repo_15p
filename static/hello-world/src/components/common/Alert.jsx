import React from 'react';

export const Alert = ({ type = 'info', title, children, onClose }) => {
  const types = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  };

  return (
    <div className={`border rounded-lg p-4 ${types[type]}`}>
      <div className="flex justify-between items-start">
        <div>
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button onClick={onClose} className="ml-4 hover:opacity-70">
            ✕
          </button>
        )}
      </div>
    </div>
  );
};