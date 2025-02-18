// src/pages/Admin/CoursesDetail.tsx (v1.3)
import React from 'react';
import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

import PageContainer from '../../layout/PageContainer';

function AdminCoursesDetail() {
  return (
    <PageContainer
      title="Admin Courses Detail"
      subtitle="Edit permissions, instructor assignments, or advanced course settings."
      icon={<SchoolIcon sx={{ color: 'secondary.main', fontSize: 32 }} />}
    >
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'secondary.main' }}>
            Course Settings
          </Typography>
          <TextField
            label="Course Title"
            fullWidth
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': { bgcolor: 'background.paper' },
            }}
            defaultValue="Bread Making 101"
          />
          <TextField
            label="Instructor"
            fullWidth
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': { bgcolor: 'background.paper' },
            }}
            defaultValue="Lisa Admin"
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'secondary.main',
              ':hover': { backgroundColor: '#e09100' },
            }}
            startIcon={<SchoolIcon />}
          >
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </PageContainer>
  );
}

export default AdminCoursesDetail;
