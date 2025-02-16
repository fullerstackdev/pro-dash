// src/pages/Student/CoursesExplore.tsx

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Divider,
  Button,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExploreIcon from '@mui/icons-material/Explore';
import StarIcon from '@mui/icons-material/Star';

/**
 * Dark-themed "CoursesExplore" page with consistent style:
 * - Dark background (#1e1e1e)
 * - Cards #2a2a2a
 * - White text, primary accents
 */

function CoursesExplore() {
  const popularCourses = [
    {
      id: 1,
      title: 'Fruit Decorations',
      price: 18.9,
      oldPrice: 24.6,
      rating: 5,
      ratingCount: 114,
      image: '/img/product/small/product-1.webp',
    },
    {
      id: 2,
      title: 'Recipes for Sweet and Healthy Treats',
      price: 22.15,
      oldPrice: 33.25,
      rating: 5,
      ratingCount: 84,
      image: '/img/product/small/product-2.webp',
    },
    {
      id: 3,
      title: 'Better Ways to Mix Dough for the Molds',
      price: 22.5,
      oldPrice: 28.15,
      rating: 5,
      ratingCount: 117,
      image: '/img/product/small/product-3.webp',
    },
    {
      id: 4,
      title: 'Carrot Cake Gingerbread',
      price: 12.5,
      oldPrice: 16.75,
      rating: 5,
      ratingCount: 53,
      image: '/img/product/small/product-4.webp',
    },
  ];

  const trendingCourses = [
    {
      id: 5,
      title: 'Facts About Sugar Products',
      price: 24.8,
      oldPrice: 32.5,
      rating: 5,
      ratingCount: 53,
      image: '/img/product/small/product-5.webp',
    },
    {
      id: 6,
      title: 'Introduction to Baking Cakes',
      price: 13.2,
      oldPrice: 27.0,
      rating: 5,
      ratingCount: 67,
      image: '/img/product/small/product-6.webp',
    },
    {
      id: 7,
      title: 'Apple Cake Recipe for Starters',
      price: 28.8,
      oldPrice: 48.0,
      rating: 5,
      ratingCount: 427,
      image: '/img/product/small/product-7.webp',
    },
    {
      id: 8,
      title: 'Advanced Sandwich Making Techniques',
      price: 24.5,
      oldPrice: 32.25,
      rating: 5,
      ratingCount: 84,
      image: '/img/product/small/product-8.webp',
    },
  ];

  return (
    <Box sx={{ p: 3, bgcolor: '#1e1e1e', minHeight: '100vh', color: '#fff' }}>
      {/* Page Title */}
      <Box display="flex" alignItems="center" mb={3}>
        <ExploreIcon sx={{ color: 'primary.main', fontSize: 32, mr: 1 }} />
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Course Explore
          </Typography>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            Elearning Portal Course Explore Page
          </Typography>
        </Box>
      </Box>

      {/* Popular Section */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Popular
        </Typography>
        <Button
          variant="outlined"
          size="small"
          endIcon={<ArrowForwardIosIcon sx={{ fontSize: 12 }} />}
          sx={{ color: '#fff', borderColor: '#ccc', textTransform: 'none' }}
        >
          View All
        </Button>
      </Box>
      <Grid container spacing={3} mb={4}>
        {popularCourses.map((course) => (
          <Grid item xs={12} sm={6} md={3} key={course.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#2a2a2a',
                color: '#fff',
                ':hover': { boxShadow: 4 },
              }}
            >
              <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
                sx={{ height: 140, objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {course.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating
                    value={course.rating}
                    readOnly
                    size="small"
                    icon={<StarIcon fontSize="inherit" />}
                    emptyIcon={<StarIcon fontSize="inherit" sx={{ opacity: 0.4 }} />}
                  />
                  <Typography variant="caption" sx={{ ml: 1, color: '#ccc' }}>
                    ({course.ratingCount})
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ textDecoration: 'line-through', color: '#888' }}
                  >
                    ${course.oldPrice.toFixed(2)}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'medium', ml: 1, display: 'inline' }}>
                    ${course.price.toFixed(2)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4, borderColor: '#444' }} />

      {/* Trending Section */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Trending
        </Typography>
        <Button
          variant="outlined"
          size="small"
          endIcon={<ArrowForwardIosIcon sx={{ fontSize: 12 }} />}
          sx={{ color: '#fff', borderColor: '#ccc', textTransform: 'none' }}
        >
          View All
        </Button>
      </Box>
      <Grid container spacing={3}>
        {trendingCourses.map((course) => (
          <Grid item xs={12} sm={6} md={3} key={course.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#2a2a2a',
                color: '#fff',
                ':hover': { boxShadow: 4 },
              }}
            >
              <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
                sx={{ height: 140, objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {course.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating
                    value={course.rating}
                    readOnly
                    size="small"
                    icon={<StarIcon fontSize="inherit" />}
                    emptyIcon={<StarIcon fontSize="inherit" sx={{ opacity: 0.4 }} />}
                  />
                  <Typography variant="caption" sx={{ ml: 1, color: '#ccc' }}>
                    ({course.ratingCount})
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ textDecoration: 'line-through', color: '#888' }}
                  >
                    ${course.oldPrice.toFixed(2)}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'medium', ml: 1, display: 'inline' }}>
                    ${course.price.toFixed(2)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CoursesExplore;
