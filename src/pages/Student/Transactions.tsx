import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Chip,
} from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentIcon from '@mui/icons-material/Payment';

type TransactionRecord = {
  id: number;
  type: string;
  amount: number;
  status: string;
  date: string;
};

/**
 * Version 1.1:
 * - Use theme's background, card styling
 * - Removed leftover references to other inline colors
 */

function Transactions() {
  const [transactions, setTransactions] = useState<TransactionRecord[]>([
    { id: 1, type: 'Deposit', amount: 100, status: 'Completed', date: '2025-03-01' },
    { id: 2, type: 'Withdraw', amount: 50, status: 'Pending', date: '2025-03-02' },
  ]);

  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleDeposit = () => {
    if (!depositAmount) return;
    const newTrans: TransactionRecord = {
      id: transactions.length + 1,
      type: 'Deposit',
      amount: parseFloat(depositAmount),
      status: 'Completed',
      date: new Date().toISOString().split('T')[0],
    };
    setTransactions((prev) => [...prev, newTrans]);
    setDepositAmount('');
  };

  const handleWithdraw = () => {
    if (!withdrawAmount) return;
    const newTrans: TransactionRecord = {
      id: transactions.length + 1,
      type: 'Withdraw',
      amount: parseFloat(withdrawAmount),
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
    };
    setTransactions((prev) => [...prev, newTrans]);
    setWithdrawAmount('');
  };

  const renderStatusChip = (status: string) => {
    let color: any = 'default';
    if (status === 'Completed') color = 'success';
    if (status === 'Pending') color = 'warning';
    if (status === 'Failed') color = 'error';

    return <Chip label={status} color={color} size="small" />;
  };

  return (
    <Box sx={{ p: 3, minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
        Transactions
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        View deposit/withdraw history, and manage new transactions.
      </Typography>

      <Grid container spacing={3}>
        {/* Left Column: transaction forms */}
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 3, backgroundColor: 'background.paper', ':hover': { boxShadow: 4 } }}>
            <CardHeader
              title="Deposit Funds"
              avatar={<AccountBalanceWalletIcon color="primary" />}
              subheader="Add money to your account"
            />
            <CardContent>
              <TextField
                label="Deposit Amount"
                type="number"
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
              <Button variant="contained" onClick={handleDeposit} disabled={!depositAmount}>
                Deposit
              </Button>
            </CardContent>
          </Card>

          <Card sx={{ backgroundColor: 'background.paper', ':hover': { boxShadow: 4 } }}>
            <CardHeader
              title="Withdraw Funds"
              avatar={<PaymentIcon color="primary" />}
              subheader="Take money out of your account"
            />
            <CardContent>
              <TextField
                label="Withdraw Amount"
                type="number"
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
              <Button variant="contained" onClick={handleWithdraw} disabled={!withdrawAmount}>
                Withdraw
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column: transaction history table */}
        <Grid item xs={12} md={8}>
          <Card sx={{ backgroundColor: 'background.paper', ':hover': { boxShadow: 4 } }}>
            <CardHeader
              title="Transaction History"
              subheader="All deposits and withdrawals"
            />
            <CardContent>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((txn) => (
                      <TableRow key={txn.id}>
                        <TableCell>{txn.type}</TableCell>
                        <TableCell>${txn.amount.toFixed(2)}</TableCell>
                        <TableCell>{renderStatusChip(txn.status)}</TableCell>
                        <TableCell>{txn.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Transactions;
