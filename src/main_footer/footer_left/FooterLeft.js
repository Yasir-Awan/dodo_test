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
export default function FooterLeft() {
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
        minHeight: '55vh',
        border: 'none', // Set border to 'none'
        outline:'none',
        boxShadow:'none',
      }}
    >
      <Paper
            sx={{
                backgroundColor: 'transparent',
                border: 'none', // Set border to 'none'
                outline:'none',
                boxShadow:'none',
                transform: 'translate(125px, 0px)',
                }}
        >
            <Stack sx={{mt:6,ml:8}}>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            //   sx={{ ml: 2, mt: -3.15 }}
            >
                <AcUnit/>
            </IconButton> */}
            <Box>
                <Stack direction='row'>
                <Typography variant="h2" sx={{fontWeight:'bold',width:'100%'}} >
                    H
                </Typography>
                <Typography variant="h2" sx={{fontWeight:'bold',color:'#80be30'}} >
                    GP
                </Typography>
                </Stack>

            <Divider sx={{ borderWidth: '2px', width:'175%' }}/>
            <Typography variant="h6" gutterBottom sx={{whiteSpace:'nowrap',color:'#757f6a'}}>
                Home Grown Props, Inc
            </Typography>
            </Box>
            </Stack>
            <Stack direction='row' sx={{ml:4}}>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                        '&:hover': {
                          color: '#80be30', // Change the color on hover here
                        },
                      }}
                    >
                        <LocationOnIcon/>
                    </IconButton>
                    <Typography component='div' sx={{mt:1.5,whiteSpace:'nowrap',color:'#aab49f'}}>
                400 Renaissance Center Suite 2600
                Detroit MI 48243
            </Typography>
            </Stack>
            <Stack direction='row' sx={{ml:4}}>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                        '&:hover': {
                          color: '#80be30', // Change the color on hover here
                        },
                      }}
                    >
                        <MailIcon/>
                    </IconButton>
                    <Typography component='div' sx={{mt:1.5,whiteSpace:'nowrap',color:'#aab49f'}}>
                Info@thehomegrownprops.com
            </Typography>
            </Stack>
            <Stack direction='row' sx={{ml:4}}>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                        '&:hover': {
                          color: '#80be30', // Change the color on hover here
                        },
                      }}
                    >
                        <LocalPhoneIcon/>
                    </IconButton>
                    <Typography component='div' sx={{mt:1.5,whiteSpace:'nowrap',color:'#aab49f'}}>
                1-800-484-2729
            </Typography>
            </Stack>
            <Stack direction='row' sx={{ml:4}}>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                        '&:hover': {
                          color: '#80be30', // Change the color on hover here
                        },
                      }}
                    >
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                        '&:hover': {
                          color: 'blue', // Change the color on hover here
                        },
                      }}
                    >
                        <TwitterIcon/>
                    </IconButton>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                        '&:hover': {
                          color: '#80be30', // Change the color on hover here
                        },
                      }}
                    >
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                        '&:hover': {
                          color: 'purple', // Change the color on hover here
                        },
                      }}
                    >
                        <InstagramIcon/>
                    </IconButton>
            </Stack>

        </Paper>
    </Box>
  );
}
