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
      className={clsx('relative rounded-xl border border-dashed p-9', {
        'border-zinc-700': !isHighlighted,
        'border-vercel-pink': isHighlighted,
        'animate-[rerender_1s_ease-in-out_1]': !isRendering,
      })}
    >
      <div
        className={clsx(
          'absolute -top-3 left-7 rounded-full border-4 border-black px-1.5 text-[9px] uppercase leading-4 tracking-widest ',
          {
            'bg-zinc-800 text-zinc-500': !isHighlighted,
            'bg-vercel-pink text-pink-100': isHighlighted,
            'animate-[highlight_1s_ease-in-out_1]': !isRendering,
          },
        )}
      >
        children
      </div>

      {children}
    </div>
  );
};
