'use client';

import {
  TransitionId,
  TransitionLinkProps,
  TransitionMap,
} from '#/app/view-transitions/_ui/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Link from 'next/link';
import {
  unstable_addTransitionType as addTransitionType,
  startTransition,
  unstable_ViewTransition as ViewTransition,
  ViewTransitionClass,
} from 'react';
import { useRouter } from 'next/navigation';

export function TransitionLink({ type, ...props }: TransitionLinkProps) {
  const router = useRouter();

  const handleNavigate: TransitionLinkProps['onNavigate'] = (event) => {
    event.preventDefault();

    startTransition(() => {
      addTransitionType(type);
      router.push(props.href);
    });
  };

  return <Link onNavigate={handleNavigate} {...props} />;
}

export function PageTransition({
  children,
  enter,
  exit,
}: {
  children: React.ReactNode;
  enter: TransitionMap;
  exit: TransitionMap;
}) {
  return (
    <ViewTransition enter={enter} exit={exit}>
      {children}
    </ViewTransition>
  );
}

export function SharedTransition({
  name,
  children,
  share,
}: {
  name: TransitionId;
  children: React.ReactNode;
  share?: ViewTransitionClass;
}) {
  return (
    <ViewTransition name={name} share={share}>
      {children}
    </ViewTransition>
  );
}

export function TransitionButtonLink({
  type,
  children,
  className,
  ...props
}: TransitionLinkProps) {
  return (
    <TransitionLink
      type={type}
      className={clsx(
        'flex w-fit items-center gap-1 rounded-md bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white',
        className,
        type === 'transition-backwards' && 'pl-1.5',
        type === 'transition-forwards' && 'pr-1.5',
      )}
      {...props}
    >
      {type === 'transition-backwards' && (
        <ChevronLeftIcon className="size-5 opacity-40" />
      )}
      {children}
      {type === 'transition-forwards' && (
        <ChevronRightIcon className="size-5 opacity-40" />
      )}
    </TransitionLink>
  );
}
