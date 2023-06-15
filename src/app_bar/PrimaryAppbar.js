import * as React from 'react';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AcUnit from '@mui/icons-material/AcUnit'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const theme = createTheme({
  palette: {
    primary: {
      main: '#cccccc',
    },
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'absolute',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.white, 0.30),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.60),
  },
  marginTop: '-10px', // Adjust the marginTop value to vertically align the search component
  [theme.breakpoints.up('sm')]: {

    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'center',
  top: '49%',
  transform: 'translateY(-49%)',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  height:30,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '18ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  paddingRight: '40px', // Adjust the paddingRight value to create space for the magnifier icon
}));

export default function PrimaryAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ borderRadius: '25px', height: '36px' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, mt: -3.15 }}
            >
              <AcUnit />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block', marginTop: '-25px' },
              }}
            >
              HGP
            </Typography>
            {/* <Divider orientation="vertical" variant="middle" flexItem sx={{ml:-8,height:36, mt:1,mb:1}}/> */}
            <Search sx={{ mt: -3.5 ,marginLeft:'30%',marginRight:'30%'}}>
              <StyledInputBase
               sx={{paddingLeft:'1.5rem'}}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
              <SearchIconWrapper sx={{height:'36px',background:'#82bc31',marginLeft:'15rem',paddingTop:'8.5px'}}>
                <SearchIcon sx={{color:'white',}}/>
              </SearchIconWrapper>
            </Search>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{mr: 2, mt: -3.15 }}
            >
              <ShoppingCartIcon />
              </IconButton>
              <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: 2, mt: -3.15 }}
            >
              <AccountCircleIcon/>

            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
