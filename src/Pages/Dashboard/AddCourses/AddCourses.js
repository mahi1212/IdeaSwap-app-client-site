import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Chip from '@mui/material/Chip';
import axios from 'axios'
import { Typography } from '@mui/material';

const AddCourses = () => {
    const handleSubmit = (event) => {
        const form = new FormData(event.currentTarget);
        const data = {
            name: form.get('name'),
            description: form.get('description'),
            img: form.get('img'),
            short_title: form.get('short_title'),
            videos: [
                { link: (form.get('VideoLink')), topic: (form.get('VideoTopic')) },
                { link: (form.get('VideoLink2')), topic: (form.get('VideoTopic2')) }
            ]
        };

        axios.post('http://localhost:5000/courses', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Course Added Successfully')
                }
            })
        event.preventDefault();
    };


    return (
        <Grid container component="main" sx={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: 3,
                    py: 2,
                    boxShadow: 1,
                    borderRadius: 1,
                }}
            >
                <Chip label="ADD PRODUCT" variant="outlined" sx={{ fontSize: '1.1rem' }} />
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Enter Product Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="img"
                        label="Enter Image Url"
                        type="textfield"
                        id="textfield"
                    />
                    <TextField
                        multiline
                        rows={3}
                        margin="normal"
                        required
                        fullWidth
                        name="description"
                        label="Enter Product Description"
                        type="textfield"
                        id="textfield"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="short_title"
                        label="Enter Short Title"
                        type="textfield"
                        id="textfield"
                    />
                    <Box sx={{ px:3, py:2, textAlign: 'left'}}>
                        <Typography variant='contain'>Add Video Details:</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="VideoLink"
                            label="Enter First Video Link"
                            type="textfield"
                            id="textfield"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="VideoTopic"
                            label="Enter First Video Topic"
                            type="textfield"
                            id="textfield"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="VideoLink2"
                            label="Enter Second Video Link"
                            type="textfield"
                            id="textfield"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="VideoTopic2"
                            label="Enter Second Video Topic"
                            type="textfield"
                            id="textfield"
                        />
                    </Box>

                    <Button
                        endIcon={<SendIcon />} type="submit" variant="contained" color="success">
                        Submit
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
};

export default AddCourses;