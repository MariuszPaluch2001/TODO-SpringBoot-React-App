import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';

interface BoxProps {
  box_size: number,
  text: string,
  color: string,
  link: string
}

export default function BoxComponent(props : BoxProps) {
  return (
      <Link href={props.link}>
        <Box component="button" sx={{ p: props.box_size, 
                                      border: '1px solid grey', 
                                      margin:'5%', 
                                      bgcolor: props.color,
                                  }}>
            {props.text}
        </Box>
      </Link>
  );
}