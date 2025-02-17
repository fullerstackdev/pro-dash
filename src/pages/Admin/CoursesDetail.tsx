import React from 'react';
import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

/**
 * Admin Courses Detail, v1.2:
 * - Dark background
 * - Orange accent (#ff9800)
 */

function AdminCoursesDetail() {
  return (
    <Box sx={{ p: 3, minHeight: '100vh' }}>
      <Box display="flex" alignItems="center" mb={3}>
        <SchoolIcon sx={{ color: '#ff9800', fontSize: 32, mr: 1 }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
          Admin Courses Detail
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Edit permissions, instructor assignments, or advanced course settings.
      </Typography>

      <Card
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.primary',
          ':hover': { boxShadow: 4 },
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', mb: 2, color: '#ff9800' }}
          >
            Course Settings
          </Typography>
          <TextField
            label="Course Title"
            fullWidth
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': { bgcolor: '#333', color: 'text.primary' },
              '& .MuiFormLabel-root': { color: 'text.secondary' },
            }}
            defaultValue="Bread Making 101"
          />
          <TextField
            label="Instructor"
            fullWidth
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': { bgcolor: '#333', color: 'text.primary' },
              '& .MuiFormLabel-root': { color: 'text.secondary' },
            }}
            defaultValue="Lisa Admin"
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ff9800',
              ':hover': { backgroundColor: '#e09100' },
            }}
            startIcon={<SchoolIcon />}
          >
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AdminCoursesDetail;
