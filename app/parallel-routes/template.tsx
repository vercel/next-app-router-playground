import { Boundary } from '#/ui/boundary';

export default function Template({ children }: { children: React.ReactNode }) {
  return <Boundary labels={['Template boundary']}>{children}</Boundary>;
}
