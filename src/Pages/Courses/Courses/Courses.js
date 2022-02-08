import React, { useState, useEffect } from 'react';
import Header from '../../Shared/Header/Header';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Course from '../Course/Course';
import { Typography } from '@mui/material';

const Courses = () => {

    // const courses = [
    //     {
    //         name: "Java App development",
    //         description: "Java is one of the powerful general-purpose programming languages, created in 1995 by Sun Microsystems (now owned by Oracle). Java is Object-Oriented. However, it is not considered as pure object-oriented as it provides support for primitive data types (like int, char, etc). Java syntax is similar to C/C++",
    //         img:"https://i.ibb.co/NjK8Vqc/java.jpg",
    //         short_title: "We offer you the complete guidline to be a app developer"
    //     }
    // ]
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <>
            <Typography variant="h5" className="heading" sx={{ py: 1, pl: 2, borderLeft: "10px solid green", borderRight: "10px solid green"}}> COURSES WE OFFER</Typography>

            <Box paddingX={{ xs: 2, sm: 5, md: 4 }}>
                <Grid container spacing={{ xs: 2, sm: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        courses.map(course => <Course course={course} id={course._id}></Course>)
                    }
                </Grid>
            </Box>
        </>
    );
};
export default Courses;