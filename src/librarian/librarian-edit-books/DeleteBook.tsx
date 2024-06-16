import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import './LibrarianEditBooks.css';
import { useTranslation } from 'react-i18next';
import { useApi } from '../../api/ApiProvider';

const DeleteBookForm: React.FC = () => {
  const [id, setId] = useState<string>('');
  const { t } = useTranslation();
  const { apiClient, setUser, user } = useApi();

  const handleDeleteBook = async () => {
    try {
      const response = await apiClient.deleteBook(id, user?.role || ''); // Pass role if needed
      if (response.success) {
        console.log('Book deleted successfully');
        setId(''); // Clear id field after successful deletion
      } else {
        console.error('Failed to delete book:', response.statusCode);
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="librarian-edit-books">
      <h2>{t('delete_book')}</h2>
      <Grid container spacing={1} direction="column">
        <Grid item xs={12}>
          <TextField
            label="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDeleteBook}
            disabled={!id} // Disable button if id is empty
          >
            {t('delete_book')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeleteBookForm;
