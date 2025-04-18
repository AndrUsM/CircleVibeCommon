import React from 'react';

import { ExtendedReactFunctionalComponent } from "src/types"


export const FormError: ExtendedReactFunctionalComponent = ({children}) => {
  return (
    <span className="text-error text-base truncate min-h-3">{children}</span>
  )
}