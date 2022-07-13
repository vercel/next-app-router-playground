import React from 'react';

export const Boundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative animate-[childrenRender_1s_ease-in-out_1] rounded-xl border-2 border-dashed border-white/40 p-7">
      <div className="absolute -top-2.5 left-7 rounded-full bg-gray-700 px-1.5 text-[10px] tracking-wider text-white/70">
        CHILDREN
      </div>
      {children}
    </div>
  );
};
