import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import './LibrarianEditBooks.css';
import { useTranslation } from 'react-i18next';
import { useApi } from '../../api/ApiProvider';
import { BookDto } from '../../api/dto/book.dto';

const AddBookForm: React.FC = () => {
  const [isbn, setIsbn] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [availableCopies, setAvailableCopies] = useState<number>(0);
  const [publisher, setPublisher] = useState<string>('');
  const [publicationYear, setPublicationYear] = useState<number>(2000);
  const { t } = useTranslation();
  const { apiClient, setUser, user } = useApi();

  const handleAddBook = async () => {
    const bookData: {
      author: string;
      isbn: string;
      availableCopies: number;
      publisher: string;
      publicationYear: number;
      title: string;
    } = {
      isbn,
      title,
      author,
      availableCopies,
      publisher,
      publicationYear,
    };

    // Logowanie danych do konsoli
    console.log('Book data to be sent:', bookData);

    // Walidacja danych
    if (!isbn || !title || !author || !publisher || !publicationYear) {
      console.error('Validation failed: Missing required fields');
      return;
    }

    try {
      await apiClient.addBook(bookData, user?.role || '');
      // Dodatkowe operacje po udanym dodaniu książki, np. czyszczenie formularza lub pokazanie powiadomienia
      setIsbn('');
      setTitle('');
      setAuthor('');
      setAvailableCopies(0);
      setPublisher('');
      setPublicationYear(2000);
      console.log('Book added successfully');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="librarian-edit-books">
      <h2>{t('add_book')}</h2>
      <Grid container spacing={1} style={{ maxWidth: '400px' }}>
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
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleAddBook}>
            {t('add_book')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddBookForm;
