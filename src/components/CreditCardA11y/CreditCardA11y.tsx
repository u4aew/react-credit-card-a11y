import React from 'react';
import Input from './Input/Input';

export const CreditCardA11y = (): JSX.Element => {
  const [text, setText] = React.useState();
  return (
    <div>
      {text}
      <div>
        <Input label="Your text" onChange={setText} />
      </div>
    </div>
  );
};
