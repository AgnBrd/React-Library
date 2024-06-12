import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import './LibrarianEditBooks.css';
import { useTranslation } from 'react-i18next';

const DeleteBookForm: React.FC = () => {
  const [id, setId] = useState<string>('');
  const { t } = useTranslation();
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
          <Button variant="contained" color="primary">
            {t('delete_book')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeleteBookForm;
