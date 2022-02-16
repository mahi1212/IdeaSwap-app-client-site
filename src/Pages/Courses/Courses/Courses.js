import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Course from '../Course/Course';
import { Typography, Button, CircularProgress } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

const Courses = () => {
    // const courses = [
    //     {
    //         name: "Pyton AI",
    //         description: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
    //         img:"https://i.ibb.co/tPR4Nxy/py.jpg",
    //         short_title: "Learn Python AI and deep learning course using Python language"
    //     },
    //     {
    //         name: "JavaScript",
    //         description: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat etc",
    //         img:"https://i.ibb.co/VwZGRfG/JS.png",
    //         short_title: "Become a successful web engineer after mastering in JavaScript"
    //     },
    //     {
    //         name: "React JS",
    //         description: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.",
    //         img:"https://i.ibb.co/HzWhY8R/react.jpg",
    //         short_title: "If front End development is your target then React is best for you! "
    //     },
    //     {
    //         name: "C++",
    //         description: "C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on. C++ supports different ways of programming like procedural, object-oriented, functional, and so on. This makes C++ powerful as well as flexible.",
    //         img:"https://i.ibb.co/1rpTLPk/cplus.png",
    //         short_title: "Our C++ programming tutorial will guide you to learn C++ programming one step at a time."
    //     },
    //     {
    //         name: "PHP",
    //         description: "PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group",
    //         img:"https://i.ibb.co/ngRXXG7/PHP.jpg",
    //         short_title: "Build your modern app using kotlin language with less time and more efficiently"
    //     },
    //     {
    //         name: "TypeScript",
    //         description: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.",
    //         img:"https://i.ibb.co/r3J77Gh/typeScr.png",
    //         short_title: "TypeScript is a strongly typed programming language builds on JavaScript, giving you better tooling at any scale."
    //     },
    //     {
    //         name: "Kotlin",
    //         description: "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.",
    //         img:"https://i.ibb.co/FqhhsdQ/kotlin.png",
    //         short_title: "Build your modern app using kotlin language with less time and more efficiently"
    //     }
    // ]

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
        <div data-aos="fade-up">
            {
                courses.length === 0 ?
                    <Box sx={{ width: '100%', height:'80vh', color: 'grey.500', display:'flex', justifyContent:'center', alignItems: 'center' }} spacing={2}>
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
    );
};
export default Courses;