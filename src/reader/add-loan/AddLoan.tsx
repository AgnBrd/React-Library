import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import './AddLoan.css';
import { useTranslation } from 'react-i18next';
import { useApi } from '../../api/ApiProvider';
import MenuAppBar from '../../main-bar/AppBar';

const AddLoan: React.FC = () => {
  const [loanDate, setLoanDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [userId, setUserId] = useState<number>(1);
  const [bookId, setBookId] = useState<number>(1);
  const { t } = useTranslation();
  const { apiClient, setUser, user } = useApi();

  const handleAddLoan = async () => {
    const loanData: {
      loanDate: string;
      endDate: string;
      userId: number;
      bookId: number;
    } = {
      loanDate,
      endDate,
      userId,
      bookId,
    };

    // Log user data to console
    console.log('Loan data to be sent:', loanData);

    // Data validation
    if (!loanDate || !endDate || !userId || !bookId) {
      console.error('Validation failed: Missing required fields');
      return;
    }

    try {
      await apiClient.createLoan(loanData);
      setLoanDate('');
      setEndDate('');
      setUserId(0);
      setBookId(0);
      console.log('Loan added successfully');
    } catch (error) {
      console.error('Error adding loan:', error);
    }
  };

  return (
    <div>
      <MenuAppBar />
      <div className="reader-add-loan">
        <h1>{t('add_loan')}</h1>
        <Grid container spacing={1} className="reader-add-loan-container">
          <Grid item xs={12} sm={6}>
            <TextField
              label={t('loanDate')}
              value={loanDate}
              onChange={(e) => setLoanDate(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={t('endDate')}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={t('userId')}
              value={userId}
              onChange={(e) => setUserId(parseInt(e.target.value))}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={t('bookId')}
              value={bookId}
              onChange={(e) => setUserId(parseInt(e.target.value))}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleAddLoan}>
              {t('add_loan')}
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddLoan;
