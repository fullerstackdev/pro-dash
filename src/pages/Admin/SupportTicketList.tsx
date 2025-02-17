import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Grid, Button } from '@mui/material';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

/**
 * Admin SupportTicketList, v1.2:
 * - Dark background, paper card
 * - Orange accent
 */

function SupportTicketList() {
  return (
    <Box sx={{ p: 3, minHeight: '100vh' }}>
      <Box display="flex" alignItems="center" mb={3}>
        <ConfirmationNumberIcon sx={{ color: '#ff9800', fontSize: 32, mr: 1 }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
          Support Ticket List
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        View or filter support tickets submitted by users.
      </Typography>

      {/* Example Ticket */}
      <Card
        sx={{
          mb: 2,
          backgroundColor: 'background.paper',
          color: 'text.primary',
          ':hover': { boxShadow: 4 },
        }}
      >
        <CardContent>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: '#ff9800' }}>
                Cannot access account
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Chip
                label="Open"
                variant="outlined"
                sx={{ color: '#ff9800', borderColor: '#ff9800' }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" color="text.secondary">
                2025-03-10
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} textAlign="right">
              <Button
                variant="outlined"
                size="small"
                sx={{ color: '#ff9800', borderColor: '#ff9800' }}
                endIcon={<LiveHelpIcon />}
              >
                View
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* Repeat more tickets as needed */}
    </Box>
  );
}

export default SupportTicketList;
