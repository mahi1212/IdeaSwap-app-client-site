import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const MyFeedback = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            name: data.get('name'),
            description: data.get('description'),
        });
    };
    return (
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
                            py: 8,
                            borderRadius: 1,
                            border: '1px solid gray'
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{p: 1, px: 2, border: '1px solid green'}}>
                            Leave Your Review
                        </Typography>
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
    );
};

export default MyFeedback;