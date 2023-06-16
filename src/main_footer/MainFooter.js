import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import FooterLeft from './footer_left/FooterLeft';
import FooterMiddle from './footer_middle/FooterMiddle';
import FooterRight from './footer_right/FooterRight';

export default function MainFooter() {
  return (
    <Box
      sx={{
        bgcolor: '#d7e4ca',
        mt:8,
        justifyContent: 'center',
        // display: 'flex',
        // flexWrap: 'wrap',
        '& > :not(style)': {
        //   m: 1,
          width: "100%",
          // height: 128,
        },
        minHeight: '60vh',
      }}
    >
        <Grid container spacing={0} >
            <Grid item xl={4} sx={{ width:'fit-content'}}>
            <FooterLeft/>
            </Grid>

            <Grid item xl={4} sx={{ width:'fit-content'}}>
            <FooterMiddle/>
            </Grid>

            <Grid item xl={4} sx={{ width:'fit-content'}}>
            <FooterRight/>
            </Grid>
        </Grid>



    </Box>
  );
}
