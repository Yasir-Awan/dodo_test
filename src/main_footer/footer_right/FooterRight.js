import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Divider, Stack, IconButton, TextField, Button } from '@mui/material';
import Popper from '@mui/material/Popper';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function FooterRight() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '40%',
          height: '300px',
        },
        minHeight: '55vh',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
      }}
    >
      <Paper
        sx={{
          backgroundColor: 'transparent',
          transform: 'translate(125px, 0px)',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
        }}
      >
        <Stack sx={{ mt: 6, ml: 2 }}>
          {/* Rest of your code */}
          {/* ... */}
          <Stack direction='row'>
            <TextField sx={{ minWidth: '20rem', height: '3.4rem', background: 'white' }} id="standard-basic" label="Enter Your Email Address" variant="outlined" />
            <Button variant='contained' sx={{ height: 'min-content', '&:hover': { bgcolor: 'black' }, whiteSpace: 'nowrap', background: '#82bd2e', color: 'white', size: 'fit-content', borderRadius: '5px', ml: 2, mt: 1 }}>Sign Up</Button>
          </Stack>
        </Stack>
        <Typography variant="h6" sx={{ mt: 6, ml: 2, fontWeight: 'bold', whiteSpace: 'nowrap' }}>
          LEGAL NOTICE
        </Typography>
        <Divider sx={{ borderWidth: '2px', width: '85%', ml: 2 }} />
        <Box sx={{ ml: 2 }}>
          <Typography component='div' sx={{ whiteSpace: 'nowrap', color: '#aab49f' }}>
            Returns
          </Typography>
          <Typography component='div' sx={{ whiteSpace: 'nowrap', color: '#aab49f' }}>
            Term And Conditions
          </Typography>
          <Typography component='div' sx={{ whiteSpace: 'nowrap', color: '#aab49f' }}>
            Privacy Policy
          </Typography>
        </Box>
      </Paper>
      <Stack sx={{ paddingLeft: '8rem', paddingTop: '20rem', paddingRight: '-5rem', border: 'none' }}>
        <Popper id={id} open={open} anchorEl={anchorEl} placement="top">
          <Box sx={{ border: 'none', p: 0, bgcolor: 'background.paper' }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Box>
        </Popper>
        <Button sx={{ borderTop:'none', bgcolor: 'transparent' }} aria-describedby={id} type="button" onClick={handleClick}>
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
                        <ChatBubbleOutlineIcon/>
                    </IconButton>
        </Button>
      </Stack>
    </Box>
  );
}
