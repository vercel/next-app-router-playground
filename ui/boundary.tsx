import clsx from 'clsx';
import React from 'react';

const Label = ({
  children,
  animateRerendering,
  color,
}: {
  children: React.ReactNode;
  animateRerendering?: boolean;
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
}) => {
  return (
    <div
      className={clsx('rounded-full px-1.5 shadow-[0_0_1px_3px_black]', {
        'bg-gray-700 text-gray-300': color === 'default',
        'bg-pink-600 text-pink-200': color === 'pink',
        'bg-blue-600 text-blue-200': color === 'blue',
        'bg-cyan-500 text-cyan-100': color === 'cyan',
        'bg-violet-700 text-violet-200': color === 'violet',
        'bg-orange-500 text-orange-200': color === 'orange',
        'animate-[highlight_1s_ease-in-out_1]': animateRerendering,
      })}
    >
      {children}
    </div>
  );
};

export const Boundary = ({
  children,
  labels = ['@children'],
  size = 'default',
  color = 'default',
  animateRerendering = true,
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: 'small' | 'default';
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
  animateRerendering?: boolean;
}) => {
  return (
    <div
      className={clsx('relative rounded-lg border border-dashed', {
        'p-3 lg:p-5': size === 'small',
        'p-4 lg:p-9': size === 'default',
        'border-gray-700': color === 'default',
        'border-pink-800': color === 'pink',
        'border-blue-800': color === 'blue',
        'border-cyan-800': color === 'cyan',
        'border-violet-800': color === 'violet',
        'border-orange-900': color === 'orange',
        'animate-[rerender_1s_ease-in-out_1] text-pink-600': animateRerendering,
      })}
    >
      <div
        className={clsx(
          'absolute -top-2.5 flex gap-x-1 text-[9px] leading-4 tracking-widest uppercase',
          {
            'left-3 lg:left-5': size === 'small',
            'left-4 lg:left-9': size === 'default',
          },
        )}
      >
        {labels.map((label) => {
          return (
            <Label
              key={label}
              color={color}
              animateRerendering={animateRerendering}
            >
              {label}
            </Label>
          );
        })}
      </div>

      {children}
    </div>
  );
};
