import clsx from 'clsx';
import React from 'react';

export const Boundary = ({
  children,
  isHighlighted,
  isRendering = false,
}: {
  children: React.ReactNode;
  isHighlighted?: boolean;
  isRendering?: boolean;
}) => {
  return (
    <div
      className={clsx('relative rounded-xl border border-dashed p-7', {
        'border-zinc-600': !isHighlighted,
        'border-pink-600': isHighlighted,
        'animate-[childrenRender_1s_ease-in-out_1]': !isRendering,
      })}
    >
      <div className="absolute -top-2.5 left-6 rounded-full border-2 border-black bg-zinc-800 px-1.5 text-[10px] leading-4 tracking-wider text-zinc-500">
        CHILDREN
      </div>

      <div
        className={clsx({
          'animate-pulse': isRendering,
        })}
      >
        {children}
      </div>
    </div>
  );
};
