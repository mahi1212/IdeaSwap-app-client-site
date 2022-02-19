import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { Box, Typography, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import './SingleCourse.css'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const SingleCourse = () => {
    const { courseId } = useParams()
    const [course, setCourse] = useState([])
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/courses/${courseId}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [courseId])

    useEffect(() => {
        fetch(`http://localhost:5000/courses/${courseId}`)
            .then(res => res.json())
            .then(data => setVideos(data.videos))
    }, [courseId])

    return (
        <>
            <Header></Header>
            <div>
                {
                    <div>
                        <Typography variant='h6' className='title' sx={{ mt: 2 }}> COURSE TITLE : {course.name}</Typography>
                        <Typography variant='h6' style={{ textAlign: 'left' }} className='description'> Details : {course.description}</Typography>
                        <div className='player-wrapper'>
                            {
                                videos.map((video, index) =>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <ReactPlayer
                                            className='react-player'
                                            controls={true}
                                            url={video.link}
                                            width={{ sm: '98vw' }}
                                            height='70vh'
                                        />
                                        <Box className='info'>
                                            <Alert style={{ textAlign: 'left' }} className='description'>Video {index + 1}</Alert>
                                            <Alert style={{ textAlign: 'left' }} className='name'>Topic : {video.topic.toUpperCase()}</Alert>
                                        </Box>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                }
            </div >
            <Footer></Footer>
        </>
    );
};

export default SingleCourse;