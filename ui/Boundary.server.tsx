import React from 'react';

export const Boundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative animate-[childrenRender_1s_ease-in-out_1] rounded-xl border border-dashed border-white/30 p-7">
      <div className="absolute -top-2.5 left-6 rounded-full border-2 border-black bg-zinc-800 px-1.5 text-[10px] tracking-wider text-zinc-500">
        CHILDREN
      </div>
      {children}
    </div>
  );
};
