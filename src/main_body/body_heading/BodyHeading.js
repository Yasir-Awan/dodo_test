import React from 'react';
import { Typography, Stack} from '@mui/material';

const BodyHeading = () => {
  return (
    <Stack direction='row' display="flex" justifyContent="flex-start" width="100%" >
      <Typography variant="h4" sx={{ whiteSpace: 'nowrap', textAlign: 'left', ml:21,mt:5,mb:4 ,fontWeight:'bold' }}>
        Frequently Asked Questions
      </Typography>
    </Stack>
  );
};

export default BodyHeading;
