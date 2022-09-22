import StyledComponentsRegistry from './registry'

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  )
}