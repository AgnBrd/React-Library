import { Box, Paper, Typography } from '@mui/material';
import MenuAppBar from '../../main-bar/AppBar';
import { Link, Outlet } from 'react-router-dom';
import './ReaderHomePage.css';

function ReaderHomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Box className="homepage-container">
        <div className="background-image"></div>
        <Paper
          variant="outlined"
          className="homepage-paper"
          component={Link}
          to="/readerBook"
        >
          <Typography
            variant="h6"
            component="div"
            className="homepage-typography"
          >
            Search books
          </Typography>
        </Paper>
        <Paper
          variant="outlined"
          className="homepage-paper"
          component={Link}
          to="/readerLoan"
        >
          <Typography
            variant="h6"
            component="div"
            className="homepage-typography"
          >
            View your loans
          </Typography>
        </Paper>
      </Box>
      <Outlet />
    </Box>
  );
}

export default ReaderHomePage;
