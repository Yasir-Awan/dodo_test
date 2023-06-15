import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Button,Grid } from '@mui/material';
import { makeStyles } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function AppMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' ,mt:2}}>
      <Grid container spacing={0}  >
            <Grid item xs={1.5} >
            </Grid>
            <Grid item xs={1.5} >
            <Typography sx={{ minWidth: 100 }}>Home</Typography>
            </Grid>
            <Grid item xs={1.5} >
            <Typography sx={{ minWidth: 100 }}>Shop Products</Typography>
            </Grid>
            <Grid item xs={1.5} >
            <Typography sx={{ minWidth: 100 }}>About Us</Typography>
            </Grid>
            <Grid item xs={1.5} >
            <Typography sx={{ minWidth: 100 }}>Become A Member</Typography>
            </Grid>
            <Grid item xs={1.5} >
                <Button
                    sx={{ minWidth: 100,textTransform: 'none' ,ml:2,mt:-1.25,fontSize:"1em", color:'black'}}
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    Recources
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: -1 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </Button>
            </Grid>
            <Grid item xs={1.5} >
            <Button variant="contained" size='auto' sx={{  textTransform: 'none', fontSize: '12px',p:0 ,bgcolor:'#689c1d' }}>
              FAQ's
            </Button>
            </Grid>
            <Grid item xs={1.5} >
            </Grid>
      </Grid>

      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
