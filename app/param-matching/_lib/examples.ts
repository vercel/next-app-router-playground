export const examples = [
  {
    mode: 'not-found',
    result: 'Returns 404',
    title: 'Only listed parameters',
    description:
      'Product 1 is listed in generateStaticParams. Other IDs return 404, even when the product exists.',
  },
  {
    mode: 'blocking',
    result: 'Waits for the product',
    title: 'Wait for generation',
    description:
      'Product 1 is prerendered. A new ID waits for its static result before Next.js serves it.',
  },
  {
    mode: 'fallback',
    result: 'Shows a fallback while loading',
    title: 'Show a fallback',
    description:
      'Product 1 is prerendered. A new ID shows the product fallback while Next.js generates the result.',
  },
  {
    mode: 'dynamic',
    result: 'Resolves the ID per request',
    title: 'Resolve at request time',
    description:
      'No IDs are prerendered. The parameter resolves per request, while the product query can still use the data cache.',
  },
] as const;

export type MatchingMode = (typeof examples)[number]['mode'];
