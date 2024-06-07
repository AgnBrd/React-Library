import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { TextField, Button, Grid, Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import MenuAppBar from '../../main-bar/AppBar';

const LibrarianEditBooks: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box>
      <MenuAppBar />
      <Box className="librarian-edit-books">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="Book Management Tabs"
          color="black"
        >
          <Tab label="Add" component={Link} to="add" />
          <Tab label="Update" component={Link} to="update" />
          <Tab label="Delete" component={Link} to="delete" />
        </Tabs>
        <Outlet />
      </Box>
    </Box>
  );
};

export default LibrarianEditBooks;
