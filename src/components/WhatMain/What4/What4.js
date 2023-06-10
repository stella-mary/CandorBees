import React, { useState } from 'react';
import './What4.css';
import { Box, TextField } from '@mui/material';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

const What4 = () => {

    return (
        <header className='header7'>
            <div className='container'>
                <div className='row'>
                    <h1>LET’S MAKE IT TOGETHER</h1>
                    <div className='header_content_home'>
                        <div className='header_content_home_form'>
                            <Box
                                sx={{
                                    width: 800,
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: '20px',
                                }}
                            >
                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    variant='standard'
                                    InputLabelProps={{ style: { color: 'white', fontSize: '25px', fontFamily: 'AmericanTypewriter' } }}
                                    InputProps={{
                                        style: {
                                            border: 'none',
                                            borderBottom: '2px solid white',
                                            fontSize: '25px'
                                        },
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    width: 800,
                                    maxWidth: '100%',
                                    marginBottom: '20px',
                                    marginTop: '20px',
                                }}
                            >
                                <TextField
                                    fullWidth
                                    label="Your email"
                                    variant='standard'
                                    InputLabelProps={{ style: { color: 'white', fontSize: '25px', fontFamily: 'AmericanTypewriter' } }}
                                    InputProps={{
                                        style: {
                                            border: 'none',
                                            borderBottom: '2px solid white',
                                            fontSize: '25px'
                                        },
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    width: 800,
                                    maxWidth: '100%',
                                    marginBottom: '40px',
                                    marginTop: '20px',
                                }}
                            >
                                <TextField
                                    fullWidth
                                    label="How can we help"
                                    variant='standard'
                                    InputLabelProps={{ style: { color: 'white', fontSize: '25px', fontFamily: 'AmericanTypewriter' } }}
                                    InputProps={{
                                        style: {
                                            border: 'none',
                                            borderBottom: '2px solid white',
                                            fontSize: '25px'
                                        },
                                    }}
                                />
                            </Box>

                            <div className='header_button1'>
                                Drop useful files here or upload them from your computer<br /><br />
                                <small>We accept files up to 15 MB</small>
                            </div>
                            <div className='header_button2'>SUBMIT</div>
                        </div>
                        <div className='header_content_home_form'>
                            <div className='header_para_content'>WE’RE HERE:</div>
                            <div className='header_para_content'>32b Velyka Vasylkivska str., Kyiv, Ukraine</div>
                            <div className='header_para_content'>WORKING HOURS:</div>
                            <div className='header_para_content'>From 9 am to 8 pm (UTC +3)</div>
                            <div className='header_para_content'>DROP US A LINE:</div>
                            <div className='header_para_content_head'>srilekha.rajasekar@gmail.com</div>
                            <div className='header_para_content'>+91 9176856135</div>
                            <div className='header_para_content_link1'>FACEBOOK<span className='space' />LINKEDIN</div>
                        </div>
                    </div>
                </div>
            </div >
        </header >
    );
};

export default What4;
