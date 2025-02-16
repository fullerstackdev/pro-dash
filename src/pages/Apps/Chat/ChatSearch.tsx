// src/pages/Apps/Chat/ChatSearch.tsx

import React from 'react';
import { TextField } from '@mui/material';

type ChatSearchProps = {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
};

function ChatSearch({ searchTerm, setSearchTerm }: ChatSearchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <TextField
      label="Search Contact..."
      variant="outlined"
      size="small"
      fullWidth
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default ChatSearch;

