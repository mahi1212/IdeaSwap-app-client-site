import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Grid, Box, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import contact from '../../Images/contact.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const form = useRef();
    useEffect(() => {
        AOS.init();//initializing AOS
    }, [])

    function sendEmail(e) {
        emailjs.sendForm('service_nj5czjb', 'template_yrncu1m', form.current, 'user_fagxX9BV52kbsmVZAbxis')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        alert('Your email already sent! Thanks for contributing with us :)')
        e.preventDefault()

    }
    return (
        <Box sx={{ flexGrow: 1, py: 2 }} data-aos="fade-up">
            <Typography variant='h5' sx={{ py: 2 }}> CONTACT US</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img src={contact} alt='contact_image' />
                </Grid>
                <Grid item xs={12} md={7} sx={{ mt: 8 }}>
                    <Typography variant='h5' sx={{ py: 1 }}> MAKE AGREEMENT</Typography>
                    <form onSubmit={sendEmail} ref={form}>
                        <Grid item xs={12} sx={{ pt: 3, pb: 1 }}>
                            <TextField sx={{ width: '80%' }} id="outlined-basic" name='name' label="Your Name" variant="outlined" color='secondary' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField sx={{ width: '80%' }} id="outlined-basic" name='email' label="Your Email" variant="outlined" color='secondary' />
                        </Grid>
                        <Grid item xs={12} sx={{ py: 2 }}>
                            <TextField sx={{ width: '80%' }} id="outlined-basic" name='subject' label="Write Subject" variant="outlined" color='secondary' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField sx={{ width: '80%' }}
                                multiline
                                rows={5}
                                id="outlined-basic" name='message' label="Write Your Message" variant="outlined" color='secondary' />
                        </Grid>
                        <Grid item xs={12} sx={{ py: 2 }}>
                            <Button type='submit' color='success' variant='contained' sx={{ width: '80%' }}>Send Message</Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;