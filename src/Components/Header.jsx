import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material';

function Header() {
  const projectInfo = `Welcome to <strong>R Builder</strong> — your smart, simple, and professional 
Resume Builder designed to help you create stunning resumes in minutes! 
We understand how important a well-crafted resume is to make a strong first impression. 
That’s why we built a tool that’s fast, user-friendly, and completely customizable.`;
  return (
   <Box sx={{ flexGrow: 1 }}>
   
          <AppBar position="static" sx={{ backgroundColor: 'purple' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          {/* removed menuicon from the code */}
          <img src="https://cdn-icons-png.flaticon.com/128/3415/3415056.png" width={'30px'} alt="Logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to ={'/'} className='text-light text-decoration-none'> rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}><Button color="inherit">Login</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header