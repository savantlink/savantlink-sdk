declare module '*.scss'

declare module '*.svg' {
  import React from 'react'
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default content
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

declare module '*.png'
