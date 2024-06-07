import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import './LibrarianEditBooks.css';

const DeleteBookForm: React.FC = () => {
  const [id, setId] = useState<string>('');
  return (
    <div className="librarian-edit-books">
      <h2>Delete Book</h2>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          <TextField
            label="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Delete Book
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeleteBookForm;
