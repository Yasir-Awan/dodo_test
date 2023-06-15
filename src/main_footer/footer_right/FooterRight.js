import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography,Divider,Stack,IconButton,TextField,Button } from '@mui/material';
// import AcUnit from '@mui/icons-material/AcUnit'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import MailIcon from '@mui/icons-material/Mail';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function FooterRight() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '40%',
          height: '300px', // Adjust the desired height here
        },
        minHeight: '70vh',
        border: 'none', // Set border to 'none'
        outline:'none',
        boxShadow:'none',
      }}
    >
      <Paper
            sx={{
                backgroundColor: 'transparent',
                transform: 'translate(200px, 0px)',
                border: 'none', // Set border to 'none'
                outline:'none',
                boxShadow:'none',
                }}
        >
            <Stack sx={{mt:6,ml:2}}>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            //   sx={{ ml: 2, mt: -3.15 }}
            >
                <AcUnit/>
            </IconButton> */}
            <Stack direction='row'>
            <TextField sx={{minWidth:'20rem',height:'3.4rem',background:'white'}} id="standard-basic" label="Enter Your Email Address" variant="outlined" />
                <Button variant='contained' sx={{height:'min-content','&:hover': {
                          bgcolor: 'black', // Change the color on hover here
                        },whiteSpace: 'nowrap',background:'#82bd2e',color:'white',size:'fit-content',borderRadius:'5px',ml:2,mt:1}}>Sign Up</Button>
            </Stack>
            </Stack>
            <Typography variant="h6" sx={{mt:6,ml:2,fontWeight:'bold',whiteSpace:'nowrap'}}>
                LEGAL NOTICE
            </Typography>
            <Divider sx={{ borderWidth: '2px', width:'85%', ml:2 }}/>
            <Box sx={{ml:2}}>
                    <Typography component='div' sx={{whiteSpace:'nowrap',color:'#aab49f'}}>
                        Returns
                    </Typography>
                    <Typography component='div' sx={{whiteSpace:'nowrap',color:'#aab49f'}}>
                        Term And Conditions
                    </Typography>
                    <Typography component='div' sx={{whiteSpace:'nowrap',color:'#aab49f'}}>
                        Privacy Policy
                    </Typography>
            </Box>

        </Paper>
    </Box>
  );
}
