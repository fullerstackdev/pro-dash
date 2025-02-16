// src/pages/Apps/Chat/ChatList.tsx

import React from 'react';
import { List } from '@mui/material';
import ChatListItem from './ChatListItem';

type Contact = {
  id: number;
  name: string;
  thumb: string;
  status: string;
};

type ChatListProps = {
  contacts: Contact[];
  activeContact: number | null;
  onSelectContact: (id: number) => void;
};

function ChatList({ contacts, activeContact, onSelectContact }: ChatListProps) {
  return (
    <List>
      {contacts.map((contact) => (
        <ChatListItem
          key={contact.id}
          contact={contact}
          active={activeContact === contact.id}
          onClick={() => onSelectContact(contact.id)}
        />
      ))}
    </List>
  );
}

export default ChatList;
