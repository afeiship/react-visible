import * as React from 'react'

export interface Options {
  className?: string
  value: boolean
  destroyable: boolean
  rootable: boolean
  onChange: VoidFunction
  onPresent: VoidFunction
  onDismiss: VoidFunction
}

export class ReactVisible extends React.Component<Options> { }
