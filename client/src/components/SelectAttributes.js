import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material'

export default function SelectAttributes({ selected, setSelected, setName }) {

  const handleChange = (event) => {
    setSelected({
      ...selected,
      [event.target.name]: event.target.checked,
    });
  };

  const { mobile, email } = selected;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Select how to contact you.</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={mobile} onChange={handleChange} name="mobile" />
            }
            label="Share phone number"
          />
          <FormControlLabel
            control={
              <Checkbox checked={email} onChange={handleChange} name="email" />
            }
            label="Share email"
          />

          <TextField required id="outlined-required" label=" Name" variant="standard" placeholder='Please enter your name' onChange={({ target }) => { setName(target.value) }} />
        </FormGroup>
      </FormControl>
    </Box>
  );
}