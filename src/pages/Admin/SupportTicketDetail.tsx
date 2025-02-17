import React from 'react';
import { Box, Typography, Card, CardContent, Divider, TextField, Button } from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

/**
 * Admin SupportTicketDetail, v1.2:
 * - Dark background, paper card
 * - Orange accents
 */

function SupportTicketDetail() {
  return (
    <Box sx={{ p: 3, minHeight: '100vh' }}>
      <Box display="flex" alignItems="center" mb={3}>
        <ConfirmationNumberIcon sx={{ color: '#ff9800', fontSize: 32, mr: 1 }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
          Support Ticket Detail
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Detailed view of a single ticket, including conversation history or attachments.
      </Typography>

      <Card
        sx={{
          mb: 2,
          backgroundColor: 'background.paper',
          color: 'text.primary',
          ':hover': { boxShadow: 4 },
        }}
      >
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#ff9800', mb: 1 }}>
            Ticket #1234 - Cannot access account
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong style={{ color: '#ff9800' }}>User:</strong> I'm locked out of my account after
            resetting my password...
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong style={{ color: '#ff9800' }}>Admin:</strong> Please confirm the email used so we
            can verify your identity...
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
          sx={{
            '& .MuiOutlinedInput-root': { bgcolor: '#333', color: 'text.primary' },
            '& .MuiFormLabel-root': { color: 'text.secondary' },
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: '#ff9800',
            ':hover': { bgcolor: '#e59100' },
            alignSelf: 'flex-end',
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default SupportTicketDetail;
