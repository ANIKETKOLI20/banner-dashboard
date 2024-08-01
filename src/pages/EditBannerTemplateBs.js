import React, { useState } from 'react';
import { Modal, Box, TextField, Button, MenuItem } from '@mui/material';

const EditBannerTemplateBs = ({ banner, open, onClose, onSave }) => {
  const [editedBanner, setEditedBanner] = useState(banner);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBanner({
      ...editedBanner,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(editedBanner);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...style, width: 400 }}>
        <TextField
          label="Title"
          name="title"
          value={editedBanner.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={editedBanner.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="CTA"
          name="cta"
          value={editedBanner.cta}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Image URL"
          name="image"
          value={editedBanner.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default EditBannerTemplateBs;
