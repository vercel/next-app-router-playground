import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import { type CodeHikeConfig } from 'codehike/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    inlineCss: true,
    useCache: true,
    clientSegmentCache: true,
    viewTransition: true,
    ppr: true,
  },
} satisfies NextConfig;

const codeHikeConfig = {
  components: { code: 'MyCode', inlineCode: 'MyInlineCode' },
} satisfies CodeHikeConfig;

const withMDX = createMDX({
  options: {
    remarkPlugins: [[require.resolve('./remark-codehike.mjs'), codeHikeConfig]],
    recmaPlugins: [[require.resolve('./recma-codehike.mjs'), codeHikeConfig]],
  },
});

export default withMDX(nextConfig);
