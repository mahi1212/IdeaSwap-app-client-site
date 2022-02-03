import React, { useState } from 'react';
import './Header.css';
import logo from '../../../Images/IdeaLogo.png';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'navy', py: 1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    {/* --------------Logo for large screen-------------- */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 4, fontSize: 22, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Link to="/">
                            <img src={logo} className='logo-design'></img>
                        </Link>
                        Swap
                    </Typography>
                    {/* --------------Large screen app bar-------------- */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 8 }}>
                        <Button
                            sx={{ fontSize: 18, my: 2, px: 2, display: 'block' }}>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                to="/home"
                                style={isActive => ({
                                    color: isActive ? "white" : "blue",
                                    textDecoration: "none"
                                })}
                            >
                                Home
                            </NavLink>
                        </Button>
                        <Button
                            sx={{ fontSize: 18, my: 2, px: 2, display: 'block' }}>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                to="/courses"
                                style={isActive => ({
                                    color: isActive ? "white" : "blue",
                                    textDecoration: "none"
                                })}
                            >
                                Courses
                            </NavLink>
                        </Button>

                        <Button
                            sx={{ fontSize: 18, my: 2, px: 2, display: 'block' }}>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                to="/signIn"
                                style={isActive => ({
                                    color: isActive ? "white" : "blue",
                                    textDecoration: "none"
                                })}>
                                SignIn
                            </NavLink>
                        </Button>
                        <Button
                            sx={{ fontSize: 18, my: 2, px: 2, display: 'block' }}>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                to="/signUp"
                                style={isActive => ({
                                    color: isActive ? "white" : "blue",
                                    textDecoration: "none"
                                })}>
                                SignUp
                            </NavLink>
                        </Button>
                    </Box>
                    {/* -------------------------small screen customization starts here--------------------- */}
                    {/* MenuIcon for small screen*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* --------------Small screen app bar-------------- */}
                            <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100vw' }}>
                                <NavLink
                                    to="/home"
                                    style={isActive => ({
                                        color: isActive ? "black" : "blue",
                                        textDecoration: "none"
                                    })}>
                                    <Typography textAlign="center" sx={{ fontSize: 18 }}>HOME</Typography>
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink
                                    to="/courses"
                                    style={isActive => ({
                                        color: isActive ? "black" : "blue",
                                        textDecoration: "none"
                                    })}>
                                    <Typography textAlign="center" sx={{ fontSize: 18 }}>COURSES</Typography>
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink
                                    to="/signIn"
                                    style={isActive => ({
                                        color: isActive ? "black" : "blue",
                                        textDecoration: "none"
                                    })}>
                                    <Typography textAlign="center" sx={{ fontSize: 18 }}>SIGNIN</Typography>
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink
                                    to="/signUp"
                                    style={isActive => ({
                                        color: isActive ? "black" : "blue",
                                        textDecoration: "none"
                                    })}>
                                    <Typography textAlign="center" sx={{ fontSize: 18 }}>SIGNUP</Typography>
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </Box>
                    {/* --------------Small screen Logo-------------- */}
                    <Typography
                        className='logo-text'
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ pr:13, display: { xs: 'flex', md: 'none' }, fontSize: 22, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Link to="/">
                            <img src={logo} className='logo-design'></img>
                        </Link>
                        IdeaSwap
                    </Typography>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ py: 0, pr:5}}>
                                <Avatar alt="Remy Sharp" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                            <NavLink
                                to="/dashboard"
                                style={isActive => ({
                                    color: isActive ? "black" : "blue",
                                    textDecoration: "none"
                                })}>
                                <Typography textAlign="center" sx={{ fontSize: 16 }}>DASHBOARD</Typography>
                            </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                            <NavLink
                                to="/home"
                                style={isActive => ({
                                    color: isActive ? "black" : "blue",
                                    textDecoration: "none"
                                })}>
                                <Typography textAlign="center" sx={{ fontSize: 16 }}>SIGN OUT</Typography>
                            </NavLink>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;