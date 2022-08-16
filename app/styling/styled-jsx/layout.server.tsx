import StyledJsxRegistry from './registry.client'

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <StyledJsxRegistry>
      {children}
    </StyledJsxRegistry>
  )
}