'use client';

import Link from 'next/link';

export const ExplanationBlock = ({
  description,
  link,
}: {
  description: string;
  link: string;
}) => {
  return (
    <div className="p-4 space-y-2 text-white rounded-lg bg-white/10">
      <div className="text-3xl font-bold ">How does this work?</div>
      <div className="text-white/60">{description}</div>
      <Link href={link} target="blank">
        Learn More
      </Link>
    </div>
  );
};
