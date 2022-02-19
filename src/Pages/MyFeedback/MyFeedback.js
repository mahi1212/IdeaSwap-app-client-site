import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Chip from '@mui/material/Chip';
import axios from 'axios'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const MyFeedback = () => {
    const handleSubmit = (event) => {
        const form = new FormData(event.currentTarget);
        const data = {
            username: form.get('name'),
            description: form.get('description'),
        };

        // Posting data using axios 
        axios.post('http://localhost:5000/feedbacks', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Feedback Added Successfully')
                }
            })
        event.preventDefault();
    };

    return (
        <>
            <Header></Header>
            <div>
                <Grid container component="main" sx={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CssBaseline />
                    <Grid item xs={12} sm={8} md={4} >
                        <Box
                            sx={{
                                my: 2,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                px: 3,
                                py: 6,
                                borderRadius: 1,
                                border: '1px solid gray'
                            }}
                        >
                            <Chip label="Leave Your Review" variant="outlined" sx={{ fontSize: '1.2rem' }} />
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Enter Your Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                />
                                <TextField
                                    multiline
                                    rows={5}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="description"
                                    label="Write what your heart content"
                                    type="textfield"
                                    id="textfield"
                                />
                                <Button
                                    endIcon={<SendIcon />} type="submit" variant="contained" color="success">
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyFeedback;