import React, { memo, useCallback, useState } from 'react';

import { styles } from './Styles';

const initialValues = {
  name: '',
  email: '',
  message: '',
  submitted: false,
};

const Contact = () => {
  const [{ name, email, message, submitted }, setValues] = useState(initialValues);

  const handleChange = useCallback(
    type =>
      ({ target: { value: newValue } }) =>
        setValues(v => ({ ...v, [type]: newValue })),
    [],
  );
  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (res.status === 200) console.log('Response succeeded');
      setValues(initialValues);
    },
    [name, email, message],
  );

  return (
    <>
      <div className={styles.container}>
        <form className={styles.main}>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange('name')}
            type="text"
            name="name"
            className={styles.inputField}
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange('email')}
            type="email"
            name="email"
            className={styles.inputField}
          />
          <label htmlFor="message">Message</label>
          <input
            onChange={handleChange('message')}
            type="text"
            name="message"
            className={styles.inputField}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default memo(Contact);
