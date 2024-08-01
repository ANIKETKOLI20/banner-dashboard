import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const BannerImageComp = ({ banner, onEdit }) => {
  return (
    <Card style={{ position: 'relative', margin: '10px' }}>
      <CardMedia
        component="img"
        height="140"
        image={banner.image}
        alt={banner.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {banner.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {banner.description}
        </Typography>
        <Button variant="contained" color="primary">
          {banner.cta}
        </Button>
      </CardContent>
      <IconButton
        style={{ position: 'absolute', top: '10px', right: '10px' }}
        onClick={() => onEdit(banner)}
      >
        <EditIcon />
      </IconButton>
    </Card>
  );
};

export default BannerImageComp;
