import { Boundary } from '#/ui/boundary';

export default function Page({ children }: { children: React.ReactNode }) {
  return <Boundary>{children}</Boundary>;
}
