import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors'; // Import MUI's color system
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';

function SignIn() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter and one special character'
      ),
  });

  const handleSubmit = (values: { email: string, password: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    setTimeout(() => {
      console.log('Form values:', values);
      setSubmitting(false);
    }, 200);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: green[900], // Change primary color to dark green
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <Field
                  type="email"
                  name="email"
                  label="Email Address"
                  as={TextField}
                  variant="standard"
                  fullWidth
                  id="email"
                />
                <div style={{ color: red[500] }}>
                  <ErrorMessage name="email" component="div" />
                </div>
                <Field
                  type="password"
                  name="password"
                  label="Password"
                  as={TextField}
                  variant="standard"
                  fullWidth
                  id="password"
                />
                <div style={{ color: red[500] }}>
                  <ErrorMessage name="password" component="div" />
                </div>

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: green[900], color: grey[100] }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Signing In...' : 'Sign In'}
                </Button>
                <Grid container spacing={6}>
                  <Grid item xs >
                    <Link href="/Forget" variant="body2" sx={{ color: green[900] }}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/Signup" variant="body2" sx={{ color: green[900] }}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
