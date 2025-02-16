// src/pages/Apps/Chat/Chat.tsx

import React, { useState } from 'react';
import { Card, Grid, Box } from '@mui/material';
import ChatSearch from './ChatSearch';
import ChatList from './ChatList';
import ChatContent from './ChatContent';
import ChatMsgForm from './ChatMsgForm';

/**
 * A placeholder Chat page with local state only.
 * No references to redux or ChatSlice. 
 */

function ChatPlaceholder() {
  // We store the "selectedContactId" in local state
  const [selectedContact, setSelectedContact] = useState<number | null>(null);

  // Basic data for the chat contacts
  // In a real scenario, you'd fetch or store them in Redux
  const contacts = [
    { id: 1, name: 'Alice', thumb: '', status: 'Online' },
    { id: 2, name: 'Bob', thumb: '', status: 'Offline' },
  ];

  // A simple search string
  const [searchTerm, setSearchTerm] = useState('');

  // Messages keyed by contact ID
  const [messages, setMessages] = useState<Record<number, string[]>>({
    1: ['Hello from Alice!'],
    2: ['Hi from Bob!'],
  });

  // Called when user clicks a contact
  const handleSelectContact = (id: number) => {
    setSelectedContact(id);
  };

  // Called when user types a chat message
  const handleSendMessage = (text: string) => {
    if (selectedContact == null) return;
    setMessages((prev) => ({
      ...prev,
      [selectedContact]: [...(prev[selectedContact] || []), text],
    }));
  };

  // Filter contacts by search
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {/* Left: search + contacts list */}
        <Grid item xs={12} md={4} lg={3}>
          <Box sx={{ mb: 2 }}>
            <ChatSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Box>
          <Box sx={{ flex: 1, overflowY: 'auto', maxHeight: 400 }}>
            <ChatList
              contacts={filteredContacts}
              activeContact={selectedContact}
              onSelectContact={handleSelectContact}
            />
          </Box>
        </Grid>

        {/* Right: chat content + form */}
        <Grid item xs={12} md={8} lg={9}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: { xs: 'auto', md: 400 },
            }}
          >
            <Box sx={{ flex: 1, overflowY: 'auto' }}>
              <ChatContent
                selectedContact={selectedContact}
                contacts={contacts}
                messages={messages}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <ChatMsgForm onSend={handleSendMessage} disabled={!selectedContact} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ChatPlaceholder;
