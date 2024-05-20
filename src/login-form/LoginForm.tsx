import React, { useCallback, useMemo } from 'react';
import './LoginForm.css';
import { TextField, Button } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const onSubmit = useCallback(
    (values: { username: string; password: string }, formik: any) => {
      navigate('/home');
      console.log('/home');
    },
    [navigate],
  );

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        username: yup.string().required('Fild username is required'),
        password: yup
          .string()
          .required('Field password is required')
          .min(5, 'Password must be at list 5 characters long'),
      }),
    [],
  );
  return (
    <div>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validationOnChange
        validateOnBlur
      >
        {(formik: any) => (
          <form
            className="Login-form"
            id="signFrom"
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
              form="signFrom"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Confirm
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
