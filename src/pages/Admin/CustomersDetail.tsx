// v1.3 - CustomersDetail.tsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Chip,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SaveIcon from '@mui/icons-material/Save';
import PeopleIcon from '@mui/icons-material/People';
import PageContainer from '../../layout/PageContainer';

function TagsInput() {
  const [tags, setTags] = useState(['Rates', 'Sales Shopper', 'Newsletter']);
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
    }
    setNewTag('');
  };
  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <Box>
      <Box display="flex" gap={1} flexWrap="wrap" mb={1}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onDelete={() => handleRemoveTag(tag)}
            sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}
            variant="outlined"
          />
        ))}
      </Box>
      <Box display="flex" gap={1}>
        <TextField
          size="small"
          placeholder="Add a tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
          sx={{
            '& .MuiOutlinedInput-root': { bgcolor: 'background.paper' },
          }}
        />
        <Button variant="outlined" sx={{ color: 'secondary.main', borderColor: 'secondary.main' }} onClick={handleAddTag}>
          Add
        </Button>
      </Box>
    </Box>
  );
}

function CustomersDetail() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notes, setNotes] = useState('Very cool person!\nRates the items a lot.');

  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <PageContainer
      title="Customer Detail"
      subtitle="Edit permissions, advanced customer settings, etc."
      icon={<PeopleIcon sx={{ color: 'secondary.main', fontSize: 32 }} />}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} xl={4}>
          <Typography variant="h6" mb={2} sx={{ color: 'secondary.main' }}>
            Info
          </Typography>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Box textAlign="center" mb={3}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main',
                    color: '#fff',
                    mx: 'auto',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}
                >
                  BC
                </Box>
                <Typography variant="h5">Blaine Cottrell</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Montreal, Canada
                </Typography>
              </Box>

              <Box display="flex" justifyContent="center" gap={1} mb={3}>
                <Button variant="contained" sx={{ bgcolor: 'secondary.main', ':hover': { bgcolor: '#e59100' } }}>
                  Edit
                </Button>
                <Button variant="outlined" sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}>
                  Block
                </Button>
                <IconButton onClick={handleMenuOpen} sx={{ color: 'secondary.main' }}>
                  <MoreHorizIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                  <MenuItem onClick={handleMenuClose}>View Invoice</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Track Package</MenuItem>
                </Menu>
              </Box>

              {/* Stats */}
              <Box mb={2}>
                <Box display="flex" alignItems="center" mb={1}>
                  <InventoryIcon sx={{ mr: 1, color: 'secondary.main' }} />
                  <Typography variant="body2" sx={{ flexGrow: 1 }}>
                    Lifetime Spent
                  </Typography>
                  <Typography>$5,325.55</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <ShoppingCartIcon sx={{ mr: 1, color: 'secondary.main' }} />
                  <Typography variant="body2" sx={{ flexGrow: 1 }}>
                    Average Order
                  </Typography>
                  <Typography>$590.50</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <InventoryIcon sx={{ mr: 1, color: 'secondary.main' }} />
                  <Typography variant="body2" sx={{ flexGrow: 1 }}>
                    Order Count
                  </Typography>
                  <Typography>17</Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* For brevity: shipping/billing addresses if needed */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} xl={8}>
          <Typography variant="h6" mb={2} sx={{ color: 'secondary.main' }}>
            History
          </Typography>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ color: 'secondary.main' }}>
                New Order
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                21.12.2021
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.primary', mt: 1 }}>
                Jujubes tootsie roll liquorice cake jelly beans pudding gummi bears chocolate cake donut...
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h6" mb={2} sx={{ color: 'secondary.main' }}>
            Additional Info
          </Typography>
          <Card>
            <CardContent>
              <Box mb={3}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Values
                </Typography>
                <TagsInput />
              </Box>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Notes
                </Typography>
                <TextField
                  multiline
                  rows={3}
                  fullWidth
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': { bgcolor: 'background.paper' },
                  }}
                />
              </Box>
            </CardContent>
          </Card>

          <Box textAlign="right" mt={2}>
            <Button variant="outlined" startIcon={<SaveIcon />} sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}>
              Update
            </Button>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default CustomersDetail;
