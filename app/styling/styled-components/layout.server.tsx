import StyledComponentsRegistry from './registry.client'

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  )
}