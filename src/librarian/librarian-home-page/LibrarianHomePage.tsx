import { Box, Paper, Typography } from '@mui/material';
import MenuAppBar from '../../main-bar/AppBar';
import { Link, Outlet } from 'react-router-dom';
import './LibrarianHomePage.css';
import { useApi } from '../../api/ApiProvider';
import { useTranslation } from 'react-i18next'; // Import the CSS file

function LibrarianHomePage() {
  const apiClient = useApi();
  const { t } = useTranslation();

  apiClient.getBooks().then((response) => {
    console.log(response);
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Box className="homepage-container">
        <div className="background-image"></div>
        <Paper
          variant="outlined"
          className="homepage-paper"
          component={Link}
          to="/librarianBook"
        >
          <Typography
            variant="h6"
            component="div"
            className="homepage-typography"
          >
            {t('search_books')}
          </Typography>
        </Paper>
        <Paper
          variant="outlined"
          className="homepage-paper"
          component={Link}
          to="/librarianLoan"
        >
          <Typography
            variant="h6"
            component="div"
            className="homepage-typography"
          >
            {t('view_loans')}
          </Typography>
        </Paper>
        <Paper
          variant="outlined"
          className="homepage-paper"
          component={Link}
          to="/users"
        >
          <Typography
            variant="h6"
            component="div"
            className="homepage-typography"
          >
            {t('view_readers')}
          </Typography>
        </Paper>
        <Paper
          variant="outlined"
          className="homepage-paper"
          component={Link}
          to="/librarianEditBooks/add"
        >
          <Typography
            variant="h6"
            component="div"
            className="homepage-typography"
          >
            {t('edit_books')}
          </Typography>
        </Paper>
      </Box>
      <Outlet />
    </Box>
  );
}

export default LibrarianHomePage;
