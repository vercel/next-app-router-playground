import StyledJsxRegistry from './registry'

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <StyledJsxRegistry>
      {children}
    </StyledJsxRegistry>
  )
}