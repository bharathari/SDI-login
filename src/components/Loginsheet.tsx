import Sheet from '@mui/joy/Sheet';
import SignIn from './login';
import * as React from 'react';
import { green } from '@mui/material/colors';

export default function SimpleSheet() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Set the container height to 100% of the viewport height
      }}
    >
      <Sheet
        variant="outlined"
        color="neutral"
        sx={{
          width: '700px',
          height: '500px',
          // backgroundColor: green[100], // Set the background color to light green
        }}
      >
        <SignIn /> {/* Place the SignIn component inside the Sheet */}
      </Sheet>
    </div>
  );
}
