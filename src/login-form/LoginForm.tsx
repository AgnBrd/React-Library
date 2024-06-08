import React, { useCallback, useMemo } from 'react';
import './LoginForm.css';
import { TextField, Button } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../api/ApiProvider';

function LoginForm() {
  const navigate = useNavigate();
  const apiClient = useApi();

  const onSubmit = useCallback(
    (values: { username: string; password: string }, formik: any) => {
      apiClient.login(values).then((response) => {
        if (response.success && response.data && response.data.role) {
          const roles = response.data.role; // Zakładamy, że odpowiedź zawiera pole "roles"
          if (roles.includes('ROLE_EMPLOYEE') || roles.includes('ROLE_ADMIN')) {
            navigate('/librarianHome');
          } else if (roles.includes('ROLE_READER')) {
            navigate('/readerHome');
          } else {
            formik.setFieldError('username', 'Unknown user role');
          }
        } else {
          formik.setFieldError('username', 'Invalid username or password');
        }
      });
    },
    [apiClient, navigate],
  );

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        username: yup.string().required('Field username is required'),
        password: yup
          .string()
          .required('Field password is required')
          .min(5, 'Password must be at least 5 characters long'),
      }),
    [],
  );

  return (
    <div className="login-page">
      <div className="login-image"></div>
      <div className="login-form-container">
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnChange
          validateOnBlur
        >
          {(formik: any) => (
            <form
              className="login-form"
              id="signForm"
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <h1>Log in</h1>
              <TextField
                id="username"
                name="username"
                label="Username"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && !!formik.errors.username}
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && !!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                variant="contained"
                type="submit"
                form="signForm"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Confirm
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
