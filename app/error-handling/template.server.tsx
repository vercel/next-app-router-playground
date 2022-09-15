import { Boundary } from '@/ui/Boundary.server';

export default function Page({ children }: { children: React.ReactNode }) {
  return <Boundary>{children}</Boundary>;
}
