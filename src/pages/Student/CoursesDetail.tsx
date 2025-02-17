import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  LinearProgress,
  Rating,
  Divider,
  IconButton,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

/**
 * Version 1.1:
 * - Uses theme for background and card
 * - Consistent text, spacing, etc.
 */

function VideoPlayerPlaceholder() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%', // 16:9 ratio
        backgroundColor: '#555', // slightly darker than default
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'text.primary',
          textAlign: 'center',
        }}
      >
        <PlayArrowIcon sx={{ fontSize: 48 }} />
        <Typography>Video Placeholder</Typography>
      </Box>
    </Box>
  );
}

function CoursesDetail() {
  return (
    <Box sx={{ p: 3, minHeight: '100vh' }}>
      {/* Page Title */}
      <Box mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Bread Making Techniques
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Elearning Portal Course Detail Page
        </Typography>
      </Box>

      {/* Top Bar: Course Title + Back Link + Start Button */}
      <Grid container spacing={2} alignItems="center" mb={3}>
        <Grid item xs>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Carrot Cake Gingerbread
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <IconButton href="/student/courses-explore" sx={{ p: 0, mr: 1 }}>
              <ArrowBackIosIcon fontSize="small" color="primary" />
            </IconButton>
            <Typography variant="body2" color="primary">
              Back to Courses
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Button variant="contained" startIcon={<PlayArrowIcon />}>
            Start Now
          </Button>
        </Grid>
      </Grid>

      {/* Video Preview */}
      <Card sx={{ mb: 5, backgroundColor: 'background.paper', ':hover': { boxShadow: 4 } }}>
        <VideoPlayerPlaceholder />
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Carrot Cake Gingerbread
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary">
            Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa
            chups soufflé bonbon...
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary">
            Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing
            macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer...
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold' }}>
            Sesame Snaps Lollipop Macaroon
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary">
            Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps
            lollipop macaroon...
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold' }}>
            Muffin Sweet Roll Apple Pie
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Carrot cake gummi bears wafer sesame snaps soufflé cheesecake cheesecake cake. Sweet
            roll apple pie tiramisu...
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Box display="flex" alignItems="center">
                <CardMedia
                  component="img"
                  image="/img/profile/profile-1.webp"
                  alt="profile"
                  sx={{ width: 40, height: 40, borderRadius: 2, mr: 2 }}
                />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Olli Hawkins
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Development Lead
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Typography variant="caption" sx={{ mr: 2 }} color="text.secondary">
                221 Views
              </Typography>
              <Typography variant="caption" color="text.secondary">
                17 Comments
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>

      {/* Table of Contents */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
        Table of Contents
      </Typography>
      <Card sx={{ mb: 5, backgroundColor: 'background.paper', ':hover': { boxShadow: 4 } }}>
        <CardContent>
          {[1, 2, 3, 4, 5].map((chapter) => (
            <Box key={chapter} mb={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <VideoLibraryIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Chapter {chapter}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ ml: 4 }} color="text.secondary">
                Short description or bullet points about this chapter...
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* Reviews */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
        Reviews
      </Typography>
      <Card sx={{ mb: 5, backgroundColor: 'background.paper', ':hover': { boxShadow: 4 } }}>
        <CardContent>
          <Grid container spacing={3} mb={3}>
            <Grid item>
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  width: 100,
                  height: 80,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  4.8
                </Typography>
                <Rating value={5} readOnly size="small" />
                <Typography variant="caption">(22)</Typography>
              </Box>
            </Grid>
            <Grid item xs>
              {[5, 4, 3, 2, 1].map((star, idx) => (
                <Grid container alignItems="center" key={star} sx={{ mb: 1 }}>
                  <Grid item xs>
                    <LinearProgress variant="determinate" value={[80, 10, 5, 0, 5][idx]} />
                  </Grid>
                  <Grid item xs="auto" sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ mr: 1 }}>
                      %{[80, 10, 5, 0, 5][idx]}
                    </Typography>
                    <Rating value={star} readOnly size="small" />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Example 4 reviews */}
          {[1, 2, 3, 4].map((r) => (
            <Box key={r} mb={3}>
              <Grid container spacing={1}>
                <Grid item xs="auto">
                  <CardMedia
                    component="img"
                    image={`/img/profile/profile-${r}.webp`}
                    alt="profile"
                    sx={{ width: 40, height: 40, borderRadius: 2 }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Reviewer {r}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {r} days ago
                  </Typography>
                  <Box>
                    <Rating value={5} readOnly size="small" />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Sample review text. Cupcake cake fruitcake. Powder chocolate bar soufflé gummi
                    bears topping donut...
                  </Typography>
                </Grid>
              </Grid>
              {r < 4 && <Divider sx={{ mt: 2 }} />}
            </Box>
          ))}
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* At a Glance */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
            At a Glance
          </Typography>
          <Card sx={{ mb: 3, backgroundColor: 'background.paper' }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <PlayArrowIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                  Duration
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  14 Hours
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <PlayArrowIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                  Content
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  8 Chapters
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <PlayArrowIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                  Level
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Beginner
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <PlayArrowIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                  Release
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  05.11.2021
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <PlayArrowIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                  Rating
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  4.8 (843)
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <PlayArrowIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                  Completed By
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1,522
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Tags */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
            Tags
          </Typography>
          <Card sx={{ mb: 3, backgroundColor: 'background.paper' }}>
            <CardContent>
              {['Food (12)', 'Baking (3)', 'Sweet (1)', 'Molding (3)', 'Pastry (5)', 'Healthy (7)'].map(
                (tag) => (
                  <Button
                    key={tag}
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1, mb: 1, textTransform: 'none' }}
                  >
                    {tag}
                  </Button>
                )
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Badges */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
            Badges
          </Typography>
          <Card sx={{ mb: 2, backgroundColor: 'background.paper' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: 'primary.light',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <Box>Icon</Box>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Sandwich Novice
                </Typography>
                <Typography variant="caption" color="primary">
                  Level 1
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ backgroundColor: 'background.paper' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: 'primary.light',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <Box>Icon</Box>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Cake Apprentice
                </Typography>
                <Typography variant="caption" color="primary">
                  Level 2
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CoursesDetail;
