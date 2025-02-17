import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

/**
 * Admin ManageCourses, v1.2:
 * - Dark background, paper card
 * - Orange accent
 */

function ManageCourses() {
  return (
    <Box sx={{ p: 3, minHeight: '100vh' }}>
      <Box display="flex" alignItems="center" mb={3}>
        <LibraryBooksIcon sx={{ color: '#ff9800', fontSize: 32, mr: 1 }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
          Manage Courses
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Create, edit, or remove courses from the platform.
      </Typography>

      <Button
        variant="outlined"
        startIcon={<LibraryBooksIcon />}
        sx={{ mb: 3, color: '#ff9800', borderColor: '#ff9800' }}
      >
        Add New Course
      </Button>

      <Grid container spacing={2}>
        {/* Example course card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: 'background.paper',
              color: 'text.primary',
              ':hover': { boxShadow: 4 },
            }}
          >
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                Introduction to Baking Cakes
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Instructor: Jane Dough
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{ mr: 1, color: '#ff9800', borderColor: '#ff9800' }}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                size="small"
                sx={{ borderColor: '#f44336', color: '#f44336' }}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ManageCourses;
