import React, { memo, useCallback, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
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
  const { t } = useTranslation('home');
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
      email: Yup.string()
        .email(t('contact.form.email.error'))
        .required(t('contact.form.email.error')),
      subject: Yup.string().required(t('contact.form.subject.error')),
      message: Yup.string().required(t('contact.form.email.error')),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div className={styles.container} id="contact">
      <h4 className="text-center text-center text-zinc-200 text-2xl mb-4 px-4">
        {t('contact.title')}
      </h4>
      <form onSubmit={formik.handleSubmit} className={styles.inner}>
        <label htmlFor="name" className={styles.label}>
          {t('contact.form.name.label')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={t('contact.form.name.placeholder')}
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
          {t('contact.form.email.label')} *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.inputField}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder={t('contact.form.email.placeholder')}
          disabled={success}
        />
        {(formik.touched.email || formik.submitCount) && formik.errors.email ? (
          <p className={styles.error}>{formik.errors.email}</p>
        ) : null}
        <label htmlFor="subject" className={styles.label}>
          {t('contact.form.subject.label')} *
        </label>
        <input
          type="subject"
          name="subject"
          id="subject"
          className={styles.inputField}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
          placeholder={t('contact.form.subject.placeholder')}
          disabled={success}
        />
        {(formik.touched.subject || formik.submitCount) && formik.errors.subject ? (
          <p className={styles.error}>{formik.errors.subject}</p>
        ) : null}
        <label htmlFor="message" className={styles.label}>
          {t('contact.form.message.label')} *
        </label>
        <textarea
          name="message"
          id="message"
          className={styles.inputField}
          rows="3"
          placeholder={t('contact.form.message.placeholder')}
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
          <p className="mt-8 text-white text-center text-lg">{t('contact.success')}</p>
        ) : (
          <button type="submit" className={styles.button}>
            {t('contact.submit')}
          </button>
        )}
      </form>
    </div>
  );
};

export default memo(Contact);
