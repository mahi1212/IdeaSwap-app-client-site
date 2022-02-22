import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Button, CardActionArea, CardActions, Grid, Box, CircularProgress } from '@mui/material';


const ManageUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure to delete user?');
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully :)');
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                });
        }
    }
    return (
        <div>
            {
                users.length === 0 ? <Box><Skeleton variant="rectangular" width={350} height={150} /> <CircularProgress /></Box>: <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            users.map((user, index) =>
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    Name : {user.displayName}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary">
                                                    Email : {user.email}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                            <Button size="small" color="error" onClick={() => handleDeleteUser(user._id)}>
                                                BLOCK USER
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

export default ManageUser;