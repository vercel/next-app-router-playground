import createMDX from '@next/mdx';
import { type CodeHikeConfig } from 'codehike/mdx';

const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    inlineCss: true,
    cachedNavigations: true,
    viewTransition: true,
  },
};

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
