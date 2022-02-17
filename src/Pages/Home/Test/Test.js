import React from 'react';
import ReactPlayer from 'react-player'
import './Test.css'
import { Box, Typography } from '@mui/material';

const courses = [
    {
        name: "Pyton AI",
        description: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
        img: "https://i.ibb.co/tPR4Nxy/py.jpg",
        short_title: "Learn Python AI and deep learning course using Python language",
        videos: [
            {
                link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
                title: "Chilled Serenity #6 (Summer Chillstep Mix)",
                description: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."
            },
            {
                link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
                title: "test2",
                description: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."
            }
        ]
    }
    // {
    //     name: "Java",
    //     description: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
    //     img: "https://i.ibb.co/tPR4Nxy/py.jpg",
    //     short_title: "Learn Python AI and deep learning course using Python language",
    //     videos: [
    //         {
    //             link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    //             title: "Chilled Serenity #6 (Summer Chillstep Mix)",
    //             description: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."
    //         },
    //         {
    //             link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    //             title: "test2",
    //             description: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."
    //         }
    //     ]
    // },

]

const Test = () => {
    console.log(courses)
    return (
        <div>
            {
                courses.map((course) => <div>
                    <Typography variant='h6' className='title'> TITLE : {course.name}</Typography>
                    <Typography variant='h6' style={{ textAlign: 'left' }} className='description'> Details : {course.description}</Typography>
                    <div className='player-wrapper'>
                        {course.videos.map((video) =>
                            <>
                                Video : {1}
                                <ReactPlayer
                                    className='react-player'
                                    controls={true}
                                    url={video.link}
                                    // width='100%'
                                    height='70vh'
                                />
                            </>

                        )}
                    </div>
                </div>)
            }
        </div>

    );
};

export default Test;    