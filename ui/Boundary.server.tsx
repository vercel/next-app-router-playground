import clsx from 'clsx';
import React from 'react';

export const Boundary = ({
  children,
  isHighlighted,
}: {
  children: React.ReactNode;
  isHighlighted?: boolean;
}) => {
  return (
    <div
      className={clsx(
        'relative animate-[childrenRender_1s_ease-in-out_1] rounded-xl border border-dashed p-7',
        { 'border-zinc-600': !isHighlighted },
        { 'border-pink-600': isHighlighted },
      )}
    >
      <div className="absolute -top-2.5 left-6 rounded-full border-2 border-black bg-zinc-800 px-1.5 text-[10px] leading-4 tracking-wider text-zinc-500">
        CHILDREN
      </div>
      {children}
    </div>
  );
};
