import * as React from 'react';
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
import BasicTextFields from './BasicTextFields'; // Import the BasicTextFields component
import SignUp from './signup';
import { green, grey } from '@mui/material/colors'; // Import MUI's color system
import TextField from '@mui/material/TextField';

function ForgetPass() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            Forget Password?
          </Typography><br></br>
          <Typography component="h1" variant="h5">
            Reset Password in two quick steps
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField id="standard-basic" label="Email" variant="standard" sx={{width:"400px"}}/> {/* Replace the TextField components with BasicTextFields */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,ml:8, backgroundColor: green[900], color: grey[100],width:"250px" }} // Dark green background, light text color
            >
              Sent OTP
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ForgetPass;
