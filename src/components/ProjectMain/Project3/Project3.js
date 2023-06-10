import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Project3.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home1 = () => {

    return (
        <header className='header1_Project3'>
            <div className='container'>

                <div className='header2_Project3'>
                    <div className='header_content2'>
                        <div className='header_section_image'>
                            <img src="./image/project1.png" alt="" className='image' />
                        </div>
                        <div className='header_section'>
                            <h2>Production Scheduler</h2>
                            <h1>JOB MANAGEMENT PLATFORM</h1>
                            <div className='header_para'>Country: India</div>
                            <div className='header_para'>Technologies : React, Node.js,PostgreSQL</div>
                            <div className='header_para'>Time together:  6 months till now</div>
                            <div className='header_para'>Team : 1 PM, 0.5 BA, 2 developers, 1 QA</div>
                        </div>
                    </div>
                </div>

                <div className='header3_Project3'>
                    Summary
                    OVERVIEW
                    PURPOSE AND NEED
                    WORKFLOW
                    TECHNOLOGY
                </div>



            </div>
        </header >
    );
};

export default Home1;
