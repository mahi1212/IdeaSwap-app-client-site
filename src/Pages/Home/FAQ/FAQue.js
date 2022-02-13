import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQue = () => {
    return (
        <div sx={{ px: 2}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ color: '#000' }}>Why should I consider eLearning-based training?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'left' }}>
                        E-learning is anywhere learning! Classroom training sessions require face to face interaction, which usually takes place during working hours, hindering working schedules. With eLearning, you have the freedom to to take the course at the place and time of your choice, without affecting work schedules.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>What are the hardware and software requirements for online training?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'left' }}>
                        Well, to begin online training in your organization, you need have a platform that hosts your eLearning courses. This platform is called a Learning Management System (LMS). You also need eLearning course authoring tools, which are used to create and publish digital courses.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Can I customize eLearning courses?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ textAlign: 'left' }}>
                        While there are many off the shelf ready-made courses available in the market,eLearning courses can be customized to your specifications. Many corporate bigwigs utilize this feature of eLearning to train their staff on specific subjects.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default FAQue;