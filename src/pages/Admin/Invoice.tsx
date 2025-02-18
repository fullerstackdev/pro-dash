// v1.3 - Invoice.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, Divider, Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PageContainer from '../../layout/PageContainer';

function Invoice() {
  return (
    <PageContainer
      title="Invoice"
      subtitle="Review or send invoice to customers."
      icon={<ReceiptLongIcon sx={{ color: 'secondary.main', fontSize: 32 }} />}
    >
      <Card>
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: 'secondary.main' }}>
            Invoice #2345
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            Issued: 03/10/2025
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {/* Example line items */}
          <Typography variant="body2" sx={{ mb: 1 }}>
            1x “Advanced Bread Course” - $50.00
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            1x “Cake Decorations Add-on” - $10.00
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Typography variant="body2" sx={{ textAlign: 'right', fontWeight: 'bold' }}>
            Total: $60.00
          </Typography>
          <Button
            variant="outlined"
            startIcon={<PrintIcon />}
            sx={{ mt: 2, color: 'secondary.main', borderColor: 'secondary.main' }}
          >
            Print
          </Button>
        </CardContent>
      </Card>
    </PageContainer>
  );
}

export default Invoice;
