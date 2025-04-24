import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    inlineCss: true,
    useCache: true,
    clientSegmentCache: true,
    ppr: true,
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
