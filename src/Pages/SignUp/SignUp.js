import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Alert, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';


const SignUp = () => {
    const [loginData, setLoginData] = useState({})
    const { user, registerUser, isLoading, authError } = useAuth()
    const navigate = useNavigate()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(field, value)
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const handleSignUpSubmit = (e) => {
        registerUser(loginData.name, loginData.email, loginData.password, navigate)
        alert('Successfully logged in!')
        e.preventDefault();
    };

    return (
        <>
            <Header></Header>
            <div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginY: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingX: 4,
                            paddingY: 4,
                            borderRadius: 1,
                            border: '2px solid #c9c9c9'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
                            <HowToRegIcon></HowToRegIcon>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSignUpSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        required
                                        fullWidth
                                        id="Name"
                                        label="Your Name"
                                        name="name"
                                        onBlur={handleOnBlur}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        onBlur={handleOnBlur}
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        onBlur={handleOnBlur}
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                {/* <Grid item xs={12}>
                            </Grid> */}
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Typography variant='caption'>By pressing signup you will accept all terms of service of this website </Typography>

                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to="/signIn" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        {
                            isLoading && <LinearProgress color="success" />
                        }
                        {user?.email && <Alert severity="success" sx={{ mt: 2 }}>You are already logged in!</Alert>}
                        {authError && <Alert severity="error">{authError === 'Firebase: Error (auth/email-already-in-use).' ? 'Same email exist! Please change your email' : 'Password should be at least 6 characters'}</Alert>}
                    </Box>
                </Container>
            </div>
            <Footer></Footer>
        </>

    );
};

export default SignUp;