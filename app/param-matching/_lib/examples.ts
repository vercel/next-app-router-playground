export const examples = [
  {
    mode: 'not-found',
    title: 'Only listed parameters',
    description:
      'Product 1 is listed in generateStaticParams. Other IDs return 404, even when the product exists.',
  },
  {
    mode: 'blocking',
    title: 'Wait for generation',
    description:
      'Product 1 is prerendered. A new ID waits for its static result before Next.js serves it.',
  },
  {
    mode: 'fallback',
    title: 'Show a fallback',
    description:
      'Product 1 is prerendered. A new ID shows the product fallback while Next.js generates the result.',
  },
  {
    mode: 'dynamic',
    title: 'Resolve at request time',
    description:
      'No IDs are prerendered. The parameter resolves per request, while the product query can still use the data cache.',
  },
] as const;

export type MatchingMode = (typeof examples)[number]['mode'];
