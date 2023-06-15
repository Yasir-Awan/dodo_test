import React from 'react'
import { LocalPizza, LoginTwoTone,Description} from '@mui/icons-material';
import { Container, Grid,Typography,Box} from '@mui/material'


const TopContainer = () => {
  return (
    <>
        <Box sx={{display:'flex'}}>
            <Grid container spacing={0} >
            <Grid item xs={3.35} sx={{ width:'fit-content'}}>
            <Typography component="div" sx={{ml:3}}>
                nulla posuere sollicitudin aliquam ultrices
                </Typography>
            </Grid>
            <Grid item xs={0.90} >
              <LocalPizza sx={{color:'#9ec069',transform: 'rotate(45deg)',  mt:0.25}} />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={0.35}>
              <LoginTwoTone sx={{transform:'rotate(90deg)',mt:0.25}} />
            </Grid>
            <Grid item xs={0.85}>
                <Typography component="div" sx={{mt:0.25,ml:1}}>
                  Sign in
                </Typography>
            </Grid>
            <Grid item xs={0.40}>
              <Description sx={{transform:'rotate(180deg)',mt:0.25}} />
            </Grid>
            <Grid item xs={2.10} >
              <Typography component="div" sx={{mt:0.25}}>
                  Get Registered
                </Typography>
            </Grid>

            </Grid>
        </Box>
    </>
  )
}

export default TopContainer