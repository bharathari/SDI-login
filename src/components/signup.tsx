import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import CheckboxLabels from './checkbox';
import { green } from '@mui/material/colors';
import SelectVariants from './Dropdown';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom'
function SignUp() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    cpassword: '',
    country: '',
  };

  const signUpSchema = Yup.object().shape({
    name: Yup.string().required('Enter name'),
    email: Yup.string().email('Enter valid email').required('Enter email'),
    password: Yup.string()
      .required('Required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
        'Password should be of minimum 8 characters length and must include at least one lowercase letter, one uppercase letter, one number, and one special character'
      ),
    cpassword: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password')], 'Password does not match'),
    country: Yup.string().required('Organization is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: green[900],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Username"
              variant="outlined"
              margin="normal"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
              fullWidth
              id="email"
              name="email"
              label="E-mail"
              variant="outlined"
              margin="normal"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <TextField
              fullWidth
              id="cpassword"
              name="cpassword"
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={formik.values.cpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.cpassword && Boolean(formik.errors.cpassword)}
              helperText={formik.touched.cpassword && formik.errors.cpassword}
            />

            <TextField
              fullWidth
              id="country"
              name="country"
              label="Organisation"
              variant="outlined"
              margin="normal"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />

            <SelectVariants />

            <CheckboxLabels />
            
<Link to="/accreg">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </Link>
          </form>

          <Grid container>
            <Grid item xs></Grid>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
