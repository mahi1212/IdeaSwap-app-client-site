import React, {useState, useEffect} from 'react';
// AOS library for scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQue = () => {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    useEffect(()=>{
        AOS.init();//initializing AOS
    }, [])

    return (
        <div data-aos="fade-up">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
                    <Typography style={{ color: '#000' }}>Why should I consider eLearning-based training?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'left' }}>
                        E-learning is anywhere learning! Classroom training sessions require face to face interaction, which usually takes place during working hours, hindering working schedules. With eLearning, you have the freedom to to take the course at the place and time of your choice, without affecting work schedules.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ textAlign: 'left' }}>What are the hardware and software requirements for online training?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'left' }}>
                        Well, to begin online training in your organization, you need have a platform that hosts your eLearning courses. This platform is called a Learning Management System (LMS). You also need eLearning course authoring tools, which are used to create and publish digital courses.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ textAlign: 'left' }}>Can I customize eLearning courses?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'left' }}>
                        While there are many off the shelf ready-made courses available in the market,eLearning courses can be customized to your specifications. Many corporate bigwigs utilize this feature of eLearning to train their staff on specific subjects.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ textAlign: 'left' }}>How much does an eLearning course cost?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'left' }}>
                        Still our service is full free. So you can watch and learn our content full of free only after registering our website!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default FAQue;


