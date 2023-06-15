import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography,Divider,Stack,IconButton } from '@mui/material';
import AcUnit from '@mui/icons-material/AcUnit'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function FooterMiddle() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '20%',
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
                transform: 'translate(150px, 0px)',
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
            <Box >
                <Typography variant="h5" sx={{whiteSpace:'nowrap'}}>
                    Join Our Newsletter
                </Typography>
                <Typography component='div' sx={{whiteSpace:'nowrap',color:'#757f6a'}}>
                    Lorem Ipsum Dollar Sit Ammit
                </Typography>
            </Box>
            </Stack>
            <Typography variant="h6" sx={{mt:6,ml:2,fontWeight:'bold'}}>
                NAVIGATION
            </Typography>
            <Divider sx={{ borderWidth: '2px', width:'250%', ml:2 }}/>
            <Box sx={{ml:2}}>
                    <Typography component='div' sx={{whiteSpace:'nowrap',color:'#aab49f'}}>
                        About Us
                    </Typography>
                    <Typography component='div' sx={{whiteSpace:'nowrap',color:'#aab49f'}}>
                        Contact Us
                    </Typography>
                    <Typography component='div' sx={{whiteSpace:'nowrap',color:'#aab49f'}}>
                        Blog
                    </Typography>
                    <Typography component='div' sx={{whiteSpace:'nowrap',color:'#aab49f'}}>
                        Shipping
                    </Typography>
                    <Typography component='div' sx={{whiteSpace:'nowrap',color:'#aab49f'}}>
                        Information
                    </Typography>
                    <Typography component='div' sx={{whiteSpace:'nowrap',color:'#aab49f'}}>
                        FAQs
                    </Typography>
                    <Typography component='div' sx={{whiteSpace:'nowrap',color:'#aab49f'}}>
                        Giveaway
                    </Typography>
            </Box>

        </Paper>
    </Box>
  );
}
