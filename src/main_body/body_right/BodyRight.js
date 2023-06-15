import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BodyRight(props) {
  const [listName, setListName] = useState(props.selectedListItem);
  const [ans,setAnswer] = useState('lorem ipsum smith jam');

  // Update the component whenever the prop value changes
  React.useEffect(() => {
    setListName(props.selectedListItem);
  }, [props.selectedListItem]);



  return (
    <Card sx={{ minWidth: 440, maxWidth:440, minHeight: 450, mb: 6, borderRadius: '20px' }}>
      <CardContent sx={{ml:4}}>
        <Typography variant="h5" component="div">
          {listName}
        </Typography>

        <Typography variant="body2" sx={{mt:4}}>
            {ans}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More {listName}</Button> */}
      </CardActions>
    </Card>
  );
}
