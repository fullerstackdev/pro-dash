// v1.3 - SupportTicketDetail.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, Divider, TextField, Button } from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PageContainer from '../../layout/PageContainer';

function SupportTicketDetail() {
  return (
    <PageContainer
      title="Support Ticket Detail"
      subtitle="Detailed view of a single ticket, including conversation history."
      icon={<ConfirmationNumberIcon sx={{ color: 'secondary.main', fontSize: 32 }} />}
    >
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'secondary.main', mb: 1 }}>
            Ticket #1234 - Cannot access account
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong style={{ color: 'secondary.main' }}>User:</strong> I'm locked out of my account after resetting my password...
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong style={{ color: 'secondary.main' }}>Admin:</strong> Please confirm the email used so we can verify your identity...
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Respond"
          multiline
          rows={2}
          fullWidth
          placeholder="Type your message..."
          sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'background.paper' } }}
        />
        <Button variant="contained" sx={{ bgcolor: 'secondary.main', ':hover': { bgcolor: '#e59100' }, alignSelf: 'flex-end' }}>
          Send
        </Button>
      </Box>
    </PageContainer>
  );
}

export default SupportTicketDetail;
