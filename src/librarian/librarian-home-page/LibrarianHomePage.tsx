import { Box, Paper, Typography } from '@mui/material';
import MenuAppBar from '../../main-bar/AppBar';
import { Link, Outlet } from 'react-router-dom';
import './LibrarianHomePage.css'; // Import the CSS file

function LibrarianHomePage() {
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
            Search books
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
            View loans
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
            View readers
          </Typography>
        </Paper>
        <Paper
          variant="outlined"
          className="homepage-paper"
          component={Link}
          to="/librarianLoans"
        >
          <Typography
            variant="h6"
            component="div"
            className="homepage-typography"
          >
            Edit books
          </Typography>
        </Paper>
      </Box>
      <Outlet />
    </Box>
  );
}

export default LibrarianHomePage;
