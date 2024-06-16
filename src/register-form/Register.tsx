import React, { useCallback } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import './Register.css';
import { useTranslation } from 'react-i18next';
import { useApi } from '../api/ApiProvider';
import { useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers, FormikValues } from 'formik';
import * as yup from 'yup';

const Register: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { apiClient } = useApi();

  const onSubmit = useCallback(
    (
      values: { email: string; username: string; password: string },
      formikHelpers: FormikHelpers<{
        email: string;
        username: string;
        password: string;
      }>,
    ) => {
      apiClient
        .register(values.email, {
          username: values.username,
          password: values.password,
        })
        .then((response) => {
          if (response.success) {
            navigate('/login');
          } else {
            formikHelpers.setFieldError('email', 'Email do not exists.');
          }
        })
        .catch((error) => {
          formikHelpers.setErrors({
            email: 'An error occurred. Please try again.',
          });
        });
    },
    [apiClient, navigate],
  );

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    username: yup.string().required('Username is required'),
    password: yup
      .string()
      .min(5, 'Password must be at least 5 characters long')
      .required('Password is required'),
  });

  return (
    <div className="register-form">
      <div className="register-form-container">
        <Formik
          initialValues={{ email: '', username: '', password: '' }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnChange
          validateOnBlur
        >
          {(formik) => (
            <form
              className="register-form"
              id="signForm"
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <h1>{t('register')}</h1>
              <Grid container spacing={1} style={{ maxWidth: '400px' }}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && !!formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Username"
                    id="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && !!formik.errors.username}
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && !!formik.errors.password}
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    type="submit"
                    form="signForm"
                    disabled={!(formik.isValid && formik.dirty)}
                  >
                    {t('register')}
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
