import React from 'react';
import styles from './CreditCardA11y.module.scss';
import Input from './Input/Input';

export const CreditCardA11y = (): JSX.Element => {
  const [number, setNumber] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  return (
    <div className={styles.card}>
      <div>
        <Input name="number" label="number" onChange={setNumber} />
      </div>
      <div>
        <div>
          <Input name="expiry-date" label="expiry date" onChange={setExpiryDate} />
        </div>
      </div>
    </div>
  );
};
