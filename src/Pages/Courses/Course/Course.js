import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './Course.css'
import { useNavigate} from 'react-router-dom';

const Course = (props) => {
    const history = useNavigate();
    const { _id, name, short_title, img } = props.course;
    return (
        <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2}}>
            <div className='card'>
                <div className='img-section'>
                    <img src={img} alt="imag"></img>
                </div>
                <div className='text-section'>
                    <Typography variant='h6' className='name'> {name}</Typography>
                    <div className='desc-section'>
                        {short_title}
                    </div>
                    <button className="enroll-btn" onClick={()=> history.push(`/course/${_id}`)}>Enroll Course</button>
                </div>
            </div> 
        </Grid>
    );
};

export default Course;