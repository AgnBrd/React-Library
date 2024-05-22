import { Box, Paper, Typography } from '@mui/material';
import MenuAppBar from '../main-bar/AppBar';
import { Link, Outlet } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Box className="homepage-container">
        <div className="background-image"></div>
        <Paper
          variant="outlined"
          className="homepage-paper"
          component={Link}
          to="/bookList"
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
          to="/loanList"
        >
          <Typography
            variant="h6"
            component="div"
            className="homepage-typography"
          >
            View loans
          </Typography>
        </Paper>
      </Box>
      <Outlet />
    </Box>
  );
}

export default HomePage;
