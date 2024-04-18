import Sheet from '@mui/joy/Sheet';
import SignUp from './signup';
import * as React from 'react';
import { green } from '@mui/material/colors';

export default function SignupSheet() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Set the container height to 100% of the viewport height
        marginTop:'5vh'
      }}
    >
      <Sheet
        variant="outlined"
        color="neutral"
        sx={{
          width: '100vh',
          height: 'fit-content',
          // backgroundColor: green[100], // Set the background color to light green
        }}
      >
        <SignUp /> {/* Place the SignUp component inside the Sheet */}
      </Sheet>
    </div>
  );
}