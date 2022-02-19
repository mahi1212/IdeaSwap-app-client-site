import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import Typography from '@mui/material/Typography';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from './../../hooks/useAuth';
import { Alert, LinearProgress } from '@mui/material';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const SignIn = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (event) => {
        loginUser(loginData.email, loginData.password, location, navigate);

        event.preventDefault();
    };

    return (
        <>
            <Header></Header>
            <div>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 5,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                px: 3,
                                py: 8,
                                borderRadius: 1,
                                border: '1px solid gray'
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
                                <MarkEmailReadOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleLoginSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    onChange={handleOnChange}
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    onChange={handleOnChange}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        {/* <Button onClick={handleGoogleSignIn} ><a href='#sample'><i style={{ color: '#405DE6' }} className="fab fa-google fa-2x"></i></a> Google Sign In</Button> */}
                                    </Grid>
                                    <Grid item>
                                        <Link to="/signUp" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                {
                                    isLoading && <LinearProgress />
                                }
                                {
                                    user?.email && <Alert sx={{ mt: 2 }} severity="success">You are logged In!</Alert>
                                }
                                {/* Complex ternary operation for error*/}
                                {
                                    authError && <Alert sx={{ mt: 2 }} severity="error">{authError === 'Firebase: Error (auth/email-already-in-use).' ? [`${authError}==='Firebase: Error (auth/user-not-found).` ? 'Same email exist! Please change email' : 'Password should be at least 6 characters '] : 'User don\'t exist. Give correct password / Signup to make a new account'}</Alert>
                                }
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Footer></Footer>
        </>

    );
};

export default SignIn;

