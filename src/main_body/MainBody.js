import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, Stack, Grid, IconButton } from '@mui/material';
import BodyHeading from './body_heading/BodyHeading';
import BodyRight from './body_right/BodyRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircleIcon from '@mui/icons-material/Circle';

export default function MainBody() {
  const [selectedListItem, setSelectedListItem] = useState('');

  const handleListItemClick = (item) => {
    setSelectedListItem(item);
  };

  const handleKeyDown = (event, item) => {
    if (event.key === 'Enter') {
      setSelectedListItem(item);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#d0dabf',
        justifyContent: 'center',
        borderRadius: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
        },
        minHeight: '70vh',
      }}
    >
      <BodyHeading sx={{ padding: 'unset' }} />
      <Box sx={{ mt: -350 }}>
        <Grid container spacing={0}>
          <Grid item xs={6} sx={{ width: '100%' }}></Grid>
          <Grid item xs={6} sx={{ width: '100%' }}>
            <BodyRight selectedListItem={selectedListItem} />
          </Grid>
          <Box
            sx={{
              width: '55%',
              minWidth: 400,
              maxWidth: 440,
              bgcolor: 'background.paper',
              transform: 'translate(30px, 20px)',
              minHeight: '375px',
              mt: -60,
              mb: 18,
            }}
          >
            <nav aria-label="main mailbox folders">
              <List
                onKeyDown={(event) => {
                  const index = event.currentTarget.getAttribute(
                    'data-keyboard-focus-index'
                  );
                  const item = event.currentTarget.getAttribute('data-item');
                  if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    const nextIndex = parseInt(index) + 1;
                    const nextItemElement = document.querySelector(
                      `[data-keyboard-focus-index="${nextIndex}"]`
                    );
                    if (nextItemElement) {
                      nextItemElement.focus();
                    }
                  } else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    const prevIndex = parseInt(index) - 1;
                    const prevItemElement = document.querySelector(
                      `[data-keyboard-focus-index="${prevIndex}"]`
                    );
                    if (prevItemElement) {
                      prevItemElement.focus();
                    }
                  } else if (event.key === 'Enter') {
                    setSelectedListItem(item);
                  }
                }}
              >
                <ListItem
                  disablePadding
                  selected={selectedListItem === 'What is a Payment Gateway?'}
                  onClick={() => handleListItemClick('What is a Payment Gateway?')}
                  data-keyboard-focus-index="0"
                  data-item="What is a Payment Gateway?"
                  tabIndex={1}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: '#87be2a' }} />
                    </ListItemIcon>
                    <ListItemText primary="What is a Payment Gateway?" />
                  </ListItemButton>
                  <IconButton size="large">
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </ListItem>

                <ListItem
                  disablePadding
                  selected={
                    selectedListItem ===
                    'Do I need to pay to instapay when there is no transaction going in my business?'
                  }
                  onClick={() =>
                    handleListItemClick(
                      'Do I need to pay to instapay when there is no transaction going in my business?'
                    )
                  }
                  data-keyboard-focus-index="1"
                  data-item="Do I need to pay to instapay when there is no transaction going in my business?"
                  tabIndex={2}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: '#87be2a' }} />
                    </ListItemIcon>
                    <ListItemText primary="Do I need to pay to instapay when there is no transaction going in my business?" />
                  </ListItemButton>
                  <IconButton size="large">
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </ListItem>

                <ListItem
                  disablePadding
                  selected={
                    selectedListItem ===
                    'What platforms does instapay payment gateway support?'
                  }
                  onClick={() =>
                    handleListItemClick(
                      'What platforms does instapay payment gateway support?'
                    )
                  }
                  data-keyboard-focus-index="2"
                  data-item="What platforms does instapay payment gateway support?"
                  tabIndex={3}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: '#87be2a' }} />
                    </ListItemIcon>
                    <ListItemText primary="What platforms does instapay payment gateway support?" />
                  </ListItemButton>
                  <IconButton size="large">
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </ListItem>

                <ListItem
                  disablePadding
                  selected={
                    selectedListItem ===
                    'Does instapay provide international payments support?'
                  }
                  onClick={() =>
                    handleListItemClick(
                      'Does instapay provide international payments support?'
                    )
                  }
                  data-keyboard-focus-index="3"
                  data-item="Does instapay provide international payments support?"
                  tabIndex={4}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: '#87be2a' }} />
                    </ListItemIcon>
                    <ListItemText primary="Does instapay provide international payments support?" />
                  </ListItemButton>
                  <IconButton size="large">
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </ListItem>

                <ListItem
                  disablePadding
                  selected={
                    selectedListItem ===
                    'Is there any setup fee or annual maintainance fee to pay regularly?'
                  }
                  onClick={() =>
                    handleListItemClick(
                      'Is there any setup fee or annual maintainance fee to pay regularly?'
                    )
                  }
                  data-keyboard-focus-index="4"
                  data-item="Is there any setup fee or annual maintainance fee to pay regularly?"
                  tabIndex={5}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: '#87be2a' }} />
                    </ListItemIcon>
                    <ListItemText primary="Is there any setup fee or annual maintainance fee to pay regularly?" />
                  </ListItemButton>
                  <IconButton size="large">
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
