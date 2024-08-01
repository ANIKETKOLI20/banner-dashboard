import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import BannerImageComp from './pages/BannerImageComp.js';
import EditBannerTemplateBs from './pages/EditBannerTemplateBs.js';
import initialBanners from './banners.json';

const App = () => {
  const [banners, setBanners] = useState(initialBanners);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleEdit = (banner) => {
    setSelectedBanner(banner);
    setEditModalOpen(true);
  };

  const handleSave = (editedBanner) => {
    setBanners(banners.map(b => b.id === editedBanner.id ? editedBanner : b));
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {banners.map(banner => (
          <Grid item xs={12} sm={6} md={4} key={banner.id}>
            <BannerImageComp banner={banner} onEdit={handleEdit} />
          </Grid>
        ))}
      </Grid>
      {selectedBanner && (
        <EditBannerTemplateBs
          banner={selectedBanner}
          open={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </Container>
  );
};

export default App;
