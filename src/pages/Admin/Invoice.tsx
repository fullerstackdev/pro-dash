// src/pages/Admin/Invoice.tsx

import React from 'react';
import { Box, Typography, Card, CardContent, Divider, Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

function Invoice() {
  return (
    <Box sx={{ p: 3, bgcolor: '#1e1e1e', minHeight: '100vh', color: '#fff' }}>
      <Box display="flex" alignItems="center" mb={3}>
        <ReceiptLongIcon sx={{ color: '#ff9800', fontSize: 32, mr: 1 }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
          Invoice
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ color: '#ccc', mb: 3 }}>
        Review or send invoice to customers.
      </Typography>

      <Card sx={{ bgcolor: '#2a2a2a', color: '#fff', ':hover': { boxShadow: 4 } }}>
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#ff9800' }}>
            Invoice #2345
          </Typography>
          <Typography variant="body2" sx={{ color: '#ccc', mb: 2 }}>
            Issued: 03/10/2025
          </Typography>
          <Divider sx={{ mb: 2, borderColor: '#444' }} />

          {/* Example line items */}
          <Typography variant="body2" sx={{ mb: 1 }}>
            1x “Advanced Bread Course” - $50.00
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            1x “Cake Decorations Add-on” - $10.00
          </Typography>
          <Divider sx={{ mb: 2, borderColor: '#444' }} />

          <Typography variant="body2" sx={{ textAlign: 'right', fontWeight: 'bold' }}>
            Total: $60.00
          </Typography>
          <Button
            variant="outlined"
            startIcon={<PrintIcon />}
            sx={{ mt: 2, color: '#ff9800', borderColor: '#ff9800' }}
          >
            Print
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Invoice;
