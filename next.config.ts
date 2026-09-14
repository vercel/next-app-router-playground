import createMDX from '@next/mdx';
import { type CodeHikeConfig } from 'codehike/mdx';
import type { NextConfig } from 'next';

const nextConfig = {
  output: 'standalone',
  cacheComponents: true,
  partialPrefetching: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: { inlineCss: true },
} satisfies NextConfig;

const codeHikeConfig = {
  components: { code: 'MyCode', inlineCode: 'MyInlineCode' },
} satisfies CodeHikeConfig;

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-codehike', codeHikeConfig] as any],
    recmaPlugins: [['recma-codehike', codeHikeConfig] as any],
  },
});

export default withMDX(nextConfig);
