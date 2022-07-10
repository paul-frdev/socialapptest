import * as React from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { NavLink } from 'react-router-dom';

const pages = ['Home', 'Posts', 'Profiles'];

export const Header = () => {

  return (
    <AppBar className='header' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to='/home' className='header__logo'>
            <ConnectWithoutContactIcon />
            <p className='header__text'>
              SocialApp
            </p>
          </NavLink>

          <Box className='header__nav'>
            {pages.map((page, index) => (
              <NavLink
                className={({ isActive }) => isActive ? 'active' : 'header__nav-item'}
                to={`${page.toLowerCase()}`}
                key={index}
              >
                <Typography textAlign="center">{page}</Typography>
              </NavLink>
            ))}

          </Box>
        </Toolbar>
      </Container >
    </AppBar >
  );
};
