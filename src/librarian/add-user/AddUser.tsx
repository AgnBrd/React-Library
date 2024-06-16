import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import './AddUser.css';
import { useTranslation } from 'react-i18next';
import { useApi } from '../../api/ApiProvider';
import MenuAppBar from '../../main-bar/AppBar';

const AddUser: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const { t } = useTranslation();
  const { apiClient, setUser, user } = useApi();

  const handleAddUser = async () => {
    const userData: {
      name: string;
      email: string;
      role: string;
    } = {
      name,
      email,
      role,
    };

    // Log user data to console
    console.log('User data to be sent:', userData);

    // Data validation
    if (!name || !email || !role) {
      console.error('Validation failed: Missing required fields');
      return;
    }

    try {
      await apiClient.addUser(userData, user?.role || '');
      setName('');
      setEmail('');
      setRole('');
      console.log('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <MenuAppBar />
      <div className="librarian-add-user">
        <h1>{t('add_user')}</h1>
        <Grid container spacing={1} style={{ maxWidth: '400px' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label={t('name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={t('email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label={t('role')}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleAddUser}>
              {t('add_user')}
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddUser;
