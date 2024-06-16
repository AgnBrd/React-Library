import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import './LibrarianEditBooks.css';
import { useTranslation } from 'react-i18next';
import { useApi } from '../../api/ApiProvider';

const UpdateBookForm: React.FC = () => {
  const [id, setId] = useState<string>(''); // Use string type for id
  const [isbn, setIsbn] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [availableCopies, setAvailableCopies] = useState<number>(0);
  const [publisher, setPublisher] = useState<string>('');
  const [publicationYear, setPublicationYear] = useState<number>(2000);

  const { t } = useTranslation();
  const { apiClient, setUser, user } = useApi();

  const handleUpdateBook = async () => {
    // Validate input fields
    if (!id || !isbn || !title || !author || !publisher || !publicationYear) {
      console.error('Validation failed: Missing required fields');
      return;
    }

    const bookData = {
      isbn,
      title,
      author,
      availableCopies,
      publisher,
      publicationYear,
    };

    try {
      const response = await apiClient.updateBook(
        id,
        bookData,
        user?.role || '',
      );
      if (response.success) {
        // Additional operations after successful update, e.g., clearing form fields
        setId('');
        setIsbn('');
        setTitle('');
        setAuthor('');
        setAvailableCopies(0);
        setPublisher('');
        setPublicationYear(0);
        console.log('Book updated successfully');
      } else {
        console.error('Failed to update book:', response.statusCode);
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className="librarian-edit-books">
      <h2>{t('update_book')}</h2>
      <Grid container spacing={1} style={{ maxWidth: '400px' }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Available Copies"
            type="number"
            value={availableCopies}
            onChange={(e) => setAvailableCopies(parseInt(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Publication Year"
            type="number"
            value={publicationYear}
            onChange={(e) => setPublicationYear(parseInt(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdateBook}
          >
            {t('update_book')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateBookForm;
