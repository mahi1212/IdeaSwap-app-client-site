import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Button, CardActionArea, CardActions, Grid, Box, CircularProgress } from '@mui/material';

const ManageCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/courses/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully :)');
                        const remainingCourses = courses.filter(course => course._id !== id);
                        setCourses(remainingCourses);
                    }
                });
        }
    }
    return (
        <div>
            {
                courses.length === 0 ? <Box><Skeleton variant="rectangular" width={350} height={150} /> <CircularProgress /></Box> : <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            courses.map((course, index) =>
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardContent sx={{textAlign: 'left'}}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    COURSE : {course.name}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary">
                                                    DESCRIPTION : {course.description}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary">
                                                    SHORT DESCRIPTION : {course.short_title}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary">
                                                    IMAGE URL : {course.img}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                            <Button size="small" color="error" onClick={() => handleDeleteUser(course._id)}>
                                                REMOVE COURSE
                                            </Button>
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

export default ManageCourses;