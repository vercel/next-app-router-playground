import type { ParamMatching } from 'next';

export const unstable_paramMatching = {
  lang: 'not-found',
} satisfies ParamMatching<'lang'>;

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
