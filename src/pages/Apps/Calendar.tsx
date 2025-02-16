// src/pages/Apps/Calendar.tsx

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';

/**
 * A SIMPLE placeholder "Calendar" page using only MUI.
 * No "react-big-calendar," no "moment," no external libs.
 * Demonstrates a minimal "events list" with local state.
 */

type SimpleEvent = {
  id: number;
  title: string;
  date: string; // or a Date string
};

function CalendarPlaceholder() {
  const [events, setEvents] = useState<SimpleEvent[]>([
    { id: 1, title: 'Sample Event', date: '2025-03-01' },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleOpen = () => {
    setTitle('');
    setDate('');
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleAdd = () => {
    if (title.trim() && date) {
      const newEvent: SimpleEvent = {
        id: events.length + 1,
        title,
        date,
      };
      setEvents([...events, newEvent]);
    }
    setDialogOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Calendar Placeholder
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          (No external calendar libraries. Just a simple local list of events.)
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Button variant="contained" onClick={handleOpen}>
            Add Event
          </Button>
        </Box>

        {events.map((evt) => (
          <Box key={evt.id} sx={{ mb: 1 }}>
            <Typography variant="body1">
              {evt.title} - <strong>{evt.date}</strong>
            </Typography>
          </Box>
        ))}
      </CardContent>

      {/* Dialog to add events */}
      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            sx={{ mt: 2 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Date"
            type="date"
            fullWidth
            sx={{ mt: 2 }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="contained" disabled={!title.trim() || !date}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default CalendarPlaceholder;
