// v1.3 - AdminDashboard.tsx
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Chip,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DnsIcon from '@mui/icons-material/Dns';
import PersonIcon from '@mui/icons-material/Person';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TimelineIcon from '@mui/icons-material/Timeline';
import ReviewsIcon from '@mui/icons-material/Reviews';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PageContainer from '../../layout/PageContainer';

function AdminDashboard() {
  return (
    <PageContainer
      title="Welcome, Lisa!"
      subtitle="E-commerce Admin Dashboard"
      icon={<LightbulbIcon sx={{ color: 'secondary.main', fontSize: 32 }} />}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <ArrowDropDownIcon sx={{ color: 'secondary.main', mr: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
          Today’s Stats
        </Typography>
      </Box>

      <Grid container spacing={2} mb={4}>
        {/* EARNINGS */}
        <Grid item xs={6} md={4} lg={2}>
          <Card>
            <CardHeader
              title="EARNINGS"
              subheader="$ 315.20"
              avatar={<AttachMoneyIcon sx={{ color: 'secondary.main' }} />}
              sx={{ textAlign: 'center' }}
            />
          </Card>
        </Grid>
        {/* ORDERS */}
        <Grid item xs={6} md={4} lg={2}>
          <Card>
            <CardHeader
              title="ORDERS"
              subheader="16"
              avatar={<ShoppingCartIcon sx={{ color: 'secondary.main' }} />}
              sx={{ textAlign: 'center' }}
            />
          </Card>
        </Grid>
        {/* SESSIONS */}
        <Grid item xs={6} md={4} lg={2}>
          <Card>
            <CardHeader
              title="SESSIONS"
              subheader="463"
              avatar={<DnsIcon sx={{ color: 'secondary.main' }} />}
              sx={{ textAlign: 'center' }}
            />
          </Card>
        </Grid>
        {/* USERS */}
        <Grid item xs={6} md={4} lg={2}>
          <Card>
            <CardHeader
              title="USERS"
              subheader="17"
              avatar={<PersonIcon sx={{ color: 'secondary.main' }} />}
              sx={{ textAlign: 'center' }}
            />
          </Card>
        </Grid>
        {/* RETURNS */}
        <Grid item xs={6} md={4} lg={2}>
          <Card>
            <CardHeader
              title="RETURNS"
              subheader="2"
              avatar={<SubdirectoryArrowLeftIcon sx={{ color: 'secondary.main' }} />}
              sx={{ textAlign: 'center' }}
            />
          </Card>
        </Grid>
        {/* COMMENTS */}
        <Grid item xs={6} md={4} lg={2}>
          <Card>
            <CardHeader
              title="COMMENTS"
              subheader="5"
              avatar={<ChatBubbleOutlineIcon sx={{ color: 'secondary.main' }} />}
              sx={{ textAlign: 'center' }}
            />
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main', mb: 2 }}>
            Recent Orders
          </Typography>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ color: 'secondary.main' }}>Order #54129</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Chip
                    label="PENDING"
                    variant="outlined"
                    sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}
                  />
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Typography>$17.35</Typography>
                </Grid>
                <Grid item xs={12} sm={3} textAlign={{ sm: 'right' }}>
                  <Typography variant="caption">Today - 13:20</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ color: 'secondary.main' }}>Order #54128</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Chip
                    label="SHIPPED"
                    variant="outlined"
                    sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}
                  />
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Typography>$145.20</Typography>
                </Grid>
                <Grid item xs={12} sm={3} textAlign={{ sm: 'right' }}>
                  <Typography variant="caption">Today - 11:32</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Performance */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main', mb: 2 }}>
            Performance
          </Typography>
          <Card sx={{ height: 260 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <TimelineIcon sx={{ fontSize: 40, color: 'secondary.main', mr: 1 }} />
              <Typography>Performance Chart Placeholder</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Activity */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main', mb: 2 }}>
            Activity
          </Typography>
          <Card sx={{ height: 300, overflowY: 'auto' }}>
            <CardContent>
              <Box mb={2}>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                  • New user registration
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  18 Dec
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                  • 3 new products added
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  18 Dec
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Reviews */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main', mb: 2 }}>
            Recent Reviews
          </Typography>
          <Card sx={{ height: 300, overflowY: 'auto' }}>
            <CardContent>
              <Box mb={2} sx={{ display: 'flex', gap: 2 }}>
                <ReviewsIcon sx={{ color: 'secondary.main', fontSize: 30 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                    Soda Bread
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    “Chocolate bar marzipan carrot cake gingerbread pastry...”
                  </Typography>
                  <Chip
                    label="5 Stars"
                    variant="outlined"
                    sx={{ mt: 1, color: 'secondary.main', borderColor: 'secondary.main' }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Tips */}
        <Grid item xs={12} md="auto">
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main', mb: 2 }}>
            Tips
          </Typography>
          <Card sx={{ width: { xs: '100%', md: 320 } }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                More sales?
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Add new products!
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                Cheesecake chocolate carrot cake pie lollipop apple pie lemon cream lollipop. Oat cake lemon drops gummi pie cake cotton.
              </Typography>
              <Box mt={2}>
                <Chip
                  label="Add Products"
                  icon={<FormatListBulletedIcon />}
                  variant="outlined"
                  sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default AdminDashboard;
