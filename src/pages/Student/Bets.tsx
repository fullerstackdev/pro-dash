// v1.3 - Bets.tsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CasinoIcon from '@mui/icons-material/Casino';
import PageContainer from '../../layout/PageContainer';

function Bets() {
  const [betType, setBetType] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [betOdds, setBetOdds] = useState('');
  const [bets, setBets] = useState([
    { id: 1, type: 'Sports', amount: 50, odds: 2.1, result: 'Won', date: '2025-03-01' },
    { id: 2, type: 'Casino', amount: 20, odds: 1.5, result: 'Lost', date: '2025-03-02' },
  ]);

  const handlePlaceBet = () => {
    if (!betType || !betAmount || !betOdds) return;
    const newBet = {
      id: bets.length + 1,
      type: betType,
      amount: parseFloat(betAmount),
      odds: parseFloat(betOdds),
      result: 'Pending',
      date: new Date().toISOString().split('T')[0],
    };
    setBets((prev) => [...prev, newBet]);
    setBetType('');
    setBetAmount('');
    setBetOdds('');
  };

  return (
    <PageContainer
      title="Bets"
      subtitle="Place your bets, view ongoing wagers, or check historical bet results."
      icon={<SportsSoccerIcon sx={{ color: 'primary.main', fontSize: 32 }} />}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              title="Place a Bet"
              subheader="Fill out the details to place a new bet"
              avatar={<CasinoIcon color="primary" />}
            />
            <CardContent>
              <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                <InputLabel id="bet-type-label">Bet Type</InputLabel>
                <Select
                  labelId="bet-type-label"
                  label="Bet Type"
                  value={betType}
                  onChange={(e) => setBetType(e.target.value)}
                >
                  <MenuItem value="Sports">Sports</MenuItem>
                  <MenuItem value="Casino">Casino</MenuItem>
                  <MenuItem value="Poker">Poker</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Bet Amount"
                type="number"
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
              />

              <TextField
                label="Odds"
                type="number"
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                value={betOdds}
                onChange={(e) => setBetOdds(e.target.value)}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={handlePlaceBet}
                disabled={!betType || !betAmount || !betOdds}
              >
                Place Bet
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader
              title="Bet History"
              subheader="Your past and ongoing bets"
              avatar={<SportsSoccerIcon color="primary" />}
            />
            <CardContent>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Odds</TableCell>
                      <TableCell>Result</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bets.map((bet) => (
                      <TableRow key={bet.id}>
                        <TableCell>{bet.type}</TableCell>
                        <TableCell>${bet.amount.toFixed(2)}</TableCell>
                        <TableCell>{bet.odds.toFixed(2)}</TableCell>
                        <TableCell>{bet.result}</TableCell>
                        <TableCell>{bet.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default Bets;
