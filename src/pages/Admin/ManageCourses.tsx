// v1.3 - ManageCourses.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PageContainer from '../../layout/PageContainer';

function ManageCourses() {
  return (
    <PageContainer
      title="Manage Courses"
      subtitle="Create, edit, or remove courses from the platform."
      icon={<LibraryBooksIcon sx={{ color: 'secondary.main', fontSize: 32 }} />}
    >
      <Button
        variant="outlined"
        startIcon={<LibraryBooksIcon />}
        sx={{ mb: 3, color: 'secondary.main', borderColor: 'secondary.main' }}
      >
        Add New Course
      </Button>

      <Grid container spacing={2}>
        {/* Example course card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                Introduction to Baking Cakes
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Instructor: Jane Dough
              </Typography>
              <Button variant="outlined" size="small" sx={{ mr: 1, color: 'secondary.main', borderColor: 'secondary.main' }}>
                Edit
              </Button>
              <Button variant="outlined" color="error" size="small">
                Remove
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Add more course cards as needed */}
      </Grid>
    </PageContainer>
  );
}

export default ManageCourses;
