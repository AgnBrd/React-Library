import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { LogoutRounded } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'en' ? 'pl' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontFamily: 'Palatino Linotype' }}
        >
          <Link
            to="/librarianHome"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {t('library')}
          </Link>
        </Typography>
        <Button color="inherit" onClick={handleLanguageChange}>
          {i18n.language === 'en' ? 'Polski' : 'English'}
        </Button>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => navigate('/login')}
            color="inherit"
          >
            <LogoutRounded />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
