import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponent() {
  return (
    <Box component="span" sx={{ p: 10, border: '1px solid grey ', margin:'5%' }}>
      <Button>Add todo</Button>
    </Box>
  );
}