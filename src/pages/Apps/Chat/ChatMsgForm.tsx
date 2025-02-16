// src/pages/Apps/Chat/ChatMsgForm.tsx

import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

type ChatMsgFormProps = {
  onSend: (text: string) => void;
  disabled?: boolean;
};

function ChatMsgForm({ onSend, disabled }: ChatMsgFormProps) {
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (msg.trim()) {
      onSend(msg);
      setMsg('');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        p: 2,
        display: 'flex',
        gap: 1,
      }}
    >
      <TextField
        fullWidth
        size="small"
        placeholder="Type your message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        disabled={disabled}
      />
      <Button type="submit" variant="contained" disabled={disabled || !msg.trim()}>
        Send
      </Button>
    </Box>
  );
}

export default ChatMsgForm;
