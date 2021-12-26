import React, { memo, useCallback, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { styles, Loader } from './Styles';

const initialValues = {
  name: '',
  subject: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = useCallback(async ({ name, subject, email, message }) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        subject,
        email,
        message,
      }),
    });
    if (res.status === 200) console.log('Response succeeded');
    setSuccess(true);
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string(),
      subject: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div className={styles.container} id="contact">
      <h4 className="text-center text-center text-zinc-200 text-2xl mb-4 px-4">
        Want to hire me? Let&lsquo;s have a chat!
      </h4>
      <form onSubmit={formik.handleSubmit} className={styles.inner}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className={styles.inputField}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          disabled={success}
        />
        {(formik.touched.name || formik.submitCount) && formik.errors.name ? (
          <p className={styles.error}>{formik.errors.name}</p>
        ) : null}
        <label htmlFor="email" className={styles.label}>
          Email *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.inputField}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Your email"
          disabled={success}
        />
        {(formik.touched.email || formik.submitCount) && formik.errors.email ? (
          <p className={styles.error}>{formik.errors.email}</p>
        ) : null}
        <label htmlFor="subject" className={styles.label}>
          Subject *
        </label>
        <input
          type="subject"
          name="subject"
          id="subject"
          className={styles.inputField}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
          placeholder="A very exiting project"
          disabled={success}
        />
        {(formik.touched.subject || formik.submitCount) && formik.errors.subject ? (
          <p className={styles.error}>{formik.errors.subject}</p>
        ) : null}
        <label htmlFor="message" className={styles.label}>
          Message *
        </label>
        <textarea
          name="message"
          id="message"
          className={styles.inputField}
          rows="3"
          placeholder="Your message"
          disabled={success}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {(formik.touched.message || formik.submitCount) && formik.errors.message ? (
          <p className={styles.error}>{formik.errors.message}</p>
        ) : null}
        {formik.isSubmitting ? (
          <Loader />
        ) : success ? (
          <p className="mt-8 text-white text-center text-lg">Successfully sent!</p>
        ) : (
          <button type="submit" className={styles.button}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default memo(Contact);
