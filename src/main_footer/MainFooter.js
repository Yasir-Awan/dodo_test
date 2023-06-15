import * as React from 'react';
import Box from '@mui/material/Box';
import { Container,Stack } from '@mui/material';
import FooterLeft from './footer_left/FooterLeft';
import FooterMiddle from './footer_middle/FooterMiddle';
import FooterRight from './footer_right/FooterRight';
// import Paper from '@mui/material/Paper';
// import { Typography, Stack } from '@mui/material';
// import BodyHeading from './body_heading/BodyHeading';
// import BodyRight from './body_right/BodyRight';
// import BodyLeft from './body_left/BodyLeft';

export default function MainFooter() {
  return (
    <Box
      sx={{
        bgcolor: '#d7e4ca',
        mt:8,
        // justifyContent: 'center',
        // display: 'flex',
        // flexWrap: 'wrap',
        // '& > :not(style)': {
        // //   m: 1,
        //   width: "100%",
        //   // height: 128,
        // },
        minHeight: '60vh',
      }}
    >
        <Stack direction='row'>
        <FooterLeft/>
        <FooterMiddle/>
        <FooterRight/>
        </Stack>
    </Box>
  );
}
