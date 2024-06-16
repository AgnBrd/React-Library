import { Box, Paper, Typography } from '@mui/material';
import MenuAppBar from '../../main-bar/AppBar';
import { Link, Outlet } from 'react-router-dom';
import './ReaderHomePage.css';

function ReaderHomePage() {
  return (
    <Box sx={{ flexGrow: 1 }} className="reader-homepage">
      <MenuAppBar />
      <Box className="reader-homepage-container">
        <Paper
          variant="outlined"
          className="reader-homepage-paper"
          component={Link}
          to="/readerBook"
        >
          <Typography
            variant="h6"
            component="div"
            className="reader-homepage-typography"
          >
            Search books
          </Typography>
        </Paper>
        <Paper
          variant="outlined"
          className="reader-homepage-paper"
          component={Link}
          to="/readerLoan"
        >
          <Typography
            variant="h6"
            component="div"
            className="reader-homepage-typography"
          >
            View your loans
          </Typography>
        </Paper>
      </Box>
      <div className="reader-background-image"></div>
      <Outlet />
    </Box>
  );
}

export default ReaderHomePage;
