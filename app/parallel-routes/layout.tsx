import { Boundary } from '#/ui/boundary';

export default function Layout({ children, slot }) {
  return (
    <>
      {children}
      <Boundary labels={['slot']}>{slot}</Boundary>
    </>
  );
}
