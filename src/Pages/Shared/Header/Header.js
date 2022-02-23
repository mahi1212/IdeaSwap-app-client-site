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
import useAuth from './../../../hooks/useAuth';

const Header = () => {
    const { user, logout, admin } = useAuth()

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

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

    console.log(user)
    return (
        <AppBar position="static" sx={{ backgroundColor: '#072227', py: 1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    {/* --------------Logo for large screen-------------- */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, fontSize: 22, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Link to="/">
                            <img src={logo} alt='logo' className='logo-design'></img>
                        </Link>
                        IdeaSwap
                    </Typography>
                    {/* --------------Large screen app bar-------------- */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 8 }}>
                        <Button
                            sx={{ fontSize: 18, my: 2, px: 2, display: 'block' }}>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                to="/home"
                                style={({ isActive }) =>
                                    isActive ? { color: '#86C6F4', textDecoration: "none", fontWeight: '600' }
                                        : { color: '#fff', textDecoration: 'none' }
                                }>
                                Home
                            </NavLink>
                        </Button>

                        <Button
                            sx={{ fontSize: 18, my: 2, px: 2, display: 'block' }}>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                to="/courses"
                                style={({ isActive }) =>
                                    isActive ? { color: '#86C6F4', textDecoration: "none", fontWeight: '600' }
                                        : { color: '#fff', textDecoration: 'none' }
                                }>
                                Courses
                            </NavLink>
                        </Button>

                        <Button
                            sx={{ fontSize: 18, my: 2, px: 2, display: 'block' }}>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                to="/myFeedback"
                                style={({ isActive }) =>
                                    isActive ? { color: '#86C6F4', textDecoration: "none", fontWeight: '600' }
                                        : { color: '#fff', textDecoration: 'none' }
                                }>
                                Feedback
                            </NavLink>
                        </Button>

                        <Button
                            sx={{ fontSize: 18, my: 2, px: 2, display: 'block' }}>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                to="/contact"
                                style={({ isActive }) =>
                                    isActive ? { color: '#86C6F4', textDecoration: "none", fontWeight: '600' }
                                        : { color: '#fff', textDecoration: 'none' }
                                }>
                                Contact
                            </NavLink>
                        </Button>
                        <Button
                            sx={{ fontSize: 18, my: 2, px: 2, display: 'block' }}>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                to="/signUp"
                                style={({ isActive }) =>
                                    isActive ? { color: '#86C6F4', textDecoration: "none", fontWeight: '600' }
                                        : { color: '#fff', textDecoration: 'none' }
                                }>
                                SignUp
                            </NavLink>
                        </Button>
                        <Button
                            sx={{ fontSize: 18, my: 2, px: 2, display: 'block' }} >
                            <NavLink
                                onClick={handleCloseNavMenu}
                                to="/signIn"
                                style={({ isActive }) =>
                                    isActive ? { color: '#86C6F4', textDecoration: "none", fontWeight: '600' }
                                        : { color: '#fff', textDecoration: 'none' }
                                }>SignIn
                            </NavLink>
                        </Button>
                        {
                            user.email && <Button onClick={logout} sx={{ fontSize: 18, my: 2, px: 2, display: 'block', background: '#072227', color: '#fff' }}>LOG OUT {user.displayName}</Button>
                        }
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
                            color="inherit">
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
                                    style={({ isActive }) =>
                                        isActive ? { color: '#1C658C', textDecoration: "none", fontWeight: '600' }
                                            : { color: '#1C658C', textDecoration: 'none' }
                                    }>
                                    <Typography sx={{ fontSize: 18 }}>HOME</Typography>
                                </NavLink>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink
                                    to="/courses"
                                    style={({ isActive }) =>
                                        isActive ? { color: '#1C658C', textDecoration: "none", fontWeight: '600' }
                                            : { color: '#1C658C', textDecoration: 'none' }
                                    }>
                                    <Typography sx={{ fontSize: 18 }}>COURSES</Typography>
                                </NavLink>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink
                                    to="/myFeedback"
                                    style={({ isActive }) =>
                                        isActive ? { color: '#1C658C', textDecoration: "none", fontWeight: '600' }
                                            : { color: '#1C658C', textDecoration: 'none' }
                                    }>
                                    <Typography sx={{ fontSize: 18, display: 'block' }}>FEEDBACK</Typography>
                                </NavLink>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink
                                    to="/contact"
                                    style={({ isActive }) =>
                                        isActive ? { color: '#1C658C', textDecoration: "none", fontWeight: '600' }
                                            : { color: '#1C658C', textDecoration: 'none' }
                                    }>
                                    <Typography sx={{ fontSize: 18, display: 'block' }}>CONTACT</Typography>
                                </NavLink>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink
                                    to="/signIn"
                                    style={({ isActive }) =>
                                        isActive ? { color: '#1C658C', textDecoration: "none", fontWeight: '600' }
                                            : { color: '#1C658C', textDecoration: 'none' }
                                    }>
                                    <Typography sx={{ fontSize: 18 }}>SIGNIN</Typography>
                                </NavLink>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink
                                    to="/signUp"
                                    style={({ isActive }) =>
                                        isActive ? { color: '#1C658C', textDecoration: "none", fontWeight: '600' }
                                            : { color: '#1C658C', textDecoration: 'none' }
                                    }>
                                    <Typography textAlign="center" sx={{ fontSize: 18 }}>SIGNUP</Typography>
                                </NavLink>
                            </MenuItem>
                            {user.email && <MenuItem onClick={handleCloseNavMenu}>
                                <Button onClick={logout} sx={{ fontSize: 18 }}>Log Out</Button>
                            </MenuItem>}
                        </Menu>
                    </Box>
                    {/* --------------Small screen Logo-------------- */}
                    <Typography
                        className='logo-text'
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ pr: 13, display: { xs: 'flex', md: 'none' }, fontSize: 22, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Link to="/">
                            <img src={logo} alt='logo' className='logo-design'></img>
                        </Link>
                        IdeaSwap
                    </Typography>
                    {admin &&
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open profile">
                                <IconButton onClick={handleOpenUserMenu} sx={{ py: 0, pr: 1 }}>
                                    <Avatar alt="Profile pic" src="" />
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
                                onClose={handleCloseUserMenu}>
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
                            </Menu>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar >
    );
};

export default Header;