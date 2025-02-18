// v1.3 - Dashboard.tsx
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  LinearProgress,
  Rating,
  Divider,
  Button,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PageContainer from '../../layout/PageContainer';

function Dashboard() {
  const continueLearning = [
    {
      id: 1,
      title: 'Introduction to Baking Cakes',
      progress: 67,
      image: '/img/product/small/product-1.webp',
    },
    {
      id: 2,
      title: 'Apple Cake Recipe',
      progress: 85,
      image: '/img/product/small/product-2.webp',
    },
    {
      id: 3,
      title: 'Sandwich Making Techniques',
      progress: 14,
      image: '/img/product/small/product-3.webp',
    },
  ];

  return (
    <PageContainer
      title="E-learning Dashboard"
      subtitle="Elearning Portal E-learning Dashboard Page"
      icon={<DashboardIcon sx={{ color: 'primary.main', fontSize: 32 }} />}
    >
      <Grid container spacing={3}>
        {/* Left Column (Continue Learning, Achievements) */}
        <Grid item xs={12} lg={8}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
            Continue Learning
          </Typography>
          {continueLearning.map((course) => (
            <Card key={course.id} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.title}
                  sx={{ width: 120, objectFit: 'cover' }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 1 }}>
                    {course.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LinearProgress variant="determinate" value={course.progress} sx={{ flexGrow: 1, mr: 2 }} />
                    <Typography variant="body2">{course.progress}%</Typography>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          ))}

          {/* Achievements */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', my: 2, color: 'primary.main' }}>
            Achievements
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 }}>
            <Card sx={{ minWidth: 140, textAlign: 'center', flexShrink: 0 }}>
              <CardContent>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    mx: 'auto',
                    mb: 1,
                    bgcolor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    SN
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Sandwich Novice
                </Typography>
                <Typography variant="caption" sx={{ color: 'primary.main' }}>
                  Level 1
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 140, textAlign: 'center', flexShrink: 0 }}>
              <CardContent>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    mx: 'auto',
                    mb: 1,
                    bgcolor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    BE
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Bread Expert
                </Typography>
                <Typography variant="caption" sx={{ color: 'primary.main' }}>
                  Level 3
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Right Column (Recommended) */}
        <Grid item xs={12} lg={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
            Recommended for You
          </Typography>
          <Card sx={{ mb: 3 }}>
            <CardMedia
              component="img"
              image="/img/banner/cta-standard-3.webp"
              alt="Bread Making"
              sx={{ height: 140, objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Introduction to Bread Making
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating value={5} readOnly size="small" />
                <Typography variant="caption" sx={{ ml: 1 }}>
                  (39)
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Liquorice caramels chupa chups bonbon. Jelly-o candy sugar chocolate cake caramels apple pie lollipop jujubes.
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                $27.50
              </Typography>
            </CardContent>
            <Box sx={{ px: 2, pb: 2 }}>
              <Button variant="outlined" size="small">
                View
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Next Row: Subjects, Your Time, Paths */}
      <Grid container spacing={3}>
        {/* Related Subjects */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
            Related Subjects
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h5" sx={{ color: 'primary.main' }}>
                  🍩
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                  Cupcakes
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  14 COURSES
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h5" sx={{ color: 'primary.main' }}>
                  🍞
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                  Breads
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  3 COURSES
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Your Time */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
            Your Time
          </Typography>
          <Card sx={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography>Your stats or chart placeholder</Typography>
          </Card>
        </Grid>

        {/* Paths */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
            Paths
          </Typography>
          <Card sx={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <Box>
              <Typography>You are not on any path!</Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Take a Path
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default Dashboard;
