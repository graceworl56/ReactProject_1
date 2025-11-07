import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';


function Header() {
  const projectInfo ="The app provides an interactive form where users can enter their personal details, educational qualifications, skills, experience, and achievements. Once the information is filled in, the app automatically formats it into a professional-looking resume template."
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sbkaZCbIuq6JlAsBN5-oYq8RHmuEUrSCJA&s" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none fw-bold'>rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}><Button color="inherit" className='fw-bold'>About Us</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header