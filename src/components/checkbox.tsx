import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked sx={{ Color: 'green' }} />} // Set the color to green
        label="I agree to the terms of service"
      />
    </FormGroup>
  );
}
