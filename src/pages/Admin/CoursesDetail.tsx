// src/pages/Admin/CoursesDetail.tsx

import React from 'react';
import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

function AdminCoursesDetail() {
  return (
    <Box sx={{ p: 3, bgcolor: '#1e1e1e', minHeight: '100vh', color: '#fff' }}>
      <Box display="flex" alignItems="center" mb={3}>
        <SchoolIcon sx={{ color: '#ff9800', fontSize: 32, mr: 1 }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
          Admin Courses Detail
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ color: '#ccc', mb: 3 }}>
        Edit permissions, instructor assignments, or advanced course settings.
      </Typography>

      <Card sx={{ bgcolor: '#2a2a2a', color: '#fff', ':hover': { boxShadow: 4 } }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#ff9800' }}>
            Course Settings
          </Typography>
          <TextField
            label="Course Title"
            fullWidth
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': { color: '#fff', bgcolor: '#333' },
              '& .MuiFormLabel-root': { color: '#ccc' },
            }}
            defaultValue="Bread Making 101"
          />
          <TextField
            label="Instructor"
            fullWidth
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': { color: '#fff', bgcolor: '#333' },
              '& .MuiFormLabel-root': { color: '#ccc' },
            }}
            defaultValue="Lisa Admin"
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: '#ff9800', ':hover': { backgroundColor: '#e09100' } }}
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
