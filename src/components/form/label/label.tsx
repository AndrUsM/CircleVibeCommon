import React from 'react';
import classnames from 'classnames';

import { ExtendedReactFunctionalComponent } from 'src/types';

interface LabelProps {
  hasErrors?: boolean;
}

export const Label: ExtendedReactFunctionalComponent<LabelProps> = ({ children, hasErrors }) => {
  return (
    <span
      className={classnames('text-base truncate min-h-3 block', {
        'text-default': !hasErrors,
        'text-error': hasErrors,
      })}
    >
      {children}
      {hasErrors ? '*' : ''}
    </span>
  );
};
