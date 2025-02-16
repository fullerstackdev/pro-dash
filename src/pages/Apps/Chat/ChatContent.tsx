// src/pages/Apps/Chat/ChatContent.tsx

import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

type Contact = {
  id: number;
  name: string;
  thumb: string;
  status: string;
};

type ChatContentProps = {
  selectedContact: number | null;
  contacts: Contact[];
  messages: Record<number, string[]>;
};

function ChatContent({ selectedContact, contacts, messages }: ChatContentProps) {
  if (!selectedContact) {
    return <Typography>Select a contact to start chatting</Typography>;
  }

  const contact = contacts.find((c) => c.id === selectedContact);
  if (!contact) {
    return <Typography>Invalid contact</Typography>;
  }

  const chatMsgs = messages[selectedContact] || [];

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Avatar src={contact.thumb} alt={contact.name} sx={{ width: 46, height: 46, mr: 2 }} />
        <Box>
          <Typography variant="h6" sx={{ mb: 0 }}>
            {contact.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {contact.status}
          </Typography>
        </Box>
      </Box>

      {/* Messages */}
      <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
        {chatMsgs.map((msg, index) => (
          <Box key={index} sx={{ display: 'flex', mb: 1 }}>
            <Box sx={{ backgroundColor: 'action.hover', p: 1, borderRadius: 1 }}>
              <Typography variant="body2">{msg}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ChatContent;
