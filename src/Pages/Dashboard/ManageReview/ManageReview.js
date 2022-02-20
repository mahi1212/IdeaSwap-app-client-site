import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Button, CardActionArea, CardActions, Grid, Box, CircularProgress } from '@mui/material';

const ManageReview = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/feedbacks')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])

    const handleDeleteFeedback = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/feedbacks/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully :)');
                        const remainingUsers = feedbacks.filter(user => user._id !== id);
                        setFeedbacks(remainingUsers);
                    }
                });
        }
    }

    return (
        <div>
            {
                feedbacks.length === 0 ? <Box><Skeleton variant="rectangular" width={350} height={200} /> <CircularProgress /></Box>: <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            feedbacks.map((feedback, index) =>
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {feedback.username}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {feedback.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                            <Button size="small" color="error" onClick={() => handleDeleteFeedback(feedback._id)}>
                                                DELETE REVIEW 
                                            </Button>
                                            {/* ADMIN HAS NO CHOICE TO UODATE REVIEW */}
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )}
                    </Grid>
                </Box>
            }
        </div>

    );
};

export default ManageReview;

