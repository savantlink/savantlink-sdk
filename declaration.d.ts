import React from 'react'

// declaration.d.ts
declare module '*.scss'
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}
