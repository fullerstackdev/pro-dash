// src/pages/Apps/Chat/ChatListItem.tsx

import React from 'react';
import {
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@mui/material';

type Contact = {
  id: number;
  name: string;
  thumb: string;
  status: string;
};

type ChatListItemProps = {
  contact: Contact;
  active: boolean;
  onClick: () => void;
};

function ChatListItem({ contact, active, onClick }: ChatListItemProps) {
  return (
    <ListItemButton
      onClick={onClick}
      selected={active}
      sx={{ borderRadius: 1, mb: 1 }}
    >
      <ListItemAvatar>
        <Avatar src={contact.thumb} alt={contact.name} />
      </ListItemAvatar>
      <ListItemText
        primary={contact.name}
        secondary={contact.status}
      />
    </ListItemButton>
  );
}

export default ChatListItem;
