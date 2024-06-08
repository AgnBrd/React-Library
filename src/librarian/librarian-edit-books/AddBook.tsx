import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import './LibrarianEditBooks.css';
import { useTranslation } from 'react-i18next';

const AddBookForm: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [isbn, setIsbn] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [availableCopies, setAvailableCopies] = useState<number>(0);
  const [publisher, setPublisher] = useState<string>('');
  const [publicationYear, setPublicationYear] = useState<number>(0);

  const { t } = useTranslation();

  return (
    <div className="librarian-edit-books">
      <h2>{t('add_book')}</h2>
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
          <TextField
            label="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Available Copies"
            type="number"
            value={availableCopies}
            onChange={(e) => setAvailableCopies(parseInt(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Publication Year"
            type="number"
            value={publicationYear}
            onChange={(e) => setPublicationYear(parseInt(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            {t('add_book')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddBookForm;
