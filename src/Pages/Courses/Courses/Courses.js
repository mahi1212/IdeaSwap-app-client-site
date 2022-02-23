import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Course from '../Course/Course';
import { Typography, Button, CircularProgress } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    // for limiting courses, showing UI based on path->home and courses
    const location = useLocation()
    const path = location.pathname;
    console.log(path)

    return (
        <>
            {/* COMMENT : Checking if path = '/courses' exactly then it will add header and footer else not.
                Summary: for not showing navigation in course section when it's in HOMEPAGE*/}
            {path === '/courses' ?
                <>
                    <Header></Header>
                    <div data-aos="fade-up">
                        {
                            courses.length === 0 ?
                                <Box sx={{ width: '100%', height: '80vh', color: 'grey.500', display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={2}>
                                    <CircularProgress color="success" />
                                </Box>
                                :
                                <>
                                    <Typography variant="h5" className="heading" sx={{ py: 1, pl: 2, borderLeft: "10px solid green", borderRight: "10px solid green" }}> COURSES WE OFFER</Typography>
                                    <Box paddingX={{ xs: 2, sm: 5, md: 4 }} sx={{ paddingBottom: '20px' }} data-aos="fade-in" data-aos-duration="4000">
                                        <Grid container spacing={{ xs: 2, sm: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                            {
                                                path === '/courses' ? courses.map(course => <Course course={course} id={course._id}></Course>) :
                                                    courses.slice(0, 6).map(course => <Course course={course} id={course._id}></Course>)
                                            }
                                            {
                                                path === '/home' && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', width: '100%' }}>
                                                    <NavLink to='/courses' style={{
                                                        background: '#753188',
                                                        color: '#fff',
                                                        padding: '10px 20px',
                                                        margin: '20px 0',
                                                        fontSize: '1.2rem',
                                                        textDecoration: 'none',
                                                        borderRadius: '3px'
                                                    }}
                                                    ><Button variant='container'>FIND ALL COURSES</Button>
                                                    </NavLink>
                                                </div>
                                            }
                                        </Grid>
                                    </Box>
                                </>
                        }

                    </div>
                    <Footer></Footer>
                </>
                : <div data-aos="fade-up">
                    {courses.length === 0 ?
                        <Box sx={{ width: '100%', height: '80vh', color: 'grey.500', display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={2}>
                            <CircularProgress color="success" />
                        </Box>
                        :
                        <>
                            <Typography variant="h5" className="heading" sx={{ py: 1, pl: 2, borderLeft: "10px solid green", borderRight: "10px solid green" }}> COURSES WE OFFER</Typography>
                            <Box paddingX={{ xs: 2, sm: 5, md: 4 }} sx={{ paddingBottom: '20px' }} data-aos="fade-in" data-aos-duration="4000">
                                <Grid container spacing={{ xs: 2, sm: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    {
                                        path === '/courses' ? courses.map(course => <Course course={course} id={course._id}></Course>) :
                                            courses.slice(0, 6).map(course => <Course course={course} id={course._id}></Course>)
                                    }
                                    {
                                        path !== '/courses' && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', width: '100%' }}>
                                            <NavLink to='/courses' style={{
                                                background: '#753188',
                                                color: '#fff',
                                                padding: '10px 20px',
                                                margin: '20px 0',
                                                fontSize: '1.2rem',
                                                textDecoration: 'none',
                                                borderRadius: '3px'
                                            }}
                                            ><Button variant='container'>FIND ALL COURSES</Button>
                                            </NavLink>
                                        </div>
                                    }
                                </Grid>
                            </Box>
                        </>
                    }
                </div>
            }
        </>
    );
};
export default Courses;