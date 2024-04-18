import Sheet from '@mui/joy/Sheet';
import SignUp from './signup';
import * as React from 'react';
import { green } from '@mui/material/colors';
import ForgetPass from './Forgetpass';
import AccReg from './AccReg';

export default function AccRegsheet() {
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
          height: '380px',
          // backgroundColor: green[100], // Set the background color to light green
        }}
      >
         {/* Place the SignUp component inside the Sheet */}
         <AccReg/>
      </Sheet>
    </div>
  );
}
