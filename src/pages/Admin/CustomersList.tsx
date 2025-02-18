// src/pages/Admin/CustomersList.tsx (v1.3)
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

import PageContainer from '../../layout/PageContainer';

function CustomersList() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [exportMenuAnchor, setExportMenuAnchor] = useState<null | HTMLElement>(null);

  const allItems = Array.from({ length: 10 }, (_, i) => i + 1);

  // Toggling single item
  const toggleSelectItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  // Toggle select all
  const handleAllSelectToggle = () => {
    if (selectedItems.length === allItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems([...allItems]);
    }
  };

  // For "Items per page" menu
  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // For "Export" menu
  const handleExportMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) =>
    setExportMenuAnchor(e.currentTarget);
  const handleExportMenuClose = () => setExportMenuAnchor(null);

  return (
    <PageContainer
      title="Customer List"
      subtitle="Browse or manage registered customers"
      icon={<PeopleIcon sx={{ color: 'secondary.main', fontSize: 32 }} />}
    >
      {/* Top Bar */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={5} lg={3}>
          <Box sx={{ position: 'relative' }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search"
              sx={{
                '& .MuiOutlinedInput-root': { bgcolor: 'background.paper' },
              }}
              InputProps={{
                endAdornment: <SearchIcon sx={{ color: 'text.secondary' }} />,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7} lg={9} textAlign="right">
          {/* Print */}
          <IconButton sx={{ color: 'secondary.main', mr: 1 }}>
            <PrintIcon />
          </IconButton>
          {/* Export */}
          <IconButton sx={{ color: 'secondary.main', mr: 1 }} onClick={handleExportMenuOpen}>
            <DownloadIcon />
          </IconButton>
          <Menu
            anchorEl={exportMenuAnchor}
            open={Boolean(exportMenuAnchor)}
            onClose={handleExportMenuClose}
          >
            <MenuItem onClick={handleExportMenuClose}>Copy</MenuItem>
            <MenuItem onClick={handleExportMenuClose}>Excel</MenuItem>
            <MenuItem onClick={handleExportMenuClose}>CSV</MenuItem>
          </Menu>

          {/* Items per page */}
          <Button
            variant="outlined"
            size="small"
            endIcon={<ArrowDropDownIcon />}
            sx={{ mr: 1, textTransform: 'none', color: 'secondary.main', borderColor: 'secondary.main' }}
            onClick={handleMenuOpen}
          >
            10 Items
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>5 Items</MenuItem>
            <MenuItem onClick={handleMenuClose}>10 Items</MenuItem>
            <MenuItem onClick={handleMenuClose}>20 Items</MenuItem>
          </Menu>

          {/* Select All */}
          <Button
            variant="outlined"
            size="small"
            onClick={handleAllSelectToggle}
            sx={{ textTransform: 'none', color: 'secondary.main', borderColor: 'secondary.main' }}
          >
            {selectedItems.length === allItems.length ? 'Unselect All' : 'Select All'}
          </Button>
        </Grid>
      </Grid>

      {/* Header (visible on lg+) */}
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          bgcolor: 'background.paper',
          p: 2,
          borderRadius: 1,
          mb: 1,
        }}
      >
        <Box sx={{ width: '10%' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ID
          </Typography>
        </Box>
        <Box sx={{ width: '20%' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            NAME
          </Typography>
        </Box>
        <Box sx={{ width: '20%' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            LOCATION
          </Typography>
        </Box>
        <Box sx={{ width: '20%' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            SPENT
          </Typography>
        </Box>
        <Box sx={{ width: '20%' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            LAST ORDER
          </Typography>
        </Box>
        <Box sx={{ width: '10%' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            STATUS
          </Typography>
        </Box>
      </Box>

      {/* List Items */}
      {allItems.map((itemId) => {
        const isSelected = selectedItems.includes(itemId);
        return (
          <Card
            key={itemId}
            sx={{
              mb: 1,
              bgcolor: isSelected ? '#383838' : 'background.paper',
              ':hover': { boxShadow: 4 },
            }}
          >
            <Box
              sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, p: 2 }}
              onClick={() => toggleSelectItem(itemId)}
            >
              {/* ID */}
              <Box sx={{ width: { xs: '100%', lg: '10%' }, mb: { xs: 1, lg: 0 } }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: { lg: 'none' } }}>
                  ID:{' '}
                </Typography>
                <Typography sx={{ color: 'secondary.main' }}>24{itemId}</Typography>
              </Box>

              {/* NAME */}
              <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: { xs: 1, lg: 0 } }}>
                <Typography
                  variant="caption"
                  sx={{ color: 'text.secondary', display: { lg: 'none' } }}
                >
                  NAME:{' '}
                </Typography>
                <Typography>Customer {itemId}</Typography>
              </Box>

              {/* LOCATION */}
              <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: { xs: 1, lg: 0 } }}>
                <Typography
                  variant="caption"
                  sx={{ color: 'text.secondary', display: { lg: 'none' } }}
                >
                  LOCATION:{' '}
                </Typography>
                <Typography>Berlin, DE</Typography>
              </Box>

              {/* SPENT */}
              <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: { xs: 1, lg: 0 } }}>
                <Typography
                  variant="caption"
                  sx={{ color: 'text.secondary', display: { lg: 'none' } }}
                >
                  SPENT:{' '}
                </Typography>
                <Typography>$ {Math.round(Math.random() * 500).toFixed(2)}</Typography>
              </Box>

              {/* LAST ORDER */}
              <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: { xs: 1, lg: 0 } }}>
                <Typography
                  variant="caption"
                  sx={{ color: 'text.secondary', display: { lg: 'none' } }}
                >
                  LAST ORDER:{' '}
                </Typography>
                <Typography sx={{ color: 'secondary.main' }}>{5300 + itemId}</Typography>
              </Box>

              {/* STATUS + Selection */}
              <Box sx={{ width: { xs: '100%', lg: '10%' }, display: 'flex', ml: 'auto' }}>
                <FormControlLabel
                  label=""
                  control={<Checkbox checked={isSelected} sx={{ color: 'secondary.main' }} />}
                  sx={{ ml: 'auto' }}
                />
              </Box>
            </Box>
          </Card>
        );
      })}

      {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination
          count={3}
          shape="rounded"
          sx={{
            button: { color: 'secondary.main' },
            'svg:not(.MuiPaginationItem-ellipsis)': { fill: 'secondary.main' },
          }}
        />
      </Box>
    </PageContainer>
  );
}

export default CustomersList;
