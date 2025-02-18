// v1.3 - SupportTicketList.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Grid, Button } from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PageContainer from '../../layout/PageContainer';

function SupportTicketList() {
  return (
    <PageContainer
      title="Support Ticket List"
      subtitle="View or filter support tickets submitted by users."
      icon={<ConfirmationNumberIcon sx={{ color: 'secondary.main', fontSize: 32 }} />}
    >
      {/* Example ticket */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: 'secondary.main' }}>
                Cannot access account
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Chip label="Open" variant="outlined" sx={{ color: 'secondary.main', borderColor: 'secondary.main' }} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                2025-03-10
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} textAlign="right">
              <Button
                variant="outlined"
                size="small"
                sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}
                endIcon={<LiveHelpIcon />}
              >
                View
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* Repeat more tickets as needed */}
    </PageContainer>
  );
}

export default SupportTicketList;
