import React from 'react';
import { Sheet } from '@mui/joy'; // Import Sheet from Joy UI
import { blue } from '@mui/material/colors'; // Assuming you still need blue for styling
import SimpleSheet from './Loginsheet';


export default function ParentSheet() {
  return (
    <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // or 'scroll' depending on your preference
  }}
>

      {/* Remove component prop */}
      <Sheet
        variant="outlined"
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: blue[100],
          opacity: 0.9,
          padding: '20px',
          boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)', // Add box shadow for depth
        }}
      >
        <SimpleSheet /> {/* Place the SignIn component inside the Sheet */}
      </Sheet>
    </div>
  );
}