// src/pages/Admin/Customers/CustomersList.tsx

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Card,
  Checkbox,
  FormControlLabel,
  Pagination,
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';

function CustomersList() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [exportMenuAnchor, setExportMenuAnchor] = useState<null | HTMLElement>(null);

  const allItems = Array.from({ length: 10 }, (_, i) => i + 1);

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((x) => x !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleAllSelectToggle = () => {
    if (selectedItems.length === allItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems([...allItems]);
    }
  };

  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleExportMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => setExportMenuAnchor(e.currentTarget);
  const handleExportMenuClose = () => setExportMenuAnchor(null);

  return (
    <Box sx={{ p: 3, bgcolor: '#1e1e1e', minHeight: '100vh', color: '#fff' }}>
      <Box display="flex" alignItems="center" mb={3}>
        <PeopleIcon sx={{ color: '#ff9800', fontSize: 32, mr: 1 }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
          Customer List
        </Typography>
      </Box>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={5} lg={3}>
          <Box sx={{ position: 'relative' }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search"
              sx={{
                '& .MuiOutlinedInput-root': { color: '#fff', bgcolor: '#2a2a2a' },
                '& .MuiFormLabel-root': { color: '#ccc' },
              }}
              InputProps={{
                endAdornment: <SearchIcon sx={{ color: '#ccc' }} />,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7} lg={9} textAlign="right">
          <IconButton sx={{ color: '#ff9800', mr: 1 }}>
            <PrintIcon />
          </IconButton>
          <IconButton sx={{ color: '#ff9800', mr: 1 }} onClick={handleExportMenuOpen}>
            <DownloadIcon />
          </IconButton>
          <Menu anchorEl={exportMenuAnchor} open={Boolean(exportMenuAnchor)} onClose={handleExportMenuClose}>
            <MenuItem onClick={handleExportMenuClose}>Copy</MenuItem>
            <MenuItem onClick={handleExportMenuClose}>Excel</MenuItem>
            <MenuItem onClick={handleExportMenuClose}>CSV</MenuItem>
          </Menu>

          <Button
            variant="outlined"
            size="small"
            endIcon={<ArrowDropDownIcon />}
            sx={{ mr: 1, textTransform: 'none', color: '#ff9800', borderColor: '#ff9800' }}
            onClick={handleMenuOpen}
          >
            10 Items
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>5 Items</MenuItem>
            <MenuItem onClick={handleMenuClose}>10 Items</MenuItem>
            <MenuItem onClick={handleMenuClose}>20 Items</MenuItem>
          </Menu>

          <Button
            variant="outlined"
            size="small"
            onClick={handleAllSelectToggle}
            sx={{ textTransform: 'none', color: '#ff9800', borderColor: '#ff9800' }}
          >
            {selectedItems.length === allItems.length ? 'Unselect All' : 'Select All'}
          </Button>
        </Grid>
      </Grid>

      {/* Header */}
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          bgcolor: '#2a2a2a',
          p: 2,
          mb: 1,
          borderRadius: 1,
        }}
      >
        <Box sx={{ width: '10%' }}>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            ID
          </Typography>
        </Box>
        <Box sx={{ width: '20%' }}>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            NAME
          </Typography>
        </Box>
        <Box sx={{ width: '20%' }}>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            LOCATION
          </Typography>
        </Box>
        <Box sx={{ width: '20%' }}>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            SPENT
          </Typography>
        </Box>
        <Box sx={{ width: '20%' }}>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            LAST ORDER
          </Typography>
        </Box>
        <Box sx={{ width: '10%' }}>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            STATUS
          </Typography>
        </Box>
      </Box>

      {/* List Items */}
      {allItems.map((itemId) => (
        <Card
          key={itemId}
          sx={{
            mb: 1,
            bgcolor: selectedItems.includes(itemId) ? '#383838' : '#2a2a2a',
            color: '#fff',
            ':hover': { boxShadow: 4 },
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, p: 2 }}
            onClick={() => toggleSelectItem(itemId)}
          >
            {/* ID */}
            <Box sx={{ width: { xs: '100%', lg: '10%' }, mb: { xs: 1, lg: 0 } }}>
              <Typography variant="caption" sx={{ color: '#bbb', display: { lg: 'none' } }}>
                ID:{' '}
              </Typography>
              <Typography sx={{ color: '#ff9800' }}>24{itemId}</Typography>
            </Box>

            {/* NAME */}
            <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: { xs: 1, lg: 0 } }}>
              <Typography variant="caption" sx={{ color: '#bbb', display: { lg: 'none' } }}>
                NAME:{' '}
              </Typography>
              <Typography>Customer {itemId}</Typography>
            </Box>

            {/* LOCATION */}
            <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: { xs: 1, lg: 0 } }}>
              <Typography variant="caption" sx={{ color: '#bbb', display: { lg: 'none' } }}>
                LOCATION:{' '}
              </Typography>
              <Typography>Berlin, DE</Typography>
            </Box>

            {/* SPENT */}
            <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: { xs: 1, lg: 0 } }}>
              <Typography variant="caption" sx={{ color: '#bbb', display: { lg: 'none' } }}>
                SPENT:{' '}
              </Typography>
              <Typography>$ {Math.round(Math.random() * 500).toFixed(2)}</Typography>
            </Box>

            {/* LAST ORDER */}
            <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: { xs: 1, lg: 0 } }}>
              <Typography variant="caption" sx={{ color: '#bbb', display: { lg: 'none' } }}>
                LAST ORDER:{' '}
              </Typography>
              <Typography sx={{ color: '#ff9800' }}>{5300 + itemId}</Typography>
            </Box>

            {/* STATUS/Check */}
            <Box sx={{ width: { xs: '100%', lg: '10%' }, display: 'flex', gap: 1 }}>
              <FormControlLabel
                label=""
                control={<Checkbox checked={selectedItems.includes(itemId)} sx={{ color: '#ff9800' }} />}
                sx={{ ml: 'auto', color: '#ff9800' }}
              />
            </Box>
          </Box>
        </Card>
      ))}

      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination count={3} shape="rounded" sx={{ button: { color: '#ff9800' } }} />
      </Box>
    </Box>
  );
}

export default CustomersList;
