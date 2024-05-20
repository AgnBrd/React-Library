import { Box, Paper, Typography } from '@mui/material';
import MenuAppBar from '../main-bar/AppBar';
import { Link, Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: 'darkgray',
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            p: 5,
            m: 5,
            textAlign: 'center',
            width: '300px',
            backgroundColor: 'gainsboro',
          }}
          component={Link}
          to="/bookList"
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ color: 'black', fontFamily: 'Palatino Linotype' }}
          >
            Search books
          </Typography>
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            p: 5,
            m: 5,
            textAlign: 'center',
            width: '300px',
            backgroundColor: 'gainsboro',
          }}
          component={Link}
          to="2"
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ color: 'black', fontFamily: 'Palatino Linotype' }}
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
