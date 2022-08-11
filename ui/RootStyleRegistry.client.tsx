import React, { useState } from 'react'
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { useFlushEffects } from 'next/dist/client/components/hooks-client'

export default function RootStyleRegistry({ children } : { children: JSX.Element }) {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry())
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
  const styledJsxFlushEffect = () => {
    const styles = jsxStyleRegistry.styles()
    jsxStyleRegistry.flush()
    return <>{styles}</>
  }
  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.seal()
    return <>{styles}</>
  }

  useFlushEffects(() => {
    return (
      <>
        {styledJsxFlushEffect()}
        {styledComponentsFlushEffect()}
      </>
    )
  })

  // Only include style registry on server side for SSR
  if (typeof window === 'undefined') {
    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
      </StyleSheetManager>
    )
  }

  return children
}
